'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ConsultationDialog } from '@/components/consultation-dialog';

const heroImageIds = ['hero-1', 'hero-2', 'hero-3', 'hero-4', 'hero-5'];
const heroImages = heroImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean) as import('@/lib/placeholder-images').ImagePlaceholder[];

const FadingImages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <Image
          src={heroImages[index].imageUrl}
          alt={heroImages[index].description}
          data-ai-hint={heroImages[index].imageHint}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Layer 1: Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <FadingImages />
      </div>

      {/* Layer 2: Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Layer 3: Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-white p-4 pl-6 sm:pl-12 md:pl-[8vw] lg:pl-[10vw]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold !leading-tight"
          >
            Luxury Interiors Designed
            <br />
            for Modern Bengaluru Homes
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base md:text-lg text-white/80"
          >
            Interior design crafted with elegance, precision and timeless aesthetics.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-start"
          >
            <ConsultationDialog />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
