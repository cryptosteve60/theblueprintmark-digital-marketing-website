import { useEffect, useRef } from "react";
import { Calendar, ArrowRight, Github } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(29,107,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(77,141,255,0.4)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #05080f 0%, #070d1c 50%, #0b1530 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .tbm-tag    { animation: fadeUp .6s ease forwards .1s; opacity: 0; }
        .tbm-h1     { animation: fadeUp .7s ease forwards .3s; opacity: 0; }
        .tbm-sub    { animation: fadeUp .7s ease forwards .5s; opacity: 0; }
        .tbm-btns   { animation: fadeUp .7s ease forwards .7s; opacity: 0; }
        .tbm-cards  { animation: fadeUp .7s ease forwards .9s; opacity: 0; }

        .tbm-btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: #1d6bff; color: #05080f;
          font-family: 'DM Mono', monospace; font-size: .75rem;
          letter-spacing: .1em; text-transform: uppercase;
          padding: .85rem 2rem; text-decoration: none;
          clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
          border: none; cursor: pointer; font-weight: 500;
          transition: background .2s, transform .2s;
        }
        .tbm-btn-primary:hover { background: #4d8dff; transform: translateY(-2px); }

        .tbm-btn-ghost {
          display: inline-flex; align-items: center; gap: .5rem;
          color: #c8d8f0; font-family: 'DM Mono', monospace;
          font-size: .75rem; letter-spacing: .1em; text-transform: uppercase;
          text-decoration: none; background: none; border: 1px solid #1e3a6e;
          padding: .85rem 2rem; cursor: pointer;
          transition: border-color .2s, color .2s;
        }
        .tbm-btn-ghost:hover { border-color: #4d8dff; color: #4d8dff; }

        .tbm-stat-card {
          background: rgba(11,21,48,0.7);
          border: 1px solid #1e3a6e;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color .25s, transform .25s;
          backdrop-filter: blur(8px);
        }
        .tbm-stat-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: #1d6bff;
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s ease;
        }
        .tbm-stat-card:hover { border-color: #1d6bff; transform: translateY(-3px); }
        .tbm-stat-card:hover::before { transform: scaleX(1); }

        .tbm-cursor { animation: blink 1.1s step-end infinite; }
      `}</style>

      {/* Animated network canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29,107,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(29,107,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,107,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", paddingTop: "7rem", paddingBottom: "5rem", position: "relative", zIndex: 1 }}>

        {/* Tag */}
        <div className="tbm-tag" style={{
          display: "inline-flex", alignItems: "center", gap: ".6rem",
          fontFamily: "'DM Mono', monospace", fontSize: ".68rem",
          letterSpacing: ".2em", color: "#1d6bff", textTransform: "uppercase",
          marginBottom: "1.5rem",
          border: "1px solid rgba(29,107,255,0.3)",
          padding: ".35rem .9rem",
          background: "rgba(29,107,255,0.06)",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1d6bff", display: "inline-block" }} />
          The Blueprint Mark · AI &amp; Automation Consulting
        </div>

        {/* H1 */}
        <h1 className="tbm-h1" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
          lineHeight: .9, letterSpacing: ".02em",
          color: "#eef4ff", marginBottom: "1.8rem",
          maxWidth: "820px",
        }}>
          Build Smarter.<br />
          <span style={{ color: "#1d6bff" }}>Ship Faster.</span><br />
          Grow Real.
          <span className="tbm-cursor" style={{ color: "#1d6bff" }}>_</span>
        </h1>

        {/* Sub */}
        <p className="tbm-sub" style={{
          fontSize: "1.05rem", color: "#5a7299",
          maxWidth: "520px", lineHeight: 1.75, fontWeight: 300,
          marginBottom: "2.5rem",
        }}>
          I help businesses cut overhead and convert more leads using AI, automation, and digital strategy — built by someone who actually codes, not just consults.
        </p>

        {/* Buttons */}
        <div className="tbm-btns" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
          <a
            href="https://calendly.com/blueprintmarketing-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="tbm-btn-primary"
          >
            <Calendar size={14} />
            Book a Free Call
          </a>
          <a href="#projects" className="tbm-btn-ghost">
            See My Work <ArrowRight size={14} />
          </a>
          <a
            href="https://github.com/cryptosteve60"
            target="_blank"
            rel="noopener noreferrer"
            className="tbm-btn-ghost"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
