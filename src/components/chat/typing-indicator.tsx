"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BOT_AVATAR_URL } from "./chat-interface";

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
       <Avatar className="w-8 h-8 shrink-0">
          <AvatarImage src={BOT_AVATAR_URL} alt="Neha" />
          <AvatarFallback>N</AvatarFallback>
      </Avatar>
      <div className="relative rounded-xl px-4 py-3 max-w-[80%] bg-card text-card-foreground border shadow-sm rounded-tl-none">
        <div className="flex items-center justify-center space-x-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
