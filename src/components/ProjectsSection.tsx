import { ExternalLink, Code, Globe, FileText, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code,
      title: "API Testing & Documentation Tools",
      description: "Simplify API testing and automate documentation with our user-friendly platform. Streamline your API development workflow with intelligent testing and auto-generated docs.",
      features: ["Automated Testing", "Smart Documentation", "Real-time Monitoring"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "AI-Powered Website Builder",
      description: "Create dynamic, responsive websites with ease using AI. No coding required! Build professional websites in minutes with intelligent design suggestions.",
      features: ["No-Code Builder", "AI Design Assistant", "Responsive Templates"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "File Management Platform",
      description: "Secure, scalable, and user-friendly file management solutions for developers and teams. Organize, share, and collaborate on files with advanced security features.",
      features: ["Advanced Security", "Team Collaboration", "Version Control"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Docs Summarizer",
      description: "Leverage AI to quickly summarize complex technical documentation. Save time by getting instant, intelligent summaries of lengthy documentation and specs.",
      features: ["AI Summarization", "Technical Focus", "Multi-format Support"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Take a look at the exciting projects we are working on, each aimed at transforming the development world
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border hover:shadow-large transition-smooth hover:-translate-y-1"
              >
                {/* Project Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-bounce`}>
                    <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 sm:px-3 bg-primary/10 text-primary text-xs sm:text-sm rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 sm:pt-4">
                    <Button variant="outline" size="sm" className="group/btn w-full sm:w-auto">
                      Learn More
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to Transform Your Development Workflow?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Join thousands of developers who are already using our AI-powered tools to build better products faster.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;