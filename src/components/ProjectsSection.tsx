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
    <section id="projects" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/5 to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Complete AI Development Suite
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Four Powerful{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Solutions
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-60" />
              </span>
              {" "}Under One Platform
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive development ecosystem covering API testing, website building, file management, 
              and documentation - each tool powered by cutting-edge AI technology.
            </p>
          </div>

          {/* Enhanced Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-0 bg-gradient-glass backdrop-blur-sm text-center p-6 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Projects Grid with Modern Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                  <div className="bg-background rounded-xl h-full w-full" />
                </div>
                
                <CardHeader className="relative p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs px-2 py-1 mb-2 ${
                            project.status === 'Live' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'
                          }`}
                        >
                          {project.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground font-medium">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="relative p-6 sm:p-8 pt-0">
                  {/* Enhanced Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-foreground">
                        {project.stats.users}
                      </div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-foreground">
                        {project.stats.time}
                      </div>
                      <div className="text-xs text-muted-foreground">Setup Time</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-lg sm:text-xl font-bold text-foreground">
                          {project.stats.rating}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Enhanced Action Button */}
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group/btn w-full border-2 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open(`https://${project.title.toLowerCase().replace(/\s+/g, '')}.ladestack.in`, '_blank')}
                  >
                    <span>Explore {project.title.split(' ')[0]}</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action with Modern Design */}
          <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
            <CardContent className="relative p-8 sm:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-6">
                  🎯 Start Your 14-Day Free Trial
                </Badge>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Join 50,000+ Developers Who've{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    10x Their Productivity
                  </span>
                </h3>
                
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Get instant access to all AI-powered development tools. No credit card required, 
                  no setup fees, cancel anytime. Start building better software today.
                </p>

                {/* Enhanced Feature List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: "🚀", title: "Instant Access", desc: "Start coding immediately" },
                    { icon: "💎", title: "Premium Features", desc: "All pro tools included" },
                    { icon: "🛡️", title: "Enterprise Security", desc: "SOC2 & GDPR compliant" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="group relative overflow-hidden w-full sm:w-auto shadow-2xl hover:shadow-primary/25"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start Free Trial - No Credit Card
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto border-2 hover:bg-primary/10"
                    onClick={() => window.open('https://ladestack.in/pricing', '_blank')}
                  >
                    View Pricing Plans
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  ✨ Free forever plan available • 💬 24/7 customer support • 🔄 Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;