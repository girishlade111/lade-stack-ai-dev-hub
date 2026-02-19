import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search, Home, User, Layers, FileText, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { SearchModal } from "@/components/ui/search-modal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Products", href: "/apps", icon: Layers },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Cmd+K / Ctrl+K shortcut
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E6E6E6] dark:border-white/10 bg-[#F5F3EB]/85 dark:bg-[#1e1c18]/80 backdrop-blur-md md:backdrop-blur-xl"
            : "bg-[#F5F3EB] dark:bg-[#1e1c18]"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          {/* ── LEFT: Logo ─────────────────────────────────── */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#6E8F6A] flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-white">
                {"</>"}
              </span>
            </div>
            <span className="text-base font-semibold text-[#1C1C1C] dark:text-[#E8E4DA] tracking-tight">
              Lade Stack
            </span>
          </Link>

          {/* ── CENTER: Nav Links (desktop) ────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-[#555] dark:text-[#999] hover:text-[#1C1C1C] dark:hover:text-[#E8E4DA] transition-colors duration-200 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT: Actions ─────────────────────────────── */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 text-sm text-[#777] dark:text-[#999] bg-white/60 dark:bg-white/[0.04] border border-[#E6E6E6] dark:border-white/10 rounded-lg hover:bg-white/80 dark:hover:bg-white/[0.06] transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search...</span>
              <kbd className="hidden lg:inline-flex items-center gap-0.5 ml-2 px-1.5 py-0.5 text-[10px] font-mono text-[#999] dark:text-[#666] bg-[#F0F0F0] dark:bg-white/[0.06] rounded border border-[#E0E0E0] dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Search icon (mobile only) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="sm:hidden p-2 text-[#555] dark:text-[#999]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA (desktop) */}
            <Link to="/apps" className="hidden md:block">
              <motion.button
                className="h-9 px-5 text-sm font-medium bg-[#6E8F6A] text-white rounded-lg hover:bg-[#5F7F63] transition-colors duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-[#1C1C1C] dark:text-[#E8E4DA]"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-[#F5F3EB] dark:bg-[#1e1c18] border-[#E6E6E6] dark:border-white/10">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#6E8F6A] flex items-center justify-center">
                      <span className="text-[10px] font-mono font-bold text-white">
                        {"</>"}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-[#1C1C1C] dark:text-[#E8E4DA]">
                      Lade Stack
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-[#1C1C1C] dark:text-[#E8E4DA] hover:text-[#6E8F6A] hover:bg-[#E7EDD8]/50 dark:hover:bg-[#6E8F6A]/10 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-6 pt-6 border-t border-[#E6E6E6] dark:border-white/10 flex flex-col gap-3">
                  <Link to="/apps" onClick={() => setSheetOpen(false)}>
                    <button className="w-full h-10 text-sm font-medium bg-[#6E8F6A] text-white rounded-lg hover:bg-[#5F7F63] transition-colors">
                      Get Started
                    </button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
