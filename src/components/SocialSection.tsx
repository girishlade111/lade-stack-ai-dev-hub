import { Github, Instagram, Linkedin, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "Girish Lade",
      description: "Explore my open-source contributions and projects. I'm committed to sharing my code and collaborating with the developer community.",
      url: "https://github.com/girishlade111",
      icon: Github,
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10",
    },
    {
      platform: "LinkedIn",
      username: "Girish Lade",
      description: "Connect with me professionally and stay updated on my latest projects, career insights, and industry thoughts.",
      url: "https://www.linkedin.com/in/girish-lade-075bba201/",
      icon: Linkedin,
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10",
    },
    {
      platform: "Instagram",
      username: "Girish Lade",
      description: "Follow my journey in tech, behind-the-scenes content, and personal insights into the world of development.",
      url: "https://www.instagram.com/girish_lade_/",
      icon: Instagram,
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10",
    },
    {
      platform: "CodePen",
      username: "Girish Lade",
      description: "Check out my creative coding experiments, UI/UX prototypes, and interactive web development demos.",
      url: "https://codepen.io/Girish-Lade-the-looper",
      icon: Code2,
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Connected</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Follow me across platforms for the latest updates, development tips, and behind-the-scenes content
            </p>
          </div>

          {/* GitHub Highlight */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Open Source Contributions</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Explore my open-source contributions and projects on GitHub. I'm committed to sharing my code and collaborating with the developer community.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a 
                  href="https://github.com/girishlade111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  View GitHub Profile
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth ${social.bgColor}`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce ${social.color}`}>
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">
                        {social.platform}
                      </h3>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-smooth flex-shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-smooth mb-2">
                      @{social.username.toLowerCase().replace(" ", "")}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Stay Updated
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                Get notified about new projects, tools, and insights directly in your inbox. 
                Join our community of developers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  id="social-email"
                  name="social-email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base"
                />
                <Button variant="default" size="sm" className="sm:size-auto">
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