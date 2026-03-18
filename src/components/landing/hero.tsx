
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "./contact-form"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] opacity-30"></div>
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-56px)] py-12 lg:py-0">
                <div className="text-center lg:text-left flex flex-col justify-center h-full">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                            Transform Your <span style={{color: '#8243EF'}}>Business with AI-</span>Powered Automation
                        </h1>
                        <p className="mt-6 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
                            AI-driven business solutions that maximize conversions, reduce ad spend, and streamline operations — all while lowering overhead and workforce cost.
                        </p>
                        <p className="mt-4 text-lg font-medium" style={{ lineHeight: 1.6, color: '#8243EF' }}>
                            Future-Proof Your Business with Tailored AI Automation & Strategy.
                        </p>
                        
                        {/* Image container - moved for mobile view */}
                        <div className="relative mt-8 lg:hidden flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <Image
                                    src="https://res.cloudinary.com/dsgtunivo/image/upload/v1757630248/Untitled_600_x_400_px_hz0sy2.png"
                                    alt="AI Automation Dashboard"
                                    width={600}
                                    height={400}
                                    className="relative rounded-2xl shadow-2xl border border-slate-200/50 w-full h-auto"
                                    data-ai-hint="dashboard screen"
                                />
                            </div>
                        </div>
                        
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="font-semibold text-base shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-primary to-indigo-500">
                                    Get Started
                                    </Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Get In Touch</DialogTitle>
                                        <DialogDescription>
                                            Please fill out the form below and we'll get back to you soon.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="pr-2">
                                        <ContactForm />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                            <Image src="https://res.cloudinary.com/dsgtunivo/image/upload/v1757485218/16_ceslc5.png" alt="Award Badge 1" width={96} height={32} data-ai-hint="award badge" />
                            <Image src="https://res.cloudinary.com/dsgtunivo/image/upload/v1757485218/17_jx1shr.png" alt="Award Badge 2" width={96} height={32} data-ai-hint="award badge" />
                            <Image src="https://res.cloudinary.com/dsgtunivo/image/upload/v1757485218/18_bhe4mr.png" alt="Award Badge 3" width={96} height={32} data-ai-hint="award badge" />
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="w-5 h-5" fill="currentColor" />
                                <Star className="w-5 h-5" fill="currentColor" />
                                <Star className="w-5 h-5" fill="currentColor" />
                                <Star className="w-5 h-5" fill="currentColor" />
                                <StarHalf className="w-5 h-5" fill="currentColor" />
                            </div>
                            <Badge variant="outline" className="border-primary/50 text-primary font-semibold bg-primary/10">
                                RATED 4.8 STARS BY CLIENTS
                            </Badge>
                        </div>
                    </div>
                </div>
                {/* Image container for desktop */}
                <div className="relative mt-8 lg:mt-0 hidden lg:flex items-center justify-center lg:h-full lg:items-start lg:pt-0">
                    <div className="relative w-full max-w-md lg:max-w-none lg:w-auto flex items-center justify-center">
                        <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl hidden lg:block"></div>
                        <Image
                            src="https://res.cloudinary.com/dsgtunivo/image/upload/v1757630248/Untitled_600_x_400_px_hz0sy2.png"
                            alt="AI Automation Dashboard"
                            width={600}
                            height={400}
                            className="relative rounded-2xl shadow-2xl border border-slate-200/50 w-full h-auto lg:w-[600px] lg:h-auto"
                            data-ai-hint="dashboard screen"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
