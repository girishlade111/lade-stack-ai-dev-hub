import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  // Memoize current year to prevent re-renders
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Memoize footer links to prevent re-renders
  const footerLinks = useMemo(() => ({
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
  }), []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Footer Content */}
        <div className="py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Minimal Company Info */}
            <div className="md:col-span-2">
              <Link to="/" className="group transition-fast hover:opacity-70 inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-background font-semibold text-xs">L</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  Lade Stack
                </h3>
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mb-3">
                AI-powered development tools and solutions for modern developers.
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>Crafted by Girish Lade</span>
              </div>
            </div>

            {/* Compact Links - Mobile optimized */}
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-fast touch-target touch-manipulation"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">
                Legal
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-fast touch-target touch-manipulation"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Minimal Social Links - Mobile optimized */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4 overflow-x-auto">
                <a
                  href="https://github.com/girishlade111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-fast whitespace-nowrap touch-target touch-manipulation"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-lade-075bba201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-fast whitespace-nowrap touch-target touch-manipulation"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:girishlade111@gmail.com"
                  className="text-xs text-muted-foreground hover:text-foreground transition-fast whitespace-nowrap touch-target touch-manipulation"
                  aria-label="Email"
                >
                  Email
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                © {currentYear} Lade Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;