import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    features: ["Content Calendar", "Daily Posting", "Community Engagement", "Analytics & Reporting"],
    color: "primary"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your visibility with comprehensive SEO strategies that drive organic traffic and rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
    color: "secondary"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description: "Targeted PPC campaigns across Google Ads, Facebook, and other platforms for immediate results.",
    features: ["Campaign Setup", "Ad Creation", "Bid Management", "Conversion Tracking"],
    color: "accent"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Engaging content that tells your story and converts visitors into loyal customers.",
    features: ["Blog Writing", "Video Scripts", "Infographics", "E-books"],
    color: "primary"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive repeat business.",
    features: ["Campaign Design", "Automation Setup", "List Management", "A/B Testing"],
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking and reporting to measure success and optimize performance.",
    features: ["Custom Dashboards", "Monthly Reports", "ROI Analysis", "Strategy Optimization"],
    color: "accent"
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description: "Mobile-first strategies including app store optimization and mobile advertising.",
    features: ["App Store SEO", "Mobile Ads", "SMS Marketing", "Push Notifications"],
    color: "primary"
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Professional video content creation and marketing across YouTube and social platforms.",
    features: ["Video Production", "YouTube SEO", "Video Ads", "Live Streaming"],
    color: "secondary"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital Marketing
            <span className="tech-gradient bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we provide end-to-end digital marketing services 
            that drive real business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-border/50 hover-lift group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:shadow-glow-${service.color} transition-all duration-300`}>
                  <service.icon className={`h-6 w-6 text-${service.color}`} />
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
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;