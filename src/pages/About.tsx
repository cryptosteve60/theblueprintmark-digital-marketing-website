import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Heart
} from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    experience: "12+ years",
    specialties: ["Digital Strategy", "Business Growth", "Team Leadership"],
    description: "Former VP of Marketing at Fortune 500 tech company. Led digital transformations for brands like Tesla and Airbnb.",
    image: "sarah-chen"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of SEO & Analytics",
    experience: "10+ years",
    specialties: ["Technical SEO", "Data Analysis", "Conversion Optimization"],
    description: "Ex-Google engineer who helped build their ranking algorithms. Specialized in technical SEO and performance marketing.",
    image: "michael-rodriguez"
  },
  {
    name: "Emily Johnson",
    role: "Creative Director",
    experience: "8+ years",
    specialties: ["Brand Design", "Content Strategy", "Social Media"],
    description: "Award-winning designer who has worked with brands like Nike and Coca-Cola. Expert in visual storytelling and brand development.",
    image: "emily-johnson"
  },
  {
    name: "David Kim",
    role: "Head of Paid Media",
    experience: "9+ years",
    specialties: ["PPC Management", "Media Buying", "Campaign Optimization"],
    description: "Former Facebook and Google Ads specialist. Managed over $50M in ad spend with consistently profitable campaigns.",
    image: "david-kim"
  }
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, every campaign, every decision is made with measurable results in mind. We don't do vanity metrics."
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our success. We treat your business as if it were our own and invest in long-term relationships."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We stay ahead of trends and continuously innovate to give you a competitive edge in the digital landscape."
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "No black boxes, no hidden fees. You'll always know exactly what we're doing and why we're doing it."
  }
];

const achievements = [
  { metric: "500+", label: "Clients Served", icon: Users },
  { metric: "$50M+", label: "Revenue Generated", icon: TrendingUp },
  { metric: "340%", label: "Average ROI", icon: Target },
  { metric: "95%", label: "Client Retention", icon: Award },
  { metric: "2018", label: "Founded", icon: Calendar },
  { metric: "Remote", label: "Team Structure", icon: MapPin }
];

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            About The BluePrint Mark
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            We're Digital Marketing
            <span className="tech-gradient bg-clip-text text-transparent"> Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Founded in 2018, NovaMark has become a leading digital marketing agency, 
            helping businesses of all sizes achieve remarkable growth through data-driven strategies 
            and innovative campaigns.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/consultation">
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Achievements */}
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

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              From a small startup to a leading digital marketing agency
            </p>
          </div>
          
          <Card className="card-gradient border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  NovaMark was founded in 2018 when our CEO, Sarah Chen, recognized a gap in the digital marketing landscape. 
                  Too many agencies were focused on vanity metrics and flashy campaigns that didn't translate to real business growth.
                </p>
                
                <p className="text-muted-foreground">
                  Starting with just three team members and a mission to deliver measurable results, we began working with 
                  local startups and small businesses. Our data-driven approach and commitment to transparency quickly set us apart.
                </p>
                
                <p className="text-muted-foreground">
                  Today, we're proud to have helped over 500 businesses achieve their digital marketing goals, generating more than 
                  $50 million in revenue for our clients. Our team has grown to include some of the industry's top talent, 
                  including former Google and Facebook employees.
                </p>
                
                <p className="text-muted-foreground">
                  We remain committed to our founding principles: delivering real results, maintaining complete transparency, 
                  and treating every client's business as if it were our own.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and how we work with our clients
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

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts who are passionate about driving your business growth
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

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NovaMark?</h2>
            <p className="text-xl text-muted-foreground">
              Here's what sets us apart from other digital marketing agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>500+ successful client partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>95% client retention rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Average 340% ROI for clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>$50M+ revenue generated for clients</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Former Google & Facebook employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Industry certifications & awards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Continuous learning & development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Specialized expertise across all channels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Custom Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>No cookie-cutter solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Data-driven decision making</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Industry-specific expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Scalable growth strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Complete Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Real-time reporting dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Clear communication & updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>No hidden fees or contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span>Monthly strategy reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Industry Experts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust NovaMark to drive their digital growth.
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