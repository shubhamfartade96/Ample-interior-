'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { saveLead } from '@/firebase/actions';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Please enter a valid phone number.',
  }),
  projectType: z.string({
    required_error: 'Please select a project type.',
  }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Could not connect to the database. Please try again later.',
      });
      return;
    }

    saveLead(firestore, values)
      .then(() => {
        toast({
          title: 'Request Sent!',
          description: 'We will get in touch with you shortly.',
        });
        form.reset();
      })
      .catch((e: any) => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Could not save your request. Please try again.',
        });
      });
  }

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: '#1a1a1a' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                    Start Your Dream Project Today
                </h2>
                <p className="mt-4 text-lg text-white/80">
                    Ready to transform your space? Get in touch with us for a free, no-obligation design consultation. Let's discuss your ideas and how we can bring them to life.
                </p>
                <div className='mt-8 space-y-4'>
                    <p className='text-lg text-white'><strong>Email:</strong> info@ampleinteriors.com</p>
                    <p className='text-lg text-white'><strong>Phone:</strong> +91 98800 78640</p>
                    <p className='text-lg text-white'><strong>Address:</strong> Ground Floor, Sampige Nagar Circle, Anekal Taluk, Electronic City, Bengaluru</p>
                </div>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Name" {...field} className="bg-white/10 border-white/30 text-white h-12 text-base placeholder:text-white/80 focus:ring-primary focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} className="bg-white/10 border-white/30 text-white h-12 text-base placeholder:text-white/80 focus:ring-primary focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base bg-white/10 border-white/30 text-white data-[placeholder]:text-white/80 focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Project Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="dark">
                            <SelectItem value="full-home">Full Home Interior</SelectItem>
                            <SelectItem value="kitchen">Modular Kitchen</SelectItem>
                            <SelectItem value="wardrobe">Wardrobe & Storage</SelectItem>
                            <SelectItem value="living-room">Living Room</SelectItem>
                            <SelectItem value="bedroom">Bedroom</SelectItem>
                            <SelectItem value="commercial">Commercial Space</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary">
                    Request Free Consultation
                  </Button>
                </form>
              </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
