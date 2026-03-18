
"use client"

import { Button } from "@/components/ui/button";
import { Settings, Rocket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, from "react";

const pathData = {
    custom: {
        id: 'custom',
        icon: <Settings className="h-10 w-10" />,
        title: "Custom AI Development",
        description: "Tailored solutions built specifically for your unique business requirements.",
        buttonText: "Start Custom Project",
        buttonLink: "/contact-us",
        bgClass: "from-blue-50 to-blue-100",
        textClass: "text-blue-800",
        buttonClass: "bg-blue-600 text-white hover:bg-blue-700"
    },
    'pre-built': {
        id: 'pre-built',
        icon: <Rocket className="h-10 w-10" />,
        title: "Pre-Built AI Tools",
        description: "13+ ready-to-use AI solutions for instant business transformation.",
        buttonText: "Browse AI Tools",
        buttonLink: "/services",
        bgClass: "from-green-50 to-green-100",
        textClass: "text-green-800",
        buttonClass: "bg-green-600 text-white hover:bg-green-700"
    }
}

const PathCard = ({ 
    path, 
    isMobile,
    activeMobile,
    setActiveMobile 
}: { 
    path: typeof pathData['custom'], 
    isMobile: boolean, 
    activeMobile: string | null, 
    setActiveMobile: (id: string | null) => void 
}) => {
    const isActive = activeMobile === path.id;

    if (isMobile) {
        return (
            <div 
                className={cn(
                    "relative w-full flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out bg-gradient-to-br",
                    "cursor-pointer",
                    path.bgClass,
                    isActive ? 'flex-grow h-auto' : 'h-40'
                )}
                onClick={() => setActiveMobile(isActive ? null : path.id)}
            >
                <div className="relative z-10 w-full">
                    <div className={cn("flex justify-center mb-6", path.textClass)}>
                        {path.icon}
                    </div>
                    <h3 className={cn("text-3xl font-bold mb-4", path.textClass)}>{path.title}</h3>
                    <div className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isActive ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    )}>
                        <p className="text-slate-600">
                            {path.description}
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg" className={cn(
                                "font-semibold shadow-lg",
                                path.buttonClass
                            )}>
                                <Link href={path.buttonLink}>{path.buttonText}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={cn(
            "relative w-full h-full flex flex-col justify-center items-center text-center p-8 transition-all duration-500 ease-in-out bg-gradient-to-br",
            path.bgClass
        )}>
            <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className={cn("flex justify-center mb-6", path.textClass)}>
                    {path.icon}
                </div>
                <h3 className={cn("text-3xl font-bold mb-4", path.textClass)}>{path.title}</h3>
                <div className="overflow-hidden">
                    <p className="text-slate-600 transition-all duration-500 ease-in-out h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4">
                        {path.description}
                    </p>
                </div>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Button asChild size="lg" className={cn(
                        "font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105",
                        path.buttonClass
                    )}>
                        <Link href={path.buttonLink}>{path.buttonText}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export function PathSelection() {
    const [activeMobile, setActiveMobile] = React.useState<string | null>('custom');

    return (
        <section id="path-selection" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl" style={{ letterSpacing: '-0.025em' }}>
                        Choose Your AI Journey
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Select the path that best fits your business needs.
                    </p>
                </div>
                
                {/* Desktop View */}
                <div className="hidden md:flex flex-row rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 min-h-[32rem]">
                    <div className="group w-1/2 transition-all duration-500 ease-in-out hover:w-[65%]">
                        <PathCard path={pathData.custom} isMobile={false} activeMobile={null} setActiveMobile={() => {}} />
                    </div>
                    <div className="group w-1/2 transition-all duration-500 ease-in-out hover:w-[65%] border-l border-slate-200/80">
                        <PathCard path={pathData['pre-built']} isMobile={false} activeMobile={null} setActiveMobile={() => {}} />
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80">
                    <div className="flex flex-col">
                        <PathCard path={pathData.custom} isMobile={true} activeMobile={activeMobile} setActiveMobile={setActiveMobile} />
                    </div>
                    <div className="flex flex-col border-t border-slate-200/80">
                         <PathCard path={pathData['pre-built']} isMobile={true} activeMobile={activeMobile} setActiveMobile={setActiveMobile} />
                    </div>
                </div>

            </div>
        </section>
    );
}
