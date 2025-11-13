import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Waves, Star } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Custom themes mapping to make it compatible with ThemeProvider
  const customThemeMap: Record<string, 'light' | 'dark'> = {
    'ocean': 'dark', // Map ocean to dark for compatibility
    'midnight': 'dark', // Map midnight to dark for compatibility
  };

  const themeConfig = {
    light: { 
      icon: Sun, 
      label: 'Light', 
      color: 'bg-yellow-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    dark: { 
      icon: Moon, 
      label: 'Dark', 
      color: 'bg-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-900 to-gray-800'
    },
    ocean: { 
      icon: Waves, 
      label: 'Ocean', 
      color: 'bg-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-100'
    },
    midnight: { 
      icon: Star, 
      label: 'Midnight', 
      color: 'bg-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-900 to-indigo-900'
    }
  };

  // Map custom themes to standard themes for ThemeProvider
  const mapToStandardTheme = (customTheme: string): 'light' | 'dark' => {
    if (customTheme === 'ocean' || customTheme === 'midnight') {
      return 'dark';
    }
    return customTheme as 'light' | 'dark';
  };

  // Get current theme (map custom themes to standard)
  const currentStandardTheme = mapToStandardTheme(theme);
  const currentConfig = themeConfig[currentStandardTheme as keyof typeof themeConfig] || themeConfig.light;

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 theme-transition"
      >
        <currentConfig.icon className="w-4 h-4" />
        <span className="hidden sm:inline">{currentConfig.label}</span>
        <Palette className="w-3 h-3" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Theme Options */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 glassmorphism rounded-lg border border-white/20 dark:border-gray-700/50 shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2">
                  Select Theme
                </div>
                {/* Simplified to only light and dark for ThemeProvider compatibility */}
                {['light', 'dark'].map((themeOption) => {
                  const config = themeConfig[themeOption as keyof typeof themeConfig];
                  const Icon = config.icon;
                  const isActive = currentStandardTheme === themeOption;
                  
                  return (
                    <motion.button
                      key={themeOption}
                      onClick={() => {
                        setTheme(themeOption as 'light' | 'dark');
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium theme-transition group relative overflow-hidden ${
                        isActive 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Background gradient preview */}
                      <div className={`absolute inset-0 ${config.bgColor} opacity-0 group-hover:opacity-30 transition-opacity`} />
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="theme-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                        />
                      )}
                      
                      <div className={`w-5 h-5 rounded ${config.color} flex items-center justify-center relative z-10`}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <span className="relative z-10 capitalize">{config.label}</span>
                      
                      {/* Selected indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Theme preview strip */}
              <div className="h-1 flex">
                {['light', 'dark'].map((themeOption) => {
                  const config = themeConfig[themeOption as keyof typeof themeConfig];
                  return (
                    <div
                      key={themeOption}
                      className={`flex-1 h-full ${config.color} ${currentStandardTheme === themeOption ? 'opacity-100' : 'opacity-40'}`}
                    />
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;