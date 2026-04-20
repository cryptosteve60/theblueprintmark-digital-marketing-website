import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$799",
    period: "/month",
    description: "AI-assisted digital marketing for small businesses ready to stop guessing and start tracking",
    badge: null,
    featured: false,
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Optimization",
      "Monthly Analytics Report",
      "Email Marketing Setup",
      "AI Chatbot Setup",
      "Content Calendar",
      "Community Management",
    ],
    cta: "Start Growing",
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description: "Full digital marketing stack plus AI automation — built for businesses scaling past $500K/yr",
    badge: "Best Value",
    featured: true,
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
    ],
    cta: "Scale with AI",
  },
  {
    name: "Enterprise",
    price: "$3,499",
    period: "/month",
    description: "End-to-end AI automation, omnichannel marketing, and a dedicated consultant on your team",
    badge: "Full Stack",
    featured: false,
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
    ],
    cta: "Dominate Your Market",
  },
];

const additionalServices = [
  { service: "AI Readiness Audit",               price: "$999" },
  { service: "Custom AI Agent Development",       price: "From $2,499" },
  { service: "Website Design & Development",      price: "From $2,999" },
  { service: "Brand Identity & Logo Design",      price: "From $899" },
  { service: "AI Strategy Workshop (half-day)",   price: "$1,499" },
  { service: "SEO Audit & Strategy",              price: "From $499" },
  { service: "Marketing Consultation",            price: "$249 / hr" },
  { service: "AI Consulting Retainer",            price: "$999 / mo" },
];

const cardStyle = (featured: boolean): React.CSSProperties => ({
  background: featured ? "rgba(29,107,255,0.08)" : "rgba(11,21,48,0.85)",
  padding: "2.5rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
});

const PricingSection = () => {
  return (
    <section className="py-20 px-4" style={{ background: "#070d1c" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="tbm-tag" style={{ display: "inline-flex" }}>
            <span className="tbm-tag-dot" />
            Transparent Pricing
          </div>
          <h2
            className="tbm-heading text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1.25rem" }}
          >
            Flat-Rate Plans.<br />
            <span style={{ color: "#1d6bff" }}>No Retainer Traps.</span>
          </h2>
          <p style={{ color: "#5a7299", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            What you pay. What you get. Cancel any time — we earn your business every month.
          </p>
        </div>

        {/* Pricing cards — equal height, buttons pinned to bottom */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 mb-16"
          style={{ background: "#1e3a6e", gap: "1px" }}
        >
          {pricingPlans.map((plan, index) => (
            <div key={index} className="tbm-card" style={cardStyle(plan.featured)}>
              {plan.badge && (
                <div style={{
                  position: "absolute", top: "1.25rem", right: "1.25rem",
                  fontFamily: "'DM Mono', monospace", fontSize: ".65rem",
                  letterSpacing: ".15em", textTransform: "uppercase",
                  color: "#1d6bff", border: "1px solid rgba(29,107,255,0.4)",
                  padding: ".25rem .6rem", background: "rgba(29,107,255,0.08)",
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: ".72rem",
                  letterSpacing: ".15em", textTransform: "uppercase",
                  color: "#5a7299", marginBottom: ".75rem",
                }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: ".25rem", marginBottom: ".75rem" }}>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3.5rem", letterSpacing: ".02em",
                    color: "#eef4ff", lineHeight: 1,
                  }}>{plan.price}</span>
                  <span style={{ color: "#5a7299", fontSize: ".85rem" }}>{plan.period}</span>
                </div>
                <p style={{ color: "#5a7299", fontSize: ".85rem", lineHeight: 1.65 }}>{plan.description}</p>
              </div>

              {/* Feature list — grows to fill card height */}
              <ul style={{ marginBottom: "2rem", flex: 1 }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: "flex", alignItems: "flex-start", gap: ".75rem",
                    fontSize: ".83rem", color: "#c8d8f0", marginBottom: ".6rem",
                  }}>
                    <Check style={{ width: "14px", height: "14px", color: "#1d6bff", flexShrink: 0, marginTop: "2px" }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA pinned to bottom */}
              <Link
                to="/consultation"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
                  background: plan.featured ? "#1d6bff" : "transparent",
                  color: plan.featured ? "#05080f" : "#c8d8f0",
                  border: plan.featured ? "none" : "1px solid #1e3a6e",
                  fontFamily: "'DM Mono', monospace", fontSize: ".75rem",
                  letterSpacing: ".12em", textTransform: "uppercase",
                  padding: ".9rem", textDecoration: "none", fontWeight: 500,
                  clipPath: plan.featured
                    ? "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)"
                    : "none",
                  transition: "background .2s, border-color .2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = plan.featured ? "#4d8dff" : "rgba(29,107,255,0.1)";
                  el.style.borderColor = "#4d8dff";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = plan.featured ? "#1d6bff" : "transparent";
                  el.style.borderColor = plan.featured ? "none" : "#1e3a6e";
                }}
              >
                {plan.cta}
                <Zap size={13} />
              </Link>
            </div>
          ))}
        </div>

        {/* À La Carte */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h3 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2rem", letterSpacing: ".04em",
            color: "#eef4ff", textAlign: "center", marginBottom: "1.5rem",
          }}>
            À La Carte Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ background: "#1e3a6e", gap: "1px" }}>
            {additionalServices.map((item, index) => (
              <div key={index} style={{
                background: "rgba(11,21,48,0.85)",
                padding: "1rem 1.5rem",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                gap: "1rem",
              }}>
                <span style={{ color: "#c8d8f0", fontSize: ".875rem" }}>{item.service}</span>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: ".7rem",
                  letterSpacing: ".08em", color: "#1d6bff",
                  border: "1px solid rgba(29,107,255,0.3)",
                  padding: ".2rem .6rem", whiteSpace: "nowrap", flexShrink: 0,
                }}>{item.price}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ color: "#5a7299", marginBottom: "1rem", fontSize: ".9rem" }}>
              Need a custom AI automation + marketing package? Let's scope it together.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
