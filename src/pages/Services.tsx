import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { 
  Share2, 
  Search, 
  MousePointer, 
  PenTool, 
  Mail, 
  BarChart3,
  Smartphone,
  Video
} from "lucide-react";

const services = [
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
    pricing: "Starting at $599/month",
    color: "primary"
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
    color: "secondary"
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
    color: "accent"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engaging content that tells your story and converts visitors into loyal customers.",
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
    color: "primary"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive repeat business.",
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
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and reporting to measure success and optimize performance.",
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
    color: "accent"
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Mobile-first strategies including app store optimization and mobile advertising.",
    features: [
      "App Store Optimization (ASO)",
      "Mobile-First Website Design",
      "SMS Marketing Campaigns",
      "Push Notification Strategy",
      "Mobile Ad Campaigns",
      "Location-Based Marketing",
      "Mobile Analytics Tracking",
      "App Marketing Strategy"
    ],
    pricing: "Starting at $799/month",
    color: "primary"
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Professional video content creation and marketing across YouTube and social platforms.",
    features: [
      "Video Production Planning",
      "YouTube Channel Optimization",
      "Video SEO & Optimization",
      "Social Media Video Ads",
      "Live Streaming Setup",
      "Video Analytics Tracking",
      "Thumbnail Design",
      "Video Content Strategy"
    ],
    pricing: "Starting at $999/month",
    color: "secondary"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Complete Digital Marketing
            <span className="tech-gradient bg-clip-text text-transparent"> Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From strategy to execution, we provide end-to-end digital marketing services 
            that drive real business growth. Choose from our comprehensive service offerings 
            or create a custom package tailored to your needs.
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-gradient border-border/50 hover-lift group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:shadow-glow-${service.color} transition-all duration-300`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className={`text-lg font-semibold text-${service.color}`}>
                    {service.pricing}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 text-${service.color} mr-3 mt-0.5 flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/consultation">Get Started</Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/quote">Custom Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a custom strategy tailored to your business goals and start seeing results in weeks, not months.
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