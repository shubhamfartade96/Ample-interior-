'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  MessageSquare,
  Ruler,
  Pencil,
  FileText,
  Palette,
  Box,
  Factory,
  Wrench,
  Home,
} from 'lucide-react';
import { cn } from '@/lib/utils';


const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Understanding your requirements, vision, and lifestyle needs.',
  },
  {
    step: 2,
    icon: Ruler,
    title: 'Site Visit & Measurement',
    description: 'Our team visits your space for precise measurements and assessment.',
  },
  {
    step: 3,
    icon: Pencil,
    title: 'Concept Design Discussion',
    description: 'Collaborating on initial design concepts and layout possibilities.',
  },
  {
    step: 4,
    icon: FileText,
    title: 'Final Quotation & Agreement',
    description: 'Providing a transparent, detailed quotation and project agreement.',
  },
  {
    step: 5,
    icon: Palette,
    title: 'Material Selection',
    description: 'Guiding you through our curated library of premium materials and finishes.',
  },
  {
    step: 6,
    icon: Box,
    title: '2D / 3D Design Presentation',
    description: 'Visualizing your space with detailed 2D layouts and 3D renderings.',
  },
  {
    step: 7,
    icon: Factory,
    title: 'Manufacturing & Production',
    description: 'Crafting your custom furniture and interiors at our own facility.',
  },
  {
    step: 8,
    icon: Wrench,
    title: 'Installation & Supervision',
    description: 'Expert installation and on-site supervision to ensure quality.',
  },
  {
    step: 9,
    icon: Home,
    title: 'Final Handover',
    description: 'The exciting day we welcome you to your newly transformed space.',
  },
];

export default function DesignProcessSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="process" className="py-24 sm:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-widest"
            style={{color: '#c8a97e'}}
          >
            OUR PROCESS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-serif text-4xl md:text-5xl font-bold text-foreground !leading-tight"
          >
            Your Interior Journey — From Vision to Reality
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-6 mx-auto h-px w-24"
            style={{backgroundColor: 'rgba(200, 169, 126, 0.3)'}}
          />
        </motion.div>
      </div>
      
      <div className="mt-16">
        <div className="flex justify-center items-center gap-3 mb-8">
            {processSteps.map((_, index) => (
                <div 
                    key={index}
                    className={cn(
                        'rounded-full transition-all duration-500',
                        selectedIndex === index 
                        ? 'w-4 h-4 bg-primary shadow-[0_0_12px_hsl(var(--primary))]' 
                        : 'w-2.5 h-2.5 bg-primary/40'
                    )}
                />
            ))}
        </div>

        <motion.div 
          className="w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
          ref={emblaRef}
        >
          <div className="flex">
              {processSteps.map((step, index) => (
                <div key={index} className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%] p-4">
                  <div className={cn(
                      'h-full transition-all duration-300 ease-out',
                      selectedIndex === index ? 'scale-105' : 'scale-95 opacity-80'
                  )}>
                    <div 
                      className="relative flex h-full flex-col items-center text-center p-9 rounded-[20px] bg-[#111111] text-white shadow-[0_30px_70px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.2)] hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#111111]"
                    >
                      <div 
                          className="flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110"
                          style={{backgroundColor: 'rgba(200, 169, 126, 0.15)'}}
                      >
                          <step.icon className="h-7 w-7" style={{color: '#c8a97e'}} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base text-white/70 flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
