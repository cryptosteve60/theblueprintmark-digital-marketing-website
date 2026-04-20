import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, TrendingUp, Calendar, BrainCircuit } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <BrainCircuit className="h-5 w-5 text-accent" />
          <span className="text-accent font-semibold text-sm">AI-Powered Growth Agency</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-text-glow">
          Automate, Market &
          <span className="tech-gradient bg-clip-text text-transparent"> Scale with AI</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          We combine AI automation, performance digital marketing, and expert AI consulting
          to help your business grow faster — and smarter.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 flex-wrap">
          <Button variant="hero" size="lg" className="px-6 py-3" asChild>
            <Link to="/quote" aria-label="Get a custom quote">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="tech" size="lg" className="px-6 py-3" asChild>
            <Link to="/services" aria-label="Explore our services">
              View Our Services
            </Link>
          </Button>
          <Button variant="cta" size="lg" className="px-6 py-3" asChild>
            <a
              href="https://calendly.com/iammrwilson11/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a free consultation"
            >
              <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
              Book Free Consultation
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="card-gradient p-4 rounded-xl border border-primary/20 hover-lift transition-all duration-300">
            <Bot className="h-6 w-6 text-primary mb-3 mx-auto" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">AI Automation</h3>
            <p className="text-muted-foreground text-sm">Automate repetitive tasks and workflows so your team can focus on growth</p>
          </div>

          <div className="card-gradient p-4 rounded-xl border border-secondary/20 hover-lift transition-all duration-300">
            <TrendingUp className="h-6 w-6 text-secondary mb-3 mx-auto" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
            <p className="text-muted-foreground text-sm">Data-driven campaigns across SEO, paid ads, social, and content</p>
          </div>

          <div className="card-gradient p-4 rounded-xl border border-accent/20 hover-lift transition-all duration-300">
            <BrainCircuit className="h-6 w-6 text-accent mb-3 mx-auto" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">AI Consulting</h3>
            <p className="text-muted-foreground text-sm">Strategic AI guidance to future-proof your business and outpace competitors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
