import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="BluePrintMark — AI Automation, Digital Marketing & AI Consulting"
        description="We help businesses cut overhead and convert more leads using AI automation, performance digital marketing, and strategic AI consulting. Built by someone who actually codes."
      />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
