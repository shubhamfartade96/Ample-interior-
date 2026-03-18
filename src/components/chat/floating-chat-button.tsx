"use client";

import { useState, useEffect } from 'react';
import { ChatInterface } from '@/components/chat/chat-interface';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isChatOpen]);


  const handleClose = () => setIsChatOpen(false);

  return (
    <div>
      <div className={cn(
          "fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 w-full h-full sm:w-[440px] sm:h-[calc(100vh-6rem)] sm:max-h-[700px] sm:shadow-2xl sm:rounded-2xl flex flex-col",
          isChatOpen ? 'block' : 'hidden'
        )}>
         <ChatInterface onClose={handleClose} />
      </div>
      
      {!isChatOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40">
          <span className="absolute top-0 right-0 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-xs text-white">1</span>
          </span>
          <Button
            onClick={() => setIsChatOpen(true)}
            size="icon"
            className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-110"
            aria-label={'Open chat'}
          >
            <MessageSquare className="w-8 h-8" />
          </Button>
        </div>
      )}
    </div>
  );
}
