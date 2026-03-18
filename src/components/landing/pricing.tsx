
import { Check, X, TrendingUp, Bot, Workflow, BarChart, Settings, Rocket, Briefcase, HeartHandshake, Zap, Users, Monitor, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹599',
    priceSuffix: '/month',
    description: 'Ideal for small startups and solopreneurs.',
    cta: 'Get Started',
    ctaLink: '/contact-us',
    ctaVariant: 'secondary' as const,
    popular: false,
    features: [
      { text: 'AI Insights for Founder/Management', value: 'Basic Analytics', included: true, icon: <BarChart className="w-5 h-5" />, tooltip: 'Core business metrics dashboard.' },
      { text: 'CRM Solutions', value: 'Included', included: true, icon: <Users className="w-5 h-5" />, tooltip: 'Basic CRM integration.' },
      { text: 'Task Automation', value: 'Basic Workflow Automation', included: true, icon: <Workflow className="w-5 h-5" />, tooltip: 'Automate up to 5 simple tasks.' },
      { text: 'AI Assistants (Customer Support + Lead Capturing)', value: 'Basic Chatbot', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'Standard FAQ and lead capture bot.' },
      { text: 'Lead Automation', value: '100 leads/month', included: true, icon: <TrendingUp className="w-5 h-5" />, tooltip: 'Automate nurturing for up to 100 leads per month.' },
      { text: 'Lead Capture (Website, WhatsApp, Reels)', value: 'Basic Capture', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'Capture leads from your website.' },
      { text: 'Dedicated Support & Maintenance', value: 'Priority Support', included: true, icon: <HeartHandshake className="w-5 h-5" />, tooltip: 'Email and chat support.' },
    ],
  },
  {
    name: 'Growth',
    price: '₹5,999',
    priceSuffix: '/month',
    description: 'Designed for scaling businesses ready to accelerate growth.',
    cta: 'Upgrade to Growth',
    ctaLink: '/contact-us',
    ctaVariant: 'default' as const,
    popular: true,
    features: [
      { text: 'AI Insights for Founder/Management', value: 'Advanced Analytics', included: true, icon: <BarChart className="w-5 h-5" />, tooltip: 'Predictive analytics and trend analysis.' },
      { text: 'CRM Solutions', value: 'Full CRM', included: true, icon: <Users className="w-5 h-5" />, tooltip: 'Advanced CRM with custom fields and workflows.' },
      { text: 'Task Automation', value: 'Advanced Task Automation', included: true, icon: <Workflow className="w-5 h-5" />, tooltip: 'Automate complex, multi-step tasks.' },
      { text: 'Employee Insights', value: 'Basic Analytics', included: true, icon: <Users className="w-5 h-5" />, tooltip: 'Team performance and productivity tracking.' },
      { text: 'AI Assistants (Customer Support + Lead Capturing)', value: 'Full Chatbot', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'Customizable chatbot with advanced logic.' },
      { text: 'Website Creation/Management/Automation', value: 'Basic Site', included: true, icon: <Monitor className="w-5 h-5" />, tooltip: 'Includes a 5-page website with basic management.' },
      { text: 'Sales Automation & Chatbots', value: 'Basic Sales Bot', included: true, icon: <Rocket className="w-5 h-5" />, tooltip: 'Automate initial sales outreach and qualification.' },
      { text: 'Pre/Post Sales AI Assistance', value: 'Basic AI Support', included: true, icon: <HeartHandshake className="w-5 h-5" />, tooltip: 'AI assistance for common pre and post-sales questions.' },
      { text: 'Lead Automation', value: '500 leads/month', included: true, icon: <TrendingUp className="w-5 h-5" />, tooltip: 'Automate nurturing for up to 500 leads per month.' },
      { text: 'Lead Capture (Website, WhatsApp, Reels)', value: 'Advanced Capture', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'Capture leads from website, WhatsApp, and social media reels.' },
      { text: 'Dedicated Support & Maintenance', value: 'Priority Support', included: true, icon: <HeartHandshake className="w-5 h-5" />, tooltip: 'Priority email and chat support.' },
    ],
  },
  {
    name: 'Custom',
    price: 'Custom',
    priceSuffix: 'from ₹30,000/month',
    description: 'Tailored, enterprise-level AI solutions for maximum impact.',
    cta: 'Contact Sales',
    ctaLink: '/contact-us',
    ctaVariant: 'outline' as const,
    popular: false,
    features: [
        { text: 'AI Insights for Founder/Management', value: 'Enterprise Analytics', included: true, icon: <BarChart className="w-5 h-5" />, tooltip: 'Custom reports and dedicated analyst.' },
        { text: 'CRM Solutions', value: 'Enterprise CRM', included: true, icon: <Users className="w-5 h-5" />, tooltip: 'Fully customized CRM with API access.' },
        { text: 'Task Automation', value: 'Full Workflow Automation', included: true, icon: <Workflow className="w-5 h-5" />, tooltip: 'End-to-end automation of all business processes.' },
        { text: 'Employee Insights', value: 'Advanced Analytics', included: true, icon: <Users className="w-5 h-5" />, tooltip: 'In-depth employee performance and engagement analytics.' },
        { text: 'Internal Process Automation', value: 'Full Automation', included: true, icon: <Settings className="w-5 h-5" />, tooltip: 'Complete automation of internal company processes.' },
        { text: 'AI Assistants (Customer Support + Lead Capturing)', value: 'Enterprise Chatbot', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'AI-powered chatbot with full customization and integrations.' },
        { text: 'Website Creation/Management/Automation', value: 'Full Site Management', included: true, icon: <Monitor className="w-5 h-5" />, tooltip: 'Full website design, development, and ongoing management.' },
        { text: 'Sales Automation & Chatbots', value: 'Enterprise Sales Automation', included: true, icon: <Rocket className="w-5 h-5" />, tooltip: 'Full-funnel sales automation and AI-powered chatbots.' },
        { text: 'Pre/Post Sales AI Assistance', value: 'Full AI Support', included: true, icon: <HeartHandshake className="w-5 h-5" />, tooltip: 'Dedicated AI support across the entire customer lifecycle.' },
        { text: 'Employee & Team Efficiency Tools', value: 'Advanced Efficiency Tools', included: true, icon: <Zap className="w-5 h-5" />, tooltip: 'Suite of tools to maximize team productivity.' },
        { text: 'Lead Automation', value: 'Unlimited Leads', included: true, icon: <TrendingUp className="w-5 h-5" />, tooltip: 'Unlimited lead nurturing and automation.' },
        { text: 'Lead Capture (Website, WhatsApp, Reels)', value: 'Enterprise Capture', included: true, icon: <Bot className="w-5 h-5" />, tooltip: 'Comprehensive lead capture across all digital channels.' },
        { text: 'Dedicated Support & Maintenance', value: '24/7 SLA Support', included: true, icon: <HeartHandshake className="w-5 h-5" />, tooltip: '24/7 dedicated support with a Service Level Agreement.' },
    ],
  },
];

const allFeatures = [
    'AI Insights for Founder/Management',
    'CRM Solutions',
    'Task Automation',
    'Employee Insights',
    'Internal Process Automation',
    'AI Assistants (Customer Support + Lead Capturing)',
    'Website Creation/Management/Automation',
    'Sales Automation & Chatbots',
    'Pre/Post Sales AI Assistance',
    'Employee & Team Efficiency Tools',
    'Lead Automation',
    'Lead Capture (Website, WhatsApp, Reels)',
    'Dedicated Support & Maintenance',
];


export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ letterSpacing: '-0.025em' }}>
            Choose Your Premium AI Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Select the perfect plan to accelerate your business growth with AI.
          </p>
        </div>
        <TooltipProvider>
            {/* Desktop View */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4 items-end">
                <div className="pt-24">
                    <h3 className="text-lg font-bold mb-4">Features</h3>
                    <ul className="space-y-4">
                        {allFeatures.map(feature => (
                            <li key={feature} className="text-sm h-12 flex items-center text-slate-700 font-medium">{feature}</li>
                        ))}
                    </ul>
                </div>
                {pricingPlans.map((plan, index) => (
                    <Card
                        key={index}
                        className={cn(
                        'relative flex flex-col rounded-2xl shadow-lg transition-all duration-300',
                        plan.popular ? 'border-2 border-primary -translate-y-4' : 'border'
                        )}
                    >
                        {plan.popular && (
                        <Badge
                            className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-semibold px-4 py-1"
                        >
                            Most Popular
                        </Badge>
                        )}
                        <CardHeader className="text-center pt-10">
                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                         <div className="text-center pt-2">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-base text-gray-600">{plan.priceSuffix}</span>
                        </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col p-6 pt-0">
                            <Button
                                asChild
                                size="lg"
                                className={cn('w-full font-semibold transition-transform hover:-translate-y-0.5 active:scale-95 mb-8')}
                                variant={plan.ctaVariant}
                            >
                                <Link href={plan.ctaLink}>{plan.cta}</Link>
                            </Button>
                            <ul className="space-y-4">
                                {allFeatures.map(featureName => {
                                    const feature = plan.features.find(f => f.text === featureName);
                                    return (
                                        <li key={featureName} className="flex items-center justify-center text-center gap-3 text-sm h-12">
                                            {feature && feature.included ? (
                                                <>
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <span className="text-slate-800 font-semibold cursor-help border-b border-dashed border-gray-400">
                                                                {feature.value}
                                                            </span>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{feature.tooltip}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </>
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-6 px-6">
                <div className="inline-flex space-x-6">
                    {pricingPlans.map((plan, index) => (
                    <div key={index} className="w-[85vw] max-w-[320px] flex-shrink-0 mt-8">
                        <Card
                            className={cn(
                            'relative flex flex-col rounded-2xl shadow-lg h-full text-left',
                            plan.popular ? 'border-2 border-primary' : 'border'
                            )}
                        >
                            {plan.popular && (
                            <Badge
                                className="absolute -top-4 left-6 bg-primary text-primary-foreground font-semibold px-4 py-1"
                            >
                                Most Popular
                            </Badge>
                            )}
                            <CardHeader className="pt-10 text-left">
                                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col p-6 pt-0">
                                <div className="mb-8">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-base text-gray-600">{plan.priceSuffix}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, fIndex) => (
                                    feature.included && (
                                        <li key={fIndex} className="flex items-start gap-3 text-sm">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-slate-700">{feature.text}</span>
                                                <div className="font-semibold text-slate-800">
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <span className="cursor-help border-b border-dashed border-gray-400">
                                                            {feature.value}
                                                        </span>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{feature.tooltip}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    size="lg"
                                    className={cn('w-full font-semibold transition-transform hover:-translate-y-0.5 active:scale-95 mt-auto')}
                                    variant={plan.ctaVariant}
                                >
                                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>

        </TooltipProvider>
      </div>
    </section>
  );
}
