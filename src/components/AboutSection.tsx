import { useMemo } from "react";
import { Lightbulb, Users, Award, Eye, Rocket, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { safeWindowOpen } from "@/utils/safe";

const AboutSection = () => {
  // Memoize expensive data to prevent re-renders
  const values = useMemo(() => [
    {
      icon: Lightbulb,
      title: "AI-First Innovation",
      description: "Cutting-edge AI integrated into every tool, delivering intelligent automation.",
      stats: { value: "Multiple", label: "AI Models" }
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Enterprise-grade tools accessible to individual developers and teams.",
      stats: { value: "Many", label: "Developers" }
    },
    {
      icon: Award,
      title: "Production-Ready Quality",
      description: "Battle-tested tools with high uptime and enterprise security.",
      stats: { value: "Excellent", label: "Uptime" }
    },
    {
      icon: Eye,
      title: "Open Source Transparency",
      description: "Core algorithms and integrations are open source with full API documentation.",
      stats: { value: "Complete", label: "Open Source" }
    }
  ], []);

  const achievements = useMemo(() => [
    { icon: Rocket, title: "Much Faster", description: "Average development speed increase" },
    { icon: Award, title: "Enterprise Ready", description: "SOC2 & GDPR compliant" },
    { icon: Eye, title: "Global Scale", description: "Supporting many countries" },
    { icon: CheckCircle, title: "Developer Love", description: "High customer satisfaction" }
  ], []);

  const stats = useMemo(() => [
    { value: "Much", label: "Faster", description: "Development speed increase" },
    { value: "High", label: "Quality", description: "Uptime guarantee" }
  ], []);

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Minimal Section Header - Mobile optimized */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
              About Lade Stack
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              The complete AI-powered development platform trusted by modern developers worldwide.
            </p>
          </div>

          {/* Mission & Vision - Mobile-first grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 sm:mb-8">
            <Card className="border border-border p-4 performance-optimized">
              <CardHeader className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
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
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-2 border border-border rounded">
                      <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border p-4 performance-optimized">
              <CardHeader className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-foreground rounded flex items-center justify-center flex-shrink-0">
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

          {/* Values Grid - Optimized for mobile */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border border-border p-3 hover:bg-muted/30 transition-fast will-change-transform"
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
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5 flex-shrink-0">
                            {value.stats.value}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
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

          {/* Achievements - Optimized grid */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Impact & Results
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border border-border p-3 text-center hover:bg-muted/30 transition-fast will-change-transform"
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

          {/* Social Proof - Simplified */}
          <Card className="border border-border p-4 text-center performance-optimized">
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Join Our Developer Community
              </h3>
              <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto">
                Our AI-powered tools help developers ship faster, write better code,
                and reduce development time significantly.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
                onClick={() => safeWindowOpen('https://ladestack.in/about')}
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