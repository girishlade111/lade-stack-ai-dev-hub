import { Link } from "react-router-dom";
import { ExternalLink, Code, Globe, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      id: "api-testing",
      icon: Code,
      title: "AI-Powered API Testing Platform",
      description: "Revolutionary API testing suite with intelligent test generation, automated regression testing, and real-time performance monitoring. Supports REST, GraphQL, and WebSocket APIs with zero-config setup.",
      features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "website-builder",
      icon: Globe,
      title: "No-Code Website Builder with AI",
      description: "Enterprise-grade website builder powered by GPT-4. Generate responsive, SEO-optimized websites from simple prompts. Includes e-commerce, analytics, and custom domain support.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "file-management",
      icon: FileText,
      title: "Cloud File Management & CDN",
      description: "Scalable file storage with global CDN, automatic image optimization, and team collaboration features. SOC2 compliant with advanced encryption and access controls.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "documentation-ai",
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation, API specs, and technical summaries. Integrates with GitHub, GitLab, and popular IDEs.",
      features: ["Code Context AI", "IDE Integration", "Multi-language Support"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "ai-code-viewer",
      icon: Brain,
      title: "AI-Powered HTML, CSS & JS Code Viewer, Compiler, Editor & Enhancer",
      description: "Revolutionary AI-powered code editor with real-time compilation, intelligent code enhancement, and advanced debugging capabilities. Perfect for front-end developers who want to create, test, and optimize their web applications instantly.",
      features: ["AI Code Enhancement", "Real-time Compilation", "Advanced Code Editor"],
      gradient: "from-indigo-500 to-purple-500",
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
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Our Projects
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Five powerful SaaS tools that cover your entire development lifecycle. Each tool saves 10+ hours per week and integrates seamlessly with your existing workflow.
            </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors duration-200"
                  >
                    {/* Project Icon */}
                    <div className="relative mb-3">
                      <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center mb-2">
                        <project.icon className="w-4 h-4 text-background" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full text-xs hover:bg-muted/50" asChild>
                          <Link to={`/projects/${project.id}`}>
                            Learn More
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Link>
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
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Success Stories
                </h2>
                <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                  See how innovative teams are transforming their development workflow with our tools
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {caseStudies.map((study) => (
                  <div
                    key={study.company}
                    className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors duration-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-xs mr-3">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground">{study.company}</h3>
                        <p className="text-xs text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-xs font-medium text-foreground mb-1">Challenge:</h4>
                      <p className="text-xs text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-medium text-foreground mb-1">Result:</h4>
                      <p className="text-xs text-muted-foreground">{study.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="border border-border rounded-lg p-4 text-center">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Start Your 14-Day Free Trial - No Credit Card Required
                </h3>
                <p className="text-xs text-muted-foreground mb-3 max-w-2xl mx-auto">
                  Join 1000+ developers already saving 40+ hours per week. Full access to all AI tools,
                  premium templates, and priority support. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button size="sm" className="w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    View Pricing Plans
                  </Button>
                </div>
                
                <div className="mt-3">
                  <Link to="/contact" className="text-xs text-muted-foreground hover:underline">
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