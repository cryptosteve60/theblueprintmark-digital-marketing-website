
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$799",
    period: "/month",
    description: "AI-assisted digital marketing for small businesses ready to stop guessing and start tracking",
    badge: "Most Popular",
    badgeColor: "accent",
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Optimization",
      "Monthly Analytics Report",
      "Email Marketing Setup",
      "AI Chatbot Setup",
      "Content Calendar",
      "Community Management",
      "Monthly Strategy Call"
    ],
    cta: "Start Growing",
    variant: "outline"
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description: "Full digital marketing stack plus AI automation — built for businesses scaling past $500K/yr",
    badge: "Best Value",
    badgeColor: "primary",
    features: [
      "Social Media Management (All platforms)",
      "Advanced SEO & Local SEO",
      "Weekly Analytics Reports",
      "Email Marketing Automation",
      "AI Workflow Automation (3 workflows)",
      "Content Creation (8 posts/week)",
      "PPC Campaign Management",
      "AI Chatbot & Lead Capture",
      "Conversion Rate Optimization",
      "Priority Support",
      "Bi-weekly Strategy Calls"
    ],
    cta: "Scale with AI",
    variant: "hero"
  },
  {
    name: "Enterprise",
    price: "$3,499",
    period: "/month",
    description: "End-to-end AI automation, omnichannel marketing, and a dedicated consultant on your team",
    badge: "Full Stack",
    badgeColor: "secondary",
    features: [
      "Full AI Automation Suite",
      "Dedicated AI Consultant",
      "Multi-Brand Management",
      "Advanced SEO & Technical SEO",
      "Daily Analytics & Custom Dashboards",
      "Advanced Marketing Automation",
      "Content Creation (20+ posts/week)",
      "Multi-Platform PPC Management",
      "Custom AI Agent Development",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White-Label Reporting",
      "Weekly Strategy Sessions"
    ],
    cta: "Dominate Your Market",
    variant: "tech"
  }
];

const additionalServices = [
  { service: "AI Readiness Audit", price: "$999" },
  { service: "Custom AI Agent Development", price: "From $2,499" },
  { service: "Website Design & Development", price: "From $2,999" },
  { service: "Brand Identity & Logo Design", price: "From $899" },
  { service: "AI Strategy Workshop (half-day)", price: "$1,499" },
  { service: "SEO Audit & Strategy", price: "From $499" },
  { service: "Marketing Consultation", price: "$249 / hr" },
  { service: "AI Consulting Retainer", price: "$999 / mo" }
];

const comparisonFeatures = [
  { feature: "Social Media Platforms", starter: "2", professional: "All", enterprise: "All + Multi-Brand" },
  { feature: "Content Posts per Week", starter: "3-5", professional: "8", enterprise: "20+" },
  { feature: "AI Workflow Automations", starter: "Chatbot only", professional: "3 workflows", enterprise: "Unlimited + Custom Agents" },
  { feature: "SEO Keywords Tracked", starter: "25", professional: "100", enterprise: "Unlimited" },
  { feature: "Email Campaigns per Month", starter: "2", professional: "8", enterprise: "Unlimited" },
  { feature: "Monthly Reports", starter: "1", professional: "4", enterprise: "Custom Dashboards" },
  { feature: "Strategy Calls", starter: "Monthly", professional: "Bi-weekly", enterprise: "Weekly" },
  { feature: "Account Manager", starter: "Shared", professional: "Shared", enterprise: "Dedicated" },
  { feature: "Support Level", starter: "Email", professional: "Email + Chat", enterprise: "24/7 Priority" }
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Choose Your
            <span className="tech-gradient bg-clip-text text-transparent"> Growth Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No hidden fees, no long-term contracts. Just clear pricing for AI-powered marketing services.
            Start with a plan that fits your needs and scale as you grow.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/consultation">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
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

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Plan Comparison</h2>
            <Card className="card-gradient border-border/50">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-4 font-semibold">Features</th>
                        <th className="text-center p-4 font-semibold">Starter</th>
                        <th className="text-center p-4 font-semibold">Professional</th>
                        <th className="text-center p-4 font-semibold">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((row, index) => (
                        <tr key={index} className="border-b border-border/30">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.starter}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.professional}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Need a custom package? Let's discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/quote">Get Custom Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/consultation">Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-2">Can I switch plans anytime?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </Card>
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-2">Is there a setup fee?</h3>
              <p className="text-muted-foreground">No setup fees! We include all onboarding and setup as part of your monthly plan.</p>
            </Card>
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-2">What's included in the free consultation?</h3>
              <p className="text-muted-foreground">A comprehensive business analysis, custom strategy recommendations, competitive analysis, and ROI projections - all completely free.</p>
            </Card>
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-2">Do you offer month-to-month contracts?</h3>
              <p className="text-muted-foreground">Yes! All our plans are month-to-month with no long-term commitments required.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
