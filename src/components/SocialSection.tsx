import { Github, Instagram, Linkedin, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "Girish Lade",
      description: "Explore my open-source contributions and projects. I'm committed to sharing my code and collaborating with the developer community.",
      url: "https://github.com/girishlade",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      platform: "LinkedIn",
      username: "Girish Lade",
      description: "Connect with me professionally and stay updated on my latest projects, career insights, and industry thoughts.",
      url: "https://linkedin.com/in/girishlade",
      icon: Linkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950",
    },
    {
      platform: "Instagram",
      username: "Girish Lade",
      description: "Follow my journey in tech, behind-the-scenes content, and personal insights into the world of development.",
      url: "https://instagram.com/girishlade",
      icon: Instagram,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-950",
    },
    {
      platform: "CodePen",
      username: "Girish Lade",
      description: "Check out my creative coding experiments, UI/UX prototypes, and interactive web development demos.",
      url: "https://codepen.io/girishlade",
      icon: Code2,
      color: "hover:text-green-600",
      bgColor: "hover:bg-green-50 dark:hover:bg-green-950",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Connected</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow me across platforms for the latest updates, development tips, and behind-the-scenes content
            </p>
          </div>

          {/* GitHub Highlight */}
          <div className="mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Open Source Contributions</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore my open-source contributions and projects on GitHub. I'm committed to sharing my code and collaborating with the developer community.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://github.com/girishlade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card rounded-xl p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth ${social.bgColor}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce ${social.color}`}>
                      <social.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {social.platform}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                      @{social.username.toLowerCase().replace(" ", "")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get notified about new projects, tools, and insights directly in your inbox. 
                Join our community of developers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button variant="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;