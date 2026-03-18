import Image from 'next/image';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { CheckCircle } from 'lucide-react';

const teamMembers = [
    {
      name: "Karan Chopra",
      role: "CEO",
      bio: "Leads Inextel’s vision for AI-driven CRM solutions. 15+ years in tech. Passionate about streamlining business success.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757013068/Flux_Dev_A_highly_detailed_portrait_of_a_mature_Indian_CEO_mal_0_3_zkgovu.jpg",
      aiHint: "male ceo"
    },
    {
      name: "Divya Singh",
      role: "CFO",
      bio: "Oversees Inextel’s financial strategy, ensuring sustainable growth. 12+ years in finance. Enjoys mentoring startups.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757013591/Flux_Dev_A_highly_detailed_portrait_of_a_mature_Indian_CEO_fem_0_1_rjg6yw.jpg",
      aiHint: "female cfo"
    },
    {
      name: "Sanjay Patel",
      role: "CTO",
      bio: "Drives Inextel’s AI and tech innovation. 18+ years in software. Loves building scalable solutions.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757013888/Lucid_Origin_Generate_an_image_of_a_mature_Indian_male_CFO_age_0_rejydz.jpg",
      aiHint: "male cto"
    },
    {
      name: "Edward Harris",
      role: "COO",
      bio: "Manages operations to boost efficiency by 25%. 14+ years in operations. Advocate for process excellence.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757014216/Flux_Dev_A_highly_detailed_portrait_of_a_mature_USA_CEO_male_3_0_nzcbym.jpg",
      aiHint: "male coo"
    },
    {
      name: "Deepa Menon",
      role: "CMO",
      bio: "Leads Inextel’s marketing to connect with clients. 10+ years in branding. Passionate about storytelling.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757014478/Flux_Dev_A_highly_detailed_portrait_of_a_mature_Indian_CEO_fem_0_yyfmxe.jpg",
      aiHint: "female cmo"
    },
    {
      name: "Rahul Sharma",
      role: "Head of Customer Success",
      bio: "Ensures clients thrive with Inextel’s CRM. 12+ years in support. Loves solving client challenges.",
      photoUrl: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757014647/Flux_Dev_A_highly_detailed_portrait_of_a_mature_Indian_CEO_mal_3_s6xwsu.jpg",
      aiHint: "male support head"
    }
  ];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">

        {/* Existing Content - Moved to Top */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl" style={{ letterSpacing: '-0.025em' }}>
                Transforming Brands
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 sm:text-xl" style={{ lineHeight: 1.6 }}>
                At Inextel, we specialize in building AI-powered solutions that help businesses grow faster while spending less. From smart lead generation systems to automated customer engagement and ad optimization tools, our mission is simple: deliver more sales, more efficiency, and less operational cost.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#F1F5F9] to-[#E2E8F0]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Image 
                            src="https://placehold.co/600x400.png"
                            alt="Inextel office signage"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-lg"
                            data-ai-hint="logo sign"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex flex-col gap-8">
                            <div className="text-center md:text-left">
                                <p className="text-5xl font-bold text-primary">150+</p>
                                <p className="text-xl font-semibold text-slate-700">Client Success</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-5xl font-bold text-primary">15</p>
                                <p className="text-xl font-semibold text-slate-700">Expert Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* New Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              Meet the Team Behind Inextel
            </h1>
            <p className="mt-4 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
              Our leaders drive innovation in AI-powered CRM solutions, empowering businesses to achieve more.
            </p>
          </div>
        </section>

        {/* New Team Section */}
        <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
                            <div className="relative mb-4">
                                <Image
                                    src={member.photoUrl}
                                    alt={`Inextel ${member.role} ${member.name}`}
                                    width={300}
                                    height={300}
                                    className="w-40 h-40 rounded-full object-cover border-4 border-slate-200 transition-transform duration-300 hover:scale-110"
                                    data-ai-hint={member.aiHint}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                            <p className="text-lg font-semibold text-primary">{member.role}</p>
                            <p className="mt-2 text-base text-slate-600">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <div className="py-8">
            <div className="container mx-auto px-6 max-w-4xl">
                <hr className="border-gray-200" />
            </div>
        </div>
        
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                 <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Inextel</h2>
                    <p className="mt-6 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
                        Our team of innovators, strategists, and AI experts work closely with companies to design intelligent systems that replace guesswork with data-driven precision — so you get measurable results, not just promises.
                    </p>
                 </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl shadow-sm">
                        <CheckCircle className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-slate-800">Real Results.</h3>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl shadow-sm">
                        <CheckCircle className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-slate-800">AI That Works.</h3>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl shadow-sm">
                        <CheckCircle className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-slate-800">A Team You Can Trust.</h3>
                    </div>
                </div>
                 <p className="mt-8 text-center text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
                    Let’s transform the way you work, sell, and scale.
                 </p>
            </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#F1F5F9] to-[#E2E8F0]">
             <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Brand Storytelling</h2>
                <p className="mt-6 text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
                    We believe in every brand's unique story and aim to bring it to life through tailored solutions that resonate with the audience and amplify engagement.
                </p>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
