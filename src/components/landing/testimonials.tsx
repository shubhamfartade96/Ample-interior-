"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Brian Moten",
    title: "Co-Founder, Intellimax IT Solutions",
    quote: "InExtel's AI completely transformed our lead quality and sales funnel. We're closing 2x more deals without increasing our ad spend. It's like having an AI-powered sales team on autopilot.",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1755804485/WhatsApp_Image_2025-08-02_at_10.15.19_cc7007b7_nfjyqt.jpg"
  },
  {
    name: "Swati Jain",
    title: "VP and Sr. Systems Architect, TalentryQ",
    quote: "With InExtel's dashboards, I can now view team performance, campaign ROI, and company KPIs in one place. It's helped us make faster, smarter decisions at every level.",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1755804862/flux_dev_a_highresolution_portrait_of_a_professional_indian_wo_0-m6Lb051G97UeWkbp_bf92io.avif"
  },
  {
    name: "Dhruv Bansal",
    title: "Co-Founder, FunnelForm SaaS",
    quote: "With InExtel's dashboards, I can now view team performance, campaign ROI, and company KPIs in one place. It's helped us make faster, smarter decisions at every level.",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1755804862/generated-image-YleQV5bPNyTvVaLz_xwbmgr.avif"
  },
  {
    name: "Manan Bhagat",
    title: "Director, TechCoach India",
    quote: "We automated all pre- and post-sales calls using InExtel's voice AI flows. The result? Better lead nurturing, less manual calling, and a more focused sales team.",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1755804862/chatgpt-image-aug-2-2025-09_50_11-am-ALpPrbRO7PCDz1JA_eguqpw.avif"
  },
  {
    name: "Amit Kapoor",
    title: "CEO of NextGen Ventures",
    quote: "InExtel AI Insights save me hours every week. I ask for lead updates or team performance, and get instant, clear data. It’s boosted our conversions by 20% and keeps us focused on high-value deals!",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1756978423/Flux_Dev_A_realistic_image_of_a_South_Indian_man_in_his_mid30s_0_-_Copy_zk6smw.jpg"
  },
  {
    name: "Priya Verma",
    title: "Elegant Spaces",
    quote: "Insights streamline our projects. Instant team performance and overdue task reports have boosted our project completions by 25%. It’s like a trusted advisor for interior architects!",
    avatar: "https://res.cloudinary.com/dsgtunivo/image/upload/v1756978369/shubham_fartade_A_Pakistani-origin_female_designer_sitting_in_her_8345806e-8e16-4346-a40f-122bee37f7acrcrc9_sdzmlw.png"
  }
]

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnHover: true })
  )

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>Customer Reviews</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Discover what our clients think about our service</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between bg-white border-slate-200 shadow-lg rounded-2xl">
                    <CardContent className="p-8">
                      <p className="text-slate-600 italic text-lg" style={{ lineHeight: 1.6 }}>"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                           <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                           <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-slate-800">{testimonial.name}</p>
                          <p className="text-sm text-slate-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
