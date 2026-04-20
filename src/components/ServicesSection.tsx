import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BrainCircuit,
  Share2,
  Search,
  MousePointer,
  PenTool,
  Mail,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "End-to-end workflow automation powered by AI — eliminate manual work and scale operations effortlessly.",
    features: ["Workflow Automation", "AI Chatbots & Agents", "CRM Automation", "Lead Nurturing Flows"],
    color: "primary"
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting",
    description: "Expert strategic guidance to identify, implement, and maximize AI opportunities across your business.",
    features: ["AI Readiness Audit", "Tool Stack Advisory", "Custom AI Strategy", "Team AI Training"],
    color: "secondary"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across all platforms.",
    features: ["Content Calendar", "Daily Posting", "Community Engagement", "Analytics & Reporting"],
    color: "accent"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost visibility with comprehensive SEO strategies that drive organic traffic and rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
    color: "primary"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description: "Targeted PPC campaigns across Google, Facebook, and more for immediate, measurable results.",
    features: ["Campaign Setup", "Ad Creative", "Bid Management", "Conversion Tracking"],
    color: "secondary"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "AI-assisted content that tells your story and converts visitors into loyal customers.",
    features: ["Blog Writing", "Video Scripts", "Infographics", "E-books"],
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive repeat business at scale.",
    features: ["Campaign Design", "Automation Setup", "List Management", "A/B Testing"],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive AI-powered tracking and reporting to measure success and optimize performance.",
    features: ["Custom Dashboards", "Monthly Reports", "ROI Analysis", "Strategy Optimization"],
    color: "secondary"
  }
];

const colorMap: Record<string, { bg: string; text: string; glow: string; dot: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", glow: "group-hover:shadow-glow-primary", dot: "bg-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", glow: "group-hover:shadow-glow-secondary", dot: "bg-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent", glow: "group-hover:shadow-glow-accent", dot: "bg-accent" },
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Marketing &
            <span className="tech-gradient bg-clip-text text-transparent"> Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI automation to full-funnel digital marketing, we deliver integrated solutions
            that drive real, measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const c = colorMap[service.color] ?? colorMap.primary;
            return (
              <Card key={index} className="card-gradient border-border/50 hover-lift group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${c.bg} flex items-center justify-center mb-4 ${c.glow} transition-all duration-300`}>
                    <service.icon className={`h-6 w-6 ${c.text}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
