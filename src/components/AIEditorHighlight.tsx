import { useMemo } from 'react';
import { ArrowRight, Code, Zap, Shield, Share, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AIEditorHighlight = () => {
  // Memoize data to prevent re-renders
  const features = useMemo(() => [
    {
      icon: Zap,
      title: "Lightning-Fast Preview",
      description: "Real-time code compilation",
      stat: "<100ms"
    },
    {
      icon: Shield,
      title: "Production-Grade Security",
      description: "AI-powered security audit",
      stat: "SOC2"
    },
    {
      icon: Code,
      title: "Smart Error Detection",
      description: "Predictive debugging",
      stat: "99.9%"
    },
    {
      icon: Share,
      title: "Instant Collaboration",
      description: "Real-time code sharing",
      stat: "24/7"
    }
  ], []);

  const demos = useMemo(() => [
    {
      icon: Code,
      title: "Desktop Editor",
      description: "Full-featured IDE experience",
      status: "Available"
    },
    {
      icon: Zap,
      title: "Live Preview",
      description: "Instant code execution",
      status: "Real-time"
    },
    {
      icon: Share,
      title: "Multi-Panel",
      description: "Split-view development",
      status: "Premium"
    }
  ], []);

  return (
    <section id="ai-editor" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Minimal Section Header - Mobile optimized */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-4">
              <Bot className="w-3 h-3 text-muted-foreground" />
              <Badge variant="secondary" className="text-xs">
                Next-Gen AI Code Editor
              </Badge>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
              The AI Editor That{" "}
              <span className="text-muted-foreground">
                Understands Code
              </span>
              {" "}Like a Human Expert
            </h2>
            
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered development environment that transforms your HTML, CSS, and JavaScript
              into production-ready applications.
            </p>
          </div>

          {/* Main Content - Mobile-first grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
            {/* Main Editor Preview */}
            <div className="lg:col-span-2">
              <Card className="border border-border p-4 hover:bg-muted/30 transition-fast performance-optimized">
                <CardHeader className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                      <div className="w-2 h-2 bg-foreground rounded-full" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      AI Code Editor v3.0
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-semibold mb-2">
                    Lade Stack AI Code Editor
                  </CardTitle>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    The world's most intelligent code editor that understands your intent,
                    predicts your needs, and writes production-ready code in real-time.
                  </p>
                </CardHeader>

                <CardContent className="p-3 pt-0">
                  {/* Mock Code Editor Interface */}
                  <div className="bg-foreground text-background rounded-md p-3 font-mono text-xs border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-background rounded-full animate-pulse" />
                      <span className="text-background text-xs">AI Assistant Active</span>
                    </div>
                    <pre className="text-background leading-relaxed text-xs">
{`// AI-powered code enhancement
function optimizeCode(code) {
  try {
    const enhanced = aiCompiler.enhance(code);
    return enhanced.secure()
                  .optimized()
                  .documented();
  } catch (error) {
    console.error('AI failed:', error);
    return code;
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
                      onClick={() => window.open('https://code.ladestack.in/', '_blank')}
                    >
                      <Code className="w-3 h-3 mr-1" />
                      Launch AI Editor
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
                      onClick={() => window.open('https://code.ladestack.in/docs', '_blank')}
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Watch Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compact Demo Previews */}
            <div className="space-y-3">
              {demos.map((demo, index) => (
                <Card
                  key={index}
                  className="border border-border p-3 hover:bg-muted/30 transition-fast cursor-pointer touch-target touch-manipulation"
                  onClick={() => window.open('https://code.ladestack.in/', '_blank')}
                >
                  <div className="flex items-start justify-between mb-2">
                    <demo.icon className="w-4 h-4" />
                    <span className="text-xs text-muted-foreground">
                      {demo.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium mb-1">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {demo.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Grid - Optimized for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-border p-3 hover:bg-muted/30 transition-fast will-change-transform"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                        <feature.icon className="w-3 h-3 text-background" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-foreground">
                          {feature.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 flex-shrink-0">
                          {feature.stat}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section - Simplified */}
          <Card className="border border-border p-4 text-center performance-optimized">
            <CardContent className="p-0">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Trusted by Developers Worldwide
                </h3>
                <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                  Join 50,000+ developers building the future with AI-powered tools.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                {[
                  { value: "50K+", label: "Developers" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "10x", label: "Faster" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-2 border border-border rounded hover:bg-muted/30 transition-fast">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIEditorHighlight;