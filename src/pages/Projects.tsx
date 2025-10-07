import { Link } from "react-router-dom";
import { ExternalLink, Code, Globe, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      icon: Code,
      title: "AI-Powered API Testing Platform",
      description: "Revolutionary API testing suite with intelligent test generation, automated regression testing, and real-time performance monitoring. Supports REST, GraphQL, and WebSocket APIs with zero-config setup.",
      features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "No-Code Website Builder with AI",
      description: "Enterprise-grade website builder powered by GPT-4. Generate responsive, SEO-optimized websites from simple prompts. Includes e-commerce, analytics, and custom domain support.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Cloud File Management & CDN",
      description: "Scalable file storage with global CDN, automatic image optimization, and team collaboration features. SOC2 compliant with advanced encryption and access controls.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation, API specs, and technical summaries. Integrates with GitHub, GitLab, and popular IDEs.",
      features: ["Code Context AI", "IDE Integration", "Multi-language Support"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      industry: "Financial Services",
      challenge: "Reduced API testing time from hours to minutes with our AI-powered platform",
      result: "Saved 40+ hours per sprint, improved test coverage by 85%",
      logo: "TC",
    },
    {
      company: "StartupX",
      industry: "E-commerce",
      challenge: "Launched MVP 3 weeks ahead of schedule using our no-code builder",
      result: "Non-technical team members can now make website updates independently",
      logo: "SX",
    },
    {
      company: "DevStudio",
      industry: "Software Development",
      challenge: "Streamlined documentation process for 50+ microservices",
      result: "Reduced documentation time by 70%, improved onboarding speed by 50%",
      logo: "DS",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Four powerful SaaS tools that cover your entire development lifecycle. Each tool saves 10+ hours per week and integrates seamlessly with your existing workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border hover:shadow-large transition-smooth hover:-translate-y-1"
                  >
                    {/* Project Icon */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-bounce`}>
                        <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 sm:px-3 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-2 sm:pt-4">
                        <Button variant="outline" size="sm" className="group/btn w-full sm:w-auto">
                          Learn More
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  See how innovative teams are transforming their development workflow with our tools
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {caseStudies.map((study) => (
                  <div
                    key={study.company}
                    className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border hover:shadow-large transition-smooth"
                  >
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{study.company}</h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Start Your 14-Day Free Trial - No Credit Card Required
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                  Join 1000+ developers already saving 40+ hours per week. Full access to all AI tools, 
                  premium templates, and priority support. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Pricing Plans
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Link to="/contact" className="text-primary hover:underline">
                    Have questions? Contact our sales team
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

export default Projects;