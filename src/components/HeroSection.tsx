import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeWindowOpen, safeQuerySelector, safeScrollIntoView } from "@/utils/safe";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 sm:pt-16 lg:pt-20 overflow-hidden">
      {/* Optimized background with hardware acceleration */}
      <div className="absolute inset-0 z-0 bg-background will-change-transform" />
      
      {/* Content - Mobile-first layout with better spacing */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Minimal Badge - Mobile optimized */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-muted border border-border mb-3 sm:mb-6 animate-slide-up touch-target">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground flex-shrink-0" />
            <span className="text-xs font-medium text-muted-foreground truncate">
              AI Development Suite
            </span>
          </div>

          {/* Mobile-first headline with responsive font sizes */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-2 sm:mb-3 lg:mb-4 leading-tight animate-slide-up delay-200 performance-optimized">
            <span className="block sm:inline">Build faster with</span>{" "}
            <span className="text-muted-foreground">
              intelligent tools
            </span>
            <span className="block sm:inline"> & AI assistance</span>
          </h1>

          {/* Mobile-first subheadline with better line height */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 lg:mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-300 px-2 sm:px-0">
            The complete development platform with AI-powered editor, API testing,
            website builder, and file management.
          </p>

          {/* Mobile-first CTA buttons with better spacing */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start items-center px-4 sm:px-0 mb-4 sm:mb-6 lg:mb-8 animate-slide-up delay-400">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto min-w-[140px] relative overflow-hidden border hover:bg-muted/50 transition-fast touch-target touch-manipulation text-xs sm:text-sm"
              onClick={() => safeWindowOpen('https://code.ladestack.in/')}
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                Start coding
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto min-w-[120px] text-xs sm:text-sm hover:bg-muted/50 transition-fast touch-target touch-manipulation"
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