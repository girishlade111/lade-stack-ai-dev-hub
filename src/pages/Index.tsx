import { lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Lade Stack - AI-Powered Development Tools & Modern Developer Hub"
        description="The complete AI-powered development platform with intelligent tools for coding, API testing, website building, and more. Built for modern developers."
        keywords="AI development tools, developer hub, API testing, website builder, code viewer, Lade Stack, Girish Lade"
      />
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
