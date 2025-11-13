import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeWindowOpen, safeQuerySelector, safeScrollIntoView } from "@/utils/safe";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 sm:pt-16 lg:pt-20 overflow-hidden">
      {/* Optimized background with hardware acceleration */}
      <div className="absolute inset-0 z-0 bg-background will-change-transform" />
      
      {/* Content - Mobile-first layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Minimal Badge - Mobile optimized */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-4 sm:mb-6 animate-slide-up touch-target">
            <Sparkles className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            <span className="text-xs font-medium text-muted-foreground">
              AI Development Suite
            </span>
          </div>

          {/* Mobile-first headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 sm:mb-4 leading-tight animate-slide-up delay-200 performance-optimized">
            Build faster with{" "}
            <span className="text-muted-foreground">
              intelligent tools
            </span>
            {" "}& AI assistance
          </h1>

          {/* Mobile-first subheadline */}
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-3xl leading-relaxed animate-slide-up delay-300">
            The complete development platform with AI-powered editor, API testing,
            website builder, and file management.
          </p>

          {/* Mobile-first CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start items-center mb-6 sm:mb-8 animate-slide-up delay-400">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto relative overflow-hidden border hover:bg-muted/50 transition-fast touch-target touch-manipulation"
              onClick={() => safeWindowOpen('https://code.ladestack.in/')}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-xs">
                Start coding
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
              onClick={() => {
                const featuresSection = safeQuerySelector('#features');
                safeScrollIntoView(featuresSection);
              }}
            >
              Explore tools
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;