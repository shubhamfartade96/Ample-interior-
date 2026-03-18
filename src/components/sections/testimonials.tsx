import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Ample Interiors transformed our house into a home. Their attention to detail and commitment to quality is unparalleled. We couldn't be happier with the results!",
    name: 'Anjali & Rohan Mehta',
    location: 'Bengaluru',
    rating: 5,
  },
  {
    quote:
      'The design process was so smooth and collaborative. The team really listened to our needs and delivered a kitchen that is both beautiful and highly functional.',
    name: 'Priya Sharma',
    location: 'Electronic City, Bengaluru',
    rating: 5,
  },
  {
    quote:
      'From concept to completion, the professionalism was outstanding. They finished the project on time and within budget. Highly recommended!',
    name: 'Sameer Patel',
    location: 'Bengaluru',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center justify-center gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-primary fill-primary' : 'text-secondary-foreground/40'
        }`}
      />
    ))}
  </div>
);


export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stories of spaces transformed and lives enhanced.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="dark border-none shadow-xl bg-secondary text-secondary-foreground rounded-2xl">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-xl italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6">
                        <StarRating rating={testimonial.rating} />
                        <p className="mt-2 font-bold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-secondary-foreground/70">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
