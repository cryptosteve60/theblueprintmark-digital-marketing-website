import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Clock, MessageSquare, Send, Users, Award, Rocket, Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@blueprintmarketing.tech",
    href: "mailto:info@blueprintmarketing.tech",
    description: "Response within a few hours on business days",
  },
  {
    icon: Calendar,
    title: "Book a Call",
    content: "calendly.com/iammrwilson11",
    href: "https://calendly.com/iammrwilson11/30min",
    description: "30-min free diagnostic — no pitch deck",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon–Fri: 9AM–6PM EST",
    href: null,
    description: "Priority support available for Enterprise clients",
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Businesses Served" },
  { icon: Rocket, value: "121+", label: "Campaigns Launched" },
  { icon: Award, value: "95%", label: "Client Retention" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company ? `Company: ${formData.company}` : "",
      formData.phone ? `Phone: ${formData.phone}` : "",
      formData.services ? `Services: ${formData.services}` : "",
      formData.budget ? `Budget: ${formData.budget}` : "",
      `\nMessage:\n${formData.message}`,
    ].filter(Boolean).join("\n");

    const subject = `Inquiry from ${formData.name}${formData.company ? ` · ${formData.company}` : ""}`;

    window.open(
      `mailto:info@blueprintmarketing.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );

    toast({
      title: "Email client opened",
      description: "Your details are pre-filled. Hit send to reach us at info@blueprintmarketing.tech",
    });

    setFormData({ name: "", email: "", company: "", phone: "", services: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  const selectClass = "flex h-10 w-full border border-input bg-card px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className="min-h-screen pt-16" style={{ background: "#05080f" }}>

      {/* Hero */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(160deg, #05080f 0%, #070d1c 60%, #0b1530 100%)" }}>
        <div className="container mx-auto text-center">
          <div className="tbm-tag" style={{ display: "inline-flex" }}>
            <span className="tbm-tag-dot" />
            Get In Touch
          </div>
          <h1 className="tbm-heading hero-text-glow" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "#eef4ff", marginBottom: "1.25rem" }}>
            Let's Build<br />
            <span style={{ color: "#1d6bff" }}>Something Real</span>
          </h1>
          <p style={{ color: "#5a7299", maxWidth: "540px", margin: "0 auto", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Whether you need AI automation, a full marketing strategy, or just want a second opinion on what's not working — this is where it starts.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#1e3a6e" }}>
            {stats.map((stat, i) => (
              <div key={i} className="tbm-card" style={{ background: "rgba(11,21,48,0.85)", padding: "1.75rem", textAlign: "center" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(29,107,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto .75rem" }}>
                  <stat.icon style={{ width: "20px", height: "20px", color: "#1d6bff" }} />
                </div>
                <div className="tbm-heading" style={{ fontSize: "2.5rem", color: "#eef4ff" }}>{stat.value}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#5a7299", marginTop: ".3rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Form */}
            <div className="tbm-card" style={{ background: "rgba(11,21,48,0.85)", border: "1px solid #1e3a6e", padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".5rem" }}>
                <MessageSquare style={{ width: "20px", height: "20px", color: "#1d6bff" }} />
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: ".03em", color: "#eef4ff" }}>
                  Send a Message
                </h2>
              </div>
              <p style={{ color: "#5a7299", fontSize: ".85rem", lineHeight: 1.65, marginBottom: "2rem" }}>
                Fill this out and we'll review before replying — so the conversation starts with context, not small talk.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Jane Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="jane@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="services">Service You Need</Label>
                    <select id="services" name="services" value={formData.services} onChange={handleInputChange} className={selectClass}>
                      <option value="">Select a service</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="ai-consulting">AI Consulting</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="ppc">Pay-Per-Click Advertising</option>
                      <option value="content">Content Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Monthly Budget</Label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className={selectClass}>
                      <option value="">Select range</option>
                      <option value="500-1000">$500 – $1,000</option>
                      <option value="1000-2500">$1,000 – $2,500</option>
                      <option value="2500-5000">$2,500 – $5,000</option>
                      <option value="5000+">$5,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What Are You Trying to Solve? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Describe the problem, what you've already tried, and what a win looks like for your business..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
                    background: "#1d6bff", color: "#05080f",
                    fontFamily: "'DM Mono', monospace", fontSize: ".75rem",
                    letterSpacing: ".12em", textTransform: "uppercase",
                    padding: ".9rem", border: "none", cursor: "pointer", fontWeight: 500,
                    clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                    transition: "background .2s",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  <Send size={14} />
                  {isSubmitting ? "Opening..." : "Send Message"}
                </button>

                <p style={{ fontSize: ".75rem", color: "#5a7299", textAlign: "center" }}>
                  Submitting opens your email client pre-filled for info@blueprintmarketing.tech
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactInfo.map((info, i) => (
                <div key={i} className="tbm-card" style={{ background: "rgba(11,21,48,0.85)", border: "1px solid #1e3a6e", padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "44px", height: "44px", background: "rgba(29,107,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <info.icon style={{ width: "20px", height: "20px", color: "#1d6bff" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#5a7299" }}>{info.title}</div>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ fontSize: "1rem", fontWeight: 500, color: "#eef4ff", textDecoration: "none", display: "block", marginTop: ".15rem" }}
                        onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = "#1d6bff"; }}
                        onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = "#eef4ff"; }}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div style={{ fontSize: "1rem", fontWeight: 500, color: "#eef4ff", marginTop: ".15rem" }}>{info.content}</div>
                    )}
                    <div style={{ fontSize: ".8rem", color: "#5a7299", marginTop: ".25rem" }}>{info.description}</div>
                  </div>
                </div>
              ))}

              {/* Strategy session card */}
              <div className="tbm-card" style={{ background: "rgba(29,107,255,0.06)", border: "1px solid rgba(29,107,255,0.25)", padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: ".03em", color: "#eef4ff", marginBottom: ".5rem" }}>Free 30-Min Diagnostic</h3>
                <p style={{ color: "#5a7299", fontSize: ".83rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  No slides. No upsell. Walk away with a clear next step for your business.
                </p>
                <ul style={{ marginBottom: "1.5rem" }}>
                  {[
                    "Which channels are wasting budget",
                    "Your highest-leverage AI opportunity",
                    "Honest timeline and cost estimate",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: ".82rem", color: "#c8d8f0", marginBottom: ".5rem" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1d6bff", marginTop: "6px", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://calendly.com/iammrwilson11/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar size={14} className="mr-1" />
                    Book Free Call
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
