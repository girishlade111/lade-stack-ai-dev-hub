import { Lightbulb, Users, Award, Eye } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">Lade Stack</span> is the Future of Development
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The complete AI-powered development platform trusted by modern developers and startups worldwide
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Lade Stack is the industry-leading SaaS platform that transforms how developers build, test, and deploy applications. 
                Our comprehensive suite of AI-powered development tools eliminates bottlenecks, automates repetitive tasks, 
                and accelerates time-to-market for software projects of any scale.
              </p>
              
              <div className="bg-primary/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-primary/10">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Our Mission: Democratizing Advanced Development Tools</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We're revolutionizing the software development lifecycle by providing enterprise-grade AI tools 
                  that were previously only available to large tech companies. Our platform reduces development time by 70% 
                  while maintaining code quality and security standards that modern applications demand.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth group"
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

          {/* Social Proof */}
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
              Trusted by 1000+ Developers and Growing Startups
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-medium border border-border">
                <p className="text-base sm:text-lg italic text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  "Lade Stack reduced our API testing time from hours to minutes. The AI-powered test generation 
                  catches edge cases we never thought of. ROI was immediate - saved 40+ hours per sprint."
                </p>
                <div className="text-sm sm:text-base text-primary font-semibold">
                  - Sarah Chen, Senior Backend Engineer at TechCorp
                </div>
              </div>
              <div className="bg-card rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-medium border border-border">
                <p className="text-base sm:text-lg italic text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  "The no-code website builder helped us launch our MVP 3 weeks ahead of schedule. 
                  Even non-technical team members can make updates. Game-changer for our startup."
                </p>
                <div className="text-sm sm:text-base text-primary font-semibold">
                  - Marcus Rodriguez, CTO at StartupX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;