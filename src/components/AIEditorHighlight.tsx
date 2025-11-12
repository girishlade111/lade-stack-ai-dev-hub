import { ArrowRight, Code, Zap, Shield, Share, Sparkles, Play, Monitor, Layers, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AIEditorHighlight = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning-Fast Preview",
      description: "Real-time code compilation with sub-100ms response times",
      color: "from-yellow-400 to-orange-500",
      stat: "<100ms"
    },
    {
      icon: Shield,
      title: "Production-Grade Security",
      description: "AI-powered security audit with SOC2 compliance",
      color: "from-green-400 to-emerald-500",
      stat: "SOC2"
    },
    {
      icon: Code,
      title: "Smart Error Detection",
      description: "Predictive debugging with automated fixes",
      color: "from-blue-400 to-cyan-500",
      stat: "99.9%"
    },
    {
      icon: Share,
      title: "Instant Collaboration",
      description: "Real-time code sharing with team members",
      color: "from-purple-400 to-pink-500",
      stat: "24/7"
    }
  ];

  const demos = [
    {
      icon: Monitor,
      title: "Desktop Editor",
      description: "Full-featured IDE experience",
      gradient: "from-slate-800 to-slate-900",
      status: "Available"
    },
    {
      icon: Play,
      title: "Live Preview",
      description: "Instant code execution",
      gradient: "from-emerald-600 to-green-700",
      status: "Real-time"
    },
    {
      icon: Layers,
      title: "Multi-Panel",
      description: "Split-view development",
      gradient: "from-indigo-600 to-purple-700",
      status: "Premium"
    }
  ];

  return (
    <section id="ai-editor" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with More Sophisticated Design */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-glass border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <Bot className="w-4 h-4 text-primary animate-spin-slow" />
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Next-Gen AI Code Editor
              </Badge>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              The AI Editor That{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Understands Code
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full opacity-60" />
              </span>
              {" "}Like a Human Expert
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered development environment that transforms your HTML, CSS, and JavaScript 
              into production-ready applications with enterprise-grade security and performance optimization.
            </p>
          </div>

          {/* Enhanced Main Section with Multiple Card Layouts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Editor Preview */}
            <div className="lg:col-span-2">
              <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl group hover:shadow-3xl transition-all duration-500">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="bg-background rounded-lg h-full w-full" />
                </div>
                
                <CardHeader className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      AI Code Editor v3.0
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-3xl sm:text-4xl font-bold mb-4">
                    Lade Stack AI Code Editor
                  </CardTitle>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The world's most intelligent code editor that understands your intent, 
                    predicts your needs, and writes production-ready code in real-time.
                  </p>
                </CardHeader>

                <CardContent className="relative p-8 pt-0">
                  {/* Mock Code Editor Interface */}
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-6 font-mono text-sm border border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs">AI Assistant Active</span>
                    </div>
                    <pre className="text-gray-300 leading-relaxed text-xs sm:text-sm">
{`// AI-powered code enhancement in progress
function optimizeCode(code) {
  // ✨ AI Suggestion: Add error handling
  try {
    const enhanced = aiCompiler.enhance(code);
    return enhanced.secure()
                  .optimized()
                  .documented();
  } catch (error) {
    console.error('AI enhancement failed:', error);
    return code; // Graceful fallback
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="group relative overflow-hidden flex-1 shadow-xl"
                      onClick={() => window.open('https://code.ladestack.in/', '_blank')}
                    >
                      <Code className="w-5 h-5 mr-2" />
                      Launch AI Editor
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 backdrop-blur-sm border-2 hover:bg-primary/10"
                      onClick={() => window.open('https://code.ladestack.in/docs', '_blank')}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Demo Previews with Modern Cards */}
            <div className="space-y-6">
              {demos.map((demo, index) => (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden border-0 bg-gradient-to-br ${demo.gradient} p-6 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer`}
                  onClick={() => window.open('https://code.ladestack.in/', '_blank')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <demo.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                        {demo.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    {demo.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Features Grid with Modern Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary">
                          {feature.stat}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Stats Section with Modern Design */}
          <Card className="relative overflow-hidden border-0 bg-gradient-glass backdrop-blur-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
            <CardContent className="relative p-12 text-center">
              <div className="mb-8">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-4">
                  🚀 Trusted by Developers Worldwide
                </Badge>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Join 50,000+ Developers Building the Future
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our AI-powered tools have helped developers ship faster, write better code, 
                  and reduce development time by up to 70%.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { 
                    value: "50K+", 
                    label: "Active Developers", 
                    icon: "👥",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  { 
                    value: "99.9%", 
                    label: "Uptime SLA", 
                    icon: "⚡",
                    gradient: "from-green-500 to-emerald-500"
                  },
                  { 
                    value: "10x", 
                    label: "Faster Development", 
                    icon: "🚀",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  { 
                    value: "24/7", 
                    label: "AI Support", 
                    icon: "🤖",
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium text-sm mb-1">
                      {stat.icon} {stat.label}
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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