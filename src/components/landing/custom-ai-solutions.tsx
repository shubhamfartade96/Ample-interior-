
"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, Clock, Users, Database, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
    {
        id: "feature-1",
        title: "Lifetime Technical Support",
        description: "Rest easy knowing our team is here to support your AI solution for the long haul, ensuring it runs smoothly and efficiently, always.",
        icon: <Award className="h-8 w-8" />,
    },
    {
        id: "feature-2",
        title: "99.9% Uptime Guarantee",
        description: "We build robust, reliable systems. Our 99.9% uptime guarantee means your AI tools are always online and working for your business.",
        icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
        id: "feature-3",
        title: "Complete Team Training",
        description: "We don't just hand over the keys. We provide comprehensive training to ensure your entire team can leverage the new tools effectively from day one.",
        icon: <Users className="h-8 w-8" />,
    },
    {
        id: "feature-4",
        title: "Complete Data Ownership",
        description: "Your data is your most valuable asset. With our solutions, you maintain 100% ownership and control. Your data stays private and secure.",
        icon: <Database className="h-8 w-8" />,
    },
    {
        id: "feature-5",
        title: "2-4 Week Project Delivery",
        description: "We work efficiently to bring your vision to life. Our streamlined process ensures your custom AI project is delivered within 2 to 4 weeks.",
        icon: <Clock className="h-8 w-8" />,
    },
];

export function CustomAiSolutions() {
    const [activeFeature, setActiveFeature] = React.useState(features[0]);
    const [mobileAccordionValue, setMobileAccordionValue] = React.useState(features[0].id);

    return (
        <section className="w-full pt-0 pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
            <div className="container mx-auto px-6 max-w-6xl text-center relative">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight" style={{ letterSpacing: '-0.025em' }}>
                    Custom AI-Powered Websites & Apps That Drive Results.
                </h2>
                <div className="mt-4 flex justify-center">
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>
                <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600" style={{ lineHeight: 1.7 }}>
                    Our streamlined process delivers AI-powered websites, software, and mobile applications that think, learn, and adapt to your customers' needs. Ready to launch in weeks with lifetime support included.
                </p>

                {/* Desktop View */}
                <div className="mt-16 hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-1 flex flex-col gap-2 text-left">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onMouseOver={() => setActiveFeature(feature)}
                                onClick={() => setActiveFeature(feature)}
                                className={cn(
                                    "p-4 rounded-lg text-left transition-all duration-300 flex items-center gap-4",
                                    activeFeature.id === feature.id
                                        ? "bg-[#EFEAF8]/60 shadow-lg border border-slate-200/80"
                                        : "bg-[#EFEAF8] hover:bg-[#EFEAF8]/60"
                                )}
                            >
                                <div className={cn(
                                    "flex-shrink-0 transition-colors duration-300",
                                    activeFeature.id === feature.id ? "text-primary" : "text-slate-500"
                                )}>
                                    {feature.icon}
                                </div>
                                <span className="font-semibold text-slate-800">{feature.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="md:col-span-2 relative min-h-[250px] bg-[#EFEAF8] backdrop-blur-sm p-8 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-center text-center">
                       <div key={activeFeature.id} className="animate-in fade-in-50 duration-500">
                            <div className="flex justify-center mb-4 text-primary bg-primary/10 p-3 rounded-full w-fit mx-auto">
                                {React.cloneElement(activeFeature.icon, { className: "h-10 w-10" })}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{activeFeature.title}</h3>
                            <p className="text-slate-600 max-w-md mx-auto" style={{ lineHeight: 1.6 }}>{activeFeature.description}</p>
                       </div>
                    </div>
                </div>

                {/* Mobile View */}
                 <div className="mt-12 md:hidden">
                    <Accordion 
                      type="single" 
                      collapsible 
                      className="w-full space-y-4"
                      value={mobileAccordionValue}
                      onValueChange={(value) => setMobileAccordionValue(value)}
                    >
                      {features.map((feature) => (
                          <AccordionItem key={feature.id} value={feature.id} className="border border-slate-200/80 bg-[#EFEAF8] rounded-lg shadow-sm data-[state=open]:shadow-lg data-[state=open]:bg-[#EFEAF8]/60">
                              <AccordionTrigger className="p-4 text-left font-semibold text-slate-800 hover:no-underline">
                                 <div className="flex items-center gap-4">
                                    <div className={cn("transition-colors duration-300", mobileAccordionValue === feature.id ? "text-primary" : "text-slate-500")}>
                                      {feature.icon}
                                    </div>
                                    <span>{feature.title}</span>
                                 </div>
                              </AccordionTrigger>
                              <AccordionContent className="p-4 pt-0 text-left">
                                  <p className="text-slate-600" style={{ lineHeight: 1.6 }}>{feature.description}</p>
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                    </Accordion>
                </div>


                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="w-full sm:w-auto font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-primary to-indigo-500">
                                Book Your AI Project
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Book Your AI Project</DialogTitle>
                                <DialogDescription>
                                    Please fill out the form below and we'll get back to you soon.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="pr-2">
                                <ContactForm />
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold border-2 border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5 active:scale-95">
                        <Link href="/contact-us">Analyze My Business for AI</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
