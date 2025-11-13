import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { theme } = useTheme();

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easeOutCubic));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, hasAnimated, end, duration]);

  const getThemeStyles = () => {
    return theme === 'dark' ? 'text-gray-300' : 'text-blue-600 dark:text-blue-400';
  };

  return (
    <span ref={ref} className={`font-mono font-bold ${getThemeStyles()} ${className}`}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

interface CounterStatsProps {
  stats: Array<{
    end: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description: string;
    icon?: React.ComponentType<any>;
  }>;
  className?: string;
}

const CounterStats: React.FC<CounterStatsProps> = ({
  stats,
  className = ''
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const getThemeStyles = () => {
    return 'bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800';
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className={`glassmorphism rounded-xl p-6 border text-center hover-lift group ${getThemeStyles()}`}
          >
            {Icon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
            )}
            
            <motion.div
              className="mb-2"
              initial={{ scale: 0.5 }}
              animate={hasAnimated ? { scale: 1 } : { scale: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200
              }}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                className="text-2xl md:text-3xl"
              />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.4
              }}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1"
            >
              {stat.label}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.5
              }}
              className="text-xs text-gray-500 dark:text-gray-400"
            >
              {stat.description}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
};

export { AnimatedCounter, CounterStats };