import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ImpactSection from "@/components/ImpactSection";
import CommunitySection from "@/components/CommunitySection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Lade Stack – AI-Powered Developer Platform | Build Smarter, Ship Faster"
        description="The complete AI-powered development ecosystem. Intelligent tools for coding, API testing, website building, file sharing, and documentation — all free. Built for modern developers."
        keywords="AI developer tools, AI SaaS platform, AI code editor, API testing tool, developer automation tools, AI productivity platform, no-code website builder, Lade Stack"
        ogTitle="Lade Stack – AI-Powered Developer Ecosystem"
        ogDescription="Enterprise-grade AI tools at startup velocity. Code editing, API testing, file sharing, and automation for 10x developer productivity."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Lade Stack",
          "url": "https://ladestack.in",
          "description": "AI-powered developer tools platform with code editor, API testing, website builder, and file management.",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ImpactSection />
        <div id="products">
          <ProductsSection />
        </div>
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
