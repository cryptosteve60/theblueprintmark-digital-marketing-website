import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Minus, Plus, Sparkles, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ────────────────────────────────────────────────────────────────────────────
// Catalog
// ────────────────────────────────────────────────────────────────────────────

type TierOption = { label: string; price: number; value: string };

type MonthlyService =
  | {
      id: string;
      name: string;
      type: "flat";
      price: number;
      note?: string;
    }
  | {
      id: string;
      name: string;
      type: "tier";
      tiers: TierOption[];
    }
  | {
      id: string;
      name: string;
      type: "qty";
      unitPrice: number;
      min: number;
      max: number;
      unitLabel: string;
    };

const monthlyServices: MonthlyService[] = [
  {
    id: "ai-workflow",
    name: "AI Workflow Automation",
    type: "qty",
    unitPrice: 299,
    min: 1,
    max: 5,
    unitLabel: "workflow",
  },
  { id: "ai-chatbot", name: "AI Chatbot & Lead Capture", type: "flat", price: 399 },
  {
    id: "social",
    name: "Social Media Management",
    type: "tier",
    tiers: [
      { value: "2", label: "2 platforms", price: 499 },
      { value: "all", label: "All platforms", price: 899 },
    ],
  },
  { id: "seo", name: "SEO (Local + On-Page)", type: "flat", price: 599 },
  {
    id: "ppc",
    name: "PPC Campaign Management",
    type: "flat",
    price: 699,
    note: "+ ad spend",
  },
  {
    id: "content",
    name: "Content Creation",
    type: "tier",
    tiers: [
      { value: "4", label: "4 posts / week", price: 399 },
      { value: "8", label: "8 posts / week", price: 699 },
      { value: "20", label: "20+ posts / week", price: 1299 },
    ],
  },
  { id: "email", name: "Email Marketing Automation", type: "flat", price: 349 },
  { id: "cro", name: "Conversion Rate Optimization", type: "flat", price: 499 },
  { id: "analytics", name: "Analytics & Custom Dashboards", type: "flat", price: 299 },
  { id: "consultant", name: "Dedicated AI Consultant", type: "flat", price: 1499 },
];

const oneTimeAddOns = [
  { id: "audit", name: "AI Readiness Audit", price: 999 },
  { id: "brand", name: "Brand Identity & Logo", price: 899, fromPrice: true },
  { id: "website", name: "Website Design & Development", price: 2999, fromPrice: true },
  { id: "workshop", name: "AI Strategy Workshop (½ day)", price: 1499 },
];

// ────────────────────────────────────────────────────────────────────────────
// Plan match thresholds — show a "matches Plan X" hint when monthly hits these
// ────────────────────────────────────────────────────────────────────────────

const planMatches = [
  { name: "Starter", price: 799 },
  { name: "Professional", price: 1499 },
  { name: "Enterprise", price: 3499 },
] as const;

// ────────────────────────────────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────────────────────────────────

interface SelectionState {
  flat: Record<string, boolean>;
  tier: Record<string, string | null>;     // null = not selected
  qty: Record<string, number>;              // 0 = not selected
  oneTime: Record<string, boolean>;
}

const initialState: SelectionState = {
  flat: {},
  tier: {},
  qty: {},
  oneTime: {},
};

const fmt = (n: number) => `$${n.toLocaleString()}`;

const PricingCalculator = () => {
  const [selection, setSelection] = useState<SelectionState>(initialState);

  // Totals
  const { monthlyTotal, oneTimeTotal, selectedSlugs } = useMemo(() => {
    let monthly = 0;
    let oneTime = 0;
    const slugs: string[] = [];

    for (const svc of monthlyServices) {
      if (svc.type === "flat" && selection.flat[svc.id]) {
        monthly += svc.price;
        slugs.push(svc.id);
      } else if (svc.type === "tier") {
        const v = selection.tier[svc.id];
        if (v) {
          const tier = svc.tiers.find((t) => t.value === v);
          if (tier) {
            monthly += tier.price;
            slugs.push(`${svc.id}-${v}`);
          }
        }
      } else if (svc.type === "qty") {
        const q = selection.qty[svc.id] ?? 0;
        if (q > 0) {
          monthly += svc.unitPrice * q;
          slugs.push(`${svc.id}-${q}`);
        }
      }
    }

    for (const a of oneTimeAddOns) {
      if (selection.oneTime[a.id]) {
        oneTime += a.price;
        slugs.push(a.id);
      }
    }

    return { monthlyTotal: monthly, oneTimeTotal: oneTime, selectedSlugs: slugs };
  }, [selection]);

  // Plan-match hint
  const planHint = useMemo(() => {
    if (monthlyTotal <= 0) return null;
    for (const p of planMatches) {
      if (monthlyTotal >= p.price * 0.85 && monthlyTotal <= p.price * 1.15) {
        const diff = monthlyTotal - p.price;
        return { plan: p.name, diff };
      }
      if (monthlyTotal > p.price && monthlyTotal < p.price * 1.4) {
        return { plan: p.name, diff: monthlyTotal - p.price };
      }
    }
    return null;
  }, [monthlyTotal]);

  // Toggles
  const toggleFlat = (id: string) =>
    setSelection((s) => ({ ...s, flat: { ...s.flat, [id]: !s.flat[id] } }));

  const setTier = (id: string, value: string | null) =>
    setSelection((s) => ({ ...s, tier: { ...s.tier, [id]: value } }));

  const setQty = (id: string, qty: number) =>
    setSelection((s) => ({ ...s, qty: { ...s.qty, [id]: qty } }));

  const toggleOneTime = (id: string) =>
    setSelection((s) => ({ ...s, oneTime: { ...s.oneTime, [id]: !s.oneTime[id] } }));

  const reset = () => setSelection(initialState);

  // Quote handoff
  const quoteHref = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedSlugs.length) params.set("services", selectedSlugs.join(","));
    if (monthlyTotal) params.set("monthly", String(monthlyTotal));
    if (oneTimeTotal) params.set("onetime", String(oneTimeTotal));
    const qs = params.toString();
    return qs ? `/quote?${qs}` : "/quote";
  }, [selectedSlugs, monthlyTotal, oneTimeTotal]);

  const hasSelection = monthlyTotal > 0 || oneTimeTotal > 0;

  // ──────────────────────────────────────────────────────────────────────────
  // Render
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <section className="py-20 px-4" style={{ background: "#070d1c" }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="tbm-tag" style={{ display: "inline-flex" }}>
            <span className="tbm-tag-dot" />
            Custom Estimate
          </div>
          <h2
            className="tbm-heading text-foreground"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", marginBottom: "1rem" }}
          >
            Build Your <span style={{ color: "#1d6bff" }}>Plan</span>
          </h2>
          <p style={{ color: "#5a7299", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Select the services you need — get an instant monthly estimate. No email required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* ──────── LEFT: Service catalog ──────── */}
          <div>
            {/* Monthly services */}
            <div style={{ marginBottom: "2.5rem" }}>
              <SectionLabel>Monthly Services</SectionLabel>
              <div style={{ background: "#1e3a6e", display: "grid", gap: "1px" }}>
                {monthlyServices.map((svc) => {
                  const isSelected =
                    (svc.type === "flat" && !!selection.flat[svc.id]) ||
                    (svc.type === "tier" && !!selection.tier[svc.id]) ||
                    (svc.type === "qty" && (selection.qty[svc.id] ?? 0) > 0);

                  return (
                    <ServiceRow
                      key={svc.id}
                      selected={isSelected}
                      onActivate={() => {
                        if (svc.type === "flat") toggleFlat(svc.id);
                        else if (svc.type === "tier" && !selection.tier[svc.id])
                          setTier(svc.id, svc.tiers[0].value);
                        else if (svc.type === "tier") setTier(svc.id, null);
                        else if (svc.type === "qty" && (selection.qty[svc.id] ?? 0) === 0)
                          setQty(svc.id, 1);
                        else if (svc.type === "qty") setQty(svc.id, 0);
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            color: "#eef4ff",
                            fontSize: ".95rem",
                            fontWeight: 500,
                          }}
                        >
                          {svc.name}
                        </div>
                        {svc.type === "flat" && (
                          <div style={priceLine}>
                            {fmt(svc.price)}/mo
                            {svc.note && (
                              <span style={{ color: "#5a7299", marginLeft: ".5rem" }}>
                                {svc.note}
                              </span>
                            )}
                          </div>
                        )}
                        {svc.type === "tier" && (
                          <div style={priceLine}>
                            from {fmt(svc.tiers[0].price)}/mo
                          </div>
                        )}
                        {svc.type === "qty" && (
                          <div style={priceLine}>
                            {fmt(svc.unitPrice)}/mo per {svc.unitLabel}
                          </div>
                        )}
                      </div>

                      {/* Tier picker */}
                      {svc.type === "tier" && isSelected && (
                        <div onClick={(e) => e.stopPropagation()} style={{ minWidth: 170 }}>
                          <Select
                            value={selection.tier[svc.id] ?? ""}
                            onValueChange={(v) => setTier(svc.id, v)}
                          >
                            <SelectTrigger
                              style={{
                                background: "rgba(29,107,255,0.08)",
                                border: "1px solid rgba(29,107,255,0.4)",
                                color: "#eef4ff",
                                height: 36,
                                fontFamily: "'DM Mono', monospace",
                                fontSize: ".75rem",
                              }}
                            >
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {svc.tiers.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                  {t.label} — {fmt(t.price)}/mo
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {/* Qty stepper */}
                      {svc.type === "qty" && isSelected && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                            border: "1px solid rgba(29,107,255,0.4)",
                            background: "rgba(29,107,255,0.08)",
                            padding: ".25rem",
                          }}
                        >
                          <StepperBtn
                            disabled={(selection.qty[svc.id] ?? 1) <= svc.min}
                            onClick={() =>
                              setQty(svc.id, Math.max(svc.min, (selection.qty[svc.id] ?? 1) - 1))
                            }
                            ariaLabel="Decrease"
                          >
                            <Minus size={14} />
                          </StepperBtn>
                          <span
                            style={{
                              minWidth: 24,
                              textAlign: "center",
                              fontFamily: "'DM Mono', monospace",
                              color: "#eef4ff",
                              fontSize: ".9rem",
                            }}
                          >
                            {selection.qty[svc.id] ?? 1}
                          </span>
                          <StepperBtn
                            disabled={(selection.qty[svc.id] ?? 1) >= svc.max}
                            onClick={() =>
                              setQty(svc.id, Math.min(svc.max, (selection.qty[svc.id] ?? 1) + 1))
                            }
                            ariaLabel="Increase"
                          >
                            <Plus size={14} />
                          </StepperBtn>
                        </div>
                      )}

                      {/* Checkbox indicator */}
                      <Indicator selected={isSelected} />
                    </ServiceRow>
                  );
                })}
              </div>
            </div>

            {/* One-time add-ons */}
            <div>
              <SectionLabel>One-Time Setup</SectionLabel>
              <div style={{ background: "#1e3a6e", display: "grid", gap: "1px" }}>
                {oneTimeAddOns.map((a) => {
                  const isSelected = !!selection.oneTime[a.id];
                  return (
                    <ServiceRow
                      key={a.id}
                      selected={isSelected}
                      onActivate={() => toggleOneTime(a.id)}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            color: "#eef4ff",
                            fontSize: ".95rem",
                            fontWeight: 500,
                          }}
                        >
                          {a.name}
                        </div>
                        <div style={priceLine}>
                          {a.fromPrice ? "from " : ""}
                          {fmt(a.price)} · one-time
                        </div>
                      </div>
                      <Indicator selected={isSelected} />
                    </ServiceRow>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ──────── RIGHT: Sticky estimate panel ──────── */}
          <aside
            className="lg:sticky"
            style={{
              top: "5.5rem",
              background: "rgba(11,21,48,0.85)",
              border: "1px solid #1e3a6e",
              padding: "2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Monthly total */}
            <div>
              <div style={totalLabel}>Monthly Total</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: ".4rem" }}>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3.75rem",
                    color: monthlyTotal > 0 ? "#eef4ff" : "#5a7299",
                    lineHeight: 1,
                    letterSpacing: ".02em",
                  }}
                >
                  {fmt(monthlyTotal)}
                </span>
                <span style={{ color: "#5a7299", fontSize: ".9rem" }}>/mo</span>
              </div>
            </div>

            {/* One-time total */}
            {oneTimeTotal > 0 && (
              <div style={{ borderTop: "1px solid #1e3a6e", paddingTop: "1rem" }}>
                <div style={totalLabel}>One-Time Setup</div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "#eef4ff",
                    lineHeight: 1,
                    letterSpacing: ".02em",
                  }}
                >
                  {fmt(oneTimeTotal)}
                </div>
              </div>
            )}

            {/* Plan match hint */}
            {planHint && (
              <div
                style={{
                  background: "rgba(29,107,255,0.08)",
                  border: "1px solid rgba(29,107,255,0.4)",
                  padding: ".75rem .9rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: ".6rem",
                }}
              >
                <Sparkles size={16} style={{ color: "#1d6bff", flexShrink: 0, marginTop: 2 }} />
                <div style={{ fontSize: ".8rem", color: "#c8d8f0", lineHeight: 1.5 }}>
                  Close to our <strong style={{ color: "#eef4ff" }}>{planHint.plan}</strong> plan.
                  {planHint.diff > 0 && (
                    <> Bundle and save <strong>{fmt(planHint.diff)}/mo</strong>.</>
                  )}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!hasSelection && (
              <div
                style={{
                  fontSize: ".8rem",
                  color: "#5a7299",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: ".05em",
                  lineHeight: 1.6,
                }}
              >
                Select services to see your estimate →
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <Link
                to={quoteHref}
                style={{
                  ...ctaBase,
                  background: hasSelection ? "#1d6bff" : "#1e3a6e",
                  color: hasSelection ? "#05080f" : "#5a7299",
                  pointerEvents: hasSelection ? "auto" : "none",
                  clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
                }}
              >
                Get This Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/consultation"
                style={{
                  ...ctaBase,
                  background: "transparent",
                  color: "#c8d8f0",
                  border: "1px solid #1e3a6e",
                }}
              >
                Talk to a Strategist
              </Link>
              {hasSelection && (
                <button
                  onClick={reset}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#5a7299",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: ".7rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: ".5rem",
                    cursor: "pointer",
                    marginTop: ".25rem",
                  }}
                >
                  Reset Selection
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;

// ────────────────────────────────────────────────────────────────────────────
// Sub-pieces
// ────────────────────────────────────────────────────────────────────────────

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: ".7rem",
      letterSpacing: ".15em",
      textTransform: "uppercase",
      color: "#5a7299",
      marginBottom: ".75rem",
      paddingLeft: ".25rem",
    }}
  >
    {children}
  </div>
);

const ServiceRow = ({
  children,
  selected,
  onActivate,
}: {
  children: React.ReactNode;
  selected: boolean;
  onActivate: () => void;
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onActivate}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onActivate();
      }
    }}
    style={{
      background: selected ? "rgba(29,107,255,0.08)" : "rgba(11,21,48,0.85)",
      padding: "1rem 1.25rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      cursor: "pointer",
      transition: "background .15s",
      outline: "none",
    }}
    onMouseEnter={(e) => {
      if (!selected) e.currentTarget.style.background = "rgba(29,107,255,0.04)";
    }}
    onMouseLeave={(e) => {
      if (!selected) e.currentTarget.style.background = "rgba(11,21,48,0.85)";
    }}
  >
    {children}
  </div>
);

const Indicator = ({ selected }: { selected: boolean }) => (
  <div
    aria-hidden
    style={{
      width: 22,
      height: 22,
      border: `1.5px solid ${selected ? "#1d6bff" : "#1e3a6e"}`,
      background: selected ? "#1d6bff" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all .15s",
    }}
  >
    {selected && <Check size={14} style={{ color: "#05080f" }} strokeWidth={3} />}
  </div>
);

const StepperBtn = ({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    style={{
      width: 26,
      height: 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
      border: "none",
      color: disabled ? "#5a7299" : "#eef4ff",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }}
  >
    {children}
  </button>
);

// ────────────────────────────────────────────────────────────────────────────
// Inline style snippets
// ────────────────────────────────────────────────────────────────────────────

const priceLine: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: ".72rem",
  letterSpacing: ".05em",
  color: "#1d6bff",
  marginTop: ".25rem",
};

const totalLabel: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: ".68rem",
  letterSpacing: ".15em",
  textTransform: "uppercase",
  color: "#5a7299",
  marginBottom: ".5rem",
};

const ctaBase: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",
  fontFamily: "'DM Mono', monospace",
  fontSize: ".75rem",
  letterSpacing: ".12em",
  textTransform: "uppercase",
  padding: ".9rem",
  textDecoration: "none",
  fontWeight: 500,
  transition: "background .2s, border-color .2s",
};
