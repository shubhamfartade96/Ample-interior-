'use client';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

export type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

export function ChatMessage({ message }: { message: Message }) {
  const isBot = message.sender === 'bot';
  return (
    <div className={cn('flex items-start gap-3', isBot ? '' : 'flex-row-reverse')}>
      <Avatar className="h-8 w-8">
        <AvatarFallback className={cn(isBot ? 'bg-chatbot/20 text-chatbot' : 'bg-gray-700 text-gray-200')}>
          {isBot ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'max-w-xs rounded-lg px-4 py-2 text-sm',
          isBot
            ? 'bg-gray-800 text-gray-200 rounded-bl-none'
            : 'bg-chatbot text-chatbot-foreground rounded-br-none'
        )}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
}
