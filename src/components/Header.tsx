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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Modern glass morphism header with enhanced backdrop */}
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-2xl border-b border-border/50 shadow-lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">L</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:opacity-90 transition-all duration-300">
                  Lade Stack
                </h1>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm xl:text-base text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <div className="relative group">
              <ThemeToggle />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300" />
            </Button>
          </div>

          {/* Enhanced Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative z-10 transition-transform duration-300 group-data-[state=open]:rotate-180">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden relative animate-slide-up">
            <div className="absolute top-0 left-0 right-0 bg-gradient-glass backdrop-blur-2xl border-t border-border/50 shadow-xl rounded-b-2xl mt-2" />
            <div className="relative py-6 px-4 space-y-2">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 group relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-300" />
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-3 pt-6 border-t border-border/50 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300" />
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