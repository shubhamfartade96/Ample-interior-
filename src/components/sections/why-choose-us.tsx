import { Gem, Award, Users, Timer, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'We use only the highest quality materials to ensure durability and a luxurious finish.',
  },
  {
    icon: Award,
    title: 'Custom Design Approach',
    description: 'Every design is tailored to your unique style, needs, and space.',
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Our team of experienced professionals ensures flawless execution and installation.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    description: 'No hidden costs. We provide clear and detailed quotations for all our projects.',
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    description: 'We adhere to strict timelines to deliver your project as promised.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why Choose Ample Interiors?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience the difference that quality, craftsmanship, and a client-centric approach can make.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="p-8 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 lg:mx-auto">
            {features.slice(3).map((feature, index) => (
            <div key={index} className="p-8 rounded-lg bg-muted/50 border border-border">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
