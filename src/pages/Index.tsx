import { lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// SEO optimization - lightweight alternative to DOM manipulation
const useSeoMeta = () => {
  useEffect(() => {
    // Only update title, let HTML meta tags handle SEO
    document.title = "Lade Stack - AI-Powered Development Tools & Modern Developer Hub";
  }, []);
};

const Index = () => {
  useSeoMeta();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
