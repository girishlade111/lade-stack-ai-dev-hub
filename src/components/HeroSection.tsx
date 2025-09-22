import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-clean.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              AI-Powered Development Tools
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Transform Your Development Workflow with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Developer Tools
            </span>{" "}
            That Boost Productivity 10x
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Complete SaaS platform with API testing tools, no-code website builder, secure file management, 
            and AI documentation summarizer. Join 1000+ developers already accelerating their projects.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Stop wasting time on repetitive development tasks. Our AI-powered tools automate testing, 
            simplify deployment, and accelerate your entire development lifecycle from concept to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">1000+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">10x</div>
              <div className="text-sm sm:text-base text-muted-foreground">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;