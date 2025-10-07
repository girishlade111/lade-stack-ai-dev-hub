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
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-smooth group"
                    >
                      {link.name}
                      <span className="block h-0.5 bg-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                  </li>
                ))}
              </ul>
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