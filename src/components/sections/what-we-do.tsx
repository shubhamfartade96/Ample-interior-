'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Ruler,
  Calculator,
  Users,
  Layout,
  Banknote,
  Lightbulb,
  Paintbrush,
  Sofa,
  Construction,
  ShowerHead,
  Wrench,
  CookingPot,
  Check,
  Sparkles,
  CreditCard,
  Droplets,
  Wind,
} from 'lucide-react';

const categories = [
  {
    name: 'Planning & Consultation',
    services: [
      {
        icon: Ruler,
        title: 'Site Measurement',
        description: 'Precise measurements to ensure perfect fit and finish.',
      },
      {
        icon: Calculator,
        title: 'Free Quotation',
        description: 'Transparent and detailed cost estimates with no hidden fees.',
      },
      {
        icon: Users,
        title: 'Personal Design Team',
        description: 'A dedicated team of experts to guide you through the process.',
      },
      {
        icon: Layout,
        title: 'Space Planning',
        description: 'Optimizing your space for functionality and flow.',
      },
      {
        icon: Banknote,
        title: 'Budget Planning',
        description: 'Helping you make the most of your investment.',
      },
    ],
  },
  {
    name: 'Design & Concepts',
    services: [
      {
        icon: Lightbulb,
        title: 'Design Concepts',
        description: 'Creative and personalized design ideas to match your vision.',
      },
      {
        icon: Paintbrush,
        title: 'Wall Design & Paints',
        description: 'Expert color consultation and high-quality paint application.',
      },
      {
        icon: Sofa,
        title: 'Furniture Design',
        description: 'Custom furniture solutions that are both beautiful and functional.',
      },
      {
        icon: Wind,
        title: 'Ceiling Design',
        description: 'Innovative ceiling designs to add character to your space.',
      },
      {
        icon: Wrench,
        title: 'Plumbing & Electrical',
        description: 'Safe and efficient planning for all your plumbing and electrical needs.',
      },
    ],
  },
  {
    name: 'Execution & Installation',
    services: [
      {
        icon: Construction,
        title: 'Civil Works',
        description:
          'Handling all civil work with precision and quality.',
      },
      {
        icon: CookingPot,
        title: 'Modular Kitchen',
        description:
          'Stylish and functional modular kitchens tailored to your needs.',
      },
      {
        icon: Layout,
        title: 'Wardrobes',
        description: 'Custom wardrobes designed to maximize storage and style.',
      },
      {
        icon: Check,
        title: 'Expert Installation',
        description: 'Flawless installation by our team of skilled professionals.',
      },
      {
        icon: Users,
        title: 'Supervision',
        description:
          'Dedicated project supervision to ensure quality and timelines.',
      },
    ],
  },
  {
    name: 'Finishing & Styling',
    services: [
      {
        icon: Sparkles,
        title: 'Decor & Lighting',
        description:
          'Curating the perfect decor and lighting to enhance your space.',
      },
      {
        icon: Sofa,
        title: 'Soft Furnishing',
        description: 'Complete furnishing solutions to bring comfort and style.',
      },
      {
        icon: ShowerHead,
        title: 'Bathrooms',
        description: 'Modern and elegant bathroom designs and fittings.',
      },
      {
        icon: Droplets,
        title: 'Deep Cleaning',
        description:
          'Professional deep cleaning service for a spotless handover.',
      },
      {
        icon: CreditCard,
        title: 'EMI Options',
        description: 'Flexible payment options to make your dream home a reality.',
      },
    ],
  },
];

const WhatWeDoSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="what-we-do"
      className="py-24 sm:py-32"
      style={{ backgroundColor: '#0b0b0b' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#c8a97e' }}
          >
            WHAT WE DO
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-serif text-4xl md:text-5xl font-bold text-white !leading-tight"
          >
            Everything Your Interior Needs — Under One Roof
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-6 mx-auto h-px w-24"
            style={{ backgroundColor: 'rgba(200, 169, 126, 0.3)' }}
          />
        </motion.div>

        <div className="mt-20">
          {/* Mobile Tabs */}
          <div className="lg:hidden mb-8">
            <div className="flex space-x-1 p-1 rounded-lg" style={{backgroundColor: "rgba(255,255,255,0.1)"}}>
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    'w-full rounded-md py-2.5 text-sm font-medium leading-5 text-white transition',
                    'focus:outline-none',
                    activeCategory === category.name
                      ? 'shadow'
                      : 'text-gray-300 hover:bg-white/[0.12]'
                  )}
                  style={{
                    backgroundColor: activeCategory === category.name ? '#c8a97e' : 'transparent',
                    color: activeCategory === category.name ? '#0b0b0b' : 'white',
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Desktop Category List */}
            <div className="hidden lg:block w-1/4">
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.name}>
                    <button
                      onClick={() => setActiveCategory(category.name)}
                      className="relative w-full text-left p-4 rounded-lg transition-colors duration-300"
                    >
                      {activeCategory === category.name && (
                        <motion.div
                          layoutId="activeCategoryIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{ backgroundColor: '#c8a97e' }}
                        />
                      )}
                      <span
                        className={cn(
                          'text-lg font-medium transition-colors duration-300',
                          activeCategory === category.name
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        )}
                      >
                        {category.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Grid */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {categories
                    .find(c => c.name === activeCategory)
                    ?.services.map(service => (
                      <motion.div
                        key={service.title}
                        className="p-6 rounded-lg transition-all duration-300 hover:shadow-2xl"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        }}
                        variants={itemVariants}
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 mb-4">
                            <service.icon className="h-6 w-6" style={{color: '#c8a97e'}} />
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                          {service.description}
                        </p>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
