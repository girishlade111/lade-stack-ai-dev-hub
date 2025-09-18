import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
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
            Empowering Developers with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cutting-edge AI Tools
            </span>{" "}
            and Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Unlock the future of development with LadeStack - Your go-to platform for 
            AI-powered developer tools and services that boost productivity and streamline workflows.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Explore a suite of AI-powered tools designed for developers, SaaS solutions, 
            and creative projects that boost productivity and streamline workflows.
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
              <div className="text-2xl sm:text-3xl font-bold text-foreground">4+</div>
              <div className="text-sm sm:text-base text-muted-foreground">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm sm:text-base text-muted-foreground">Developer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;