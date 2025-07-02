import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$599",
    period: "/month",
    description: "Perfect for small businesses just getting started with digital marketing",
    badge: "Most Popular",
    badgeColor: "accent",
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Optimization",
      "Monthly Analytics Report",
      "Email Marketing Setup",
      "Content Calendar",
      "Community Management",
      "Basic PPC Campaign Setup"
    ],
    cta: "Start Growing",
    variant: "outline"
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/month",
    description: "Comprehensive marketing solution for growing businesses",
    badge: "Best Value",
    badgeColor: "primary",
    features: [
      "Social Media Management (All platforms)",
      "Advanced SEO & Local SEO",
      "Weekly Analytics Reports",
      "Email Marketing Automation",
      "Content Creation (8 posts/week)",
      "PPC Campaign Management",
      "Video Marketing",
      "Conversion Rate Optimization",
      "24/7 Support"
    ],
    cta: "Scale Your Business",
    variant: "hero"
  },
  {
    name: "Enterprise",
    price: "$2,999",
    period: "/month",
    description: "Full-scale digital marketing for large businesses and enterprises",
    badge: "Premium",
    badgeColor: "secondary",
    features: [
      "Multi-Brand Management",
      "Advanced SEO & Technical SEO",
      "Daily Analytics & Custom Dashboards",
      "Advanced Marketing Automation",
      "Content Creation (20+ posts/week)",
      "Multi-Platform PPC Management",
      "Video Production & Marketing",
      "Mobile App Marketing",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White-Label Reporting"
    ],
    cta: "Dominate Your Market",
    variant: "tech"
  }
];

const additionalServices = [
  { service: "Website Design & Development", price: "$2,999 - $9,999" },
  { service: "E-commerce Setup & Optimization", price: "$1,999 - $4,999" },
  { service: "Brand Identity & Logo Design", price: "$899 - $2,499" },
  { service: "Photography & Video Production", price: "$599 - $2,999/day" },
  { service: "Marketing Consultation (per hour)", price: "$199/hour" },
  { service: "SEO Audit & Strategy", price: "$499 - $1,499" }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="tech-gradient bg-clip-text text-transparent"> Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no contracts. Just clear pricing for exceptional digital marketing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`card-gradient border-border/50 hover-lift relative ${index === 1 ? 'scale-105 border-primary/50' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`bg-${plan.badgeColor} text-${plan.badgeColor}-foreground`}>
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.variant as any} className="w-full text-lg py-6" asChild>
                  <Link to="/consultation">
                    {plan.cta}
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <Card key={index} className="card-gradient border-border/50 p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.service}</span>
                  <Badge variant="outline" className="text-primary border-primary">
                    {item.price}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Need a custom package? Let's discuss your specific requirements.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;