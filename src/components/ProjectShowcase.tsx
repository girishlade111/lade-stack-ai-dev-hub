import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Code, Globe, FileText, Brain, Star, Users, Clock, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BentoImageGrid from "@/components/BentoImageGrid";

interface Project {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  stats: {
    users: string;
    time: string;
    rating: string;
    uptime: string;
  };
  status: string;
  coverImage: string;
  gradient: string;
  primaryColor: string;
  secondaryColor: string;
  mockupSvg: string;
  category: string;
  pricingModel: string;
}

const ProjectShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const [currentProject, setCurrentProject] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Enhanced project data with contextual visuals
  const projects: Project[] = [
    {
      id: "api-testing",
      icon: Code,
      title: "AI-Powered API Testing Platform",
      description: "Revolutionary API testing suite with intelligent test generation and real-time monitoring.",
      fullDescription: "Transform your API development workflow with our AI-powered testing platform. Generate comprehensive test suites automatically, monitor performance in real-time, and integrate seamlessly with your CI/CD pipeline.",
      features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration", "Real-time Monitoring"],
      stats: { users: "Many", time: "Quick", rating: "Excellent", uptime: "Reliable" },
      status: "Live",
      coverImage: "/api-testing-project.svg",
      gradient: "from-gray-800 via-gray-700 to-gray-900",
      primaryColor: "#000000",
      secondaryColor: "#6B7280",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#apiGradient)" rx="20"/>
        <rect x="50" y="80" width="700" height="440" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="70" y="100" width="660" height="60" fill="#f8fafc" rx="12"/>
        <circle cx="100" cy="130" r="8" fill="#ef4444"/>
        <circle cx="125" cy="130" r="8" fill="#f59e0b"/>
        <circle cx="150" cy="130" r="8" fill="#10b981"/>
        <text x="190" y="138" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#111827">API Testing Dashboard</text>
        <rect x="290" y="180" width="440" height="320" fill="#ffffff" rx="12"/>
        <rect x="310" y="200" width="400" height="200" fill="#f9fafb" rx="8"/>
        <polyline points="330,350 360,320 390,340 420,280 450,300 480,250 510,270 540,220 570,240 600,200 630,220 660,180"
                  fill="none" stroke="#111827" stroke-width="3"/>
      </svg>`,
      category: "API / Testing",
      pricingModel: "Free for developers"
    },
    {
      id: "website-builder",
      icon: Globe,
      title: "No-Code Website Builder with AI",
      description: "Enterprise-grade website builder powered by GPT-4 with responsive design generation.",
      fullDescription: "Create stunning websites in minutes with our AI-powered builder. From concept to deployment, transform your ideas into fully functional, responsive websites with built-in SEO and e-commerce capabilities.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready", "Responsive Design"],
      stats: { users: "Growing", time: "Fast", rating: "Great", uptime: "Stable" },
      status: "Live",
      coverImage: "/website-builder-project.svg",
      gradient: "from-gray-900 via-gray-800 to-gray-700",
      primaryColor: "#000000",
      secondaryColor: "#9CA3AF",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#webGradient)" rx="20"/>
        <rect x="50" y="50" width="700" height="500" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="80" y="80" width="300" height="200" fill="#111827" rx="8"/>
        <rect x="85" y="85" width="290" height="170" fill="#ffffff" rx="4"/>
        <rect x="450" y="100" width="120" height="240" fill="#111827" rx="20"/>
        <rect x="80" y="320" width="640" height="200" fill="#f9fafb" rx="12"/>
        <rect x="100" y="340" width="600" height="60" fill="#ffffff" rx="8"/>
        <text x="120" y="375" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#111827">AI Website Generator</text>
      </svg>`,
      category: "Website Builder",
      pricingModel: "Free tier available"
    },
    {
      id: "file-management",
      icon: FileText,
      title: "File Sharing Platform",
      description: "Enterprise file sharing platform with global CDN, intelligent collaboration, and lifetime free access.",
      fullDescription: "Transform your file sharing experience with our advanced File Sharing Platform. Built for modern teams, this enterprise-grade solution offers lightning-fast global content delivery, intelligent file organization, and seamless collaboration features. Experience secure, scalable file management with automatic optimization, version control, and real-time synchronization across all devices. Whether you're sharing documents, media files, or project assets, our platform ensures your content is always accessible, secure, and optimized for peak performance.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security", "Team Collaboration"],
      stats: { users: "Active", time: "Instant", rating: "Excellent", uptime: "Excellent" },
      status: "Live",
      coverImage: "/file-management-project.svg",
      gradient: "from-gray-800 via-gray-700 to-gray-900",
      primaryColor: "#000000",
      secondaryColor: "#6B7280",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#cloudGradient)" rx="20"/>
        <rect x="50" y="80" width="700" height="440" fill="rgba(255,255,255,0.9)" rx="20"/>
        <g transform="translate(120, 180)">
          <ellipse cx="150" cy="80" rx="120" ry="60" fill="#f3f4f6" stroke="#374151" stroke-width="2"/>
          <rect x="120" y="60" width="25" height="30" fill="#111827" rx="3"/>
          <rect x="155" y="65" width="25" height="30" fill="#374151" rx="3"/>
          <rect x="190" y="60" width="25" height="30" fill="#6b7280" rx="3"/>
        </g>
        <rect x="350" y="160" width="380" height="200" fill="#ffffff" rx="12"/>
        <rect x="370" y="210" width="300" height="20" fill="#f3f4f6" rx="10"/>
        <rect x="370" y="210" width="240" height="20" fill="#111827" rx="10"/>
      </svg>`,
      category: "File Management",
      pricingModel: "Free for personal use"
    },
    {
      id: "documentation-ai",
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation.",
      fullDescription: "Revolutionary AI-powered documentation that understands your codebase. Generate comprehensive, accurate documentation that automatically updates as your code evolves.",
      features: ["Code Context AI", "IDE Integration", "Multi-language Support", "Auto Updates"],
      stats: { users: "Growing", time: "Quick", rating: "Good", uptime: "High" },
      status: "Beta",
      coverImage: "/documentation-ai-project.svg",
      gradient: "from-gray-900 via-gray-800 to-gray-700",
      primaryColor: "#000000",
      secondaryColor: "#9CA3AF",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#aiGradient)" rx="20"/>
        <rect x="50" y="60" width="700" height="480" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="70" y="150" width="660" height="120" fill="#ffffff" rx="12"/>
        <rect x="90" y="190" width="620" height="70" fill="#111827" rx="8"/>
        <rect x="100" y="200" width="80" height="4" fill="#374151" rx="2"/>
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="50" fill="#f9fafb" stroke="#111827" stroke-width="3"/>
          <path d="M-25,0 L25,0 M0,-25 L0,25" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
        </g>
        <rect x="70" y="370" width="320" height="150" fill="#f9fafb" rx="12"/>
        <rect x="410" y="370" width="320" height="150" fill="#f9fafb" rx="12"/>
      </svg>`,
      category: "AI Documentation",
      pricingModel: "Free trial available"
    },
    {
      id: "ai-code-viewer",
      icon: Brain,
      title: "AI Code Viewer, Compiler & Editor",
      description: "Revolutionary AI-powered code editor with real-time compilation and intelligent enhancement.",
      fullDescription: "The ultimate front-end development tool. Write, test, and optimize your code with AI assistance. Real-time compilation, intelligent suggestions, and advanced debugging capabilities.",
      features: ["AI Code Enhancement", "Real-time Compilation", "Advanced Code Editor", "Performance Analysis"],
      stats: { users: "Popular", time: "Instant", rating: "Great", uptime: "Reliable" },
      status: "Live",
      coverImage: "/AIcode.png",
      gradient: "from-gray-800 via-gray-700 to-gray-900",
      primaryColor: "#000000",
      secondaryColor: "#6B7280",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#codeGradient)" rx="20"/>
        <rect x="50" y="50" width="700" height="500" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="70" y="70" width="660" height="40" fill="#f3f4f6" rx="10"/>
        <circle cx="90" cy="90" r="6" fill="#374151"/>
        <circle cx="110" cy="90" r="6" fill="#6b7280"/>
        <circle cx="130" cy="90" r="6" fill="#111827"/>
        <rect x="290" y="120" width="450" height="400" fill="#ffffff" rx="8"/>
        <rect x="340" y="140" width="300" height="320" fill="#f9fafb" rx="4"/>
        <text x="350" y="160" font-family="ui-monospace, SFMono-Regular, monospace" font-size="12" fill="#111827"><div className="container"></text>
        <text x="370" y="180" font-family="ui-monospace, SFMono-Regular, monospace" font-size="12" fill="#374151">  <h1></text>
        <text x="390" y="200" font-family="ui-monospace, SFMono-Regular, monospace" font-size="12" fill="#6b7280">    AI-Powered Code Editor</text>
        <rect x="500" y="140" width="120" height="60" fill="#111827" rx="8"/>
        <text x="510" y="165" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#ffffff">AI Suggestion</text>
        <rect x="70" y="450" width="330" height="70" fill="#f9fafb" rx="8"/>
        <rect x="420" y="450" width="330" height="70" fill="#f9fafb" rx="8"/>
      </svg>`,
      category: "Code Editor",
      pricingModel: "Free tier available"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-cycle current project for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-8">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive suite of AI-powered development tools designed to accelerate your workflow and enhance productivity.
            </p>
          </div>

          {/* Project Showcases */}
          <div className="space-y-12 lg:space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleProjects.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="max-w-4xl mx-auto">
                  {/* Project Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                        <project.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Visual */}
                  <div className="relative mb-12">
                    <div className="relative overflow-hidden border border-border/50 transition-all duration-300 hover:border-border">
                      <div
                        className="relative w-full bg-muted/30"
                        style={{ aspectRatio: '16/9' }}
                      >
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Subtle border overlay */}
                      <div className="absolute inset-0 border border-border/20 pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-6">Key Features</h4>
                      <div className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-4 bg-muted/30 border border-border/50">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Status</span>
                          <span className="text-foreground font-medium">{project.status}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span className="text-muted-foreground">Pricing</span>
                          <span className="text-foreground font-medium">{project.pricingModel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description & Actions */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-6">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {project.fullDescription}
                      </p>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90" asChild>
                          <Link to={`/projects/${project.id}`}>
                            Learn More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background">
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bento Image Grid Section */}
          <div className="mt-20 lg:mt-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
                Visual Showcase Gallery
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive suite of AI-powered tools through visual examples and interface previews
              </p>
            </div>
            <BentoImageGrid 
              images={[
                { src: "/api-testing-project.svg", alt: "API Testing Platform", size: "large" },
                { src: "/website-builder-project.svg", alt: "Website Builder Interface", size: "medium" },
                { src: "/file-management-project.svg", alt: "File Management System", size: "medium" },
                { src: "/documentation-ai-project.svg", alt: "Documentation AI Tool", size: "small" },
                { src: "/ai-code-viewer-project.svg", alt: "AI Code Viewer Interface", size: "small" },
                { src: "/AIcode.png", alt: "Code Enhancement Features", size: "small" }
              ]}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 lg:mt-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="border border-border/50 bg-muted/20 p-12 lg:p-16">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
                  Ready to get started?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Explore our comprehensive suite of AI-powered development tools and see how they can enhance your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8" asChild>
                    <Link to="/projects">
                      View All Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;