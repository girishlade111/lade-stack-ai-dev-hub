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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at the exciting projects we are working on, each aimed at transforming the development world
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl p-8 shadow-medium border border-border hover:shadow-large transition-smooth hover:-translate-y-1"
              >
                {/* Project Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button variant="outline" className="group/btn">
                      Learn More
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Development Workflow?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of developers who are already using our AI-powered tools to build better products faster.
              </p>
              <Button variant="hero" size="lg">
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