
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, BrainCircuit, Target, Bot, Zap, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const premiumServiceCategories = [
    {
      category: "AI Insights & Analytics",
      services: [
        {
          title: "AI Insights for Founders & Management",
          description: "Data-driven dashboards to track growth, performance, and risks.",
          benefits: [
            "25% faster decision-making",
            "Spot Problems Early",
            "Stay Ahead of Competitors",
            "Reduce Business Costs"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8bGFwdG9wJTIwc2NyZWVuJTIwcGVyZm9ybWFuY2UlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzU1Nzg1MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          aiHint: "analytics dashboard"
        },
        {
            title: "AI Assistant for Insights",
            description: "Conversational AI to get company, team, or project insights on demand.",
            benefits: ["Instant answers, zero reports.", "Your On-Demand Business Analyst", "Chat with Your Company's Data", "Smart Answers for Smarter Decisions"],
            image: "https://images.unsplash.com/photo-1549492423-400259a5e319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjaGF0JTIwYm90fGVufDB8fHx8MTc1Njk3OTk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "AI assistant"
        },
        {
            title: "Employee & Team Efficiency Boosters",
            description: "AI analytics on team performance, productivity trends and tools to optimize workflows and focus.",
            benefits: [
                "Increases output by 20%",
                "Boosts team efficiency",
                "Identify and Grow Your Top Performers",
                "Unlock Your Team's Full Potential",
            ],
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHdvcmtpbmd8ZW58MHx8fHwxNzU1Nzg4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "team collaboration"
        }
      ]
    },
    {
      category: "CRM & Lead Management",
      services: [
        {
            title: "AI-Enhanced CRM",
            description: "Smarter customer management with predictive insights.",
            benefits: [
                "Improves client retention.",
                "Stop Losing Customers with Predictive Insights",
                "Boost Sales Productivity, Not Just Data Entry",
                "Turn Customer Data into More Sales"
            ],
            image: "https://images.unsplash.com/photo-1667670153647-9edb9a3c6721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjdXN0b21lciUyMGxpc3QlMjBvbiUyMHNjcmVlbnxlbnwwfHx8fDE3NTU3ODY4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            aiHint: "CRM dashboard"
        },
        {
          title: "Lead Automation",
          description: "Automated lead generation, nurturing, and scoring.",
          benefits: [
            "40% increase in qualified leads.",
            "Stop Chasing Leads and Start Closing Deals",
            "Turn More Prospects into Customers, Faster",
            "Automate Your Growth, Never Miss a Lead"
          ],
          image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          aiHint: "lead funnel"
        },
        {
            title: "Lead Capture (Website & WhatsApp)",
            description: "AI tools to capture and qualify leads from multiple channels.",
            benefits: ["Never miss a lead.", "24/7 Lead Capture for Web and WhatsApp", "Engage and Capture Leads Instantly", "Seamless Lead Capture Across All Your Channels"],
            image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9Eby1wYWdlfHx8fGVufDB8fHx8fA%.3D%3D",
            aiHint: "social media"
        },
      ]
    },
    {
        category: "AI Assistants & Bots",
        services: [
            {
                title: "AI Customer Support Assistant",
                description: "24/7 automated support chatbots for instant query resolution.",
                benefits: ["Reduces support tickets by 50%.", "Resolve Customer Issues Faster", "Instant Answers for Happier Customers", "Offer 24/7 Support, Instantly"],
                image: "https://images.unsplash.com/photo-1558126319-c45ecbf4a438?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                aiHint: "support chatbot"
            },
            {
                title: "Sales Automation Chat Bot",
                description: "AI-powered bots to engage prospects and drive sales.",
                benefits: ["2x more conversions.", "Turn Conversations into Customers, Automatically", "Close More Deals with Your AI Sales Bot", "Engage Every Prospect, Drive More Conversions"],
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                aiHint: "sales bot"
            },
            {
                title: "Before & After Sales Support AI",
                description: "Dedicated AI support for pre-sales questions and post-purchase care.",
                benefits: ["Boosts customer satisfaction.", "Guide, Sell, and Support with One Smart AI", "Answer Questions Before the Sale, Offer Care After", "A Complete Support Experience for Every Customer"],
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y3VzdG9tZXIlMjBzdXBwb3J0fGVufDB8fHx8MTc1NTc4NzI5OHww&ixlib=rb-4.1.0&q=80&w=1080",
                aiHint: "customer support"
            },
        ]
    },
    {
        category: "Task & Process Automation",
        services: [
            {
                title: "AI-Powered Task Automation",
                description: "Automate repetitive tasks and streamline your workflows.",
                benefits: ["Frees up 10+ hours/week.", "Streamline Your Workflows, Boost Your Productivity", "Do More of What Matters, Less of What Doesn't", "Stop Doing Busy Work, Start Making an Impact"],
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                aiHint: "task automation"
            },
            {
                title: "Internal Process Automation",
                description: "AI-driven automation for internal operations and approvals.",
                benefits: ["25% increase in efficiency.", "Make Your Internal Operations Run Themselves", "Accelerate Your Internal Workflows", "Run a More Efficient Business with Smart Automation"],
                image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                aiHint: "process automation"
            },
        ]
    },
    {
        category: "Website Tools",
        services: [
            {
                title: "Website Creation & Management",
                description: "AI-assisted website building, management, and optimization.",
                benefits: ["Launch a stunning site in days.", "Get a High-Performing Website, Without the Hassle", "Go From Idea to Live Website", "lifetime maintenance"],
                image: "https://images.unsplash.com/photo-1558174685-430919a96c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8d2Vic2l0ZXxlbnwwfHx8fDE3NTU3ODU1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                aiHint: "website design"
            },
        ]
    }
  ];
  
  export function PremiumServices() {
    return (
      <section id="premium-services" className="pt-10 pb-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>Our Premium AI Solutions for Business Growth</h2>
          </div>
          
          {premiumServiceCategories.map((category, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-slate-800">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="flex flex-col bg-card backdrop-blur-sm border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] overflow-hidden group">
                    <div className="relative overflow-hidden">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={service.aiHint}
                        />
                    </div>
                    <CardHeader>
                      <CardTitle className="tracking-tight text-xl font-semibold text-slate-800">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                        <div>
                          <p className="text-slate-600 mb-4" style={{ lineHeight: 1.6 }}>{service.description}</p>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center gap-2 text-green-600 font-semibold">
                                    <Check className="h-5 w-5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                          </div>
                        </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
    
    
