
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "What is InExtel and what does it offer?",
      answer: "InExtel provides cutting-edge AI solutions tailored for businesses, startups, and solopreneurs. Our services range from ready-made AI tools for automating leads, sales, and employee insights to fully customized AI strategies designed specifically for your unique business challenges."
    },
    {
      question: "How does the Custom AI Solution work?",
      answer: "Our Custom AI Solution begins with a paid virtual session where we analyze your company’s specific needs. We create a personalized AI strategy, recommend tools, pricing, and maintenance plans. You can accept the proposal and proceed or cancel and receive a full refund of the paid amount."
    },
    {
      question: "How much does a Custom AI Solution cost, and is the fee refundable?",
      answer: "The initial fee is ₹5,000, fully refundable whether you proceed or not. It covers a comprehensive virtual analysis session where we understand your business and recommend the most effective AI solutions."
    },
    {
      question: "What industries benefit most from InExtel’s services?",
      answer: "Industries like e-commerce, real estate, manufacturing, healthcare, and professional services benefit most. Businesses that want to automate lead generation, sales, task management, and internal processes gain the fastest ROI."
    },
    {
      question: "Do I need technical expertise to use your AI solutions?",
      answer: "Absolutely not. Our solutions are designed for ease of use, with full support and setup handled by our team. You focus on business growth, while we manage the tech part."
    },
    {
      question: "How secure is the data handled by InExtel?",
      answer: "We follow the highest security standards, including strict Firebase rules and secure API integrations. Your data is never exposed publicly and is always protected under secure authentication and access rules."
    },
    {
      question: "Is support provided after I purchase your services?",
      answer: "Yes, we offer ongoing support and maintenance. We ensure your AI solutions run smoothly and provide regular updates as needed, so you stay ahead with the latest technology."
    }
  ];
  
  export function Faq() {
    return (
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight" style={{ letterSpacing: '-0.025em' }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Find answers to common questions about our services.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-600" style={{ lineHeight: 1.6 }}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }
