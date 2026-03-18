
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, TrendingUp, BarChart } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Proven Results",
        description: "Companies leveraging AI services see up to 30% efficiency gains in the first year. Our clients rapidly eliminate bottlenecks and save time."
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Productivity Boost",
        description: "AI adopters report an average 20% boost in productivity across tasks – more output with the same team."
    },
    {
        icon: <BarChart className="h-8 w-8" />,
        title: "Real ROI Impact",
        description: "Focused AI initiatives can yield 2× higher ROI for leading firms compared to others. We make sure you’re on the winning side of that equation."
    }
];

export function ValueProposition() {
    return (
        <section id="value-proposition" className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-6 max-w-6xl">
                

                <div>
                    <h3 className="text-3xl font-bold text-center mb-10">
                        Why Trust Us?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="bg-[#EFEAF8] backdrop-blur-sm border-slate-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] text-center">
                                <CardHeader className="flex flex-col items-center">
                                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                        {benefit.icon}
                                    </div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600" style={{ lineHeight: 1.6 }}>
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-primary to-indigo-500">
                        <Link href="/contact-us">Book a Free AI Consultation</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
