import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Grid3X3, X, Code, Globe, FileText, Brain, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoMenuItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  href?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary" | "accent" | "purple" | "blue" | "green" | "orange" | "indigo" | "pink";
}

const BentoMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: BentoMenuItem[] = [
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* AI Code Viewer - Modern Code Editor Interface */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden">
            {/* Editor window */}
            <div className="absolute inset-0 bg-gray-900/95 rounded-lg border border-gray-700/50">
              {/* Window controls */}
              <div className="absolute top-1 left-1 flex space-x-0.5">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              </div>
              {/* Code content */}
              <div className="absolute top-3 left-1 space-y-1">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-0.5 bg-gray-300/80 rounded-full" />
                  <div className="w-1 h-0.5 bg-gray-400/60 rounded" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-0.5 bg-gray-200/80 rounded-full" />
                  <div className="w-1.5 h-0.5 bg-gray-400/60 rounded" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-0.5 bg-gray-300/80 rounded-full" />
                  <div className="w-2 h-0.5 bg-gray-200/60 rounded" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-0.5 bg-gray-200/80 rounded-full" />
                  <div className="w-1 h-0.5 bg-gray-400/60 rounded" />
                </div>
              </div>
              {/* AI Indicator */}
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-gradient-to-r from-gray-200 to-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ),
      title: "AI Code Viewer",
      href: "/ai-code-viewer-ai",
      size: "medium",
      color: "default"
    },
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* File Sharing Platform - Cloud Storage Hub */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl overflow-hidden">
            {/* Cloud background */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-gray-400/10 rounded-xl" />
            {/* Main cloud shape */}
            <div className="absolute top-2 left-2 w-6 h-3 bg-gray-300/20 rounded-full blur-sm" />
            <div className="absolute top-1.5 left-4 w-4 h-2.5 bg-gray-200/25 rounded-full blur-sm" />
            <div className="absolute top-2 right-2 w-5 h-3 bg-gray-400/15 rounded-full blur-sm" />
            {/* File storage boxes */}
            <div className="absolute bottom-2 left-2 grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2.5 bg-gray-100 rounded-sm border border-gray-200" />
              <div className="w-2 h-2.5 bg-gray-200 rounded-sm border border-gray-300" />
              <div className="w-2 h-2.5 bg-gray-300 rounded-sm border border-gray-400" />
              <div className="w-2 h-2.5 bg-gray-400 rounded-sm border border-gray-500" />
            </div>
            {/* Sync indicator */}
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-gray-200 rounded-full animate-pulse" />
            {/* Upload arrows */}
            <div className="absolute bottom-1 right-1 flex space-x-0.5">
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      ),
      title: "File Sharing Platform",
      href: "/file-sharing-platform",
      size: "medium",
      color: "default"
    },
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* API Testing Platform - Network Interface */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden">
            {/* Network nodes */}
            <div className="absolute inset-0">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gray-300/20 rounded-full" />
              <div className="absolute top-1 right-3 w-2 h-2 bg-gray-200/15 rounded-full blur-sm" />
              <div className="absolute bottom-3 left-1 w-1 h-1 bg-gray-400/25 rounded-full" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gray-300/20 rounded-full" />
              {/* Connection lines */}
              <div className="absolute top-2.5 left-3 w-6 h-0.5 bg-gray-500/20 rounded-full" />
              <div className="absolute top-4 left-2 w-0.5 h-3 bg-gray-500/20 rounded-full" />
              <div className="absolute bottom-3.5 left-2 w-7 h-0.5 bg-gray-500/20 rounded-full" />
            </div>
            {/* Request/Response indicators */}
            <div className="absolute top-2 left-2 flex space-x-1">
              <div className="w-1.5 h-0.5 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-1 h-0.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-0.5 bg-gray-100 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            {/* Response status */}
            <div className="absolute bottom-2 left-2 flex space-x-1">
              <div className="w-1 h-1 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            {/* API endpoint */}
            <div className="absolute top-1.5 right-2 w-3 h-1 bg-gray-200/90 rounded-md flex items-center justify-center">
              <div className="w-1 h-0.5 bg-gray-700 rounded-full" />
            </div>
          </div>
        </div>
      ),
      title: "API Testing Platform",
      href: "/projects/api-testing",
      size: "medium",
      color: "default"
    },
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* Website Builder - Design Studio */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl overflow-hidden">
            {/* Design canvas */}
            <div className="absolute inset-0 bg-gray-900/30 rounded-lg border border-gray-400/20">
              {/* Grid layout */}
              <div className="absolute top-1.5 left-1.5 grid grid-cols-3 gap-0.5">
                <div className="w-2 h-1.5 bg-gray-200/80 rounded-sm" />
                <div className="w-2 h-1.5 bg-gray-100/90 rounded-sm" />
                <div className="w-2 h-1.5 bg-gray-300/70 rounded-sm" />
                <div className="w-2 h-1.5 bg-gray-100/80 rounded-sm" />
                <div className="w-2 h-1.5 bg-gray-400/80 rounded-sm" />
                <div className="w-2 h-1.5 bg-gray-100/90 rounded-sm" />
              </div>
            </div>
            {/* Design tools */}
            <div className="absolute bottom-1 left-1 flex space-x-0.5">
              <div className="w-1.5 h-1.5 bg-gray-200 rounded-sm border border-gray-300/50" />
              <div className="w-1.5 h-1.5 bg-gray-300 rounded-sm border border-gray-400/50" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm border border-gray-500/50" />
            </div>
            {/* AI design assistant */}
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center border border-gray-300/50">
              <div className="w-1 h-1 bg-gray-800 rounded-full animate-pulse" />
            </div>
            {/* Color palette */}
            <div className="absolute bottom-1 right-1 flex space-x-0.5">
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="w-1 h-1 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      ),
      title: "Website Builder",
      href: "/projects/website-builder",
      size: "medium",
      color: "default"
    },
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* Documentation AI - Smart Document System */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl overflow-hidden">
            {/* Document pages */}
            <div className="absolute inset-0 bg-gray-50/95 rounded-lg border border-gray-300/50">
              {/* Folded corner */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-gray-200 to-white border-l-2 border-b-2 border-gray-300/50 rounded-bl-lg" />
              {/* Content lines */}
              <div className="absolute top-2 left-2 space-y-1">
                <div className="w-4 h-0.5 bg-gray-400 rounded-full" />
                <div className="w-3 h-0.5 bg-gray-300 rounded-full" />
                <div className="w-4.5 h-0.5 bg-gray-500 rounded-full" />
                <div className="w-2.5 h-0.5 bg-gray-200 rounded-full" />
                <div className="w-4 h-0.5 bg-gray-400 rounded-full" />
              </div>
              {/* Code block */}
              <div className="absolute top-6 left-2 w-5 h-2 bg-gray-200 rounded border-l-2 border-gray-400">
                <div className="absolute top-1 left-1 space-y-0.5">
                  <div className="w-3 h-0.5 bg-gray-600 rounded-full" />
                  <div className="w-2.5 h-0.5 bg-gray-500 rounded-full" />
                  <div className="w-4 h-0.5 bg-gray-700 rounded-full" />
                </div>
              </div>
            </div>
            {/* AI processing indicator */}
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-1 h-1 bg-gray-800 rounded-full" />
            </div>
            {/* Export options */}
            <div className="absolute bottom-1 left-1 flex space-x-0.5">
              <div className="w-1 h-1 bg-gray-400/80 rounded-full" />
              <div className="w-1 h-1 bg-gray-500/80 rounded-full" />
              <div className="w-1 h-1 bg-gray-600/80 rounded-full" />
            </div>
          </div>
        </div>
      ),
      title: "Documentation AI",
      href: "/projects/documentation-ai",
      size: "medium",
      color: "default"
    },
    {
      icon: ({ size = 24, className }) => (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
          {/* All Projects - Dashboard Overview */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden">
            {/* Dashboard grid */}
            <div className="absolute inset-0">
              <div className="absolute top-1.5 left-1.5 grid grid-cols-4 gap-0.5">
                <div className="w-1.5 h-1 bg-gray-200/90 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-300/80 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-100/70 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-400/80 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-300/70 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-100/80 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-500/70 rounded-sm" />
                <div className="w-1.5 h-1 bg-gray-100/60 rounded-sm" />
              </div>
            </div>
            {/* Project status indicators */}
            <div className="absolute top-2 left-2 flex space-x-1">
              <div className="w-1 h-1 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            {/* Active project indicator */}
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-1 h-1 bg-gray-800 rounded-full" />
            </div>
            {/* Quick actions */}
            <div className="absolute bottom-2 right-2 space-y-0.5">
              <div className="w-1.5 h-0.5 bg-gray-200/70 rounded-full" />
              <div className="w-1 h-0.5 bg-gray-300/60 rounded-full" />
              <div className="w-1.5 h-0.5 bg-gray-400/80 rounded-full" />
            </div>
            {/* Projects counter */}
            <div className="absolute top-1.5 right-1.5 w-3 h-1.5 bg-gray-100/90 rounded-full flex items-center justify-center">
              <div className="text-xs font-medium text-gray-800">6</div>
            </div>
          </div>
        </div>
      ),
      title: "All Projects",
      href: "/projects",
      size: "medium",
      color: "default"
    }
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleItemClick = useCallback((item: BentoMenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  }, []);

  const getItemClasses = (item: BentoMenuItem) => {
    const baseClasses = "relative group flex flex-col items-center justify-center rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200 hover:shadow-md hover:scale-105 touch-target touch-manipulation";
    
    const sizeClasses = {
      small: "aspect-square h-14 sm:h-16 p-2",
      medium: "aspect-square h-16 sm:h-20 p-2 sm:p-3",
      large: "aspect-square h-18 sm:h-24 p-3 sm:p-4"
    };

    const colorClasses = {
      default: "text-muted-foreground hover:text-foreground",
      primary: "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20",
      secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20",
      accent: "bg-accent/10 text-accent hover:bg-accent/20 border-accent/20",
      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-800",
      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30 border-green-200 dark:border-green-800",
      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-800",
      indigo: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800",
      pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-800"
    };

    return cn(baseClasses, sizeClasses[item.size || "small"], colorClasses[item.color || "default"]);
  };

  const getIconClasses = (item: BentoMenuItem) => {
    const size = item.size === "large" ? "h-6 w-6" : item.size === "medium" ? "h-5 w-5" : "h-4 w-4";
    return cn(size);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative transition-fast hover:bg-muted/50 touch-target touch-manipulation"
        aria-label={isOpen ? "Close menu" : "Open bento menu"}
        aria-expanded={isOpen}
      >
        <div className="transition-transform duration-200 will-change-transform">
          {isOpen ? <X className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
        </div>
      </Button>

      {/* Bento Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-12 z-50 w-[280px] sm:w-80 md:w-96 p-3 sm:p-4 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl">
            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                
                if (item.href) {
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className={getItemClasses(item)}
                      onClick={() => handleItemClick(item)}
                      title={item.title}
                    >
                      <div className="flex items-center justify-center h-full">
                        <IconComponent
                          size={item.size === "large" ? 20 : item.size === "medium" ? 18 : 16}
                          className={cn("text-current", getIconClasses(item))}
                        />
                      </div>
                    </Link>
                  );
                }

                return (
                  <button
                    key={index}
                    className={getItemClasses(item)}
                    onClick={() => handleItemClick(item)}
                    title={item.title}
                  >
                    <div className="flex items-center justify-center h-full">
                      <IconComponent
                        size={item.size === "large" ? 20 : item.size === "medium" ? 18 : 16}
                        className={cn("text-current", getIconClasses(item))}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Menu Footer */}
            <div className="mt-4 pt-3 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Lade Stack Apps</span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  6 Apps Available
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BentoMenu;