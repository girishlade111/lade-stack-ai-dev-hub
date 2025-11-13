import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Code, Globe, FileText, Brain, Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { safeWindowOpen } from "@/utils/safe";

const ProjectsSection = () => {
  // Memoize data to prevent re-renders
  const projects = useMemo(() => [
    {
      id: "api-testing",
      icon: Code,
      title: "AI-Powered API Testing",
      description: "Revolutionary API testing suite with intelligent test generation and real-time monitoring.",
      features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration"],
      stats: { users: "25K+", time: "< 5min", rating: "4.9" },
      status: "Live",
      coverImage: "/api-testing-project.svg"
    },
    {
      id: "website-builder",
      icon: Globe,
      title: "No-Code Website Builder",
      description: "Enterprise-grade website builder powered by GPT-4 with responsive design generation.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready"],
      stats: { users: "15K+", time: "< 2min", rating: "4.8" },
      status: "Live",
      coverImage: "/website-builder-project.svg"
    },
    {
      id: "file-management",
      icon: FileText,
      title: "File Sharing Platform",
      description: "Enterprise file sharing platform with global CDN, intelligent collaboration, and lifetime free access.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security"],
      stats: { users: "10K+", time: "< 1min", rating: "4.9" },
      status: "Live",
      coverImage: "/file-management-project.svg"
    },
    {
      id: "documentation-ai",
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation.",
      features: ["Code Context AI", "IDE Integration", "Multi-language"],
      stats: { users: "8K+", time: "< 3min", rating: "4.7" },
      status: "Beta",
      coverImage: "/documentation-ai-project.svg"
    },
    {
      id: "ai-code-viewer",
      icon: Brain,
      title: "AI Code Viewer & Editor",
      description: "Revolutionary AI-powered code editor with real-time compilation and intelligent enhancement.",
      features: ["AI Code Enhancement", "Real-time Compilation", "Advanced Code Editor"],
      stats: { users: "12K+", time: "< 1min", rating: "4.8" },
      status: "Live",
      coverImage: "/ai-code-viewer-project.svg"
    }
  ], []);

  const metrics = useMemo(() => [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Time Saved", value: "10x", icon: Clock },
    { label: "Uptime", value: "99.9%", icon: Globe }
  ], []);

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Minimal Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Five AI Solutions
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development ecosystem: API testing, website building, file management, documentation, and code editing.
            </p>
          </div>

          {/* Compact Metrics - Mobile optimized */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 sm:mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border border-border p-3 text-center hover:border-border/80 transition-all duration-300 hover:shadow-md bg-card dark:bg-card/80">
                <CardContent className="p-0">
                  <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center mx-auto mb-2">
                    <metric.icon className="w-3 h-3 text-background" />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projects Grid - Mobile-first */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 sm:mb-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border border-border overflow-hidden hover:border-border/80 transition-all duration-300 hover:shadow-lg bg-card dark:bg-card/80 will-change-transform"
              >
                {/* Cover Image */}
                <div className="h-24 sm:h-28 lg:h-32 bg-muted dark:bg-muted/30 flex items-center justify-center relative overflow-hidden">
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
                  <Badge
                    variant="secondary"
                    className="absolute top-2 right-2 text-xs px-2 py-1 bg-background/80 backdrop-blur-sm shadow-sm border border-border"
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardContent className="p-3">
                  <CardTitle className="text-sm font-semibold text-foreground mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Compact Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 bg-muted dark:bg-muted/50 text-muted-foreground text-xs rounded border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Compact Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center p-2 border border-border rounded bg-card/50 dark:bg-card/30">
                      <div className="text-xs font-semibold text-foreground">
                        {project.stats.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center p-2 border border-border rounded bg-card/50 dark:bg-card/30">
                      <div className="text-xs font-semibold text-foreground">
                        {project.stats.time}
                      </div>
                      <div className="text-xs text-muted-foreground">Setup</div>
                    </div>
                    <div className="text-center p-2 border border-border rounded bg-card/50 dark:bg-card/30">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-3 h-3 text-muted-foreground fill-current" />
                        <span className="text-xs font-semibold text-foreground">
                          {project.stats.rating}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Action Button - Mobile optimized */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs hover:bg-muted/80 dark:hover:bg-muted/60 transition-all duration-300 touch-target touch-manipulation border-border hover:border-border/80"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      <span>Explore</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action - Simplified */}
          <Card className="border border-border p-4 text-center hover:border-border/80 transition-all duration-300 bg-card dark:bg-card/80">
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Join 50,000+ Developers
              </h3>
              <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto">
                Get instant access to all AI-powered development tools. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <Button
                  size="sm"
                  className="text-xs hover:bg-muted/50 transition-all duration-300 transform hover:scale-105 touch-target touch-manipulation"
                >
                  ✨ Start Free Trial
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs hover:bg-muted/50 transition-all duration-300 transform hover:scale-105 touch-target touch-manipulation"
                >
                  🎉 All Tools Lifetime Free
                </Button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-foreground font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI-Powered • No Credit Card • Forever Free</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Free plan • 24/7 support • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;