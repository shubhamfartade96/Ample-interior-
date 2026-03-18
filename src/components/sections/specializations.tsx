'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

const specializations = [
  {
    title: 'Modular Kitchen',
    description: 'Functional and stylish kitchens designed for modern living.',
    imageId: 'specialization-kitchen',
  },
  {
    title: 'Wardrobes',
    description: 'Custom wardrobes that maximize space and organization.',
    imageId: 'specialization-wardrobe',
  },
  {
    title: 'Living Room',
    description: 'Creating inviting spaces for relaxation and entertainment.',
    imageId: 'specialization-living-room',
  },
  {
    title: 'Bedroom',
    description: 'Designing personal sanctuaries for rest and rejuvenation.',
    imageId: 'specialization-bedroom',
  },
  {
    title: 'Kids Room',
    description: 'Imaginative and fun spaces for children to grow and play.',
    imageId: 'specialization-kids-room',
  },
  {
    title: 'Bathroom Interior',
    description: 'Elegant and functional bathrooms with premium fittings.',
    imageId: 'specialization-bathroom',
  },
  {
    title: 'False Ceiling',
    description: 'Innovative ceiling designs to enhance ambiance and lighting.',
    imageId: 'specialization-ceiling',
  },
  {
    title: 'Furniture Design',
    description: 'Bespoke furniture pieces tailored to your style and needs.',
    imageId: 'specialization-furniture',
  },
  {
    title: 'Office Interior',
    description: 'Productive and inspiring workspaces for modern businesses.',
    imageId: 'specialization-office',
  },
  {
    title: 'Commercial Interior',
    description: 'Designing impactful and functional commercial spaces.',
    imageId: 'specialization-commercial',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
};

const SpecializationCard = ({
  specialization,
  i,
  scrollYProgress,
}: {
  specialization: (typeof specializations)[0];
  i: number;
  scrollYProgress: any;
}) => {
  const image = getImage(specialization.imageId);
  const total = specializations.length;

  const scale = useTransform(
    scrollYProgress,
    [i / total, (i + 0.5) / total, (i + 1) / total],
    [1, 1, 0.9]
  );
  
  const y = useTransform(
    scrollYProgress,
    [0, i / total, (i + 1) / total],
    ['0vh', '0vh', '-10vh']
  );

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: `calc(10vh + ${i * 2}px)`,
        scale,
        y,
        zIndex: i,
      }}
      className="h-[80vh] w-full"
    >
      <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
        {image && (
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h3 className="font-serif text-3xl md:text-5xl font-bold">{specialization.title}</h3>
          <p className="mt-2 text-base md:text-lg max-w-md text-white/80">
            {specialization.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SpecializationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="specializations" style={{ background: '#0b0b0b' }} className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white !leading-tight">
          Our Specializations
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
          Spaces We Design and Transform with Expertise
        </p>
      </div>

      <div ref={containerRef} className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8" style={{ height: `${specializations.length * 100}vh`}}>
        {specializations.map((spec, i) => (
          <SpecializationCard
            key={spec.title}
            i={i}
            specialization={spec}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
