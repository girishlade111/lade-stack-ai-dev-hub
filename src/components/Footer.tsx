import { Link } from "react-router-dom";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Support", href: "/support" },
      { name: "Documentation", href: "/docs" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/girishlade111" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/girish-lade-075bba201/" },
      { name: "Instagram", href: "https://www.instagram.com/girish_lade_/" },
      { name: "CodePen", href: "https://codepen.io/Girish-Lade-the-looper" },
    ],
  };

  return (
    <footer className="relative">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <Link to="/" className="transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Lade Stack
                  </h3>
                </Link>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                Empowering developers with cutting-edge AI tools and solutions.
                Building the future of development, one innovation at a time.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Crafted with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse-slow" />
                <span>and</span>
                <Code className="w-4 h-4 text-primary animate-bounce-subtle" />
                <span>by Girish Lade</span>
              </div>
            </div>

            {/* Enhanced Company Links */}
            <div className="animate-slide-in-left">
              <h4 className="text-lg font-semibold text-foreground mb-6 relative">
                Company
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-primary rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative inline-block py-2"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Legal Links */}
            <div className="animate-slide-in-left delay-100">
              <h4 className="text-lg font-semibold text-foreground mb-6 relative">
                Legal & Support
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-primary rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative inline-block py-2"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Social Links */}
            <div className="animate-slide-in-right">
              <h4 className="text-lg font-semibold text-foreground mb-6 relative">
                Connect
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-primary rounded-full" />
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    href: "https://github.com/girishlade111",
                    label: "GitHub",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    )
                  },
                  {
                    href: "https://www.linkedin.com/in/girish-lade-075bba201/",
                    label: "LinkedIn",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  {
                    href: "https://www.instagram.com/girish_lade_/",
                    label: "Instagram",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.091 0-3.776-1.684-3.776-3.77s1.685-3.769 3.776-3.769c2.09 0 3.775 1.683 3.775 3.769s-1.685 3.77-3.775 3.77zm7.718-8.512c-.575 0-1.042-.467-1.042-1.042s.467-1.042 1.042-1.042c.575 0 1.042.467 1.042 1.042s-.467 1.042-1.042 1.042z"/>
                      </svg>
                    )
                  },
                  {
                    href: "mailto:girishlade111@gmail.com",
                    label: "Email",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v-.273L12 9.1l6.545-4.57v.273h3.819c.904 0 1.636.732 1.636 1.636z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 p-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:bg-primary/5 hover:shadow-md relative overflow-hidden"
                    aria-label={social.label}
                  >
                    <div className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {social.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-300" />
                  </a>
                ))}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                © {currentYear} Lade Stack
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="py-6 border-t border-border/50 relative">
          <div className="absolute inset-0 bg-gradient-glass backdrop-blur-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" />
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 relative z-10">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Lade Stack. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {[
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
                { href: "#cookies", label: "Cookies", external: true }
              ].map((link, index) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;