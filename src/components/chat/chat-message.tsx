"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  if (message.role === 'system') {
    return <div className="flex items-center justify-center py-4">{message.content}</div>;
  }
  
  const isBot = message.role === "bot";

  return (
    <div
      className={cn(
        "flex items-start gap-3 w-full",
        !isBot ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className="w-8 h-8 shrink-0">
        {isBot ? (
          <>
            <AvatarImage src={message.avatarUrl} alt={message.name || 'Bot'} />
            <AvatarFallback>{message.name?.charAt(0) || 'B'}</AvatarFallback>
          </>
        ) : (
          <AvatarFallback className={cn("bg-accent text-accent-foreground")}>
            <User className="w-5 h-5" />
          </AvatarFallback>
        )}
      </Avatar>
      <div
        className={cn(
          "relative rounded-xl px-4 py-3 max-w-[80%] shadow-sm",
          isBot
            ? "bg-card text-card-foreground rounded-tl-none"
            : "bg-primary text-primary-foreground rounded-tr-none"
        )}
      >
        {isBot && <div className="font-semibold text-xs mb-1">{message.name || 'InExtel'} - Support Assistant</div>}
        <div className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  );
}
