import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BrainCircuit,
  Share2,
  Search,
  MousePointer,
  PenTool,
  Mail,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Eliminate the manual tasks draining your team — chatbots, CRM flows, lead nurturing, and custom agents built to run 24/7.",
    features: ["Workflow Automation", "AI Chatbots & Agents", "CRM Automation", "Lead Nurturing Flows"],
    color: "primary"
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting",
    description: "Not sure where AI fits your business? We audit your stack, identify 3-5 high-ROI opportunities, and build the roadmap.",
    features: ["AI Readiness Audit", "Tool Stack Advisory", "Custom AI Roadmap", "Team AI Training"],
    color: "secondary"
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Platform-specific content, community management, and paid social — executed consistently so you're not guessing what to post.",
    features: ["Content Calendar", "Daily Posting", "Community Engagement", "Analytics & Reporting"],
    color: "accent"
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Technical SEO, keyword targeting, and content optimization that compounds over time — not just quick wins that vanish.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
    color: "primary"
  },
  {
    icon: MousePointer,
    title: "Pay-Per-Click Advertising",
    description: "Google, Meta, and LinkedIn campaigns managed for profit — not just clicks. Every dollar tracked back to pipeline.",
    features: ["Campaign Setup", "Ad Creative", "Bid Management", "Conversion Tracking"],
    color: "secondary"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "AI-assisted content that ranks, converts, and positions you as the authority your market actually wants to follow.",
    features: ["Blog Writing", "Video Scripts", "Infographics", "E-books"],
    color: "accent"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Segmented sequences and automated drip campaigns that turn cold lists into repeat buyers without manual follow-up.",
    features: ["Campaign Design", "Automation Setup", "List Segmentation", "A/B Testing"],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Custom dashboards showing exactly which channels produce revenue — so you stop funding the ones that don't.",
    features: ["Custom Dashboards", "Monthly Reports", "ROI Analysis", "Strategy Optimization"],
    color: "secondary"
  }
];

const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
  primary:   { bg: "bg-primary/10",   text: "text-primary",   dot: "bg-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", dot: "bg-secondary" },
  accent:    { bg: "bg-primary/10",   text: "text-primary",   dot: "bg-primary" },
};

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 tbm-grid" style={{ background: "#05080f" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="tbm-tag" style={{ display: "inline-flex" }}>
            <span className="tbm-tag-dot" />
            What We Build
          </div>
          <h2 className="tbm-heading text-foreground" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "1.25rem",
          }}>
            Systems Built to<br />
            <span style={{ color: "#1d6bff" }}>Generate Revenue</span>
          </h2>
          <p style={{ color: "#5a7299", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
            Every engagement delivers either more leads, lower overhead, or scalable revenue — with clear metrics attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px" style={{ background: "#1e3a6e" }}>
          {services.map((service, index) => {
            const c = colorMap[service.color] ?? colorMap.primary;
            return (
              <div key={index} className="tbm-card" style={{ background: "rgba(11,21,48,0.85)", padding: "1.75rem", display: "flex", flexDirection: "column" }}>
                <div className={`w-11 h-11 rounded ${c.bg} flex items-center justify-center mb-5`}>
                  <service.icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.35rem", letterSpacing: ".03em",
                  color: "#eef4ff", marginBottom: ".5rem",
                }}>{service.title}</h3>
                <p style={{ color: "#5a7299", fontSize: ".85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {service.description}
                </p>
                <ul style={{ marginBottom: "1.5rem", flex: 1 }}>
                  {service.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: ".6rem", fontSize: ".8rem", color: "#c8d8f0", marginBottom: ".4rem" }}>
                      <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="tech" className="w-full" style={{ marginTop: "auto" }} asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
