import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/apps" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuVariants: Variants = {
  initial: { opacity: 0, height: 0, y: -10 },
  animate: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const mobileItemVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_20px_rgba(0,0,0,0.1)]"
          : "py-4 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        transition: "padding 0.5s ease, background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — rotate 8deg on hover */}
          <Link to="/" className="group flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <motion.div
              className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
              whileHover={{ rotate: 8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <span className="text-xs font-mono font-bold text-primary">{"</>"}</span>
            </motion.div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              Lade <span className="text-primary">Stack</span>
            </span>
          </Link>

          {/* Desktop Nav — animated underline */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {item.name}
                {/* Animated underline — Framer Motion */}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "60%", opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/apps">
              <motion.button
                className="inline-flex items-center gap-2 h-14 px-8 text-sm font-medium bg-primary text-primary-foreground rounded-2xl border border-primary/50 overflow-hidden relative"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(6,182,212,0.4), 0 0 60px rgba(6,182,212,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Get Started
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — slide animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.nav
              className="container mx-auto px-4 py-6 flex flex-col gap-1"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                },
              }}
              initial="initial"
              animate="animate"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileItemVariants}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={mobileItemVariants}
                className="mt-4 pt-4 border-t border-border"
              >
                <Link to="/apps" onClick={() => setIsOpen(false)}>
                  <motion.button
                    className="w-full h-14 text-sm font-medium bg-primary text-primary-foreground rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
