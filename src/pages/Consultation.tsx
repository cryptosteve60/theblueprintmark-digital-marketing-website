import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Calendar,
  Clock,
  CheckCircle2,
  Rocket,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Award,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Comprehensive review of your current digital presence and marketing efforts"
  },
  {
    icon: Target,
    title: "Custom Strategy",
    description: "Tailored digital marketing roadmap designed specifically for your business goals"
  },
  {
    icon: TrendingUp,
    title: "ROI Projections",
    description: "Detailed projections showing potential returns on your marketing investment"
  },
  {
    icon: Users,
    title: "Competitive Analysis",
    description: "In-depth analysis of your competitors' strategies and market positioning"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechStart Inc.",
    text: "The free consultation was incredibly valuable. They identified opportunities we hadn't even considered and provided a clear roadmap for growth.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    company: "GrowthCorp",
    text: "Professional, insightful, and no sales pressure. They genuinely wanted to help us succeed, which led to a great long-term partnership.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    company: "Local Retail Co.",
    text: "The strategy they provided in our consultation helped us increase our online sales by 40% in just 3 months.",
    rating: 5
  }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    industry: "",
    currentMarketing: [],
    goals: "",
    budget: "",
    timeline: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentMarketing: checked 
        ? [...prev.currentMarketing, service]
        : prev.currentMarketing.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Booked!",
        description: "We'll send you a calendar invite and preparation materials within the next hour.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        industry: "",
        currentMarketing: [],
        goals: "",
        budget: "",
        timeline: "",
        preferredDate: "",
        preferredTime: "",
        additionalInfo: ""
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
            Free Strategy Session
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Book Your Free
            <span className="tech-gradient bg-clip-text text-transparent"> Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get a personalized digital marketing strategy session worth $500 - completely free. 
            No sales pitch, just valuable insights to help grow your business.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-accent mr-2" />
              60 minutes
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Video call
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-secondary mr-2" />
              No obligation
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You'll Get in Your Session
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our strategy sessions are designed to provide immediate value, whether you work with us or not.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gradient border-border/50 hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-gradient border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Book Your Free Session</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below to schedule your personalized strategy session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
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
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
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
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="education">Education</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="nonprofit">Non-profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Current Marketing */}
                <div className="space-y-2">
                  <Label>Current Marketing Efforts (Check all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Social Media", "SEO", "PPC Ads", "Email Marketing", "Content Marketing", "None"].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.currentMarketing.includes(service)}
                          onCheckedChange={(checked) => handleCheckboxChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals and Budget */}
                <div className="space-y-2">
                  <Label htmlFor="goals">Primary Business Goals *</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="What are your main objectives? (e.g., increase leads, boost online sales, improve brand awareness)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Marketing Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline to Get Started</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time (PST)</Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Anything else you'd like us to know before the call?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6" 
                  variant="hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book My Free Session"}
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  🔒 Your information is secure. We'll send you a calendar invite and preparation materials within 1 hour.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why business owners love our free strategy sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;