"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@/lib/types";
import { ChatMessage } from "./chat-message";
import { TypingIndicator } from "./typing-indicator";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      setTimeout(() => {
        if (scrollableContainerRef.current) {
         scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollableContainerRef} className="h-full space-y-6 p-6 pb-28 sm:pb-6 overflow-y-auto">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  );
}
