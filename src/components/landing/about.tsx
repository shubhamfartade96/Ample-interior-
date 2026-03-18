import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="pt-4 pb-12 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
            About Inextel
          </h2>
          <p className="mt-6 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
            At Inextel, we specialize in building AI-powered solutions that help businesses grow faster while spending less. From smart lead generation systems to automated customer engagement and ad optimization tools, our mission is simple: deliver more sales, more efficiency, and less operational cost.
          </p>
          <p className="mt-4 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
            Our team of innovators, strategists, and AI experts work closely with companies to design intelligent systems that replace guesswork with data-driven precision — so you get measurable results, not just promises.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Real Results.</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">AI That Works.</h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">A Team You Can Trust.</h3>
            </div>
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline" className="text-base font-semibold border-2 border-primary text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary/5 active:scale-95">
              <Link href="/about">Discover Our Story</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
