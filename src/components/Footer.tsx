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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1 animate-fade-in">
              <Link to="/" className="transition-smooth hover:opacity-90">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Lade Stack
                </h3>
              </Link>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Empowering developers with cutting-edge AI tools and solutions. 
                Building the future of development, one tool at a time.
              </p>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current animate-pulse-slow" />
                <span>and</span>
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-bounce-subtle" />
                <span>by Girish Lade</span>
              </div>
            </div>

            {/* Company Links */}
            <div className="animate-slide-in-left">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      {link.name}
                      <span className="block h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="animate-slide-in-left delay-100">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Legal & Support</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      {link.name}
                      <span className="block h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="animate-slide-in-right">
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Connect</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <a
                  href="https://github.com/girishlade111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-border hover:border-primary/50 transition-smooth group bg-card hover:bg-accent/5"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-lade-075bba201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-border hover:border-primary/50 transition-smooth group bg-card hover:bg-accent/5"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/girish_lade_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-border hover:border-primary/50 transition-smooth group bg-card hover:bg-accent/5"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.091 0-3.776-1.684-3.776-3.77s1.685-3.769 3.776-3.769c2.09 0 3.775 1.683 3.775 3.769s-1.685 3.77-3.775 3.77zm7.718-8.512c-.575 0-1.042-.467-1.042-1.042s.467-1.042 1.042-1.042c.575 0 1.042.467 1.042 1.042s-.467 1.042-1.042 1.042z"/>
                  </svg>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://codepen.io/Girish-Lade-the-looper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-border hover:border-primary/50 transition-smooth group bg-card hover:bg-accent/5"
                  aria-label="CodePen"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0l10.063 5.813v11.947L12 24 1.937 17.76V5.813L12 0zm6.827 9.28L12.87 13.52l-5.957-3.387L12 8.92l1.087-1.787-5.957-3.387L18.873 9.28 12.87 5.04 6.866 9.28l-5.133 2.94 5.133 2.94L12 21.587l6.827-3.827-5.134-2.94z"/>
                  </svg>
                  <span className="text-sm font-medium">CodePen</span>
                </a>
                <a
                  href="mailto:girishlade111@gmail.com"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-border hover:border-primary/50 transition-smooth group bg-card hover:bg-accent/5"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v-.273L12 9.1l6.545-4.57v.273h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} Lade Stack
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Lade Stack. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Terms
              </Link>
              <a
                href="#cookies"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;