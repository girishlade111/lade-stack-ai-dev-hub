import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, FileText, Brain, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

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
    stats: { users: "10k+", time: "5m", rating: "4.9", uptime: "99.9%" },
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
    stats: { users: "5k+", time: "10m", rating: "4.8", uptime: "99.5%" },
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
    stats: { users: "8k+", time: "2m", rating: "4.7", uptime: "99.8%" },
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
    stats: { users: "12k+", time: "5m", rating: "4.9", uptime: "99.9%" },
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
    stats: { users: "3k+", time: "1m", rating: "4.6", uptime: "99.7%" },
    useCases: ["Code Onboarding", "Legacy Code Analysis"],
    integrations: ["VS Code", "IntelliJ"]
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Project Not Found - Lade Stack"
          description="The requested project could not be found."
          keywords="project not found, 404"
        />
        <Header />
        <main className="pt-16">
          {/* ... existing not found content ... */}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${project.title} - Lade Stack`}
        description={project.shortDescription}
        keywords={`${project.title}, ${project.features.map(f => f.split(' - ')[0]).join(', ')}, AI tools, developer tools`}
        ogTitle={`${project.title} - AI Development Tool`}
        ogDescription={project.fullDescription.substring(0, 160) + "..."}
        ogImage={`${window.location.origin}${project.id === 'api-testing' ? '/api-testing-project.svg' : project.id === 'website-builder' ? '/website-builder-project.svg' : project.id === 'file-management' ? '/file-management-project.svg' : project.id === 'documentation-ai' ? '/documentation-ai-project.svg' : '/ai-code-viewer-project.svg'}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.fullDescription,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
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

              {/* CTA Button */}
              <div className="flex justify-center mb-8">
                <Button size="lg" className="text-lg px-8 py-6" asChild={true}>
                  <Link to={project.id === "ai-code-viewer" ? "/ai-code-viewer-ai" : project.id === "file-management" ? "/file-sharing-platform" : project.id === "api-testing" ? "/api-testing-platform" : "#"}>
                    Start Free Trial
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
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

        {/* Bento Image Grid - Project Specific */}
        {/* Temporarily disabled - BentoImageGrid component not found */}
        {/* <section className="py-8 sm:py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-foreground mb-6">Visual Interface Showcase</h2>
            </div>
          </div>
        </section> */}

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
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg" asChild={true}>
                  <Link to={project.id === "ai-code-viewer" ? "/ai-code-viewer-ai" : project.id === "file-management" ? "/file-sharing-platform" : project.id === "api-testing" ? "/api-testing-platform" : "#"}>
                    Start Using AI Tool Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
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
