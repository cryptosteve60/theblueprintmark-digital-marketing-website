import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Calendar } from "lucide-react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      background: "rgba(5,8,15,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1e3a6e",
    }}>
      <div className="container mx-auto px-4">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <img
              src="/lovable-uploads/760599dd-1da0-41dc-b3fe-b5aed3a6a2ce.png"
              alt="BluePrintMark Logo"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.4rem",
              letterSpacing: ".06em",
              color: "#eef4ff",
            }}>
              Blueprint<span style={{ color: "#1d6bff" }}>Mark</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2.5rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: ".72rem",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive(item.href) ? "#1d6bff" : "#5a7299",
                  borderBottom: isActive(item.href) ? "1px solid #1d6bff" : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color .2s, border-color .2s",
                }}
                onMouseEnter={e => { (e.target as HTMLAnchorElement).style.color = "#c8d8f0"; }}
                onMouseLeave={e => { (e.target as HTMLAnchorElement).style.color = isActive(item.href) ? "#1d6bff" : "#5a7299"; }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/iammrwilson11/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                background: "#1d6bff", color: "#05080f",
                fontFamily: "'DM Mono', monospace", fontSize: ".72rem",
                letterSpacing: ".12em", textTransform: "uppercase",
                padding: ".6rem 1.4rem", textDecoration: "none",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                fontWeight: 500,
                transition: "background .2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#4d8dff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d6bff"; }}
            >
              <Calendar size={12} />
              Book a Call
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button style={{ background: "none", border: "none", color: "#c8d8f0", cursor: "pointer" }}>
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" style={{ background: "#070d1c", borderLeft: "1px solid #1e3a6e", width: "280px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem", letterSpacing: ".06em", color: "#eef4ff",
                }}>
                  Blueprint<span style={{ color: "#1d6bff" }}>Mark</span>
                </span>
                <button style={{ background: "none", border: "none", color: "#5a7299", cursor: "pointer" }} onClick={() => setIsOpen(false)}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: ".8rem", letterSpacing: ".15em",
                      textTransform: "uppercase", textDecoration: "none",
                      color: isActive(item.href) ? "#1d6bff" : "#5a7299",
                      padding: ".5rem 0",
                      borderBottom: "1px solid #1e3a6e",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "column", gap: ".75rem" }}>
                  <a
                    href="https://calendly.com/iammrwilson11/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
                      background: "#1d6bff", color: "#05080f",
                      fontFamily: "'DM Mono', monospace", fontSize: ".72rem",
                      letterSpacing: ".12em", textTransform: "uppercase",
                      padding: ".75rem", textDecoration: "none", fontWeight: 500,
                      clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                    }}
                  >
                    <Calendar size={12} /> Book a Free Call
                  </a>
                  <Link
                    to="/quote"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid #1e3a6e", color: "#c8d8f0",
                      fontFamily: "'DM Mono', monospace", fontSize: ".72rem",
                      letterSpacing: ".12em", textTransform: "uppercase",
                      padding: ".75rem", textDecoration: "none",
                    }}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
