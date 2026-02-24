import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";

// Below-fold sections are lazy-loaded so they don't inflate the initial bundle.
// They will be fetched only when the browser is idle / when Suspense resolves.
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ValuesSection = lazy(() => import("@/components/ValuesSection"));
const ImpactSection = lazy(() => import("@/components/ImpactSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const CommunitySection = lazy(() => import("@/components/CommunitySection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal inline fallback — no extra deps, no motion overhead
const SectionFallback = () => <div className="min-h-[200px]" aria-hidden />;

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
      {/* Header + Hero are critical path — eagerly loaded */}
      <Header />
      <main>
        <HeroSection />

        {/* Everything below the fold deferred until after first paint */}
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ValuesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ImpactSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div id="products">
            <ProductsSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CommunitySection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
