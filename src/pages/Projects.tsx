import { Link } from "react-router-dom";
import { ExternalLink, Globe, FileText, Brain, Star, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BentoImageGrid from "@/components/BentoImageGrid";

const projects = [
  {
    id: "api-testing",
    title: "API Testing Platform",
    description: "Automated API testing with AI-powered validation and performance monitoring.",
    shortDescription: "AI-powered API testing and validation.",
    fullDescription: "A comprehensive platform for automated API testing, featuring AI-driven test generation, real-time monitoring, and detailed performance analytics.",
    icon: Globe,
    coverImage: "/api-testing-project.svg",
    features: ["AI Test Generation", "Real-time Monitoring", "Performance Analytics"],
    status: "Live",
    stats: { users: "10k+", time: "5m", rating: "4.9" },
    useCases: ["Enterprise API Testing", "CI/CD Integration"],
    integrations: ["GitHub", "GitLab", "Jenkins"]
  },
  {
    id: "website-builder",
    title: "AI Website Builder",
    description: "Create stunning, responsive websites in minutes with our AI-powered builder.",
    shortDescription: "Build websites instantly with AI.",
    fullDescription: "Generate professional websites with AI. Just describe your vision, and our builder creates the layout, content, and styling automatically.",
    icon: FileText,
    coverImage: "/website-builder-project.svg",
    features: ["AI Layout Generation", "Smart Content Writing", "Responsive Design"],
    status: "Beta",
    stats: { users: "5k+", time: "10m", rating: "4.8" },
    useCases: ["Portfolio Creation", "Landing Pages"],
    integrations: ["Stripe", "Mailchimp"]
  },
  {
    id: "file-management",
    title: "Lade Share: Online file sharing platform",
    description: "Secure, AI-enhanced file storage and organization for teams.",
    shortDescription: "Smart file organization and security.",
    fullDescription: "Next-generation file management system that uses AI to organize, tag, and secure your documents automatically.",
    icon: FileText,
    coverImage: "/file-management-project.svg",
    features: ["Auto-tagging", "Smart Search", "Secure Sharing"],
    status: "Live",
    stats: { users: "8k+", time: "2m", rating: "4.7" },
    useCases: ["Enterprise Document Management", "Team Collaboration"],
    integrations: ["Google Drive", "Dropbox"]
  },
  {
    id: "documentation-ai",
    title: "Documentation AI",
    description: "Transform your code into comprehensive, human-readable documentation automatically.",
    shortDescription: "Automated code documentation.",
    fullDescription: "Keep your documentation always up-to-date. Our AI analyzes your codebase and generates detailed documentation, API references, and usage guides.",
    icon: FileText,
    coverImage: "/documentation-ai-project.svg",
    features: ["Code Analysis", "Auto-updates", "Multi-language Support"],
    status: "Live",
    stats: { users: "12k+", time: "5m", rating: "4.9" },
    useCases: ["Library Documentation", "Internal Wikis"],
    integrations: ["GitHub", "VS Code"]
  },
  {
    id: "ai-code-viewer",
    title: "AI Code Viewer",
    description: "Visualize and understand complex codebases with interactive AI explanations.",
    shortDescription: "Interactive code visualization and explanation.",
    fullDescription: "Navigate complex codebases with ease. AI Code Viewer provides interactive diagrams, flowcharts, and plain-English explanations of code logic.",
    icon: Brain,
    coverImage: "/ai-code-viewer-project.svg",
    features: ["Visual Flowcharts", "Logic Explanation", "Dependency Mapping"],
    status: "Beta",
    stats: { users: "3k+", time: "1m", rating: "4.6" },
    useCases: ["Code Onboarding", "Legacy Code Analysis"],
    integrations: ["VS Code", "IntelliJ"]
  }
];

const caseStudies = [
  {
    id: 1,
    title: "FinTech Enterprise Transformation",
    description: "How a major financial institution reduced API testing time by 70% using our platform.",
    image: "/case-study-1.jpg",
    tags: ["FinTech", "API Testing", "Enterprise"],
    company: "FinCorp",
    industry: "Finance",
    logo: "FC",
    challenge: "Manual API testing was slow and error-prone.",
    result: "70% reduction in testing time and zero critical bugs in production."
  },
  {
    id: 2,
    title: "E-commerce Scaling Success",
    description: "Scaling documentation for a global e-commerce giant handling millions of requests.",
    image: "/case-study-2.jpg",
    tags: ["E-commerce", "Documentation", "Scaling"],
    company: "ShopGlobal",
    industry: "E-commerce",
    logo: "SG",
    challenge: "Documentation was outdated and hard to maintain.",
    result: "Automated documentation updates saved 20 hours/week per developer."
  },
  {
    id: 3,
    title: "Startup Rapid Prototyping",
    description: "Building a production-ready SaaS product in 2 weeks with our Website Builder.",
    image: "/case-study-3.jpg",
    tags: ["Startup", "No-Code", "Speed"],
    company: "LaunchPad",
    industry: "Technology",
    logo: "LP",
    challenge: "Needed to launch MVP in 2 weeks with limited resources.",
    result: "Launched on time with a fully responsive, SEO-optimized website."
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.12),_transparent_60%)]" />
        <div className="absolute top-[35%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.07),_transparent_55%)]" />
        <div className="absolute bottom-[10%] left-[30%] w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_55%)]" />
      </div>
      <SEO
        title="Our Projects - Lade Stack"
        description="Explore our suite of AI-powered developer tools designed to boost productivity and streamline your workflow."
        keywords="AI tools, developer tools, API testing, website builder, file management, documentation AI"
      />
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
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-border rounded-lg overflow-hidden hover:border-border/80 transition-all duration-300 hover:shadow-lg bg-card dark:bg-card/80"
                  >
                    {/* Cover Image */}
                    <div className="h-28 sm:h-32 lg:h-36 bg-muted dark:bg-muted/30 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <div className="absolute top-2 left-2 w-6 h-6 bg-foreground rounded-lg flex items-center justify-center shadow-sm">
                        <project.icon className="w-3 h-3 text-background" />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 space-y-3">
                      <h3 className="text-sm font-medium text-foreground leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-muted dark:bg-muted/50 text-muted-foreground text-xs rounded border border-border"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full text-xs hover:bg-muted/80 dark:hover:bg-muted/60 border-border hover:border-border/80 transition-all duration-300" asChild>
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

        {/* Bento Image Grid */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-6 text-center">Project Visual Showcase</h2>
              <BentoImageGrid
                images={[
                  { src: "/api-testing-project.svg", alt: "API Testing Platform", size: "large" },
                  { src: "/website-builder-project.svg", alt: "Website Builder", size: "medium" },
                  { src: "/file-management-project.svg", alt: "File Management", size: "medium" },
                  { src: "/documentation-ai-project.svg", alt: "Documentation AI", size: "small" },
                  { src: "/ai-code-viewer-project.svg", alt: "AI Code Viewer", size: "small" },
                  { src: "/AIcode.png", alt: "Code Enhancement", size: "small" }
                ]}
              />
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
                    key={study.id}
                    className="border border-border rounded-lg p-4 hover:border-border/80 transition-all duration-300 hover:shadow-md bg-card dark:bg-card/80"
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
              <div className="border border-border rounded-lg p-4 text-center bg-card dark:bg-card/80">
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
                    ✨ All Tools Lifetime Free
                  </Button>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-center gap-2 text-xs text-foreground font-medium">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-Powered • No Credit Card Required • Forever Free</span>
                  </div>
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