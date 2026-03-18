
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { PathSelection } from '@/components/landing/path-selection';
import { CustomAiSolutions } from '@/components/landing/custom-ai-solutions';
import { LogoCarousel } from '@/components/landing/logo-carousel';
import { ValueProposition } from '@/components/landing/value-proposition';
import { About } from '@/components/landing/about';
import { PremiumServices } from '@/components/landing/premium-services';
import { Testimonials } from '@/components/landing/testimonials';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <PathSelection />
        <CustomAiSolutions />
        <PremiumServices />
        <ValueProposition />
        <About />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

    