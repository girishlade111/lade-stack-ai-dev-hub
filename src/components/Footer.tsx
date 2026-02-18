import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Code, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const productLinks = [
  { name: "AI Code Editor", href: "/projects/ai-code-viewer" },
  { name: "API Testing", href: "/projects/api-testing" },
  { name: "Website Builder", href: "/projects/website-builder" },
  { name: "File Sharing", href: "/projects/file-management" },
  { name: "Documentation AI", href: "/projects/documentation-ai" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
  { name: "Documentation", href: "/docs" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/girishlade111" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/girish-lade-075bba201/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/girish_lade_/" },
  { icon: Code, label: "CodePen", href: "https://codepen.io/Girish-Lade-the-looper" },
  { icon: Mail, label: "Email", href: "mailto:girishlade111@gmail.com" },
];

function FooterLink({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) {
  const className = "relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group inline-block";

  const inner = (
    <>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
    </>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <Link to={to} className={className}>{inner}</Link>;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-primary">{"</>"}</span>
                </div>
                <span className="text-base font-semibold text-foreground">
                  Lade <span className="text-primary">Stack</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                The AI-powered development ecosystem. Enterprise-grade tools designed
                for modern developers who build at the speed of thought.
              </p>

              {/* Newsletter */}
              <div className="max-w-sm">
                <p className="text-xs font-medium text-foreground mb-2">Stay updated</p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 text-sm bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Products */}
          <div>
            <ScrollReveal delay={0.1}>
              <h4 className="text-sm font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink to={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Company */}
          <div>
            <ScrollReveal delay={0.2}>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink to={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Legal */}
          <div>
            <ScrollReveal delay={0.3}>
              <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <FooterLink to={link.href}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground">
              <span>&copy; {currentYear} Lade Stack. All rights reserved.</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>Built with precision by Girish Lade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
