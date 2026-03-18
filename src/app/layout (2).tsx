import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import SmoothScroller from '@/components/smooth-scroller';
import { FirebaseClientProvider } from '@/firebase';
import FirebaseErrorListener from '@/components/FirebaseErrorListener';
import Chatbot from '@/components/chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Interior Designers in Electronic City Bangalore | Ample Interiors',
  description:
    'Premium interior design studio in Bengaluru specializing in modular kitchens, wardrobes, and luxury home interiors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(inter.variable, playfair.variable, 'font-sans')}>
        <FirebaseClientProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <SmoothScroller>
              {children}
              <Toaster />
              <FirebaseErrorListener />
              <Chatbot />
            </SmoothScroller>
          </ThemeProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
