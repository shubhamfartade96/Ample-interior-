'use client';

import { MessageSquare } from 'lucide-react';

type ChatIconProps = {
  onClick: () => void;
};

export function ChatIcon({ onClick }: ChatIconProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-chatbot text-chatbot-foreground shadow-lg z-50 flex items-center justify-center hover:bg-chatbot/90 transition-all"
      aria-label="Open chat"
    >
      <MessageSquare className="h-8 w-8" />
      <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
        1
      </span>
    </button>
  );
}
