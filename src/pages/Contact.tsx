import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Clock, Send, MessageSquare, Github,
  Linkedin, Instagram, ChevronDown, ArrowRight, CheckCircle2, Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    title: "admin@ladestack.in",
    sub: "Replies within a few hours",
    href: "mailto:admin@ladestack.in",
    accent: "#6E8F6A",
  },
  {
    icon: MessageSquare,
    label: "Support",
    title: "Email Support Only",
    sub: "Available around the clock",
    href: null,
    accent: "#7B8FC4",
  },
  {
    icon: MapPin,
    label: "Location",
    title: "Mumbai, India",
    sub: "Available for scheduled meetings",
    href: null,
    accent: "#C47B7B",
  },
  {
    icon: Clock,
    label: "Hours",
    title: "24 / 7",
    sub: "Every day of the year",
    href: null,
    accent: "#C4A97B",
  },
];

const socials = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/girishlade111" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/girish-lade-075bba201/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/girish_lade_/" },
];

const faqs = [
  {
    q: "How quickly can I expect a response?",
    a: "We typically respond within a few hours as we operate 24/7. For complex queries, our team may take up to 24 hours to provide a thorough response.",
  },
  {
    q: "Do you provide enterprise support?",
    a: "Yes, we offer priority support and custom enterprise solutions tailored to your team's needs. Reach out to discuss your requirements.",
  },
  {
    q: "Is Lade Stack available globally?",
    a: "Yes, our platform is accessible worldwide. All tools are cloud-based and available from any location with an internet connection.",
  },
  {
    q: "Can I schedule a demo of your platform?",
    a: "Absolutely. Send us an email at admin@ladestack.in with your preferred time and we'll set up a personalized walkthrough.",
  },
  {
    q: "Do you offer technical support with your products?",
    a: "Yes, all users receive technical support. We also offer documentation, guides, and direct assistance for implementation.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── FAQ item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-muted/30 transition-colors duration-200"
      >
        <span className="text-sm font-semibold text-foreground leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 text-muted-foreground"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Lade Stack",
    description: "Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions.",
    url: "https://ladestack.in/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Lade Stack",
      contactPoint: {
        "@type": "ContactPoint",
        email: "admin@ladestack.in",
        contactType: "customer support",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Lade Stack – Get in Touch for AI Development Support"
        description="Contact Lade Stack for AI development support, technical assistance, and enterprise solutions. We operate 24/7 and respond within hours. Based in Mumbai, India."
        keywords="Lade Stack contact, AI development support, technical assistance, enterprise solutions, customer support, Mumbai"
        ogTitle="Contact Lade Stack – AI Development Support"
        ogDescription="Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions."
        ogType="website"
        twitterTitle="Contact Lade Stack – AI Development Support"
        twitterDescription="Get in touch for AI development support and technical assistance. 24/7 availability."
        structuredData={contactStructuredData}
      />
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.12),_transparent_65%)]" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#6E8F6A]/5 blur-3xl" />
            <div className="absolute top-20 -left-24 w-72 h-72 rounded-full bg-[#6E8F6A]/4 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto text-center"
            >
              {/* Pill badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-xs font-semibold mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                We're here to help
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-5 leading-[1.1]"
              >
                Let's build something
                <br />
                <span className="text-[#6E8F6A]">great together</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
              >
                Have a question, idea, or need support? Our team is available
                around the clock — drop us a message and we'll get back to you fast.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact cards ────────────────────────────────────────────── */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <motion.div
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl border border-border bg-background p-5 sm:p-6 overflow-hidden cursor-default h-full"
                  >
                    {/* Subtle colour wash on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(ellipse at 30% 0%, ${card.accent}12, transparent 70%)` }}
                    />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${card.accent}18`, color: card.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      {card.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-foreground leading-snug mb-1">
                      {card.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{card.sub}</p>
                  </motion.div>
                );

                return card.href ? (
                  <a key={i} href={card.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  <div key={i} className="h-full">{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + Map ───────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

              {/* Left — Form (3 cols) */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-sm">
                  <div className="mb-7">
                    <h2 className="text-2xl font-bold text-foreground mb-1">Send a message</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill in the form — we'll reply to your inbox.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-14 gap-4 text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#6E8F6A]/15 flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-[#6E8F6A]" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                          Thanks for reaching out. We'll get back to you within a few hours.
                        </p>
                        <button
                          onClick={() => setSent(false)}
                          className="mt-2 text-xs font-medium text-[#6E8F6A] hover:underline"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="firstName" className="block text-xs font-semibold text-foreground">
                              First Name
                            </label>
                            <Input
                              id="firstName"
                              placeholder="Girish"
                              className="rounded-xl bg-muted/40 border-border text-sm h-11 focus-visible:ring-[#6E8F6A]/40"
                              required
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="lastName" className="block text-xs font-semibold text-foreground">
                              Last Name
                            </label>
                            <Input
                              id="lastName"
                              placeholder="Lade"
                              className="rounded-xl bg-muted/40 border-border text-sm h-11 focus-visible:ring-[#6E8F6A]/40"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="email" className="block text-xs font-semibold text-foreground">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="rounded-xl bg-muted/40 border-border text-sm h-11 focus-visible:ring-[#6E8F6A]/40"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="subject" className="block text-xs font-semibold text-foreground">
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                            className="rounded-xl bg-muted/40 border-border text-sm h-11 focus-visible:ring-[#6E8F6A]/40"
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="message" className="block text-xs font-semibold text-foreground">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your project or question..."
                            rows={5}
                            className="rounded-xl bg-muted/40 border-border text-sm resize-none focus-visible:ring-[#6E8F6A]/40"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full h-12 rounded-xl bg-[#6E8F6A] hover:bg-[#5F7F63] active:scale-[0.98] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Right sidebar (2 cols) */}
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                {/* Map */}
                <div className="rounded-3xl border border-border overflow-hidden shadow-sm flex-1 min-h-[220px]">
                  <iframe
                    src="https://www.google.com/maps?q=Mumbai,India&output=embed"
                    className="w-full h-full min-h-[220px]"
                    loading="lazy"
                    title="Lade Stack Location – Mumbai, India"
                  />
                </div>

                {/* Direct email CTA */}
                <div className="rounded-3xl border border-border bg-background p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6E8F6A]/12 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#6E8F6A]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Prefer email?</p>
                      <p className="text-sm font-bold text-foreground">admin@ladestack.in</p>
                    </div>
                  </div>
                  <a
                    href="mailto:admin@ladestack.in"
                    className="flex items-center justify-center gap-2 w-full h-10 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted/40 transition-colors duration-200"
                  >
                    Open in mail app
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Socials */}
                <div className="rounded-3xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Follow us
                  </p>
                  <div className="flex flex-col gap-2">
                    {socials.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted/40 transition-colors duration-200 group"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {label}
                        </span>
                        <ArrowRight className="w-3 h-3 ml-auto text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Frequently asked questions
                </h2>
                <p className="text-sm text-muted-foreground">
                  Quick answers to what developers ask us most.
                </p>
              </motion.div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA banner ────────────────────────────────────────── */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-[#6E8F6A]/25 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-background p-10 sm:p-14 text-center"
            >
              {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#6E8F6A]/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A] animate-pulse" />
                  Available 24 / 7
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Need immediate assistance?
                </h3>
                <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                  Our team is always on. Whether it's a critical bug or a product question,
                  we'll help you get unstuck fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:admin@ladestack.in"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#6E8F6A] hover:bg-[#5F7F63] text-white text-sm font-semibold transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Email us directly
                  </a>
                  <Link
                    to="/support"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-border bg-background hover:bg-muted/40 text-foreground text-sm font-semibold transition-colors duration-200"
                  >
                    Visit Support Center
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
