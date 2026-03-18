import Header from '@/components/header';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import DesignProcessSection from '@/components/sections/design-process';
import ExpertiseSection from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import SpecializationsSection from '@/components/sections/specializations';
import TestimonialsSection from '@/components/sections/testimonials';
import WhatWeDoSection from '@/components/sections/what-we-do';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhatWeDoSection />
        <DesignProcessSection />
        <ExpertiseSection />
        <SpecializationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
