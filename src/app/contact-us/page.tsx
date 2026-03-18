import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { ContactForm } from '@/components/landing/contact-form';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
                Get In Touch
              </h1>
              <p className="mt-4 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
                Please fill out the form below with your details, and we will get back to you soon.
              </p>
            </div>
            <div className="mt-12">
                <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
