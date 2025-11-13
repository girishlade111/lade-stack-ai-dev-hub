import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              onClick={() => window.open('https://code.ladestack.in/', '_blank')}
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
                const featuresSection = document.querySelector('#features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Explore tools
            </Button>
          </div>

          {/* Mobile-first stats - Stack on mobile, grid on desktop */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto lg:mx-0 animate-slide-up delay-500">
            {[
              { value: "1000+", label: "Developers" },
              { value: "10x", label: "Faster" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-2 sm:p-3 border border-border rounded hover:bg-muted/30 transition-fast will-change-transform"
              >
                <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;