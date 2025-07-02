import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, DollarSign, Calendar, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    client: "TechStart Solutions",
    industry: "SaaS Technology",
    challenge: "New B2B SaaS company struggling to generate qualified leads and establish market presence",
    duration: "6 months",
    services: ["SEO", "PPC", "Content Marketing", "LinkedIn Marketing"],
    results: {
      leadIncrease: "340%",
      trafficGrowth: "220%",
      conversionRate: "15.2%",
      roi: "450%"
    },
    description: "A comprehensive digital transformation that took TechStart from zero to industry leader",
    image: "tech-saas",
    testimonial: "NovaMark transformed our entire digital presence. We went from 10 leads per month to over 150 qualified prospects.",
    testimonialAuthor: "Sarah Chen, CEO"
  },
  {
    client: "GreenLife Wellness",
    industry: "Health & Wellness",
    challenge: "Local wellness center wanting to expand online reach and compete with national chains",
    duration: "4 months",
    services: ["Local SEO", "Social Media", "Google Ads", "Email Marketing"],
    results: {
      leadIncrease: "275%",
      trafficGrowth: "180%",
      conversionRate: "12.8%",
      roi: "320%"
    },
    description: "Helped a local wellness center dominate their market and expand to multiple locations",
    image: "wellness",
    testimonial: "Our online bookings increased by 300% and we're now the top-rated wellness center in our city.",
    testimonialAuthor: "Dr. Michael Rodriguez, Founder"
  },
  {
    client: "Elite E-commerce",
    industry: "Retail Fashion",
    challenge: "Online fashion retailer facing declining sales and high customer acquisition costs",
    duration: "8 months",
    services: ["E-commerce SEO", "Facebook Ads", "Instagram Marketing", "Email Automation"],
    results: {
      leadIncrease: "190%",
      trafficGrowth: "160%",
      conversionRate: "8.4%",
      roi: "280%"
    },
    description: "Revitalized a struggling fashion brand and turned them into a profitable online retailer",
    image: "fashion",
    testimonial: "We were on the verge of closing down. Now we're profitable and expanding internationally.",
    testimonialAuthor: "Emma Thompson, Owner"
  },
  {
    client: "ProBuild Construction",
    industry: "Construction",
    challenge: "Traditional construction company needing to modernize their marketing and attract commercial clients",
    duration: "10 months",
    services: ["Website Redesign", "SEO", "Local Marketing", "LinkedIn Advertising"],
    results: {
      leadIncrease: "420%",
      trafficGrowth: "250%",
      conversionRate: "18.6%",
      roi: "380%"
    },
    description: "Modernized a traditional construction company's marketing and secured major commercial contracts",
    image: "construction",
    testimonial: "We landed three major commercial contracts worth over $2M thanks to our improved online presence.",
    testimonialAuthor: "James Wilson, Managing Director"
  },
  {
    client: "FoodieDelight Restaurants",
    industry: "Food & Beverage",
    challenge: "Restaurant chain struggling with online orders and delivery service visibility",
    duration: "5 months",
    services: ["Local SEO", "Social Media", "Google My Business", "Review Management"],
    results: {
      leadIncrease: "310%",
      trafficGrowth: "200%",
      conversionRate: "14.2%",
      roi: "290%"
    },
    description: "Boosted online visibility for a restaurant chain and dramatically increased delivery orders",
    image: "restaurant",
    testimonial: "Our delivery orders tripled and we're now the highest-rated restaurant group in our area.",
    testimonialAuthor: "Maria Garcia, Operations Manager"
  },
  {
    client: "LawFirm Partners",
    industry: "Legal Services",
    challenge: "Personal injury law firm wanting to compete with larger firms and increase case volume",
    duration: "7 months",
    services: ["Legal SEO", "PPC", "Content Marketing", "Reputation Management"],
    results: {
      leadIncrease: "260%",
      trafficGrowth: "140%",
      conversionRate: "22.1%",
      roi: "350%"
    },
    description: "Helped a small law firm compete with industry giants and significantly increase their case load",
    image: "legal",
    testimonial: "We're now handling more high-value cases than ever before and our firm has tripled in size.",
    testimonialAuthor: "David Kim, Senior Partner"
  }
];

const metrics = [
  { label: "Average ROI Increase", value: "340%", icon: TrendingUp },
  { label: "Clients Served", value: "500+", icon: Users },
  { label: "Revenue Generated", value: "$50M+", icon: DollarSign },
  { label: "Average Timeline", value: "6 months", icon: Calendar }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Success Stories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Real Results from
            <span className="tech-gradient bg-clip-text text-transparent"> Real Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how we've helped businesses across different industries achieve remarkable growth 
            through strategic digital marketing campaigns.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/consultation">
              Get Similar Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="card-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-glow-primary transition-all duration-300">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 hero-text-glow">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each case study represents months of strategic work and measurable results
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-gradient border-border/50 hover-lift overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-primary border-primary">
                        {study.industry}
                      </Badge>
                      <Badge variant="secondary">
                        {study.duration}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{study.client}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Services Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, idx) => (
                            <Badge key={idx} variant="outline">{service}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                      <p className="font-semibold text-primary">- {study.testimonialAuthor}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-muted/30">
                    <h4 className="font-semibold text-xl mb-6 text-center">Key Results</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{study.results.leadIncrease}</div>
                        <div className="text-sm text-muted-foreground">Lead Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">{study.results.trafficGrowth}</div>
                        <div className="text-sm text-muted-foreground">Traffic Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">{study.results.conversionRate}</div>
                        <div className="text-sm text-muted-foreground">Conversion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">{study.results.roi}</div>
                        <div className="text-sm text-muted-foreground">ROI Increase</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/consultation">Get Similar Results</Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            These results aren't accidents - they're the outcome of proven strategies, 
            dedicated execution, and continuous optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">Book Free Strategy Session</Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;