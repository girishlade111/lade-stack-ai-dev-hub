import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-clean.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 overflow-hidden">
      {/* Modern Background with Multiple Layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Modern gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
        
        {/* Animated geometric shapes for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
      
      {/* Content with enhanced glass morphism */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-glass border border-border/50 shadow-lg backdrop-blur-sm mb-8 sm:mb-10 animate-slide-up">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">
              Next-Generation AI Development Suite
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>

          {/* Enhanced Main Headline with better typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-[1.1] animate-slide-up delay-200">
            Transform your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              development workflow
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-30" />
            </span>
            {" "}with AI-powered precision
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
            Experience the future of coding with our intelligent editor that{" "}
            <span className="text-foreground font-medium">compiles, optimizes, and enhances</span>{" "}
            your HTML, CSS, and JavaScript in real-time.
          </p>

          {/* Enhanced CTA Buttons with better hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-slide-up delay-400">
            <Button
              variant="hero"
              size="lg"
              className="group relative overflow-hidden w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => window.open('https://code.ladestack.in/', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start coding with AI
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto backdrop-blur-sm border-2 hover:bg-background/80 hover:border-primary/50 transition-all duration-300"
              onClick={() => {
                const featuresSection = document.querySelector('#features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Tools
            </Button>
          </div>

          {/* Enhanced Stats with glass morphism cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-slide-up delay-500">
            {[
              { value: "1000+", label: "Active Developers", gradient: "from-primary to-accent" },
              { value: "10x", label: "Faster Development", gradient: "from-accent to-primary" },
              { value: "99.9%", label: "Uptime Guarantee", gradient: "from-success to-primary" }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-muted/80 backdrop-blur-md rounded-2xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]" />
                <div className="relative text-center p-6 sm:p-8">
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
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