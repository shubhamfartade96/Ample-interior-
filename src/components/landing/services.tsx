
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const serviceList = [
  {
    title: "AI Insights for Founders & Management",
    description: "Make smarter decisions backed by AI. We provide dashboards and intelligence reports to help founders and senior managers track company growth, team performance, marketing ROI, and upcoming risks — all without wasting time on manual analysis.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8bGFwdG9wJTIwc2NyZWVuJTIwcGVyZm9ybWFuY2UlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzU1Nzg1MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "AI Insights Dashboard",
      hint: "AI insights graph"
    }
  },
  {
    title: "Automated Social Media Content Creation",
    description: "Create scroll-stopping posts without the stress. Our team uses AI tools to craft high-performing content for your brand from carousels and reels to captions and ideas saving time while maintaining creative quality.",
    image: {
      src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Social Media Content",
      hint: "social media"
    }
  },
  {
    title: "Website Management & Automation",
    description: "Keep your site sharp, fast, and customer-ready — always. We manage, optimize, and update your website with AI tools that improve speed, SEO, conversion tracking, and user experience, all while keeping it easy to scale.",
    image: {
      src: "https://images.unsplash.com/photo-1558174685-430919a96c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8d2Vic2l0ZXxlbnwwfHx8fDE3NTU3ODU1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Website Management",
      hint: "website design"
    }
  },
  {
    title: "Sales Calling Automation (Before & After Sales)",
    description: "Less manual calling, more real conversions. Streamline outbound and follow-up sales calls with AI-powered workflows. Reduce manual tasks, personalize outreach, and boost upsell and retention rates helping you grow sales without growing your call team.",
    image: {
      src: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzYWxlc3xlbnwwfHx8fDE3NTU3ODYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Sales Calling Automation",
      hint: "sales call"
    }
  },
  {
    title: "Social Media Management",
    description: "Stay consistent across platforms — automatically. From scheduling to strategy, we manage your entire social media presence using AI tools for timing, engagement insights, and content testing while our team ensures your brand maintains its unique voice.",
    image: {
      src: "https://images.unsplash.com/photo-1746014601017-4e515ef51722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYSUyMHN0YXRzJTIwfGVufDB8fHx8MTc1NTc4NjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Social Media Management",
      hint: "social media manager"
    }
  },
  {
    title: "Lead Generation & Sales Acceleration",
    description: "Attract the right people, close them faster. Supercharge your pipeline with AI-driven lead scoring, nurturing, and conversion processes. Attract better prospects, increase sales, and reduce acquisition costs with targeted precision.",
    image: {
      src: "https://images.unsplash.com/photo-1667670153647-9edb9a3c6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjdXN0b21lciUyMGxpc3QlMjBvbiUyMHNjcmVlbnxlbnwwfHx8fDE3NTU3ODY4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Lead Generation",
      hint: "lead generation"
    }
  },
  {
    title: "Customer Support Automation (Chat & Call)",
    description: "Support that's smart, fast, and always available. Deliver 24/7 customer assistance with AI chatbots and voice solutions, ensuring fast, helpful service—before and after the sale. Enhance user experience while containing support costs.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fHx8MTc1NTc4NzI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Customer Support Automation",
      hint: "customer support"
    }
  },
  {
    title: "Internal Process Automation",
    description: "Simplify operations and scale without stress. We automate your repetitive backend tasks like reporting, approvals, team communication, and document flows — making your internal processes faster, error-free, and easier to manage.",
    image: {
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcm9jZXNzJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTU3ODgwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Internal Process Automation",
      hint: "workflow automation"
    }
  },
  {
    title: "Employee & Team Efficiency Boosters",
    description: "Help your team do more in less time intelligently. Using AI tools, task prioritizers, performance dashboards, and suggestion engines, we empower your employees to focus on high-impact work and improve overall productivity.",
    image: {
        src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHdvcmtpbmd8ZW58MHx8fHwxNzU1Nzg4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Team Efficiency",
        hint: "team collaboration"
    }
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F1F5F9] to-[#E2E8F0]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>Everything You Need to Scale — Powered by AI & Experts</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600" style={{ lineHeight: 1.6 }}>
            Our comprehensive AI-powered services combine cutting-edge artificial intelligence with the expertise of our smart team to help your business thrive at every stage. From actionable executive insights to automated marketing, sales, and customer support, we deliver confidence, efficiency, and measurable results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <Card key={index} className="flex flex-col bg-white/80 backdrop-blur-sm border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] overflow-hidden group">
                {service.image && (
                    <div className="overflow-hidden">
                        <Image 
                            src={service.image.src}
                            alt={service.image.alt}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={service.image.hint}
                        />
                    </div>
                )}
              <CardHeader>
                <CardTitle className="flex items-start gap-4 text-xl font-semibold">
                  <span className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </span>
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-slate-600" style={{ lineHeight: 1.6 }}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

    