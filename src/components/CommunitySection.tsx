import { motion } from "framer-motion";
import { Users, Github, MessageSquare, BookOpen, Zap, Globe, Code2, Rocket } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SoftButton, SectionDivider } from "@/components/motion";
import { safeWindowOpen } from "@/utils/safe";

const communityHighlights = [
  {
    icon: Code2,
    title: "Open Source",
    description: "All core tools are open source. Fork, contribute, and shape the future of AI-powered development.",
    cta: "View on GitHub",
    url: "https://github.com/girishlade111",
    color: "text-[#6E8F6A]",
    bg: "bg-[#6E8F6A]/10 dark:bg-[#6E8F6A]/10",
  },
  {
    icon: MessageSquare,
    title: "Community Discord",
    description: "Connect with 50K+ developers. Get help, share projects, and collaborate in real time.",
    cta: "Join Discord",
    url: "https://discord.gg/ladestack",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Comprehensive guides, API references, and tutorials to get you productive in minutes.",
    cta: "Read Docs",
    url: "https://docs.ladestack.in/",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Rocket,
    title: "Starter Templates",
    description: "Production-ready templates built with best practices. Launch your next project in seconds.",
    cta: "Browse Templates",
    url: "https://ladestack.in/",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Globe,
    title: "Global Events",
    description: "Hackathons, webinars, and workshops hosted worldwide. Learn, build, and connect with peers.",
    cta: "See Events",
    url: "https://ladestack.in/",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
  },
  {
    icon: Zap,
    title: "Weekly Challenges",
    description: "Sharpen your skills with AI-powered coding challenges. Win badges, climb the leaderboard.",
    cta: "Join Challenge",
    url: "https://ladestack.in/",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const communityStats = [
  { value: "50K+", label: "Developers" },
  { value: "12K+", label: "Projects Built" },
  { value: "100+", label: "Countries" },
  { value: "4.9", label: "Avg Rating" },
];

function CommunityHighlightCard({
  item,
  index,
}: {
  item: (typeof communityHighlights)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      className="soft-card p-6 flex flex-col gap-4 h-full group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -4 }}
      onClick={() => safeWindowOpen(item.url)}
    >
      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${item.color}`} />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1.5">{item.title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
      </div>
      <span className={`text-xs font-medium ${item.color} flex items-center gap-1 group-hover:gap-2 transition-all`}>
        {item.cta} <span>→</span>
      </span>
    </motion.div>
  );
}

export default function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 bg-beige dark:bg-black">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_0%,_rgba(139,175,135,0.10),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,_rgba(110,143,106,0.07),_transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#6E8F6A]/[0.03] to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill inline-flex items-center gap-2 mb-6">
              <Users className="w-3.5 h-3.5" />
              Developer Community
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-white">
              Loved by developers worldwide
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
              Join a growing community of developers who are building faster with AI-powered tools.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {communityStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {communityHighlights.map((item, i) => (
            <CommunityHighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Ready to join the community?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SoftButton
                variant="primary"
                size="lg"
                showArrow
                onClick={() => safeWindowOpen("https://code.ladestack.in/")}
              >
                Get Started Free
              </SoftButton>
              <SoftButton
                variant="secondary"
                size="lg"
                onClick={() => safeWindowOpen("https://github.com/girishlade111")}
              >
                <Github className="w-4 h-4" /> Star on GitHub
              </SoftButton>
            </div>
          </div>
        </ScrollReveal>

        <SectionDivider className="mt-8" />
      </div>
    </section>
  );
}
