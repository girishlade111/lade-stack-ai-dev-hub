import { ExternalLink, Code, Globe, FileText, Brain, Zap, Star, Clock, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code,
      title: "AI-Powered API Testing Platform",
      description: "Revolutionary API testing suite with intelligent test generation, automated regression testing, and real-time performance monitoring. Supports REST, GraphQL, and WebSocket APIs with zero-config setup.",
      features: ["AI Test Generation", "Performance Analytics", "CI/CD Integration"],
      gradient: "from-blue-500 to-cyan-500",
      stats: { users: "25K+", time: "< 5min", rating: "4.9" },
      status: "Live",
      category: "Development Tools"
    },
    {
      icon: Globe,
      title: "No-Code Website Builder with AI",
      description: "Enterprise-grade website builder powered by GPT-4. Generate responsive, SEO-optimized websites from simple prompts. Includes e-commerce, analytics, and custom domain support.",
      features: ["GPT-4 Generation", "SEO Optimization", "E-commerce Ready"],
      gradient: "from-purple-500 to-pink-500",
      stats: { users: "15K+", time: "< 2min", rating: "4.8" },
      status: "Live",
      category: "Website Builder"
    },
    {
      icon: FileText,
      title: "Cloud File Management & CDN",
      description: "Scalable file storage with global CDN, automatic image optimization, and team collaboration features. SOC2 compliant with advanced encryption and access controls.",
      features: ["Global CDN", "Auto Optimization", "Enterprise Security"],
      gradient: "from-green-500 to-emerald-500",
      stats: { users: "10K+", time: "< 1min", rating: "4.9" },
      status: "Live",
      category: "Cloud Services"
    },
    {
      icon: Brain,
      title: "Technical Documentation AI",
      description: "Advanced AI that understands code context and generates comprehensive documentation, API specs, and technical summaries. Integrates with GitHub, GitLab, and popular IDEs.",
      features: ["Code Context AI", "IDE Integration", "Multi-language Support"],
      gradient: "from-orange-500 to-red-500",
      stats: { users: "8K+", time: "< 3min", rating: "4.7" },
      status: "Beta",
      category: "Documentation"
    }
  ];

  const metrics = [
    { label: "Active Users", value: "50,000+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Average Rating", value: "4.9/5", icon: Star, color: "from-yellow-500 to-orange-500" },
    { label: "Time Saved", value: "10x", icon: Clock, color: "from-green-500 to-emerald-500" },
    { label: "Uptime", value: "99.9%", icon: Zap, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Minimal Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Four AI Solutions
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development ecosystem: API testing, website building, file management, and documentation.
            </p>
          </div>

          {/* Compact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="border border-border p-3 text-center hover:bg-muted/30 transition-colors duration-200">
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

          {/* Minimal Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border border-border p-4 hover:bg-muted/30 transition-colors duration-200"
              >
                <CardHeader className="p-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                        <project.icon className="w-3 h-3 text-background" />
                      </div>
                      <div>
                        <Badge
                          variant="secondary"
                          className="text-xs px-1.5 py-0.5 mb-1"
                        >
                          {project.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-sm font-semibold text-foreground mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="p-3 pt-0">
                  {/* Compact Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Compact Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center p-2 border border-border rounded">
                      <div className="text-xs font-semibold text-foreground">
                        {project.stats.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center p-2 border border-border rounded">
                      <div className="text-xs font-semibold text-foreground">
                        {project.stats.time}
                      </div>
                      <div className="text-xs text-muted-foreground">Setup</div>
                    </div>
                    <div className="text-center p-2 border border-border rounded">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-3 h-3 text-muted-foreground fill-current" />
                        <span className="text-xs font-semibold text-foreground">
                          {project.stats.rating}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Minimal Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs hover:bg-muted/50 transition-colors duration-200"
                    onClick={() => window.open(`https://${project.title.toLowerCase().replace(/\s+/g, '')}.ladestack.in`, '_blank')}
                  >
                    <span>Explore</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Minimal Call to Action */}
          <Card className="border border-border p-4">
            <CardContent className="p-0 text-center">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Join 50,000+ Developers
              </h3>
              <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto">
                Get instant access to all AI-powered development tools. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs hover:bg-muted/50 transition-colors duration-200"
                >
                  Start free trial
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-xs hover:bg-muted/50 transition-colors duration-200"
                  onClick={() => window.open('https://ladestack.in/pricing', '_blank')}
                >
                  View pricing
                </Button>
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