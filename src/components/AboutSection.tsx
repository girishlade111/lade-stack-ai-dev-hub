import { Lightbulb, Users, Award, Eye, Shield, Rocket, Globe, Heart, Zap, Star, CheckCircle, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "AI-First Innovation",
      description: "Cutting-edge artificial intelligence integrated into every tool, delivering intelligent automation that learns from your development patterns and optimizes workflows in real-time.",
      stats: { value: "50+", label: "AI Models" },
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Enterprise-grade tools accessible to individual developers and small teams. Scale from startup to enterprise without changing platforms or rebuilding infrastructure.",
      stats: { value: "100K+", label: "Developers" },
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Award,
      title: "Production-Ready Quality",
      description: "Battle-tested tools used by Fortune 500 companies with 99.9% uptime, enterprise security, and compliance certifications including SOC2 and GDPR.",
      stats: { value: "99.9%", label: "Uptime" },
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Open Source Transparency",
      description: "Core algorithms and integrations are open source. Full API documentation, webhook support, and extensible architecture for custom integrations.",
      stats: { value: "100%", label: "Open Source" },
      color: "from-purple-400 to-pink-500"
    }
  ];

  const achievements = [
    { icon: Rocket, title: "500% Faster", description: "Average development speed increase", color: "from-blue-500 to-purple-500" },
    { icon: Shield, title: "Enterprise Ready", description: "SOC2 & GDPR compliant", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Global Scale", description: "Supporting 50+ countries", color: "from-orange-500 to-red-500" },
    { icon: Heart, title: "Developer Love", description: "98% customer satisfaction", color: "from-pink-500 to-rose-500" }
  ];

  const testimonials = [
    {
      quote: "Lade Stack transformed our development process completely. What used to take weeks now happens in days. The AI-powered tools are incredibly intuitive and the performance improvements are remarkable.",
      author: "Sarah Chen",
      role: "Senior Backend Engineer",
      company: "TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "The no-code website builder helped us launch our MVP 3 weeks ahead of schedule. Even non-technical team members can make updates. It's truly a game-changer for startups.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupX",
      avatar: "MR",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Minimal Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
              About Lade Stack
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              The complete AI-powered development platform trusted by modern developers worldwide.
            </p>
          </div>

          {/* Minimal Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card className="border border-border p-4">
              <CardHeader className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center">
                    <Rocket className="w-3 h-3 text-background" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Our Mission
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Democratizing advanced development tools by providing enterprise-grade AI
                  solutions that reduce development time while maintaining quality.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 border border-border rounded">
                    <div className="text-sm font-semibold text-foreground">70%</div>
                    <div className="text-xs text-muted-foreground">Faster</div>
                  </div>
                  <div className="text-center p-2 border border-border rounded">
                    <div className="text-sm font-semibold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border p-4">
              <CardHeader className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center">
                    <Eye className="w-3 h-3 text-background" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Our Vision
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Building the future where anyone can create enterprise-grade applications
                  with AI handling complexity while developers focus on creativity.
                </p>
                <div className="space-y-1">
                  {[
                    "AI development assistance",
                    "Code optimization",
                    "Error prevention",
                    "Real-time collaboration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compact Values Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border border-border p-3 hover:bg-muted/30 transition-colors duration-200"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                          <value.icon className="w-3 h-3 text-background" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center font-medium">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-foreground truncate">
                            {value.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                            {value.stats.value}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                          {value.description}
                        </p>
                        <div className="text-xs text-muted-foreground font-medium">
                          {value.stats.label}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compact Achievements */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Impact & Results
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border border-border p-3 text-center hover:bg-muted/30 transition-colors duration-200"
                >
                  <CardContent className="p-0">
                    <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="w-3 h-3 text-background" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Minimal Social Proof */}
          <Card className="border border-border p-4">
            <CardContent className="p-0 text-center">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Join 100,000+ Developers
              </h3>
              <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto">
                Our AI-powered tools help developers ship faster, write better code,
                and reduce development time by up to 70%.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="text-xs hover:bg-muted/50 transition-colors duration-200"
                onClick={() => window.open('https://ladestack.in/about', '_blank')}
              >
                Learn more about our story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;