import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingChatButton } from '@/components/chat/floating-chat-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inextel - Power Your Business with AI',
  description: 'AI-driven business solutions that maximize conversions, reduce ad spend, and streamline operations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
        <FloatingChatButton />
      </body>
    </html>
  );
}
