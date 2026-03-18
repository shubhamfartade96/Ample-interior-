'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useState, useEffect } from 'react';

const aboutCarouselImages = PlaceHolderImages.filter(img =>
  img.id.startsWith('about-carousel-')
);

const FadingAboutImages = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % aboutCarouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!aboutCarouselImages.length) {
    return null;
  }

  return (
    <div className="relative w-full min-h-[480px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={aboutCarouselImages[index].imageUrl}
            alt={aboutCarouselImages[index].description}
            data-ai-hint={aboutCarouselImages[index].imageHint}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  
  const listVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
  };

  const pulseTransition = {
    duration: 1.6,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'loop',
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            className="max-w-3xl text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={textVariants}
              className="font-serif text-4xl md:text-5xl font-bold text-black dark:text-white !leading-tight"
            >
              We Craft Spaces That Tell{' '}
              <motion.span
                className="inline-block"
                style={{ color: '#001F54' }}
                animate={pulseAnimation}
                transition={pulseTransition}
              >
                Your Story
              </motion.span>
            </motion.h2>

            <motion.div variants={textVariants} className="flex justify-start">
              <Separator className="my-8 w-24 h-px bg-primary/30" />
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Ample Interiors & Furnitures brings together thoughtful design,
              skilled execution, and reliable processes to create a smooth and
              stress-free interior experience. With years of experience in
              residential and commercial interiors, we handle everything from
              planning to execution — so you can relax while we take care of the
              details.
            </motion.p>
            <motion.div
              variants={listVariants}
              className="mt-8 text-lg text-muted-foreground"
            >
              <p className="font-serif font-semibold text-foreground text-2xl">
                The complete interior solution.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span
                    className="mr-3 mt-1.5 flex h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: '#001F54' }}
                  />
                  <span>Your dedicated interior team</span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-3 mt-1.5 flex h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: '#001F54' }}
                  />
                  <span>Personalised designs for your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-3 mt-1.5 flex h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: '#001F54' }}
                  />
                  <span>Trusted material & service partners</span>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-3 mt-1.5 flex h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: '#001F54' }}
                  />
                  <span>Strict quality checks at every stage</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Image Fader */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
          >
            <FadingAboutImages />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
