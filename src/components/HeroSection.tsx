import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Zap className="h-6 w-6 text-accent" />
          <span className="text-accent font-semibold">Digital Marketing Excellence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text-glow">
          Supercharge Your
          <span className="tech-gradient bg-clip-text text-transparent"> Digital Presence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge digital marketing strategies. 
          From social media management to SEO dominance, we deliver results that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/consultation">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="tech" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card-gradient p-6 rounded-xl border border-primary/20 hover-lift">
            <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
            <p className="text-muted-foreground">Every strategy designed for maximum return on investment</p>
          </div>
          
          <div className="card-gradient p-6 rounded-xl border border-secondary/20 hover-lift">
            <Zap className="h-8 w-8 text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Rapid implementation and quick results delivery</p>
          </div>
          
          <div className="card-gradient p-6 rounded-xl border border-accent/20 hover-lift">
            <ArrowRight className="h-8 w-8 text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Growth Driven</h3>
            <p className="text-muted-foreground">Sustainable growth strategies that scale with your business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;