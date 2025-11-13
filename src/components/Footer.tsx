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
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Compact Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Minimal Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-semibold text-xs">L</span>
                </div>
                <Link to="/" className="transition-all duration-200 hover:opacity-70">
                  <h3 className="text-sm font-semibold text-foreground">
                    Lade Stack
                  </h3>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mb-3">
                AI-powered development tools and solutions for modern developers.
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>Crafted by Girish Lade</span>
              </div>
            </div>

            {/* Compact Links */}
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
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
                      className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Minimal Social Links */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/girishlade111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/girish-lade-075bba201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:girishlade111@gmail.com"
                  className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200"
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