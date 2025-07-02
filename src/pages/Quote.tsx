import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { 
  Calculator,
  DollarSign,
  Send,
  CheckCircle2,
  Clock,
  Users,
  Zap
} from "lucide-react";

const services = [
  { id: "social-media", name: "Social Media Management", basePrice: 599, description: "Complete social media strategy and management" },
  { id: "seo", name: "Search Engine Optimization", basePrice: 799, description: "Comprehensive SEO to boost your rankings" },
  { id: "ppc", name: "Pay-Per-Click Advertising", basePrice: 899, description: "Targeted ads with immediate results" },
  { id: "content", name: "Content Marketing", basePrice: 699, description: "Engaging content that converts" },
  { id: "email", name: "Email Marketing", basePrice: 499, description: "Automated email campaigns" },
  { id: "analytics", name: "Analytics & Reporting", basePrice: 399, description: "Comprehensive tracking and insights" },
  { id: "mobile", name: "Mobile Marketing", basePrice: 799, description: "Mobile-first marketing strategies" },
  { id: "video", name: "Video Marketing", basePrice: 999, description: "Professional video content and marketing" },
  { id: "web-design", name: "Website Design", basePrice: 2999, description: "Custom website design and development", oneTime: true },
  { id: "brand-identity", name: "Brand Identity", basePrice: 1499, description: "Logo design and brand guidelines", oneTime: true }
];

const businessSizes = [
  { id: "startup", name: "Startup (1-10 employees)", multiplier: 1 },
  { id: "small", name: "Small Business (11-50 employees)", multiplier: 1.2 },
  { id: "medium", name: "Medium Business (51-200 employees)", multiplier: 1.5 },
  { id: "large", name: "Large Business (200+ employees)", multiplier: 2 }
];

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    industry: "",
    businessSize: "",
    currentRevenue: "",
    goals: "",
    timeline: "",
    additionalInfo: ""
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectComplexity, setProjectComplexity] = useState([1]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateEstimate = () => {
    const businessSizeData = businessSizes.find(size => size.id === formData.businessSize);
    const sizeMultiplier = businessSizeData?.multiplier || 1;
    const complexityMultiplier = projectComplexity[0];
    
    const monthlyServices = services.filter(service => 
      selectedServices.includes(service.id) && !service.oneTime
    );
    const oneTimeServices = services.filter(service => 
      selectedServices.includes(service.id) && service.oneTime
    );
    
    const monthlyTotal = monthlyServices.reduce((total, service) => 
      total + (service.basePrice * sizeMultiplier * complexityMultiplier), 0
    );
    
    const oneTimeTotal = oneTimeServices.reduce((total, service) => 
      total + (service.basePrice * sizeMultiplier * complexityMultiplier), 0
    );
    
    return { monthlyTotal, oneTimeTotal };
  };

  const { monthlyTotal, oneTimeTotal } = calculateEstimate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll send you a detailed proposal within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        industry: "",
        businessSize: "",
        currentRevenue: "",
        goals: "",
        timeline: "",
        additionalInfo: ""
      });
      setSelectedServices([]);
      setProjectComplexity([1]);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Custom Quote
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-glow">
            Get Your
            <span className="tech-gradient bg-clip-text text-transparent"> Custom Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tell us about your business and goals, and we'll create a custom marketing package 
            tailored specifically to your needs and budget.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-accent mr-2" />
              24-hour response
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              No obligation
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-secondary mr-2" />
              Expert consultation
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Calculator */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="h-6 w-6 text-primary mr-3" />
                  Custom Quote Request
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below to get a personalized quote for your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Basic Information</h3>
                    
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
                        <Label htmlFor="industry">Industry *</Label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
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
                  </div>

                  {/* Business Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Business Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessSize">Business Size *</Label>
                      <select
                        id="businessSize"
                        name="businessSize"
                        value={formData.businessSize}
                        onChange={handleInputChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select business size</option>
                        {businessSizes.map(size => (
                          <option key={size.id} value={size.id}>{size.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentRevenue">Current Annual Revenue</Label>
                      <select
                        id="currentRevenue"
                        name="currentRevenue"
                        value={formData.currentRevenue}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select revenue range</option>
                        <option value="under-100k">Under $100K</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-10m">$5M - $10M</option>
                        <option value="10m+">$10M+</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Services Needed</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                          />
                          <div className="flex-1">
                            <Label htmlFor={service.id} className="font-medium cursor-pointer">
                              {service.name}
                            </Label>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                            <div className="text-sm font-medium text-primary">
                              Starting at ${service.basePrice.toLocaleString()}{service.oneTime ? " (one-time)" : "/month"}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Complexity */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Project Complexity</h3>
                    <div className="space-y-4">
                      <Label>How complex is your project? (1 = Simple, 3 = Very Complex)</Label>
                      <Slider
                        value={projectComplexity}
                        onValueChange={setProjectComplexity}
                        max={3}
                        min={1}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Simple</span>
                        <span>Complex ({projectComplexity[0]}x)</span>
                        <span>Very Complex</span>
                      </div>
                    </div>
                  </div>

                  {/* Goals and Timeline */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Goals & Timeline</h3>
                    
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

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Any specific requirements, challenges, or information you'd like us to know?"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6" 
                    variant="hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get My Custom Quote"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Your information is secure. We'll send you a detailed proposal within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Estimate Sidebar */}
          <div className="space-y-6">
            <Card className="card-gradient border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-2" />
                  Estimated Investment
                </CardTitle>
                <CardDescription>
                  Based on your selections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedServices.length > 0 ? (
                  <>
                    {monthlyTotal > 0 && (
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="text-2xl font-bold text-primary">
                          ${monthlyTotal.toLocaleString()}/month
                        </div>
                        <div className="text-sm text-muted-foreground">Monthly Services</div>
                      </div>
                    )}
                    
                    {oneTimeTotal > 0 && (
                      <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                        <div className="text-2xl font-bold text-secondary">
                          ${oneTimeTotal.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">One-time Services</div>
                      </div>
                    )}
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-accent mr-2" />
                        <span>Includes setup and onboarding</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                        <span>No long-term contracts</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-accent mr-2" />
                        <span>Dedicated account support</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select services to see estimate</p>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    *This is an estimate. Final pricing may vary based on specific requirements and scope.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Why Choose NovaMark?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    <span>Proven track record with 500+ clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    <span>Average 340% ROI for our clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    <span>Custom strategies, not cookie-cutter solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5" />
                    <span>Transparent reporting and communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;