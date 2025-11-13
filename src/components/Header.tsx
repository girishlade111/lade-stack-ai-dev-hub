import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Minimal Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group transition-all duration-200 hover:opacity-70">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-semibold text-xs">L</span>
                </div>
                <h1 className="text-sm font-semibold text-foreground">
                  Lade Stack
                </h1>
              </div>
            </Link>
          </div>

          {/* Compact Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-all duration-200 font-medium relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Compact Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-xs hover:bg-muted/50 transition-all duration-200"
            >
              Get started
            </Button>
          </div>

          {/* Compact Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group transition-all duration-200 hover:bg-muted/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative z-10 transition-transform duration-200 group-data-[state=open]:rotate-180">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Minimal Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden relative animate-slide-up">
            <div className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border shadow-lg rounded-b-md mt-1" />
            <div className="relative py-4 px-3 space-y-1">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-muted-foreground transition-all duration-200 font-medium py-2 px-3 rounded hover:bg-muted/30 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs hover:bg-muted/50 transition-all duration-200"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;