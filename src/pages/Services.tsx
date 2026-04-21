import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
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
    features: [
      "Business Workflow Automation",
      "AI Chatbot & Agent Development",
      "CRM & Sales Pipeline Automation",
      "Lead Nurturing & Follow-up Flows",
      "Document & Data Processing",
      "Integration with Existing Tools",
      "Custom Automation Buildouts",
      "Ongoing Monitoring & Optimization"
    ],
    pricing: "Starting at $799/month",
    color: "primary"
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting",
    description: "Strategic AI guidance to identify, implement, and maximize AI opportunities across your entire business.",
    features: [
      "AI Readiness Assessment",
      "Tool Stack Evaluation & Advisory",
      "Custom AI Roadmap Development",
      "Team AI Literacy Training",
      "AI Implementation Support",
      "Ongoing Strategic Advisory",
      "ROI Modeling for AI Initiatives",
      "Vendor & Platform Selection"
    ],
    pricing: "Starting at $999/month",
    color: "secondary"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete social media strategy, content creation, and community management across all platforms.",
    features: [
      "Content Calendar Development",
      "Daily Posting & Scheduling",
      "Community Engagement & Response",
      "Analytics & Performance Reporting",
      "Hashtag Strategy & Research",
      "Social Media Advertising Setup",
      "Influencer Collaboration",
      "Crisis Management Support"
    ],
    pricing: "Starting at $799/month",
    color: "accent"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your visibility with comprehensive SEO strategies that drive organic traffic and rankings.",
    features: [
      "Comprehensive Keyword Research",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Local SEO & Google My Business",
      "Link Building Strategies",
      "Content SEO Optimization",
      "Website Speed Optimization",
      "SEO Performance Tracking"
    ],
    pricing: "Starting at $799/month",
    color: "primary"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description: "Targeted PPC campaigns across Google Ads, Facebook, and other platforms for immediate results.",
    features: [
      "Google Ads Campaign Setup",
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "Ad Creative Development",
      "Bid Management & Optimization",
      "Conversion Tracking Setup",
      "A/B Testing Implementation",
      "ROI Analysis & Reporting"
    ],
    pricing: "Starting at $899/month + ad spend",
    color: "secondary"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "AI-assisted content that tells your story and converts visitors into loyal customers.",
    features: [
      "Content Strategy Development",
      "Blog Writing & SEO Articles",
      "Video Script Creation",
      "Infographic Design",
      "E-book & Guide Creation",
      "Email Newsletter Content",
      "Social Media Copy",
      "Content Performance Analysis"
    ],
    pricing: "Starting at $699/month",
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive repeat business at scale.",
    features: [
      "Email Campaign Design",
      "Marketing Automation Setup",
      "List Segmentation",
      "A/B Testing Campaigns",
      "Drip Campaign Creation",
      "Newsletter Management",
      "Email Template Design",
      "Performance Analytics"
    ],
    pricing: "Starting at $499/month",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "AI-powered tracking and reporting to measure success and continuously optimize performance.",
    features: [
      "Custom Dashboard Setup",
      "Google Analytics Configuration",
      "Conversion Tracking",
      "Monthly Performance Reports",
      "ROI Analysis & Insights",
      "Competitor Analysis",
      "Strategy Optimization",
      "Data Visualization"
    ],
    pricing: "Starting at $399/month",
    color: "secondary"
  }
];

const colorMap: Record<string, { bg: string; text: string; glow: string; icon: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", glow: "group-hover:shadow-glow-primary", icon: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", glow: "group-hover:shadow-glow-secondary", icon: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent", glow: "group-hover:shadow-glow-accent", icon: "text-accent" },
};

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            AI Automation, Marketing &
            <span className="tech-gradient bg-clip-text text-transparent"> Consulting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We combine cutting-edge AI automation, full-funnel digital marketing, and expert AI consulting
            to accelerate your business growth. Choose a service or build a custom package tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="tech" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const c = colorMap[service.color] ?? colorMap.primary;
              return (
                <Card key={index} className="card-gradient border-border/50 hover-lift group">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl ${c.bg} flex items-center justify-center mb-6 ${c.glow} transition-all duration-300`}>
                      <service.icon className={`h-8 w-8 ${c.icon}`} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      {service.description}
                    </CardDescription>
                    <div className={`text-lg font-semibold ${c.text}`}>
                      {service.pricing}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 ${c.icon} mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1" asChild>
                          <Link to="/consultation">Get Started</Link>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                          <Link to="/quote">Custom Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a custom strategy combining AI automation, digital marketing, and consulting — tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">Book Free Consultation</Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
