import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Rocket,
  Users,
  Award
} from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Rocket, value: "1000+", label: "Campaigns Launched" },
  { icon: Award, value: "95%", label: "Client Retention Rate" },
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="card-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-glow-primary transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2 hero-text-glow">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to
            <span className="tech-gradient bg-clip-text text-transparent"> Transform Your Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can accelerate your digital growth. Get a free consultation 
            and custom strategy for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Let's Talk Business
              </CardTitle>
              <CardDescription className="text-base">
                Ready to get started? Reach out to us and let's create something amazing together.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-muted-foreground">hello@yourdigitalagency.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-muted-foreground">123 Tech Street, Digital City, DC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-muted-foreground">Mon-Fri: 9AM-6PM PST</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* CTA Section */}
          <Card className="card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Free Strategy Session
              </CardTitle>
              <CardDescription className="text-base">
                Get a personalized digital marketing strategy tailored to your business goals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">What You'll Get:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      Comprehensive business analysis
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      Custom digital marketing strategy
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      ROI projections and timeline
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      Competitive analysis report
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Button variant="hero" className="w-full text-lg py-6">
                    Book Free Consultation
                    <Rocket className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Download Our Case Studies
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    🔒 No spam, no commitments. Just valuable insights for your business.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 card-gradient rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Dominate Your Digital Space?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their digital presence with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Start Your Journey
            </Button>
            <Button variant="tech" size="lg">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;