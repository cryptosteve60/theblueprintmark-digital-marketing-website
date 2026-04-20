import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Rocket, Users, Award, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "51+", label: "Businesses Served" },
  { icon: Rocket, value: "121+", label: "Campaigns Launched" },
  { icon: Award, value: "95%", label: "Client Retention Rate" },
];

const sessionItems = [
  "Which channels are bleeding budget vs. printing revenue",
  "A 90-day action plan with specific KPIs attached",
  "Realistic timelines — not overpromised vanity metrics",
  "What your competitors are doing that you're not (yet)",
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4" style={{ background: "#05080f" }}>
      <div className="container mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-20" style={{ background: "#1e3a6e" }}>
          {stats.map((stat, i) => (
            <div key={i} className="tbm-card text-left" style={{ background: "rgba(11,21,48,0.85)", padding: "2rem" }}>
              <div style={{ width: "48px", height: "48px", background: "rgba(29,107,255,0.1)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <stat.icon style={{ width: "22px", height: "22px", color: "#1d6bff" }} />
              </div>
              <div className="tbm-heading hero-text-glow" style={{ fontSize: "2.8rem", color: "#eef4ff" }}>{stat.value}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#5a7299", marginTop: ".4rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="tbm-tag" style={{ display: "inline-flex" }}>
            <span className="tbm-tag-dot" />
            Get In Touch
          </div>
          <h2 className="tbm-heading text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.25rem" }}>
            Cut Overhead.<br />
            <span style={{ color: "#1d6bff" }}>Convert More Leads.</span>
          </h2>
          <p style={{ color: "#5a7299", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Start with a 30-min diagnostic — no pitch deck, no commitment. Just a straight answer on where AI and marketing can move the needle for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Free Strategy Session */}
          <div className="tbm-card" style={{ background: "rgba(29,107,255,0.06)", border: "1px solid rgba(29,107,255,0.2)", padding: "2.5rem" }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.8rem", letterSpacing: ".03em",
              color: "#eef4ff", marginBottom: ".5rem",
            }}>Free 30-Min Diagnostic</h3>
            <p style={{ color: "#5a7299", fontSize: ".875rem", lineHeight: 1.65, marginBottom: "1.75rem" }}>
              Walk away with a clear picture of your biggest leverage point — whether that's AI automation, paid ads, SEO, or something else entirely.
            </p>
            <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: ".7rem", letterSpacing: ".15em", textTransform: "uppercase", color: "#1d6bff", marginBottom: "1rem" }}>What You'll Leave With:</h4>
            <ul style={{ marginBottom: "2rem" }}>
              {sessionItems.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: ".75rem", fontSize: ".85rem", color: "#c8d8f0", marginBottom: ".65rem" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1d6bff", marginTop: "6px", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/blueprintmarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
                background: "#1d6bff", color: "#05080f",
                fontFamily: "'DM Mono', monospace", fontSize: ".75rem",
                letterSpacing: ".12em", textTransform: "uppercase",
                padding: ".9rem", textDecoration: "none", fontWeight: 500,
                clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                transition: "background .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#4d8dff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d6bff"; }}
            >
              <Calendar size={14} />
              Book Free Call
            </a>
          </div>

          {/* Direct Contact */}
          <div className="tbm-card" style={{ background: "rgba(11,21,48,0.85)", border: "1px solid #1e3a6e", padding: "2.5rem" }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.8rem", letterSpacing: ".03em",
              color: "#eef4ff", marginBottom: ".5rem",
            }}>Prefer Email?</h3>
            <p style={{ color: "#5a7299", fontSize: ".875rem", lineHeight: 1.65, marginBottom: "1.75rem" }}>
              Send us the details of your project — what you're building, what's broken, or what you're trying to scale. We respond within a few hours on business days.
            </p>
            <a
              href="mailto:info@blueprintmarketing.tech"
              style={{ display: "flex", alignItems: "center", gap: ".75rem", color: "#1d6bff", textDecoration: "none", marginBottom: "1.5rem" }}
            >
              <div style={{ width: "40px", height: "40px", background: "rgba(29,107,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mail style={{ width: "18px", height: "18px", color: "#1d6bff" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#5a7299" }}>Email</div>
                <div style={{ fontSize: ".95rem", fontWeight: 500 }}>info@blueprintmarketing.tech</div>
              </div>
            </a>
            <Button variant="tech" className="w-full" asChild>
              <Link to="/contact">Send a Message</Link>
            </Button>
            <p style={{ fontSize: ".75rem", color: "#5a7299", marginTop: "1rem", textAlign: "center" }}>
              No spam, no unsolicited pitches. Just real conversation.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="tbm-card" style={{
          background: "rgba(29,107,255,0.04)",
          border: "1px solid rgba(29,107,255,0.2)",
          padding: "3rem", textAlign: "center",
        }}>
          <h3 className="tbm-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#eef4ff", marginBottom: ".75rem" }}>
            Ready to Build Something That Actually Works?
          </h3>
          <p style={{ color: "#5a7299", maxWidth: "520px", margin: "0 auto 2rem", lineHeight: 1.75 }}>
            Join businesses that stopped paying for marketing that reports impressions and started tracking revenue.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/consultation">
                <Rocket size={15} className="mr-1" />
                Book Free Consultation
              </Link>
            </Button>
            <Button variant="tech" size="lg" asChild>
              <Link to="/case-studies">View Results</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
