import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-clean.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Content - Minimal and compact */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-6 animate-slide-up">
            <Sparkles className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">
              AI Development Suite
            </span>
          </div>

          {/* Compact Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight animate-slide-up delay-200">
            Build faster with{" "}
            <span className="text-muted-foreground">
              intelligent tools
            </span>
            {" "}& AI assistance
          </h1>

          {/* Compact Subheadline */}
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-3xl leading-relaxed animate-slide-up delay-300">
            The complete development platform with AI-powered editor, API testing,
            website builder, and file management.
          </p>

          {/* Compact CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-start items-start mb-8 animate-slide-up delay-400">
            <Button
              variant="outline"
              size="sm"
              className="relative overflow-hidden border hover:bg-muted/50 transition-all duration-200"
              onClick={() => window.open('https://code.ladestack.in/', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2 text-xs">
                Start coding
                <ArrowRight className="w-3 h-3" />
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs hover:bg-muted/50 transition-all duration-200"
              onClick={() => {
                const featuresSection = document.querySelector('#features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore tools
            </Button>
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl animate-slide-up delay-500">
            {[
              { value: "1000+", label: "Developers" },
              { value: "10x", label: "Faster" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 border border-border rounded-md hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="text-sm font-semibold text-foreground mb-1">
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