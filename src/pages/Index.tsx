import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="The BluePrint Mark - Professional Digital Marketing Agency | Supercharge Your Digital Presence"
        description="Transform your business with cutting-edge digital marketing strategies. From social media management to SEO dominance, we deliver ROI-focused results that matter."
      />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
