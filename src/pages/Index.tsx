import Hero from "@/components/Hero";
import EarnSection from "@/components/EarnSection";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coin-primary to-coin-secondary">
      <Hero />
      <EarnSection />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;