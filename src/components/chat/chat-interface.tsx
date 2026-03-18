"use client";

import { useState, useEffect } from "react";
import type { Message } from "@/lib/types";
import { ChatMessages } from "./chat-messages";
import { LeadCaptureForm } from "./lead-capture-form";
import { ChatInput } from "./chat-input";
import { getFaqAnswerAction } from "@/app/actions/chat";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BadgeCheck, Languages, X, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from "next/link";
import { WhatsappIcon } from "../landing/whatsapp-icon";

const BOT_NAME = "Neha";
export const BOT_AVATAR_URL = "https://res.cloudinary.com/dsgtunivo/image/upload/v1755806361/1e63e906-8119-4d74-8a14-b166987cc970121_f8x41u.png";

const translations = {
  'English': {
    welcome1: "Hello! I'm Neha, your assistant for our AI automation services.",
    welcome2: "To get started, could you please provide your name and email?",
    captureSuccess: (name: string) => `Thanks, ${name}! How can I help you today? 😊 You can ask about our services, or type "schedule a demo" to book a consultation.`,
    formTitle: "Let's Get Started",
    formDescription: "A few details and we're ready to go.",
    customerSupport: 'Customer Support'
  },
  'Hindi': {
    welcome1: "नमस्ते! मैं नेहा हूँ, हमारी AI ऑटोमेशन सेवाओं के लिए आपकी सहायक।",
    welcome2: "शुरू करने के लिए, क्या आप कृपया अपना नाम और ईमेल प्रदान कर सकते हैं?",
    captureSuccess: (name: string) => `धन्यवाद, ${name}! आज मैं आपकी क्या मदद कर सकती हूँ? 😊 आप हमारी सेवाओं के बारे में पूछ सकते हैं, या परामर्श बुक करने के लिए "schedule a demo" टाइप कर सकते हैं।`,
    formTitle: "चलिए शुरू करते हैं",
    formDescription: "बस कुछ जानकारी और हम तैयार हैं।",
    customerSupport: 'ग्राहक सहायता'
  }
}

interface ChatInterfaceProps {
  onClose: () => void;
}


export function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState('English');
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    setMessages([
      {
        id: "welcome-1",
        role: "bot",
        content: t.welcome1,
        name: BOT_NAME,
        avatarUrl: BOT_AVATAR_URL,
      },
      {
        id: "welcome-2",
        role: "bot",
        content: t.welcome2,
        name: BOT_NAME,
        avatarUrl: BOT_AVATAR_URL,
      },
      {
        id: "lead-capture",
        role: "system",
        content: <LeadCaptureForm onLeadCaptured={handleLeadCaptured} language={language}/>,
      },
    ]);
  }, [language, t.welcome1, t.welcome2]);


  function handleLeadCaptured(name: string) {
    setUserName(name);
    setMessages((prev) =>
      prev
        .filter((msg) => msg.id !== "lead-capture")
        .concat({
          id: "capture-success",
          role: "bot",
          content: t.captureSuccess(name),
          name: BOT_NAME,
          avatarUrl: BOT_AVATAR_URL,
        })
    );
    setLeadCaptured(true);
  }

  async function handleSubmit(input: string) {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const result = await getFaqAnswerAction(input, userName, language);
      
      const rawAnswer = result.answer || result.error || "Sorry, I couldn't understand that.";

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "bot",
        content: rawAnswer,
        name: BOT_NAME,
        avatarUrl: BOT_AVATAR_URL,
      };
      
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "bot",
        content: "An unexpected error occurred. Please try again later.",
        name: BOT_NAME,
        avatarUrl: BOT_AVATAR_URL,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full h-full flex flex-col shadow-2xl sm:rounded-2xl pb-16 sm:pb-0 border-0">
      <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-slate-200 p-4">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chat" className="sm:hidden">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Avatar className="w-10 h-10">
                <AvatarImage src={BOT_AVATAR_URL} alt="Neha" />
                <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="flex items-center gap-1.5 text-xl font-bold font-headline">
                <span>InExtel</span>
                <BadgeCheck className="w-5 h-5 text-primary" />
              </CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {t.customerSupport}
              </p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1.5 text-sm">
                        <span>Change Language</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Select a language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => setLanguage('English')}>
                      <span className={language === 'English' ? 'font-bold' : ''}>English</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => setLanguage('Hindi')}>
                      <span className={language === 'Hindi' ? 'font-bold' : ''}>Hindi</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chat" className="hidden sm:inline-flex">
              <X className="w-5 h-5" />
            </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-0">
        <ChatMessages messages={messages} isLoading={isLoading} />
      </CardContent>
      {leadCaptured && <CardFooter className="p-4 border-t border-slate-200">
        <ChatInput onSubmit={handleSubmit} isLoading={isLoading} disabled={!leadCaptured} />
      </CardFooter>}
    </Card>
  );
}
