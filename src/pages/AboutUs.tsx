import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Users, Award, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import girishImage from "@/assets/girish.jpg";

const AboutUs = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "About Lade Stack - AI-Powered Development Tools & Modern Developer Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Lade Stack\'s mission to democratize AI-powered development tools. Founded by Girish Lade, we provide enterprise-grade tools for developers worldwide.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about Lade Stack\'s mission to democratize AI-powered development tools. Founded by Girish Lade, we provide enterprise-grade tools for developers worldwide.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Lade Stack about, AI development tools, Girish Lade founder, software development, artificial intelligence, developer productivity');
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'Lade Stack about, AI development tools, Girish Lade founder, software development, artificial intelligence, developer productivity';
      document.head.appendChild(keywordsMeta);
    }

    // Open Graph Meta Tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('og:title', 'About Lade Stack - AI-Powered Development Tools');
    updateMetaTag('og:description', 'Learn about Lade Stack\'s mission to democratize AI-powered development tools and empower developers worldwide with enterprise-grade tools.');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:image', `${window.location.origin}/og-about.png`);

    // Twitter Meta Tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', 'About Lade Stack - AI-Powered Development Tools');
    updateTwitterMeta('twitter:description', 'Learn about Lade Stack\'s mission to democratize AI-powered development tools.');

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Lade Stack",
      "description": "AI-powered development tools and software development platform founded by Girish Lade.",
      "url": "https://ladestack.in",
      "logo": "https://ladestack.in/logo.png",
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Girish Lade",
        "jobTitle": "Founder & Lead Developer",
        "url": "https://ladestack.in/about"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "girishlade111@gmail.com",
        "contactType": "customer support"
      },
      "sameAs": [
        "https://www.instagram.com/girish_lade_/",
        "https://www.linkedin.com/in/girish-lade-075bba201/",
        "https://github.com/girishlade111",
        "https://codepen.io/Girish-Lade-the-looper"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, []);
  const values = [
    {
      icon: Lightbulb,
      title: "AI-First Innovation",
      description: "Cutting-edge artificial intelligence integrated into every tool, delivering intelligent automation that learns from your development patterns and optimizes workflows in real-time.",
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Enterprise-grade tools accessible to individual developers and small teams. Scale from startup to enterprise without changing platforms or rebuilding infrastructure.",
    },
    {
      icon: Award,
      title: "Production-Ready Quality",
      description: "Battle-tested tools used by Fortune 500 companies with 99.9% uptime, enterprise security, and compliance certifications including SOC2 and GDPR.",
    },
    {
      icon: Eye,
      title: "Open Source Transparency",
      description: "Core algorithms and integrations are open source. Full API documentation, webhook support, and extensible architecture for custom integrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                About Lade Stack
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing the software development lifecycle with AI-powered tools that accelerate innovation and empower developers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="border border-border rounded-lg p-4">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Our Story
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Founded in 2020 by Girish Lade, Lade Stack emerged from a simple yet powerful vision: to democratize access to enterprise-grade AI development tools. As a developer himself, Girish experienced firsthand the challenges of building scalable applications with limited resources.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  What started as a personal project to streamline his own workflow quickly evolved into a comprehensive platform after realizing the broader impact these tools could have on the developer community. Today, Lade Stack serves thousands of developers and teams worldwide, helping them build better software faster.
                </p>
                <div className="bg-muted/30 rounded p-3 border border-border">
                  <h3 className="text-sm font-medium text-foreground mb-2">Our Mission: Democratizing Advanced Development Tools</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We're revolutionizing the software development lifecycle by providing enterprise-grade AI tools
                    that were previously only available to large tech companies. Our platform reduces development time by 70%
                    while maintaining code quality and security standards that modern applications demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Core Values
                </h2>
                <p className="text-xs text-muted-foreground max-w-xl mx-auto">
                  Principles that guide everything we build and every decision we make
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="border border-border rounded-lg p-3 hover:bg-muted/30 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-3 h-3 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-foreground mb-1">
                          {value.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Meet Our Team
                </h2>
                <p className="text-xs text-muted-foreground max-w-xl mx-auto">
                  Passionate developers, designers, and innovators dedicated to advancing the future of software development
                </p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={girishImage}
                      alt="Girish Lade - Founder & Lead Developer"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      Girish Lade
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      Founder & Lead Developer
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      With over 8 years of experience in software development and AI research, Girish leads our team with a vision to transform how developers build applications. His expertise in machine learning and cloud architecture drives our product innovation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-3 py-1.5 bg-foreground text-background text-xs hover:opacity-80 transition-opacity"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;