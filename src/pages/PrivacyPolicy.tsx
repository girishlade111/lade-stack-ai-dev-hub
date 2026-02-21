import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Database,
  Globe,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Server,
  Users,
  FileText,
  Key,
  RefreshCcw,
  AlertCircle
} from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const lastUpdated = "June 15, 2024";
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.10),_transparent_60%)]" />
        <div className="absolute top-[50%] right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_55%)]" />
      </div>
      <SEO
        title="Privacy Policy - Lade Stack"
        description="Read our Privacy Policy to understand how we collect, use, and protect your personal information at Lade Stack."
        keywords="privacy policy, data protection, personal information, Lade Stack privacy"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary/80 to-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">SOC2 Aligned</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">Secure Infrastructure</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            At Lade Stack, we are committed to protecting your personal information and your right to privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website and use our services.
          </p>

          <div className="space-y-8">
            {/* Data Flow Visual */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                How Your Data Flows
              </h3>
              <div className="flex items-center justify-center gap-4 flex-wrap pb-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">You</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">Lade Stack</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Server className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">Secure Storage</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm text-center mt-4">
                Enterprise-grade protection at every step
              </p>
            </div>

            {/* Section 1 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                1. Information We Collect
              </h2>
              <h3 className="text-lg font-medium text-foreground mt-4">Personal Information You Disclose to Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal information that you voluntarily provide to us when you register on the Services,
                express an interest in obtaining information about us or our products and Services, when you participate
                in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and payment information</li>
                <li>Company name and job title</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6">Information Automatically Collected</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information when you visit, use, or navigate the Services.
                This information does not reveal your specific identity but may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device and usage information</li>
                <li>IP address and browser type</li>
                <li>Operating system and device characteristics</li>
                <li>Referring URLs and exit pages</li>
                <li>Language preferences</li>
                <li>Clickstream data</li>
              </ul>

              {/* Example Scenario */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-primary" />
                  Example Scenario
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When you sign up for our API testing platform, we collect your name and email to create your account.
                  We also automatically collect your browser type and IP address to ensure secure access and prevent fraud.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Key className="w-6 h-6 text-primary" />
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use personal information collected via our Services for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To facilitate account creation and login process</li>
                <li>To manage user accounts and provide customer support</li>
                <li>To send administrative information and respond to inquiries</li>
                <li>To fulfill and manage purchases and payments</li>
                <li>To send marketing and promotional communications (with your consent)</li>
                <li>To protect our Services and enforce our terms and policies</li>
                <li>To comply with legal obligations</li>
              </ul>

              {/* Highlight Block */}
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  We only use your data for the purposes explicitly stated in this policy. We never sell your personal information.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                3. Sharing Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may process or share your data that we hold based on the following legal basis:
              </p>

              {/* A. Legal Basis for Processing */}
              <h3 className="text-lg font-medium text-foreground mt-4">A. Legal Basis for Processing</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Consent</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>What it means: Your explicit permission to process your data</li>
                    <li>When we request it: For marketing communications and optional features</li>
                    <li>How to withdraw: Contact us anytime or use the unsubscribe link</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-foreground">Contractual necessity</strong>
                  <span className="text-muted-foreground"> — Processing required to fulfill our services to you</span>
                </li>
                <li>
                  <strong className="text-foreground">Legal obligations</strong>
                  <span className="text-muted-foreground"> — Compliance with applicable laws and regulations</span>
                </li>
              </ul>

              {/* B. Third-Party Providers */}
              <h3 className="text-lg font-medium text-foreground mt-6">B. Third-Party Providers</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Hosting providers — Secure cloud infrastructure</li>
                <li>Payment processors — PCI-compliant payment handling</li>
                <li>Analytics providers — Usage insights and improvements</li>
                <li>Infrastructure vendors — Email delivery and support tools</li>
              </ul>

              {/* C. Business Transfers */}
              <h3 className="text-lg font-medium text-foreground mt-6">C. Business Transfers</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Mergers — Combined entity data handling</li>
                <li>Acquisition — Transfer of assets and data</li>
                <li>Asset transfers — Business continuity provisions</li>
              </ul>

              {/* D. International Data Transfers */}
              <h3 className="text-lg font-medium text-foreground mt-6">D. International Data Transfers</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Safeguards — Standard contractual clauses</li>
                <li>Data residency — Regional storage options</li>
                <li>Compliance standards — GDPR and international frameworks</li>
              </ul>

              {/* Highlight Block */}
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  We never sell personal data. All third-party sharing is strictly for service delivery and legal compliance.
                </p>
              </div>

              {/* Collapsible Advanced Section */}
              <div className="mt-6">
                <button
                  onClick={() => toggleSection("sharing-advanced")}
                  className="w-full flex items-center justify-between bg-muted border border-border rounded-xl p-4 text-left hover:bg-muted/80 transition-colors"
                >
                  <span className="text-foreground font-medium">Advanced: Data Transfer Safeguards</span>
                  <motion.div
                    animate={{ rotate: openSection === "sharing-advanced" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openSection === "sharing-advanced" && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={sectionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-muted border border-border rounded-xl p-4 mt-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          For international data transfers, we implement appropriate safeguards including Standard Contractual Clauses (SCCs)
                          approved by the European Commission, binding corporate rules for intra-group transfers, and adherence to
                          applicable privacy frameworks. We regularly audit our third-party processors to ensure compliance with
                          these safeguards and maintain data protection standards equivalent to those required in your jurisdiction.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information.
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                that despite our efforts, no security measures are perfect or impenetrable.
              </p>

              {/* Security Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-muted border border-border rounded-xl p-4 text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Encryption</p>
                  <p className="text-muted-foreground text-sm">AES-256 at rest</p>
                </div>
                <div className="bg-muted border border-border rounded-xl p-4 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">TLS 1.3</p>
                  <p className="text-muted-foreground text-sm">In transit</p>
                </div>
                <div className="bg-muted border border-border rounded-xl p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">2FA</p>
                  <p className="text-muted-foreground text-sm">Optional</p>
                </div>
              </div>

              {/* Example Scenario */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-primary" />
                  Security in Practice
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All data transmitted between your browser and our servers is encrypted using TLS 1.3.
                  Your stored data is encrypted at rest using AES-256 encryption, ensuring protection even in the unlikely event of a breach.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <RefreshCcw className="w-6 h-6 text-primary" />
                5. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal information only for as long as is necessary for the purposes set out in
                this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              {/* Collapsible Advanced Section */}
              <div className="mt-6">
                <button
                  onClick={() => toggleSection("retention")}
                  className="w-full flex items-center justify-between bg-muted border border-border rounded-xl p-4 text-left hover:bg-muted/80 transition-colors"
                >
                  <span className="text-foreground font-medium">Advanced: Retention Periods</span>
                  <motion.div
                    animate={{ rotate: openSection === "retention" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openSection === "retention" && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={sectionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-muted border border-border rounded-xl p-4 mt-4">
                        <ul className="text-muted-foreground text-sm space-y-2">
                          <li><strong className="text-foreground">Account data:</strong> Retained while your account is active plus 3 years</li>
                          <li><strong className="text-foreground">Transaction data:</strong> 7 years for tax compliance</li>
                          <li><strong className="text-foreground">Analytics data:</strong> 26 months, then anonymized</li>
                          <li><strong className="text-foreground">Support tickets:</strong> 3 years from resolution</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                6. Your Privacy Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification and erasure</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              {/* Highlight Block */}
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  To exercise your rights, contact our privacy team at privacy@ladestack.in. We respond within 30 days.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to access or store information.
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Essential cookies — Required for site functionality</li>
                <li>Analytics cookies — Help us understand usage patterns</li>
                <li>Preference cookies — Remember your settings</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these third-party sites. We encourage you to review the privacy policies of these websites.
              </p>
            </div>

            {/* Section 9 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Services do not address anyone under the age of 18. We do not knowingly collect personal information
                from children under 18. If we become aware that a child under 18 has provided us with personal information,
                we will take steps to delete such information.
              </p>
            </div>

            {/* Section 10 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            {/* Section 11 - Contact */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or comments about this Privacy Policy, you may contact us at:
              </p>
              <div className="bg-muted border border-border rounded-xl p-6 mt-4">
                <p className="text-foreground font-medium mb-2">Lade Stack</p>
                <p className="text-muted-foreground">Email: privacy@ladestack.in</p>
                <p className="text-muted-foreground">Address: Mumbai, Maharashtra, India</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Contact Our Privacy Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
