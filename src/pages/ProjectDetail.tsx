import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code, Globe, FileText, Brain, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Project data - same as in Projects.tsx but with more detailed content
  const projects = [
    {
      id: "api-testing",
      icon: Code,
      title: "AI-Powered API Testing Platform",
      shortDescription: "Revolutionary API testing suite with intelligent test generation and real-time monitoring.",
      fullDescription: "Our AI-Powered API Testing Platform revolutionizes how teams approach API testing. With intelligent test generation, automated regression testing, and real-time performance monitoring, we support REST, GraphQL, and WebSocket APIs with zero-config setup. The platform uses machine learning algorithms to predict potential failure points and automatically generates comprehensive test suites.",
      features: [
        "AI Test Generation - Automatically create test cases from API specifications",
        "Performance Analytics - Real-time monitoring and detailed performance insights",
        "CI/CD Integration - Seamless integration with popular CI/CD pipelines",
        "Multi-Protocol Support - REST, GraphQL, WebSocket, and gRPC",
        "Smart Assertions - AI-powered assertion generation",
        "Mock Server Generation - Automatic mock server creation",
        "Test History & Analytics - Detailed test execution history",
        "Collaborative Testing - Team collaboration features"
      ],
      stats: { users: "25K+", time: "< 5min", rating: "4.9", uptime: "99.9%" },
      status: "Live",
      gradient: "from-blue-500 to-cyan-500",
      useCases: [
        "Development teams testing API endpoints",
        "QA teams performing regression testing",
        "DevOps teams monitoring API performance",
        "Product teams validating API functionality"
      ],
      integrations: ["GitHub Actions", "Jenkins", "GitLab CI", "CircleCI", "Slack", "Microsoft Teams"],
      pricing: "100% Free - Lifetime access for all users"
    },
    {
      id: "website-builder",
      icon: Globe,
      title: "No-Code Website Builder with AI",
      shortDescription: "Enterprise-grade website builder powered by GPT-4 with responsive design generation.",
      fullDescription: "Transform your ideas into fully functional websites with our enterprise-grade AI-powered builder. Powered by GPT-4, our platform generates responsive, SEO-optimized websites from simple prompts. Whether you're a non-technical entrepreneur or a seasoned developer, create professional websites with e-commerce capabilities, analytics integration, and custom domain support in minutes, not hours.",
      features: [
        "GPT-4 Generation - AI-powered content and design generation",
        "SEO Optimization - Built-in SEO best practices and optimization",
        "E-commerce Ready - Integrated shopping cart and payment processing",
        "Custom Domain Support - Connect your own domain easily",
        "Analytics Integration - Built-in analytics and tracking",
        "Responsive Design - Mobile-first responsive layouts",
        "Template Library - Professional templates for any industry",
        "Drag & Drop Editor - Intuitive visual editing interface"
      ],
      stats: { users: "15K+", time: "< 2min", rating: "4.8", uptime: "99.8%" },
      status: "Live",
      gradient: "from-purple-500 to-pink-500",
      useCases: [
        "Small businesses creating their first website",
        "Agencies building client websites quickly",
        "E-commerce businesses setting up online stores",
        "Startups creating landing pages and MVPs"
      ],
      integrations: ["Stripe", "PayPal", "Google Analytics", "Mailchimp", "Shopify", "WooCommerce"],
      pricing: "100% Free - Lifetime access for all users"
    },
    {
      id: "file-management",
      icon: FileText,
      title: "Cloud File Management & CDN",
      shortDescription: "Scalable file storage with global CDN, automatic optimization, and team collaboration.",
      fullDescription: "Our Cloud File Management platform provides enterprise-grade file storage with global CDN distribution. Features automatic image optimization, advanced encryption, and comprehensive access controls. The platform is SOC2 compliant and includes team collaboration features, version control, and intelligent file organization. Perfect for businesses that need reliable, secure, and scalable file storage solutions.",
      features: [
        "Global CDN - Fast file delivery worldwide",
        "Auto Optimization - Automatic image and file compression",
        "Enterprise Security - Advanced encryption and access controls",
        "SOC2 Compliance - Enterprise-grade security certifications",
        "Team Collaboration - Real-time collaboration features",
        "Version Control - Complete file history and rollback",
        "Intelligent Organization - AI-powered file categorization",
        "API Access - Comprehensive REST and GraphQL APIs"
      ],
      stats: { users: "10K+", time: "< 1min", rating: "4.9", uptime: "99.95%" },
      status: "Live",
      gradient: "from-green-500 to-emerald-500",
      useCases: [
        "Media companies distributing content globally",
        "Software companies storing build artifacts",
        "Design agencies managing client assets",
        "Enterprises needing secure file collaboration"
      ],
      integrations: ["AWS S3", "Google Cloud", "Azure", "Slack", "Microsoft 365", "Adobe Creative Suite"],
      pricing: "100% Free - Lifetime access for all users"
    },
    {
      id: "documentation-ai",
      icon: Brain,
      title: "Technical Documentation AI",
      shortDescription: "Advanced AI that understands code context and generates comprehensive documentation.",
      fullDescription: "Revolutionary AI-powered documentation platform that understands your codebase and generates comprehensive, accurate documentation. Our advanced algorithms analyze code context, function relationships, and usage patterns to create detailed API specifications, technical summaries, and user guides. Integrates seamlessly with GitHub, GitLab, and popular IDEs to keep documentation automatically updated as your code evolves.",
      features: [
        "Code Context AI - Understands code relationships and patterns",
        "IDE Integration - Works with VS Code, IntelliJ, and more",
        "Multi-language Support - Supports 20+ programming languages",
        "Auto Updates - Documentation updates with code changes",
        "API Spec Generation - Automatic OpenAPI/Swagger generation",
        "Interactive Docs - Live, interactive documentation",
        "Version History - Track documentation changes over time",
        "Team Collaboration - Collaborative documentation editing"
      ],
      stats: { users: "8K+", time: "< 3min", rating: "4.7", uptime: "99.7%" },
      status: "Beta",
      gradient: "from-orange-500 to-red-500",
      useCases: [
        "Software teams documenting APIs",
        "Open source projects creating docs",
        "Enterprise teams maintaining technical documentation",
        "New developer onboarding"
      ],
      integrations: ["GitHub", "GitLab", "Bitbucket", "VS Code", "IntelliJ", "Slack"],
      pricing: "100% Free - Lifetime access for all users"
    },
    {
      id: "ai-code-viewer",
      icon: Brain,
      title: "AI-Powered HTML, CSS & JS Code Viewer, Compiler, Editor & Enhancer",
      shortDescription: "Revolutionary AI-powered code editor with real-time compilation, intelligent code enhancement, and advanced debugging capabilities.",
      fullDescription: "Our AI-Powered HTML, CSS & JS Code Viewer, Compiler, Editor & Enhancer is the ultimate tool for front-end developers. This revolutionary platform combines the power of AI with advanced code editing capabilities, offering real-time compilation, intelligent code enhancement, and comprehensive debugging tools. Whether you're building your first webpage or developing complex web applications, our AI assistant helps you write better code faster with features like automatic error detection, performance optimization suggestions, and smart code completions. The platform supports live preview, multiple file editing, and provides instant feedback to help you learn and improve your coding skills.",
      features: [
        "AI Code Enhancement - Intelligent code suggestions and automatic optimization",
        "Real-time Compilation - Instant preview and error detection for HTML, CSS, and JavaScript",
        "Advanced Code Editor - Syntax highlighting, auto-completion, and code folding",
        "Live Preview Engine - Real-time browser preview with responsive design testing",
        "Smart Debugging - AI-powered error detection and suggested fixes",
        "Performance Analyzer - Code optimization recommendations and performance metrics",
        "Multi-File Support - Manage complete web projects with file tree navigation",
        "Code Snippet Library - Pre-built components and templates with AI customization",
        "Version Control Integration - Built-in Git support and code history tracking",
        "Collaborative Editing - Real-time collaboration with team members",
        "Export & Deploy - One-click deployment to popular hosting platforms",
        "Responsive Testing - Device simulation and cross-browser compatibility checks"
      ],
      stats: { users: "12K+", time: "< 30sec", rating: "4.8", uptime: "99.9%" },
      status: "Live",
      gradient: "from-indigo-500 to-purple-500",
      useCases: [
        "Front-end developers building responsive websites",
        "Web designers creating interactive prototypes",
        "Students learning web development with AI assistance",
        "Freelancers and agencies delivering client projects quickly",
        "Code reviewers and mentors providing feedback",
        "Teams collaborating on front-end development projects",
        "Startups building MVP web applications rapidly",
        "Educators teaching modern web development practices"
      ],
      integrations: ["VS Code", "GitHub", "GitLab", "Bitbucket", "Chrome DevTools", "Figma", "Adobe XD", "Slack", "Microsoft Teams"],
      pricing: "100% Free - Lifetime access for all users"
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center py-16">
              <h1 className="text-xl font-semibold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link to="/projects">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                  </Link>
                </Button>
              </div>

              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                        {project.title}
                      </h1>
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {project.stats.users}
                  </div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
                <div className="border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {project.stats.time}
                  </div>
                  <div className="text-xs text-muted-foreground">Setup Time</div>
                </div>
                <div className="border border-border rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-muted-foreground fill-current" />
                    <span className="text-sm font-semibold text-foreground">
                      {project.stats.rating}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
                <div className="border border-border rounded-lg p-4 text-center">
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {project.stats.uptime}
                  </div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg" className="flex-1" asChild={project.id === "ai-code-viewer"}>
                  {project.id === "ai-code-viewer" ? (
                    <Link to="/ai-code-viewer-ai">
                      Start Free Trial
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <>
                      Start Free Trial
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <p className="text-sm text-foreground font-medium mb-1">
                      {feature.split(' - ')[0]}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {feature.split(' - ')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-6">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.useCases.map((useCase, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <p className="text-sm text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-6">Integrations</h2>
              <div className="flex flex-wrap gap-2">
                {project.integrations.map((integration, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {integration}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="border border-border rounded-lg p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Lifetime Free Access</h2>
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium mb-4">
                    ✨ Powered by Advanced AI - No Hidden Costs, No Limits ✨
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited usage for all features</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered enhancements and optimizations</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium integrations and collaboration tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 AI support and updates</span>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg" asChild={project.id === "ai-code-viewer"}>
                  {project.id === "ai-code-viewer" ? (
                    <Link to="/ai-code-viewer-ai">
                      Start Using AI Tool Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  ) : (
                    <>
                      Start Using AI Tool Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  💡 AI-enhanced development tools • Forever free • No credit card required
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;