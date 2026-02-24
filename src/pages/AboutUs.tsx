import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb, Users, Award, Eye, ExternalLink,
  Sparkles, ArrowRight, Github, Linkedin, Instagram,
  Cpu, Palette, ServerCog, Bot, Globe, Layers,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import girishImage from "@/assets/girish.jpg";

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32, filter: "blur(4px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Sparkles,
    title: "AI-First Innovation",
    description:
      "Every Lade Stack product begins with intelligent automation — from smart build pipelines to autonomous testing agents. We're redefining how developers work with machine learning as their co-creator.",
    accent: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/10 text-violet-500",
    border: "border-violet-500/15",
  },
  {
    icon: Users,
    title: "Developer Empowerment",
    description:
      "Lade Stack is built by a developer, for developers. We focus on creating intuitive, accessible, and powerful tools that remove friction and enhance creativity.",
    accent: "from-sky-500/20 to-sky-500/5",
    iconBg: "bg-sky-500/10 text-sky-500",
    border: "border-sky-500/15",
  },
  {
    icon: Award,
    title: "Production-Ready Quality",
    description:
      "We don't just build prototypes — we build production-grade systems with high uptime, enterprise-level security, and world-class scalability.",
    accent: "from-amber-500/20 to-amber-500/5",
    iconBg: "bg-amber-500/10 text-amber-500",
    border: "border-amber-500/15",
  },
  {
    icon: Eye,
    title: "Open Source Transparency",
    description:
      "Transparency is our foundation. Our open-source initiatives, clear documentation, and API accessibility enable true collaboration across the developer community.",
    accent: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-500",
    border: "border-emerald-500/15",
  },
];

const socials = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/girishlade111" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/girish-lade-075bba201/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/girish_lade_/" },
];

// ─── Section label component ──────────────────────────────────────────────────

function SectionLabel({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-xs font-semibold mb-5">
      <Icon className="w-3.5 h-3.5" />
      {text}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Lade Stack - Empowering Developers Through AI Innovation & Visionary Leadership"
        description="Discover Lade Stack's inspiring journey from a developer's vision to an AI-powered development ecosystem. Founded by Girish Lade, we democratize advanced development tools for creators worldwide."
        keywords="Lade Stack about, AI development revolution, Girish Lade founder story, developer empowerment, AI-first innovation, full-stack development, SaaS product innovation"
        ogTitle="About Lade Stack - Visionary AI Development Tools & Founder Story"
        ogDescription="Learn how Girish Lade transformed from a passionate developer to founding Lade Stack - an AI-powered ecosystem revolutionizing how creators build, test, and deploy modern applications."
        ogImage={`${window.location.origin}/og-about.png`}
        twitterTitle="About Lade Stack - AI Development Revolution & Founder Story"
        twitterDescription="Discover how Girish Lade's vision became Lade Stack - transforming developer workflows through AI-powered tools and innovation."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lade Stack",
          description: "AI-powered development tools ecosystem founded by Girish Lade, democratizing advanced development tools for creators and startups worldwide.",
          url: "https://ladestack.in",
          logo: "https://ladestack.in/logo.png",
          foundingDate: "2020",
          founder: {
            "@type": "Person",
            name: "Girish Lade",
            jobTitle: "Founder & Lead Developer",
            url: "https://ladestack.in/about",
            description: "Multi-disciplinary engineer and designer with expertise in AI systems, web development, and user experience",
          },
          contactPoint: {
            "@type": "ContactPoint",
            email: "admin@ladestack.in",
            contactType: "customer support",
          },
          sameAs: [
            "https://www.instagram.com/girish_lade_/",
            "https://www.linkedin.com/in/girish-lade-075bba201/",
            "https://github.com/girishlade111",
            "https://codepen.io/Girish-Lade-the-looper",
          ],
        }}
      />
      <Header />

      <main>

        {/* ══════════════════════════════════════════════════ HERO */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
              bg-[radial-gradient(ellipse_at_top,_rgba(110,143,106,0.11),_transparent_60%)]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
            <div className="absolute top-32 -left-24 w-80 h-80 rounded-full bg-[#6E8F6A]/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">

              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
                <SectionLabel icon={Sparkles} text="Our Story" />
              </motion.div>

              <motion.h1
                custom={1} variants={fadeUp} initial="hidden" animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.08] mb-6"
              >
                About{" "}
                <span className="relative">
                  <span className="text-[#6E8F6A]">Lade Stack</span>
                  {/* Underline accent */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#6E8F6A]/40"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </motion.h1>

              <motion.p
                custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
              >
                Empowering developers through innovation, automation, and intelligence
              </motion.p>

              <motion.p
                custom={3} variants={fadeUp} initial="hidden" animate="visible"
                className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Lade Stack redefines how developers build, test, and deploy modern applications
                with AI-powered tools that accelerate workflows, ensure production-grade reliability,
                and simplify development for teams of all sizes.
              </motion.p>

              {/* Quick stats */}
              <motion.div
                custom={4} variants={fadeUp} initial="hidden" animate="visible"
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
              >
                {[
                  { value: "2020", label: "Founded" },
                  { value: "5+",   label: "AI Tools" },
                  { value: "1k+",  label: "Developers" },
                  { value: "100%", label: "Free" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center p-4 rounded-2xl border border-border bg-background/60">
                    <p className="text-2xl font-extrabold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ OUR STORY */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left — visual timeline strip */}
                <motion.div
                  variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="relative"
                >
                  {/* Vertical timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6E8F6A]/60 via-[#6E8F6A]/20 to-transparent" />

                  <div className="space-y-8 pl-16">
                    {[
                      { year: "2020", title: "The Beginning", text: "Girish starts building personal dev tools and AI automation experiments." },
                      { year: "2022", title: "First Products", text: "Multi-LLM projects, e-commerce suites, and productivity platforms take shape." },
                      { year: "2024", title: "Lade Stack Born", text: "The vision crystallises — a unified AI developer ecosystem for everyone." },
                      { year: "2025", title: "Growing Fast", text: "5+ tools live, 1000+ developers, and the roadmap keeps expanding." },
                    ].map(({ year, title, text }, i) => (
                      <motion.div
                        key={year}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Dot */}
                        <div className="absolute -left-[2.6rem] top-1 w-3 h-3 rounded-full bg-[#6E8F6A] ring-4 ring-background" />
                        <span className="text-xs font-bold text-[#6E8F6A] uppercase tracking-widest">{year}</span>
                        <h4 className="text-base font-bold text-foreground mt-0.5 mb-1">{title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right — story text */}
                <motion.div
                  variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="space-y-6"
                >
                  <SectionLabel icon={Lightbulb} text="Our Story" />

                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    Built from a developer's{" "}
                    <span className="text-[#6E8F6A]">real frustrations</span>
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    In 2020, Girish Lade — an engineer, developer, and designer — began building
                    something extraordinary. What started as a personal mission to streamline his
                    own development process quickly evolved into a vision that would transform how
                    creators and startups approach software development.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Born from years of working on multi-LLM projects and AI automation tools,
                    Girish witnessed firsthand the power of intelligent systems. His journey from
                    building personal productivity tools to full-fledged e-commerce platforms
                    revealed a critical gap in the market: most developers lacked access to
                    enterprise-grade AI capabilities that could democratize advanced development practices.
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    Today, Lade Stack stands as a testament to what passionate innovation can achieve.
                    We're not just building tools; we're building the future of development — one
                    where AI and human creativity work in perfect harmony.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ PIVOT POINT */}
        <section className="py-16 sm:py-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              {/* ── Section header ──────────────────────────────────── */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-center mb-12"
              >
                <SectionLabel icon={Lightbulb} text="The turning moment" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  The Pivot <span className="text-[#6E8F6A]">Point</span>
                </h2>
              </motion.div>

              {/* ── Before → After transformation cards ─────────────── */}
              <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-10">

                {/* BEFORE card */}
                <motion.div
                  variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex-1 relative rounded-3xl border border-border bg-background p-7 sm:p-8 md:rounded-r-none md:border-r-0"
                >
                  {/* Top label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 border border-border text-muted-foreground text-[11px] font-bold uppercase tracking-widest mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                    Before
                  </div>

                  <div className="space-y-5">
                    {[
                      { Icon: Cpu,       label: "AI integrations", sub: "Personal experiments & scripts" },
                      { Icon: Palette,   label: "UX/UI design",    sub: "Crafting interfaces solo"       },
                      { Icon: ServerCog, label: "Backend systems",  sub: "One-off productivity tools"    },
                    ].map(({ Icon, label, sub }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center flex-shrink-0 text-muted-foreground">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{label}</p>
                          <p className="text-xs text-muted-foreground">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Centre arrow connector */}
                <div className="relative z-10 flex items-center justify-center self-center md:self-auto md:-mx-1">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="w-12 h-12 rounded-full bg-[#6E8F6A] shadow-lg shadow-[#6E8F6A]/30 flex items-center justify-center flex-shrink-0 rotate-90 md:rotate-0"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* AFTER card */}
                <motion.div
                  variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex-1 relative rounded-3xl border border-[#6E8F6A]/25 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-background p-7 sm:p-8 md:rounded-l-none md:border-l-0 overflow-hidden"
                >
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#6E8F6A]/10 blur-3xl pointer-events-none rounded-full" />

                  {/* Top label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-[11px] font-bold uppercase tracking-widest mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A] animate-pulse" />
                    After
                  </div>

                  <div className="relative space-y-5">
                    {[
                      { Icon: Bot,    label: "AI-powered suite",      sub: "5+ tools for every workflow"     },
                      { Icon: Globe,  label: "Global developer reach", sub: "1,000+ creators empowered"      },
                      { Icon: Layers, label: "Lade Stack ecosystem",   sub: "Unified, free, production-grade" },
                    ].map(({ Icon, label, sub }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#6E8F6A]/12 border border-[#6E8F6A]/20 flex items-center justify-center flex-shrink-0 text-[#6E8F6A]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{label}</p>
                          <p className="text-xs text-muted-foreground">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ── Main copy block ──────────────────────────────────── */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-3xl border border-border bg-background overflow-hidden"
              >
                {/* Colour strip on the left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6E8F6A] via-[#8BAF87] to-[#6E8F6A]/20 rounded-l-3xl" />

                <div className="p-8 sm:p-10 pl-10 sm:pl-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

                  {/* Left: decorative label stack */}
                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#6E8F6A]/12 border border-[#6E8F6A]/20 flex items-center justify-center">
                      <Lightbulb className="w-7 h-7 text-[#6E8F6A]" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      The moment everything changed
                    </p>
                    {/* Animated underline */}
                    <motion.div
                      className="h-px bg-gradient-to-r from-[#6E8F6A] to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />
                    {/* Keyword chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["AI integrations", "UX/UI design", "Backend systems"].map((chip) => (
                        <span key={chip} className="px-2.5 py-1 rounded-full text-[11px] font-medium text-muted-foreground bg-muted/50 border border-border">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: the actual paragraph — word-for-word original */}
                  <div className="lg:col-span-3 space-y-5">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      What began as Girish's early work in AI integrations, UX/UI design, and
                      backend systems became the foundation for something bigger. The transition
                      from personal productivity tools to an entire suite of intelligent development
                      utilities wasn't just business growth — it was a response to a calling.
                    </p>

                    {/* Highlighted pull-quote */}
                    <div className="relative rounded-2xl bg-[#6E8F6A]/8 border border-[#6E8F6A]/15 px-6 py-5">
                      <div className="absolute -top-3 left-6 text-4xl text-[#6E8F6A]/40 font-serif leading-none select-none">
                        ❝
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
                        A calling to empower developers worldwide, regardless of their scale
                        or resources.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ MISSION + PHILOSOPHY */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Mission */}
                <motion.div
                  variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-3xl border border-border bg-background p-8 sm:p-10 flex flex-col gap-6"
                >
                  <div>
                    <SectionLabel icon={Award} text="Our Mission" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                      Bridging AI and everyday{" "}
                      <span className="text-[#6E8F6A]">developers</span>
                    </h2>
                  </div>

                  <div className="space-y-4 flex-1">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Lade Stack's mission is to bridge the gap between complex AI systems and
                      everyday developers. We believe innovation should be inclusive, transparent,
                      and human-centered — enabling developers to build smarter, faster, and better.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our focus is making enterprise-grade capabilities accessible — like automation,
                      smart APIs, and multi-agent collaboration systems. We're transforming the
                      development landscape by ensuring that cutting-edge AI tools aren't just for
                      tech giants, but for every passionate creator with a vision.
                    </p>
                  </div>

                  {/* Mission pillars */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {["Inclusive", "Transparent", "Human-centered"].map((pillar) => (
                      <div key={pillar} className="flex flex-col items-center text-center p-3 rounded-2xl bg-muted/40 border border-border">
                        <span className="text-xs font-semibold text-foreground">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Philosophy */}
                <motion.div
                  variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-3xl border border-[#6E8F6A]/20 bg-gradient-to-br from-[#6E8F6A]/8 to-background p-8 sm:p-10 flex flex-col gap-6"
                >
                  <div>
                    <SectionLabel icon={Sparkles} text="Our Philosophy" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                      Technology should amplify{" "}
                      <span className="text-[#6E8F6A]">human potential</span>
                    </h2>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed flex-1">
                    At Lade Stack, we believe technology should amplify human potential — not replace it.
                    Our journey continues as we push boundaries in AI-driven development, open
                    innovation, and community-led engineering.
                  </p>

                  {/* Quote pull */}
                  <div className="relative pl-5 border-l-2 border-[#6E8F6A]">
                    <p className="text-base sm:text-lg font-semibold text-foreground italic leading-relaxed">
                      "Innovation begins when imagination meets execution — and Lade Stack stands
                      at that intersection."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ CORE VALUES */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-center mb-14"
              >
                <SectionLabel icon={Sparkles} text="What we stand for" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Core Values
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Principles that guide everything we build and every decision we make
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {values.map((value, i) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className={`group relative rounded-3xl border ${value.border} bg-background overflow-hidden p-7 cursor-default`}
                    >
                      {/* Gradient wash */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                      <div className="relative flex items-start gap-5">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${value.iconBg}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ MEET OUR TEAM */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-center mb-14"
              >
                <SectionLabel icon={Users} text="The people behind the product" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Meet Our Team
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Passionate developers, designers, and innovators dedicated to advancing
                  the future of software development
                </p>
              </motion.div>

              {/* Team card */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-3xl border border-border bg-background overflow-hidden"
              >
                {/* Top colour band */}
                <div className="h-28 bg-gradient-to-r from-[#6E8F6A]/20 via-[#8BAF87]/15 to-[#6E8F6A]/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(110,143,106,0.25),_transparent_60%)]" />
                  {/* Decorative dots */}
                  <div
                    className="absolute right-8 top-4 w-24 h-24 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle, #6E8F6A 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                </div>

                <div className="px-6 sm:px-10 pb-10">
                  {/* Avatar — pulled up over the band */}
                  <div className="flex flex-col md:flex-row md:items-end gap-0 md:gap-8 -mt-16 mb-8">

                    {/* Profile image */}
                    <div className="relative flex-shrink-0 self-center md:self-auto">
                      <div className="relative group">
                        {/* Glow */}
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#6E8F6A]/30 to-[#8BAF87]/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                        {/* Gradient border */}
                        <div
                          className="absolute -inset-[2px] rounded-3xl"
                          style={{
                            background: "linear-gradient(135deg, #6E8F6A 0%, #C8D9C5 40%, #6E8F6A 70%, #8BAF87 100%)",
                          }}
                        />
                        {/* Photo */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ width: "148px" }}>
                          <img
                            src={girishImage}
                            alt="Girish Lade - Founder & Lead Developer"
                            width={2262}
                            height={3393}
                            className="w-full aspect-[2/3] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          {/* Bottom overlay + badge */}
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wide">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#6E8F6A] animate-pulse" />
                              Founder & CEO
                            </span>
                          </div>
                        </div>
                        {/* Award badge */}
                        <div className="absolute -top-2 -right-2 z-10 w-9 h-9 rounded-full bg-gradient-to-br from-[#6E8F6A] to-[#4a6b47] shadow-lg flex items-center justify-center ring-2 ring-background">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Name + role — sits beside photo on desktop */}
                    <div className="flex-1 pt-6 md:pt-0 text-center md:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center md:justify-start mb-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          Girish Lade
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#6E8F6A]/10 border border-[#6E8F6A]/20 text-[#6E8F6A] text-[11px] font-semibold self-center">
                          Founder
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Founder & Lead Developer
                      </p>

                      {/* Social icons */}
                      <div className="flex gap-2 mt-3 justify-center md:justify-start">
                        {socials.map(({ icon: SocialIcon, label, href }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-8 h-8 rounded-lg flex items-center justify-center border border-border bg-muted/40 hover:bg-[#6E8F6A]/10 hover:border-[#6E8F6A]/30 hover:text-[#6E8F6A] text-muted-foreground transition-all duration-200"
                          >
                            <SocialIcon className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A multi-disciplinary engineer and designer with expertise in AI systems,
                      web development, and user experience. Girish has developed multiple full-stack
                      platforms including Lade Stack Dev Tools, AI-powered website builder, File
                      Management System, Docs Summariser, and an E-commerce suite with Supabase
                      and Genkit.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      His mission is to empower developers through creativity, intelligence, and
                      collaboration — creating tools that don't just solve problems, but inspire
                      innovation.
                    </p>
                  </div>

                  {/* Expertise chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["AI Systems", "Web Development", "UX/UI Design", "Full-Stack", "Supabase", "Genkit", "Multi-LLM"].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium text-muted-foreground bg-muted/50 border border-border">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[#6E8F6A] hover:bg-[#5F7F63] text-white text-sm font-semibold transition-colors duration-200"
                    >
                      Connect with Girish
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://www.linkedin.com/in/girish-lade-075bba201/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl border border-border bg-background hover:bg-muted/40 text-foreground text-sm font-semibold transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ CLOSING CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-[#6E8F6A]/25 bg-gradient-to-br from-[#6E8F6A]/8 via-background to-background p-10 sm:p-16 text-center"
            >
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#6E8F6A]/10 blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#6E8F6A]/15 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-[#6E8F6A]" />
                </div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-relaxed mb-5 max-w-2xl mx-auto">
                  "Innovation begins when imagination meets execution — and Lade Stack stands
                  at that intersection."
                </blockquote>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
                  At Lade Stack, we believe technology should amplify human potential — not replace it.
                  Our journey continues as we push boundaries in AI-driven development, open innovation,
                  and community-led engineering.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-[#6E8F6A] hover:bg-[#5F7F63] text-white text-sm font-semibold transition-colors duration-200"
                  >
                    Try Our AI Tools
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-border bg-background hover:bg-muted/40 text-foreground text-sm font-semibold transition-colors duration-200"
                  >
                    Explore Projects
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

export default AboutUs;
