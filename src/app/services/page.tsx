
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { PremiumServices } from '@/components/landing/premium-services';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PremiumServices />
      </main>
      <Footer />
    </div>
  );
}

    