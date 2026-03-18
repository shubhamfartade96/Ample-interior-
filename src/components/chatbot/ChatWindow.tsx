'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Send, X } from 'lucide-react';
import Image from 'next/image';
import { ChatMessage, type Message } from './ChatMessage';
import { QuickReplies } from './QuickReplies';
import { TypingIndicator } from './TypingIndicator';

type ChatWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  onUserInput: (input: string) => void;
  isTyping: boolean;
  quickReplies: string[];
};

export function ChatWindow({ isOpen, onClose, messages, onUserInput, isTyping, quickReplies }: ChatWindowProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages, isTyping, isOpen, quickReplies]);
  
  const handleSend = () => {
    if (input.trim()) {
      onUserInput(input.trim());
      setInput('');
    }
  };

  const handleQuickReply = (reply: string) => {
    onUserInput(reply);
  };

  return (
    <div
      className={cn(
        'fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[65vh] max-h-[700px] flex flex-col rounded-lg border shadow-2xl transition-all duration-300',
        isOpen ? 'flex translate-y-0 opacity-100' : 'hidden translate-y-4 opacity-0',
        'bg-gray-950 border-gray-800'
      )}
    >
      <header className="flex items-center justify-between border-b border-gray-800 p-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dsgtunivo/image/upload/v1773376053/Untitled_design__80_-removebg-preview_yo2tuu.png"
            alt="Ample Interiors"
            width={86}
            height={24}
            className="object-contain"
          />
          <h3 className="font-semibold text-white">Ample Interiors Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
            <a
                href="https://wa.me/919880078640"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-1 text-green-500 hover:bg-gray-800"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                >
                    <path
                    d="M16,2A13.9986,13.9986,0,0,0,2,16C2,19.16,3.208,22.0931,5.29,24.27L3.06,31.81,10.8,29.58A13.9312,13.9312,0,0,0,16,30a14,14,0,1,0,0-28Zm0,25.4614A11.4583,11.4583,0,0,1,10.2,25.92L9.75,25.64,5.83,26.87l1.25-3.84.29-.46a11.4933,11.4933,0,0,1-1.9-6.11A11.52,11.52,0,1,1,16,27.4614Z"
                    />
                    <path
                    d="M22.03,17.9133c-.26-.13-1.55-.76-1.79-.85s-.41-.12-.58.12-.68.85-.83,1.02-.3.19-.56.06a7.2912,7.2912,0,0,1-2.15-1.33,7.9953,7.9953,0,0,1-1.5-1.85c-.16-.29-.01-.44.11-.58s.26-.33.39-.49.17-.25.26-.42.04-.33-.02-.45a16.636,16.636,0,0,1-1-2.42c-.2-.25-.4-.28-.55-.28-.15,0-.3,0-.46,0s-.41.06-.62.31-.85,1-.85,2.47,1,2.87,1.13,3.08.85,2.6,3.38,4.72,3.32,3.15,4.47,3.15c.66,0,1.26-.11,1.75-.54s1.55-1.8,1.77-3.48S22.29,18.0433,22.03,17.9133Z"
                    />
                </svg>
            </a>
            <button onClick={onClose} className="rounded-full p-1 text-gray-400 hover:bg-gray-800">
                <X className="h-5 w-5" />
            </button>
        </div>
      </header>
      
      <div
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scroll-smooth overscroll-contain"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="space-y-4 p-4">
            {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
            ))}
            {isTyping && <TypingIndicator />}
            {quickReplies.length > 0 && (
                <QuickReplies replies={quickReplies} onSelect={handleQuickReply} />
            )}
            <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-gray-800 p-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1 rounded-md border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-white placeholder:text-gray-500"
        />
        <button onClick={handleSend} className="rounded-md bg-chatbot p-2 text-chatbot-foreground hover:bg-chatbot/90">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
