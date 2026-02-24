import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, Users, Award, Eye, ExternalLink, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import girishImage from "@/assets/girish.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Sparkles,
      title: "AI-First Innovation",
      description: "Every Lade Stack product begins with intelligent automation — from smart build pipelines to autonomous testing agents. We're redefining how developers work with machine learning as their co-creator.",
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Lade Stack is built by a developer, for developers. We focus on creating intuitive, accessible, and powerful tools that remove friction and enhance creativity.",
    },
    {
      icon: Award,
      title: "Production-Ready Quality",
      description: "We don't just build prototypes — we build production-grade systems with high uptime, enterprise-level security, and world-class scalability.",
    },
    {
      icon: Eye,
      title: "Open Source Transparency",
      description: "Transparency is our foundation. Our open-source initiatives, clear documentation, and API accessibility enable true collaboration across the developer community.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.12),_transparent_65%)]" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.07),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.06),_transparent_60%)]" />
      </div>
      <SEO
        title="About Lade Stack - Empowering Developers Through AI Innovation & Visionary Leadership"
        description="Discover Lade Stack's inspiring journey from a developer's vision to an AI-powered development ecosystem. Founded by Girish Lade, we democratize advanced development tools for creators worldwide."
        keywords="Lade Stack about, AI development revolution, Girish Lade founder story, developer empowerment, AI-first innovation, full-stack development, SaaS product innovation"
        ogTitle="About Lade Stack - Visionary AI Development Tools & Founder Story"
        ogDescription="Learn how Girish Lade transformed from a passionate developer to founding Lade Stack - an AI-powered ecosystem revolutionizing how creators build, test, and deploy modern applications."
        ogImage={`${window.location.origin}/og-about.png`}
        twitterTitle="About Lade Stack - AI Development Revolution & Founder Story"
        twitterDescription="Discover how Girish Lade's vision became Lade Stack - transforming developer workflows through AI-powered tools and innovation."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lade Stack",
          "description": "AI-powered development tools ecosystem founded by Girish Lade, democratizing advanced development tools for creators and startups worldwide.",
          "url": "https://ladestack.in",
          "logo": "https://ladestack.in/logo.png",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Girish Lade",
            "jobTitle": "Founder & Lead Developer",
            "url": "https://ladestack.in/about",
            "description": "Multi-disciplinary engineer and designer with expertise in AI systems, web development, and user experience"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "admin@ladestack.in",
            "contactType": "customer support"
          },
          "sameAs": [
            "https://www.instagram.com/girish_lade_/",
            "https://www.linkedin.com/in/girish-lade-075bba201/",
            "https://github.com/girishlade111",
            "https://codepen.io/Girish-Lade-the-looper"
          ]
        }}
      />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Lade Stack</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering developers through innovation, automation, and intelligence
              </p>
              <p className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Lade Stack redefines how developers build, test, and deploy modern applications with AI-powered tools that accelerate workflows, ensure production-grade reliability, and simplify development for teams of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className={`border border-border rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-background to-muted/10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-background" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Our Story
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                    In 2020, Girish Lade — an engineer, developer, and designer — began building something extraordinary. What started as a personal mission to streamline his own development process quickly evolved into a vision that would transform how creators and startups approach software development.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed">
                    Born from years of working on multi-LLM projects and AI automation tools, Girish witnessed firsthand the power of intelligent systems. His journey from building personal productivity tools to full-fledged e-commerce platforms revealed a critical gap in the market: most developers lacked access to enterprise-grade AI capabilities that could democratize advanced development practices.
                  </p>

                  <div className="bg-muted/20 rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">The Pivot Point</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      What began as Girish's early work in AI integrations, UX/UI design, and backend systems became the foundation for something bigger. The transition from personal productivity tools to an entire suite of intelligent development utilities wasn't just business growth — it was a response to a calling. A calling to empower developers worldwide, regardless of their scale or resources.
                    </p>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed">
                    Today, Lade Stack stands as a testament to what passionate innovation can achieve. We're not just building tools; we're building the future of development — one where AI and human creativity work in perfect harmony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className={`border border-border rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-muted/10 to-background transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-background" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Our Mission
                  </h2>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Lade Stack's mission is to bridge the gap between complex AI systems and everyday developers. We believe innovation should be inclusive, transparent, and human-centered — enabling developers to build smarter, faster, and better.
                  </p>

                  <p className="text-base sm:text-lg leading-relaxed">
                    Our focus is making enterprise-grade capabilities accessible — like automation, smart APIs, and multi-agent collaboration systems. We're transforming the development landscape by ensuring that cutting-edge AI tools aren't just for tech giants, but for every passionate creator with a vision.
                  </p>

                  <div className="bg-foreground/5 rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Our Philosophy</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      At Lade Stack, we believe technology should amplify human potential — not replace it. Our journey continues as we push boundaries in AI-driven development, open innovation, and community-led engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Core Values
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Principles that guide everything we build and every decision we make
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className={`border border-border rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300 hover:scale-105 hover:shadow-lg transition-all duration-1000 delay-${900 + index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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

        {/* Meet Our Team Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Our Team
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Passionate developers, designers, and innovators dedicated to advancing the future of software development
                </p>
              </div>

              <div className={`border border-border rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-background to-muted/10 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Image is 2262×3393 (2:3 portrait). Width is fixed; height
                          follows the natural aspect ratio via aspect-[2/3] so the
                          full portrait is visible without cropping. */}
                      <img
                        src={girishImage}
                        alt="Girish Lade - Founder & Lead Developer"
                        width={2262}
                        height={3393}
                        className="w-24 sm:w-32 aspect-[2/3] rounded-2xl object-cover shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-background" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Girish Lade
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 font-medium">
                      Founder & Lead Developer
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                      A multi-disciplinary engineer and designer with expertise in AI systems, web development, and user experience. Girish has developed multiple full-stack platforms including Lade Stack Dev Tools, AI-powered website builder, File Management System, Docs Summariser, and an E-commerce suite with Supabase and Genkit.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      His mission is to empower developers through creativity, intelligence, and collaboration — creating tools that don't just solve problems, but inspire innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
                      >
                        Connect with Girish
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                      <a
                        href="https://www.linkedin.com/in/girish-lade-075bba201/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-xl hover:bg-muted/20 transition-colors"
                      >
                        LinkedIn Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`border border-border rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-foreground/5 to-background transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="mb-8">
                  <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-background" />
                  </div>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-6">
                    "Innovation begins when imagination meets execution — and Lade Stack stands at that intersection."
                  </blockquote>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    At Lade Stack, we believe technology should amplify human potential — not replace it. Our journey continues as we push boundaries in AI-driven development, open innovation, and community-led engineering.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Try Our AI Tools
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-xl hover:bg-muted/20 transition-colors"
                  >
                    Explore Projects
                  </Link>
                </div>
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