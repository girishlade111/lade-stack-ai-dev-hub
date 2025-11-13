import { useMemo } from 'react';
import { Activity, Globe, FolderOpen, BookOpen, Monitor, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { safeWindowOpen } from '@/utils/safe';

const LadeSuite = () => {
  // Define all apps with their icons and details
  const apps = useMemo(() => [
    {
      id: 'api-testing',
      icon: Activity,
      title: 'AI-Powered API Testing Platform',
      description: 'Revolutionary API testing suite with intelligent test generation and real-time monitoring',
      coverImage: '/api-testing-project.svg',
      category: 'Testing & QA',
      status: 'Available'
    },
    {
      id: 'website-builder',
      icon: Globe,
      title: 'No-Code Website Builder with AI',
      description: 'Enterprise-grade website builder powered by GPT-4 for responsive, SEO-optimized websites',
      coverImage: '/website-builder-project.svg',
      category: 'Web Development',
      status: 'Available'
    },
    {
      id: 'file-management',
      icon: FolderOpen,
      title: 'File Sharing Platform',
      description: 'Enterprise file sharing platform with global CDN and intelligent collaboration',
      coverImage: '/file-management-project.svg',
      category: 'Collaboration',
      status: 'Available'
    },
    {
      id: 'documentation-ai',
      icon: BookOpen,
      title: 'Technical Documentation AI',
      description: 'Advanced AI that generates comprehensive documentation and technical summaries',
      coverImage: '/documentation-ai-project.svg',
      category: 'Documentation',
      status: 'Available'
    },
    {
      id: 'ai-code-viewer',
      icon: Monitor,
      title: 'AI Code Viewer & Compiler',
      description: 'Revolutionary AI-powered code editor with real-time compilation and enhancement',
      coverImage: '/AIcode.png',
      category: 'Development',
      status: 'Available'
    }
  ], []);

  const categories = useMemo(() => {
    const cats = [...new Set(apps.map(app => app.category))];
    return cats.map(category => ({
      name: category
    }));
  }, [apps]);

  return (
    <section id="lade-suite" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-4">
              <Badge variant="secondary" className="text-xs">
                Complete Development Suite
              </Badge>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
              <span className="text-muted-foreground">Lade</span>{' '}
              Suite
            </h2>
            
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Five powerful AI-powered tools covering your entire development lifecycle. 
              Each app saves 10+ hours per week and integrates seamlessly.
            </p>
          </div>

          {/* Categories Overview */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <Badge key={category.name} variant="outline" className="text-xs">
                {category.name}
              </Badge>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6 sm:mb-8">
            {apps.map((app, index) => (
              <Card
                key={app.id}
                className="group border border-border hover:border-border/80 transition-all duration-300 hover:shadow-lg hover:scale-105 bg-card dark:bg-card/80 cursor-pointer"
                onClick={() => safeWindowOpen(`/projects/${app.id}`)}
              >
                <CardHeader className="p-3">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 mx-auto bg-muted dark:bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden border border-border">
                      <img
                        src={app.coverImage}
                        alt={app.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </div>
                    {/* App Icon Overlay */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-foreground rounded-full flex items-center justify-center shadow-sm border-2 border-background">
                      <app.icon className="w-3 h-3 text-background" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Badge variant="secondary" className="text-xs px-1 py-0">
                        {app.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-sm font-semibold text-foreground mb-2 leading-tight">
                      {app.title}
                    </CardTitle>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {app.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-3 pt-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {app.category}
                    </Badge>
                    <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="border border-border p-4 text-center bg-card dark:bg-card/80">
            <CardContent className="p-0">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Get Started with All Apps
                </h3>
                <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of developers using Lade Suite to build faster, more efficiently. 
                  Start your free trial today - no credit card required.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  size="sm"
                  className="text-xs"
                  onClick={() => safeWindowOpen('https://ladestack.in/')}
                >
                  Start Free Trial
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => safeWindowOpen('/projects')}
                >
                  View All Projects
                </Button>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-center gap-2 text-xs text-foreground font-medium">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Forever Free • No Credit Card</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LadeSuite;