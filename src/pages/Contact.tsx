import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Users,
  Award,
  Rocket
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@novamark.agency",
    description: "We respond within 2 hours during business hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM PST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Tech Street, Digital City, DC 12345",
    description: "Schedule an appointment for in-person meetings"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9AM-6PM PST",
    description: "Emergency support available 24/7 for Enterprise clients"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Rocket, value: "1000+", label: "Campaigns Launched" },
  { icon: Award, value: "95%", label: "Client Retention Rate" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 2 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        services: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Ready to
            <span className="tech-gradient bg-clip-text text-transparent"> Transform Your Business</span>?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can accelerate your digital growth. Get a free consultation 
            and custom strategy for your business - no commitments required.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="services">Services Interested In</Label>
                      <select
                        id="services"
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="ppc">Pay-Per-Click Advertising</option>
                        <option value="content">Content Marketing</option>
                        <option value="email">Email Marketing</option>
                        <option value="analytics">Analytics & Reporting</option>
                        <option value="mobile">Mobile Marketing</option>
                        <option value="video">Video Marketing</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Monthly Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your business goals and how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6" 
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Get In Touch
                  </CardTitle>
                  <CardDescription className="text-base">
                    Multiple ways to reach us - choose what works best for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <div className="text-lg">{info.content}</div>
                        <div className="text-sm text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Free Strategy Session
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get a personalized digital marketing strategy tailored to your business goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;