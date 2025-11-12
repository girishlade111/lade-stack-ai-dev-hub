import { Lightbulb, Users, Award, Eye, Shield, Rocket, Globe, Heart, Zap, Star, CheckCircle, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "AI-First Innovation",
      description: "Cutting-edge artificial intelligence integrated into every tool, delivering intelligent automation that learns from your development patterns and optimizes workflows in real-time.",
      stats: { value: "50+", label: "AI Models" },
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Enterprise-grade tools accessible to individual developers and small teams. Scale from startup to enterprise without changing platforms or rebuilding infrastructure.",
      stats: { value: "100K+", label: "Developers" },
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Award,
      title: "Production-Ready Quality",
      description: "Battle-tested tools used by Fortune 500 companies with 99.9% uptime, enterprise security, and compliance certifications including SOC2 and GDPR.",
      stats: { value: "99.9%", label: "Uptime" },
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Open Source Transparency",
      description: "Core algorithms and integrations are open source. Full API documentation, webhook support, and extensible architecture for custom integrations.",
      stats: { value: "100%", label: "Open Source" },
      color: "from-purple-400 to-pink-500"
    }
  ];

  const achievements = [
    { icon: Rocket, title: "500% Faster", description: "Average development speed increase", color: "from-blue-500 to-purple-500" },
    { icon: Shield, title: "Enterprise Ready", description: "SOC2 & GDPR compliant", color: "from-green-500 to-emerald-500" },
    { icon: Globe, title: "Global Scale", description: "Supporting 50+ countries", color: "from-orange-500 to-red-500" },
    { icon: Heart, title: "Developer Love", description: "98% customer satisfaction", color: "from-pink-500 to-rose-500" }
  ];

  const testimonials = [
    {
      quote: "Lade Stack transformed our development process completely. What used to take weeks now happens in days. The AI-powered tools are incredibly intuitive and the performance improvements are remarkable.",
      author: "Sarah Chen",
      role: "Senior Backend Engineer",
      company: "TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "The no-code website builder helped us launch our MVP 3 weeks ahead of schedule. Even non-technical team members can make updates. It's truly a game-changer for startups.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupX",
      avatar: "MR",
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/10 to-background" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-glass border border-primary/20 backdrop-blur-sm mb-8">
              <Award className="w-4 h-4 text-primary animate-pulse" />
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                About Lade Stack
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Why <span className="relative inline-block">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Lade Stack
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-60" />
              </span> is the Future of Development
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The complete AI-powered development platform trusted by modern developers and startups worldwide. 
              We're revolutionizing how software is built, tested, and deployed.
            </p>
          </div>

          {/* Enhanced Mission Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
            <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
              <CardHeader className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Our Mission
                  </Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Democratizing Advanced Development Tools
                </h3>
              </CardHeader>
              <CardContent className="relative p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  We're revolutionizing the software development lifecycle by providing enterprise-grade AI tools 
                  that were previously only available to large tech companies. Our platform reduces development time by 70% 
                  while maintaining code quality and security standards that modern applications demand.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">70%</div>
                    <div className="text-sm text-muted-foreground">Faster Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Code Quality</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent" />
              <CardHeader className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    Our Vision
                  </Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Building the Future of Software Development
                </h3>
              </CardHeader>
              <CardContent className="relative p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Imagine a world where anyone can build enterprise-grade applications without years of experience. 
                  Where AI handles the complexity while developers focus on creativity and innovation. That's the world we're building.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered development assistance",
                    "Automated code optimization",
                    "Intelligent error prevention",
                    "Real-time collaboration tools"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Values Grid */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardContent className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <value.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {value.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary">
                            {value.stats.value}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                          {value.description}
                        </p>
                        <div className="text-xs text-primary font-medium">
                          {value.stats.label}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Achievements Section */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              Achievements & Impact
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-sm text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <CardContent className="relative p-0">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Social Proof Section */}
          <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
            <CardContent className="relative p-8 sm:p-12">
              <div className="text-center mb-8">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-4">
                  👥 Trusted by Developers Worldwide
                </Badge>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Join 100,000+ Developers Building the Future
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our AI-powered tools have helped developers ship faster, write better code, 
                  and reduce development time by up to 70%.
                </p>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="border-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                            <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/30 mb-3" />
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden shadow-xl hover:shadow-2xl"
                  onClick={() => window.open('https://ladestack.in/about', '_blank')}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Learn More About Our Story
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;