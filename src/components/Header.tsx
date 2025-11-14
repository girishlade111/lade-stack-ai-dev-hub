import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import BentoMenu from "@/components/BentoMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized navigation items to prevent re-renders
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Optimize menu toggle with useCallback
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Close menu when clicking links
  const handleNavClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Animated Code Icon Logo - Touch optimized */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="group logo-container transition-all duration-300 hover:scale-105 touch-target touch-manipulation inline-flex"
              aria-label="Lade Stack Home"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 bg-foreground rounded-md flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-foreground/25 group-hover:rotate-180 transition-all duration-300">
                  <div className="text-background text-[8px] sm:text-xs font-mono font-bold">
                    {"</>"}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h1 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                  Lade Stack
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-fast font-medium relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-smooth group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <BentoMenu />
            <Link to="/apps">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs hover:bg-muted/50 transition-fast"
              >
                Get started
              </Button>
            </Link>
          </div>

          {/* Mobile Actions - Optimized for small screens */}
          <div className="flex md:hidden items-center space-x-1 sm:space-x-1.5">
            <ThemeToggle />
            <BentoMenu />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="relative transition-fast hover:bg-muted/50 touch-target touch-manipulation h-9 w-9"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="transition-transform duration-200 will-change-transform">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Optimized for performance */}
        <div className={`md:hidden transition-smooth overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-muted-foreground transition-fast font-medium py-2.5 px-3 rounded hover:bg-muted/30 text-sm touch-target touch-manipulation"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-4 mt-4 border-t border-border">
              <Link to="/apps" onClick={handleNavClick}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
                >
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
