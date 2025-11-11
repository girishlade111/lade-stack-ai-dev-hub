import { ArrowRight, Code, Zap, Shield, Share, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AIEditorHighlight = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Previews",
      description: "See your code changes in real-time with lightning-fast previews"
    },
    {
      icon: Shield,
      title: "Best-Practice Refactors",
      description: "AI automatically improves code structure, performance, and security"
    },
    {
      icon: Code,
      title: "Smart Fixes",
      description: "Automatic detection and correction of common coding mistakes"
    },
    {
      icon: Share,
      title: "One-Click Share",
      description: "Share your enhanced code with teammates or clients instantly"
    }
  ];

  return (
    <section id="ai-editor" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              AI Code Editor
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              The Smart Code Editor That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transforms Your Code
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered code editor understands your HTML/CSS/JS and automatically enhances it with 
              better practices, performance optimizations, and error handling.
            </p>
          </div>

          {/* Main Card */}
          <Card className="relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
            
            <CardHeader className="relative text-center pb-8">
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Lade Stack AI Code Editor
              </CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                HTML/CSS/JS compiler + enhancer that turns your basic code into production-ready applications
              </p>
            </CardHeader>

            <CardContent className="relative">
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
                  <Button 
                    size="lg" 
                    className="group text-lg px-8 py-6 h-auto"
                    onClick={() => window.open('https://code.ladestack.in/', '_blank')}
                  >
                    <Code className="w-5 h-5 mr-2" />
                    Open Editor
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 h-auto"
                    onClick={() => window.open('https://code.ladestack.in/docs', '_blank')}
                  >
                    View Docs
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Start coding with AI in seconds. No registration required.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIEditorHighlight;