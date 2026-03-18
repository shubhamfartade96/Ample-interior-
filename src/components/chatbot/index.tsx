'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatIcon } from './ChatIcon';
import { ChatWindow } from './ChatWindow';
import type { Message } from './ChatMessage';
import { saveChatbotLead, saveChatbotEscalation } from '@/firebase/chatbot-actions';
import { useFirestore } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { getFaqResponse } from '@/lib/chatbot-logic';

type Stage = 
  | 'GREETING'
  | 'GET_NAME'
  | 'GET_PHONE'
  | 'VALIDATE_PHONE'
  | 'GET_SERVICE'
  | 'SAVING_LEAD'
  | 'LEAD_CAPTURED'
  | 'FAQ_MODE';

const services = [
  'Modular Kitchen', 'Wardrobes', 'Living Room', 'Bedroom', 
  'Kids Room', 'Bathroom', 'Office Interior', 'Commercial', 'Full Home'
];

const faqMenu = [
  'Pricing', 'Timeline', 'Site Visit', 'Materials', 'Design', 
  'Warranty', 'Payment', 'Portfolio', 'Service Area', 'Speak to an Expert'
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<Stage>('GREETING');
  const [messages, setMessages] = useState<Message[]>([]);
  const [lead, setLead] = useState({ name: '', phone: '', service: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const firestore = useFirestore();
  const { toast } = useToast();
  const pageUrlRef = useRef('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      pageUrlRef.current = window.location.href;
      
      const savedName = sessionStorage.getItem('chatbot_name') || '';
      const savedPhone = sessionStorage.getItem('chatbot_phone') || '';
      if (savedName && savedPhone) {
        setLead({ name: savedName, phone: savedPhone, service: '' });
        setStage('LEAD_CAPTURED'); // Skip to FAQ if we have details
      }
    }
  }, []);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: Message = { id: crypto.randomUUID(), text, sender };
    setMessages(prev => [...prev, newMessage]);
  };
  
  const botReply = (text: string, delay = 500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot');
    }, delay);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0 && stage === 'GREETING') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage("Hello — I’m Ample Interiors assistant. May I have your name?", 'bot');
        setStage('GET_NAME');
      }, 2000);
    } else if (isOpen && stage === 'LEAD_CAPTURED' && messages.length === 0) {
        // This handles re-opening the chat after lead capture
        botReply(`Thanks! We saved your details. Our design team will contact you soon. Meanwhile, you can ask common questions below — or tap WhatsApp to chat with us directly.`);
    }
  }, [isOpen, messages.length, stage]);

  useEffect(() => {
    if (isTyping) {
        setQuickReplies([]);
        return;
    }
    switch (stage) {
        case 'GET_SERVICE':
            setQuickReplies([]);
            break;
        case 'LEAD_CAPTURED':
        case 'FAQ_MODE':
            setQuickReplies(faqMenu);
            break;
        default:
            setQuickReplies([]);
            break;
    }
  }, [stage, isTyping]);


  const handleUserInput = (input: string) => {
    addMessage(input, 'user');
    setQuickReplies([]); 

    switch (stage) {
      case 'GET_NAME':
        setLead(prev => ({ ...prev, name: input }));
        sessionStorage.setItem('chatbot_name', input);
        botReply(`Thanks ${input}. Please share your phone number so we can assist you further.`);
        setStage('GET_PHONE');
        break;

      case 'GET_PHONE':
      case 'VALIDATE_PHONE':
        const phoneRegex = /^[6-9]\d{9}$/;
        if (phoneRegex.test(input.replace(/\s/g, ''))) {
          const finalLead = { ...lead, name: lead.name || 'Anonymous', phone: input };
          setLead(finalLead);
          sessionStorage.setItem('chatbot_phone', input);
          setStage('SAVING_LEAD');

          if (firestore) {
            saveChatbotLead(firestore, {
              ...finalLead,
              service: 'Not specified',
              page: pageUrlRef.current,
              source: 'chatbot',
            })
            .then(() => {
              botReply(`Thanks! We saved your details. Our design team will contact you soon. Meanwhile, you can ask common questions below — or tap WhatsApp to chat with us directly.`);
              setStage('LEAD_CAPTURED');
            })
            .catch(() => {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Could not save your details. Please try again later.",
              });
              botReply("Sorry, I couldn't save your details right now. Please try again later or use the WhatsApp button.");
            });
          }
        } else {
          botReply("That doesn't look like a valid Indian phone number. Please try again.");
          setStage('VALIDATE_PHONE');
        }
        break;

      case 'GET_SERVICE':
        const service = services.find(s => s.toLowerCase() === input.toLowerCase()) || input;
        const finalLeadWithService = { ...lead, service };
        setLead(finalLeadWithService);
        setStage('SAVING_LEAD');

        if (firestore) {
          saveChatbotLead(firestore, {
            ...finalLeadWithService,
            page: pageUrlRef.current,
            source: 'chatbot',
          })
          .then(() => {
            botReply(`Thanks! We saved your details. Our design team will contact you soon. Meanwhile, you can ask common questions below — or tap WhatsApp to chat with us directly.`);
            setStage('LEAD_CAPTURED');
          })
          .catch(() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "Could not save your details. Please try again later.",
            });
            botReply("Sorry, I couldn't save your details right now. Please try again later or use the WhatsApp button.");
          });
        }
        break;

      case 'LEAD_CAPTURED':
      case 'FAQ_MODE':
        setStage('FAQ_MODE');
        const { answer, intent } = getFaqResponse(input);
        
        if (intent === 'human_support' && firestore) {
           saveChatbotEscalation(firestore, {
             chatHistory: [...messages, { id: crypto.randomUUID(), text: input, sender: 'user' }].map(m => `${m.sender}: ${m.text}`),
             leadInfo: { name: lead.name, phone: lead.phone },
           });
           botReply("Our team will contact you shortly. For immediate assistance, feel free to chat with us on WhatsApp.");
           setTimeout(() => {
               window.open('https://wa.me/919880078640', '_blank');
           }, 1500);

        } else if (answer) {
          botReply(answer);
        }
        break;
    }
  };

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(prev => !prev)} />
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onUserInput={handleUserInput}
        isTyping={isTyping}
        quickReplies={quickReplies}
      />
    </>
  );
}
