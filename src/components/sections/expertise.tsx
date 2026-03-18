'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Calculator,
  Award,
  Users,
  ClipboardList,
  Layers,
  Component,
  BookOpen,
  Handshake,
  Gem,
  Scaling,
  BadgeCheck,
  Star,
  Palette,
  CalendarClock,
  ClipboardCheck,
  Search,
  Sparkles,
} from 'lucide-react';

const expertiseData = {
    'Pre-Design': [
      { icon: Calculator, title: 'Free Quotation', description: 'Transparent and detailed cost estimates with no hidden fees.' },
      { icon: Award, title: 'Top Rated Designers', description: 'Work with our award-winning design experts.' },
      { icon: Users, title: 'Personal Design Team', description: 'A dedicated team to guide you through the process.' },
      { icon: ClipboardList, title: 'Project Planning', description: 'Meticulous planning for a seamless execution.' },
    ],
    'Design': [
      { icon: Layers, title: 'Material Library', description: 'A vast collection of premium materials and finishes.' },
      { icon: Component, title: 'Modular Products', description: 'Innovative and customisable modular solutions.' },
      { icon: BookOpen, title: 'Extensive Catalog', description: 'Explore a wide range of design possibilities.' },
      { icon: Handshake, title: 'Brand Partners', description: 'Collaborations with top-tier furniture and decor brands.' },
    ],
    'Manufacturing': [
      { icon: Gem, title: 'Quality Raw Material', description: 'We source only the finest materials for longevity.' },
      { icon: Scaling, title: 'Made With Accuracy', description: 'Precision engineering for a flawless finish.' },
      { icon: BadgeCheck, title: '100% Quality Assurance', description: 'Rigorous checks at every stage of production.' },
    ],
    'Installation': [
      { icon: Star, title: 'Top Rated Service Partners', description: 'Skilled professionals for a perfect installation.' },
      { icon: Palette, title: 'Installed As Per Design', description: 'Executing the approved design with precision.' },
      { icon: CalendarClock, title: 'Project Plan & Updates', description: 'Regular updates to keep you informed.' },
      { icon: ClipboardCheck, title: 'Regular Quality Checks', description: 'Ensuring the highest standards on-site.' },
      { icon: Search, title: 'Final Site Inspection', description: 'A thorough walkthrough before handover.' },
      { icon: Sparkles, title: 'Deep Cleaning', description: 'A spotless space ready for you to move in.' },
    ],
};

const tabs = Object.keys(expertiseData);

export default function ExpertiseSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="expertise" className="py-24 sm:py-32" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl font-bold text-white !leading-tight"
          >
            Our Expertise
          </motion.h2>
          <motion.p
             variants={itemVariants}
             className="mt-4 text-lg text-[#bfbfbf]"
          >
            A seamless journey from concept to reality, managed by experts at every step.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-6 mx-auto h-px w-24 bg-[#c8a97e]/50"
          />
        </motion.div>

        <Tabs defaultValue={tabs[0]} className="mt-20">
          <div className="flex justify-center">
            <ScrollArea className="w-auto max-w-full">
              <TabsList className="inline-flex h-auto items-center justify-center rounded-full bg-white/10 p-1.5">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="whitespace-nowrap rounded-full px-6 py-2.5 text-base font-medium text-neutral-400 ring-offset-transparent transition-all duration-300 hover:text-white focus-visible:outline-none data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-lg"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" className="mt-2" />
            </ScrollArea>
          </div>
          
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-12 focus-visible:ring-0">
                  <motion.div
                    key={tab}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                      hidden: {}
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  >
                  {(expertiseData[tab as keyof typeof expertiseData]).map((item, index) => {
                    return (
                        <motion.div
                          key={index}
                          className="p-6 rounded-lg transition-all duration-300"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                          variants={itemVariants}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          }}
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 mb-4">
                                <item.icon className="h-6 w-6" style={{color: '#c8a97e'}} />
                            </div>
                            <h3 className="font-serif text-lg font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                        </motion.div>
                    )
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
