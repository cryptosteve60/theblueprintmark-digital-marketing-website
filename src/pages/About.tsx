import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Lightbulb,
  Heart,
  Bot,
  BrainCircuit,
} from "lucide-react";

const team = [
  {
    name: "Dwight Wilson",
    role: "Founder & CEO",
    experience: "12+ years",
    specialties: ["AI Strategy", "Digital Growth", "Team Leadership"],
    description: "Former Project Manager at a Fortune 500 company. Now leads BluePrintMark's mission to merge AI and marketing for scalable business growth."
  },
  {
    name: "Michael Rodriguez",
    role: "Head of AI Automation",
    experience: "10+ years",
    specialties: ["Workflow Automation", "AI Agent Development", "Systems Integration"],
    description: "Ex-Google engineer who specialized in large-scale automation. Leads our AI automation practice, building custom AI workflows and intelligent agents for clients."
  },
  {
    name: "Charles Henderson",
    role: "Creative & Content Director",
    experience: "8+ years",
    specialties: ["Brand Strategy", "AI-Assisted Content", "Social Media"],
    description: "Award-winning creative director with experience at global brands. Combines human storytelling with AI tools to produce content that converts."
  },
  {
    name: "David Kim",
    role: "Head of Paid Media & SEO",
    experience: "9+ years",
    specialties: ["PPC Management", "SEO Strategy", "Performance Marketing"],
    description: "Former Facebook and Google Ads specialist who has managed over $8M in ad spend. Drives measurable ROI across every paid and organic channel."
  }
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, every campaign, every automation is built around measurable outcomes — not vanity metrics."
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We treat your business as our own and build long-term partnerships."
  },
  {
    icon: Lightbulb,
    title: "AI-Forward Innovation",
    description: "We stay ahead of the AI curve to give your business a competitive edge no traditional agency can match."
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "No black boxes, no hidden fees. You'll always know exactly what we're doing and why."
  }
];

const achievements = [
  { metric: "100+", label: "Clients Served", icon: Users },
  { metric: "$8M+", label: "Revenue Generated", icon: TrendingUp },
  { metric: "340%", label: "Average ROI", icon: Target },
  { metric: "95%", label: "Client Retention", icon: Award },
  { metric: "2020", label: "Founded", icon: Calendar },
  { metric: "Remote", label: "Team Structure", icon: MapPin }
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            About BluePrintMark
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            AI Automation &
            <span className="tech-gradient bg-clip-text text-transparent"> Digital Marketing Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Founded in 2020, BluePrintMark is an AI-powered growth agency helping businesses automate
            operations, dominate digital channels, and navigate the AI landscape with confidence.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/consultation">
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="card-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-glow-primary transition-all duration-300">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1 hero-text-glow">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              From a digital marketing startup to an AI-powered growth agency
            </p>
          </div>

          <Card className="card-gradient border-border/50">
            <CardContent className="p-8 space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                BluePrintMark was founded in 2020 when our CEO, Dwight Wilson, saw a gap in the market —
                too many agencies were running the same playbook with diminishing returns. He built
                BluePrintMark on a different premise: data, creativity, and technology working together.
              </p>
              <p className="text-muted-foreground">
                Starting with digital marketing for local businesses, we quickly built a reputation for
                transparency and measurable results. As AI matured, we were early adopters — integrating
                automation and AI tools into our client workflows before it became mainstream.
              </p>
              <p className="text-muted-foreground">
                Today, BluePrintMark is a full-service AI growth agency. We help businesses automate
                repetitive workflows with AI, run performance digital marketing campaigns, and provide
                strategic AI consulting to help leaders navigate an AI-first world.
              </p>
              <p className="text-muted-foreground">
                We've helped over 500 businesses generate more than $8 million in revenue — and we're
                just getting started.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every strategy, campaign, and automation we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-border/50 hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI specialists, marketers, and strategists passionate about your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-gradient border-border/50 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <Badge variant="outline" className="text-primary border-primary">
                          {member.experience}
                        </Badge>
                      </div>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground mb-4">{member.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button variant="ghost" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose BluePrintMark?</h2>
            <p className="text-xl text-muted-foreground">
              We're not a traditional agency — we're your AI-powered growth partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">AI-First Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Automation built into every engagement", "AI tools that save 10+ hours/week", "Intelligent workflows that scale with you", "Early adopters — ahead of the curve"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-xl">Proven Track Record</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["100+ successful client partnerships", "95% client retention rate", "Average 340% ROI for clients", "$8M+ revenue generated"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-6 w-6 text-accent" />
                  <CardTitle className="text-xl">Strategic AI Consulting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Custom AI roadmaps for your business", "No cookie-cutter solutions", "Expert guidance on AI tool selection", "Ongoing advisory as AI evolves"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Complete Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Real-time reporting dashboards", "Clear communication & weekly updates", "No hidden fees or lock-in contracts", "Monthly strategy reviews"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with AI-Powered Experts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust BluePrintMark to automate, market, and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">
                Get Free Consultation
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="cta" size="lg" asChild>
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
