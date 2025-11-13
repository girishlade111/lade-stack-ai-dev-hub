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
              <Link to="/" className="group logo-container transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 mb-3">
                <div className="relative w-6 h-6 bg-foreground rounded-md flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-foreground/25 transition-all duration-300 flex-shrink-0">
                  <div className="text-background text-xs font-mono font-bold">
                    {"</>"}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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

          {/* Top Gradient Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent mb-6" />
          
          {/* Connect with Girish Lade Section */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Connect with Girish Lade
            </h4>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="https://www.instagram.com/girish_lade_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-[#E1306C] transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                aria-label="Instagram"
              >
                <span className="relative z-10">Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/girish-lade-075bba201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-[#0077B5] transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                aria-label="LinkedIn"
              >
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="https://github.com/girishlade111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                aria-label="GitHub"
              >
                <span className="relative z-10">GitHub</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="https://codepen.io/Girish-Lade-the-looper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-black transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                aria-label="CodePen"
              >
                <span className="relative z-10">CodePen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
              <a
                href="mailto:girishlade111@gmail.com"
                className="text-xs text-muted-foreground hover:text-[#00BFA6] transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                aria-label="Email"
              >
                <span className="relative z-10">girishlade111@gmail.com</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFA6] to-[#3B82F6] rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Footer with Community Tagline */}
          <div className="mb-6">
            <p className="text-xs text-center text-muted-foreground mb-4 italic">
              "Empowering Developers with Lade Stack AI Tools."
            </p>
            <div className="text-center space-y-3">
              <div>
                <a
                  href="https://code.ladestack.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#3B82F6] hover:text-[#00BFA6] transition-all duration-300 hover:scale-105 transform"
                >
                  Try AI Tool →
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-[#00BFA6] font-medium">
                Join the Lade Stack developer community — Coming soon.
              </p>
            </div>
          </div>
          
          {/* Enhanced Copyright and Backlink */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="text-xs text-muted-foreground">
              © {currentYear} Lade Stack. All rights reserved.
            </div>
            <div className="text-xs text-muted-foreground">
              Built with ❤️ by{' '}
              <a
                href="https://ladestack.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#3B82F6] transition-all duration-300 hover:scale-105 transform relative group"
              >
                <span className="relative z-10">LadeStack.in</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#00BFA6] rounded opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;