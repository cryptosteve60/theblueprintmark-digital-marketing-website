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

const BRAND = "#1d6bff";
const TEXT = "#eef4ff";
const MUTED = "#5a7299";
const HOVER = "#c8d8f0";
const BORDER = "#1e3a6e";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  const navLinkBase: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.72rem",
    letterSpacing: ".15em",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "0.5rem 0",
    borderBottom: "1px solid transparent",
    lineHeight: 1,
    transition: "color .2s, border-color .2s",
    display: "inline-flex",
    alignItems: "center",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(5,8,15,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div className="container mx-auto px-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              lineHeight: 1,
            }}
          >
            <img
              src="/logo-b.svg"
              alt="BluePrintMark"
              style={{ width: "30px", height: "30px", objectFit: "contain", flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.35rem",
                letterSpacing: ".06em",
                color: TEXT,
                lineHeight: 1,
              }}
            >
              Blueprint<span style={{ color: BRAND }}>Mark</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "2rem", marginLeft: "auto" }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    ...navLinkBase,
                    color: active ? BRAND : MUTED,
                    borderBottomColor: active ? BRAND : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = active ? BRAND : HOVER;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = active ? BRAND : MUTED;
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: "center", marginLeft: "2rem" }}>
            <a
              href="https://calendly.com/blueprintmarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".5rem",
                background: BRAND,
                color: "#05080f",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                height: "36px",
                padding: "0 1.25rem",
                textDecoration: "none",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                fontWeight: 500,
                lineHeight: 1,
                transition: "background .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#4d8dff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = BRAND;
              }}
            >
              <Calendar size={12} />
              Book a Call
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                aria-label="Open menu"
                style={{
                  background: "none",
                  border: "none",
                  color: HOVER,
                  cursor: "pointer",
                  width: "44px",
                  height: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  marginRight: "-0.5rem",
                }}
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              style={{
                background: "#070d1c",
                borderLeft: `1px solid ${BORDER}`,
                width: "280px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <img
                    src="/logo-b.svg"
                    alt="BluePrintMark"
                    style={{ width: "26px", height: "26px", objectFit: "contain" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.3rem",
                      letterSpacing: ".06em",
                      color: TEXT,
                      lineHeight: 1,
                    }}
                  >
                    Blueprint<span style={{ color: BRAND }}>Mark</span>
                  </span>
                </span>
                <button
                  aria-label="Close menu"
                  style={{
                    background: "none",
                    border: "none",
                    color: MUTED,
                    cursor: "pointer",
                    width: "36px",
                    height: "36px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: ".15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      color: isActive(item.href) ? BRAND : MUTED,
                      padding: "0.85rem 0",
                      borderBottom: `1px solid ${BORDER}`,
                      lineHeight: 1,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                <div
                  style={{
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  <a
                    href="https://calendly.com/blueprintmarketing-info/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".5rem",
                      background: BRAND,
                      color: "#05080f",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      height: "44px",
                      padding: "0 1rem",
                      textDecoration: "none",
                      fontWeight: 500,
                      lineHeight: 1,
                      clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                    }}
                  >
                    <Calendar size={12} /> Book a Free Call
                  </a>
                  <Link
                    to="/quote"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${BORDER}`,
                      color: HOVER,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      height: "44px",
                      padding: "0 1rem",
                      textDecoration: "none",
                      lineHeight: 1,
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
