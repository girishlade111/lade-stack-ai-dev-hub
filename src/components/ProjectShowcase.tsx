import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Code, Globe, FileText, Brain, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  icon: any;
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
      stats: { users: "25K+", time: "< 5min", rating: "4.9", uptime: "99.9%" },
      status: "Live",
      coverImage: "/api-testing-project.svg",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      primaryColor: "#3B82F6",
      secondaryColor: "#06B6D4",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#06B6D4;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#apiGradient)" rx="20"/>
        <rect x="50" y="80" width="700" height="440" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="70" y="100" width="660" height="60" fill="#f1f5f9" rx="12"/>
        <circle cx="100" cy="130" r="8" fill="#ef4444"/>
        <circle cx="125" cy="130" r="8" fill="#f59e0b"/>
        <circle cx="150" cy="130" r="8" fill="#10b981"/>
        <text x="190" y="138" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1e293b">API Testing Dashboard</text>
        <rect x="290" y="180" width="440" height="320" fill="#ffffff" rx="12"/>
        <rect x="310" y="200" width="400" height="200" fill="#f8fafc" rx="8"/>
        <polyline points="330,350 360,320 390,340 420,280 450,300 480,250 510,270 540,220 570,240 600,200 630,220 660,180"
                  fill="none" stroke="#3b82f6" stroke-width="3"/>
      </svg>`
    },
    {
      id: "website-builder",
      icon: Globe,
      title: "No-Code Website Builder with AI",
      description: "Enterprise-grade website builder powered by GPT-4 with responsive design generation.",
      fullDescription: "Create stunning websites in minutes with our AI-powered builder. From concept to deployment, transform your ideas into fully functional, responsive websites with built-in SEO and e-commerce capabilities.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready", "Responsive Design"],
      stats: { users: "15K+", time: "< 2min", rating: "4.8", uptime: "99.8%" },
      status: "Live",
      coverImage: "/website-builder-project.svg",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      primaryColor: "#8B5CF6",
      secondaryColor: "#EC4899",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#webGradient)" rx="20"/>
        <rect x="50" y="50" width="700" height="500" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="80" y="80" width="300" height="200" fill="#1f2937" rx="8"/>
        <rect x="85" y="85" width="290" height="170" fill="#ffffff" rx="4"/>
        <rect x="450" y="100" width="120" height="240" fill="#1f2937" rx="20"/>
        <rect x="80" y="320" width="640" height="200" fill="#f8fafc" rx="12"/>
        <rect x="100" y="340" width="600" height="60" fill="#ffffff" rx="8"/>
        <text x="120" y="375" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#374151">AI Website Generator</text>
      </svg>`
    },
    {
      id: "file-management",
      icon: FileText,
      title: "Cloud File Management & CDN",
      description: "Scalable file storage with global CDN, automatic optimization, and team collaboration.",
      fullDescription: "Enterprise-grade file storage with global distribution. Secure, fast, and collaborative file management with automatic optimization and advanced security features.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security", "Team Collaboration"],
      stats: { users: "10K+", time: "< 1min", rating: "4.9", uptime: "99.95%" },
      status: "Live",
      coverImage: "/file-management-project.svg",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      primaryColor: "#10B981",
      secondaryColor: "#14B8A6",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#059669;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#cloudGradient)" rx="20"/>
        <rect x="50" y="80" width="700" height="440" fill="rgba(255,255,255,0.9)" rx="20"/>
        <g transform="translate(120, 180)">
          <ellipse cx="150" cy="80" rx="120" ry="60" fill="#e0f2fe" stroke="#0891b2" stroke-width="2"/>
          <rect x="120" y="60" width="25" height="30" fill="#3b82f6" rx="3"/>
          <rect x="155" y="65" width="25" height="30" fill="#10b981" rx="3"/>
          <rect x="190" y="60" width="25" height="30" fill="#f59e0b" rx="3"/>
        </g>
        <rect x="350" y="160" width="380" height="200" fill="#ffffff" rx="12"/>
        <rect x="370" y="210" width="300" height="20" fill="#f3f4f6" rx="10"/>
        <rect x="370" y="210" width="240" height="20" fill="#10b981" rx="10"/>
      </svg>`
    },
    {
      id: "documentation-ai",
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation.",
      fullDescription: "Revolutionary AI-powered documentation that understands your codebase. Generate comprehensive, accurate documentation that automatically updates as your code evolves.",
      features: ["Code Context AI", "IDE Integration", "Multi-language Support", "Auto Updates"],
      stats: { users: "8K+", time: "< 3min", rating: "4.7", uptime: "99.7%" },
      status: "Beta",
      coverImage: "/documentation-ai-project.svg",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      primaryColor: "#F97316",
      secondaryColor: "#EF4444",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ea580c;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#aiGradient)" rx="20"/>
        <rect x="50" y="60" width="700" height="480" fill="rgba(255,255,255,0.95)" rx="20"/>
        <rect x="70" y="150" width="660" height="120" fill="#ffffff" rx="12"/>
        <rect x="90" y="190" width="620" height="70" fill="#1f2937" rx="8"/>
        <rect x="100" y="200" width="80" height="4" fill="#10b981" rx="2"/>
        <g transform="translate(400, 300)">
          <circle cx="0" cy="0" r="50" fill="#fef2f2" stroke="#ea580c" stroke-width="3"/>
          <path d="M-25,0 L25,0 M0,-25 L0,25" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
        </g>
        <rect x="70" y="370" width="320" height="150" fill="#f0fdf4" rx="12"/>
        <rect x="410" y="370" width="320" height="150" fill="#eff6ff" rx="12"/>
      </svg>`
    },
    {
      id: "ai-code-viewer",
      icon: Brain,
      title: "AI Code Viewer, Compiler & Editor",
      description: "Revolutionary AI-powered code editor with real-time compilation and intelligent enhancement.",
      fullDescription: "The ultimate front-end development tool. Write, test, and optimize your code with AI assistance. Real-time compilation, intelligent suggestions, and advanced debugging capabilities.",
      features: ["AI Code Enhancement", "Real-time Compilation", "Advanced Code Editor", "Performance Analysis"],
      stats: { users: "12K+", time: "< 30sec", rating: "4.8", uptime: "99.9%" },
      status: "Live",
      coverImage: "/ai-code-viewer-project.svg",
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      primaryColor: "#6366F1",
      secondaryColor: "#8B5CF6",
      mockupSvg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4f46e5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#codeGradient)" rx="20"/>
        <rect x="50" y="50" width="700" height="500" fill="rgba(31,41,55,0.95)" rx="20"/>
        <rect x="70" y="70" width="660" height="40" fill="#374151" rx="10"/>
        <circle cx="90" cy="90" r="6" fill="#ef4444"/>
        <circle cx="110" cy="90" r="6" fill="#f59e0b"/>
        <circle cx="130" cy="90" r="6" fill="#10b981"/>
        <rect x="290" y="120" width="450" height="400" fill="#0f172a" rx="8"/>
        <rect x="340" y="140" width="300" height="320" fill="#1e293b" rx="4"/>
        <text x="350" y="160" font-family="Courier, monospace" font-size="12" fill="#f87171"><div class="container"></text>
        <text x="370" y="180" font-family="Courier, monospace" font-size="12" fill="#fbbf24">  <h1></text>
        <text x="390" y="200" font-family="Courier, monospace" font-size="12" fill="#d1d5db">    AI-Powered Code Editor</text>
        <rect x="500" y="140" width="120" height="60" fill="#4f46e5" rx="8"/>
        <text x="510" y="165" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">AI Suggestion</text>
        <rect x="70" y="450" width="330" height="70" fill="#f8fafc" rx="8"/>
        <rect x="420" y="450" width="330" height="70" fill="#f0fdf4" rx="8"/>
      </svg>`
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Interactive Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our five AI-powered development tools through immersive showcases with real-time previews and interactive demos.
            </p>
          </div>

          {/* Project Showcases */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`transition-all duration-1000 ${
                  visibleProjects.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  {/* Project Visual */}
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        {/* Main project image with responsive aspect ratio */}
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: '16/9' }}
                        >
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                          
                          {/* Gradient overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 group-hover:from-black/5 group-hover:to-black/10 transition-all duration-300" />
                          
                          {/* Floating status badge */}
                          <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <project.icon className="w-5 h-5 text-white" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-white/20 backdrop-blur-sm text-white border-white/30"
                            >
                              {project.status}
                            </Badge>
                          </div>

                          {/* Demo availability indicator */}
                          <div className="absolute bottom-4 right-4">
                            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                              Demo Available
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ambient glow effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-20 blur-2xl -z-10 rounded-2xl transition-opacity duration-500 ${visibleProjects.has(index) ? 'opacity-20' : 'opacity-0'}`} />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${project.primaryColor}20` }}
                        >
                          <project.icon className="w-6 h-6" style={{ color: project.primaryColor }} />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* Feature highlights */}
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: project.primaryColor }}
                            />
                            <span className="text-sm text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-foreground">{project.stats.users}</div>
                          <div className="text-xs text-muted-foreground">Users</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-foreground">{project.stats.time}</div>
                          <div className="text-xs text-muted-foreground">Setup</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-lg font-bold text-foreground">{project.stats.rating}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-foreground">{project.stats.uptime}</div>
                          <div className="text-xs text-muted-foreground">Uptime</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg" className="flex-1" asChild>
                        <Link to={`/projects/${project.id}`}>
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="flex-1"
                        style={{ borderColor: project.primaryColor, color: project.primaryColor }}
                      >
                        View Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 lg:mt-24 text-center">
            <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Development Workflow?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of developers who are already saving 40+ hours per week with our AI-powered development tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects">
                    View All Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;