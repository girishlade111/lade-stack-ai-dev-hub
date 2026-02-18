import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Home, User, Layers, FileText, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Products", href: "/apps", icon: Layers },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

const tabs = navItems.map((item) => ({
  title: item.name,
  icon: item.icon,
}));

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleTabChange = (index: number | null) => {
    if (index !== null && navItems[index]) {
      navigate(navItems[index].href);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-[#F5F3EB]/70 dark:bg-[#1e1c18]/60 backdrop-blur-md border-b border-[#E6E6E6] dark:border-white/10"
          : "py-4 bg-[#F5F3EB] dark:bg-[#1e1c18]"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LEFT — Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-[#6E8F6A] flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-white">{"</>"}</span>
          </div>
          <span className="text-base font-semibold text-[#1C1C1C] dark:text-[#E8E4DA] tracking-tight">
            Lade Stack
          </span>
        </Link>

        {/* CENTER — ExpandableTabs (desktop only) */}
        <div className="hidden md:flex">
          <ExpandableTabs
            tabs={tabs}
            activeColor="text-[#6E8F6A] dark:text-[#8BAF87]"
            className="bg-white/60 dark:bg-white/[0.04] border border-[#E6E6E6] dark:border-white/10 shadow-sm"
            onChange={handleTabChange}
          />
        </div>

        {/* RIGHT — Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/apps">
            <motion.button
              className="h-10 px-6 text-sm font-medium bg-[#6E8F6A] text-white rounded-full shadow-sm hover:bg-[#5F7F63] transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* RIGHT — Actions (mobile) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1C1C1C] dark:text-[#E8E4DA]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#F5F3EB] dark:bg-[#1e1c18] border-b border-[#E6E6E6] dark:border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[#1C1C1C] dark:text-[#E8E4DA] hover:text-[#6E8F6A] hover:bg-[#E7EDD8]/50 dark:hover:bg-[#6E8F6A]/10 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-[#E6E6E6] dark:border-white/10">
                <Link to="/apps" onClick={() => setIsOpen(false)}>
                  <button className="w-full h-10 text-sm font-medium bg-[#6E8F6A] text-white rounded-full">
                    Get Started
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
