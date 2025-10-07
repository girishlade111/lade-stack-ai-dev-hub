import { Link } from "react-router-dom";
import { Lightbulb, Users, Award, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Lade Stack</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionizing the software development lifecycle with AI-powered tools that accelerate innovation and empower developers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                  Founded in 2020 by Girish Lade, Lade Stack emerged from a simple yet powerful vision: to democratize access to enterprise-grade AI development tools. As a developer himself, Girish experienced firsthand the challenges of building scalable applications with limited resources.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                  What started as a personal project to streamline his own workflow quickly evolved into a comprehensive platform after realizing the broader impact these tools could have on the developer community. Today, Lade Stack serves thousands of developers and teams worldwide, helping them build better software faster.
                </p>
                <div className="bg-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-primary/10 mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Our Mission: Democratizing Advanced Development Tools</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Core <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Principles that guide everything we build and every decision we make
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
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

        {/* Team Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Passionate developers, designers, and innovators dedicated to advancing the future of software development
                </p>
              </div>

              <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border animate-slide-up">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-4xl font-bold transition-smooth hover:scale-105">
                      GL
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Girish Lade
                    </h3>
                    <p className="text-primary font-semibold text-base sm:text-lg mb-2">
                      Founder & Lead Developer
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      With over 8 years of experience in software development and AI research, Girish leads our team with a vision to transform how developers build applications. His expertise in machine learning and cloud architecture drives our product innovation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center animate-fade-in">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth hover:scale-105"
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