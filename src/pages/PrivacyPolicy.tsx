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
    <div className="min-h-screen bg-neutral-950 relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-3xl -z-10" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6 rounded-full" />
              <p className="text-lg text-neutral-400">
                Last Updated: {lastUpdated}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">SOC2 Aligned</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">Secure Infrastructure</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
              <div className="text-neutral-200">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  At Lade Stack, we are committed to protecting your personal information and your right to privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  visit our website and use our services.
                </p>

                {/* Data Flow Visual */}
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                    How Your Data Flows
                  </h3>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                        <Users className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-neutral-400 text-sm">You</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-neutral-500" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-neutral-400 text-sm">Lade Stack</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-neutral-500" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center">
                        <Server className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-neutral-400 text-sm">Secure Storage</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-sm text-center mt-4">
                    Enterprise-grade protection at every step
                  </p>
                </div>

                {/* Section 1 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  1. Information We Collect
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <h3 className="text-lg font-medium text-neutral-200 mb-3">Personal Information You Disclose to Us</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We collect personal information that you voluntarily provide to us when you register on the Services,
                    express an interest in obtaining information about us or our products and Services, when you participate
                    in activities on the Services, or otherwise when you contact us.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    The personal information we collect may include:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing and payment information</li>
                    <li>Company name and job title</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Information Automatically Collected</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We automatically collect certain information when you visit, use, or navigate the Services.
                    This information does not reveal your specific identity but may include:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Device and usage information</li>
                    <li>IP address and browser type</li>
                    <li>Operating system and device characteristics</li>
                    <li>Referring URLs and exit pages</li>
                    <li>Language preferences</li>
                    <li>Clickstream data</li>
                  </ul>

                  {/* Example Scenario */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-emerald-400" />
                      Example Scenario
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      When you sign up for our API testing platform, we collect your name and email to create your account.
                      We also automatically collect your browser type and IP address to ensure secure access and prevent fraud.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Key className="w-6 h-6 text-emerald-400" />
                  2. How We Use Your Information
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We use personal information collected via our Services for a variety of business purposes described below:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>To facilitate account creation and login process</li>
                    <li>To manage user accounts and provide customer support</li>
                    <li>To send administrative information and respond to inquiries</li>
                    <li>To fulfill and manage purchases and payments</li>
                    <li>To send marketing and promotional communications (with your consent)</li>
                    <li>To protect our Services and enforce our terms and policies</li>
                    <li>To comply with legal obligations</li>
                  </ul>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      We only use your data for the purposes explicitly stated in this policy. We never sell your personal information.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-emerald-400" />
                  3. Sharing Your Information
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-6">
                    We may process or share your data that we hold based on the following legal basis:
                  </p>

                  {/* A. Legal Basis for Processing */}
                  <h3 className="text-lg font-medium text-neutral-200 mb-3">A. Legal Basis for Processing</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>
                      <strong className="text-neutral-200">Consent</strong>
                      <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-neutral-400">
                        <li>What it means: Your explicit permission to process your data</li>
                        <li>When we request it: For marketing communications and optional features</li>
                        <li>How to withdraw: Contact us anytime or use the unsubscribe link</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Contractual necessity</strong>
                      <span className="text-neutral-400"> — Processing required to fulfill our services to you</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Legal obligations</strong>
                      <span className="text-neutral-400"> — Compliance with applicable laws and regulations</span>
                    </li>
                  </ul>

                  {/* B. Third-Party Providers */}
                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">B. Third-Party Providers</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Hosting providers — Secure cloud infrastructure</li>
                    <li>Payment processors — PCI-compliant payment handling</li>
                    <li>Analytics providers — Usage insights and improvements</li>
                    <li>Infrastructure vendors — Email delivery and support tools</li>
                  </ul>

                  {/* C. Business Transfers */}
                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">C. Business Transfers</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Mergers — Combined entity data handling</li>
                    <li>Acquisition — Transfer of assets and data</li>
                    <li>Asset transfers — Business continuity provisions</li>
                  </ul>

                  {/* D. International Data Transfers */}
                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">D. International Data Transfers</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Safeguards — Standard contractual clauses</li>
                    <li>Data residency — Regional storage options</li>
                    <li>Compliance standards — GDPR and international frameworks</li>
                  </ul>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      We never sell personal data. All third-party sharing is strictly for service delivery and legal compliance.
                    </p>
                  </div>

                  {/* Collapsible Advanced Section */}
                  <div className="mt-6">
                    <button
                      onClick={() => toggleSection("sharing-advanced")}
                      className="w-full flex items-center justify-between bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-left hover:bg-neutral-800/70 transition-colors"
                    >
                      <span className="text-neutral-200 font-medium">Advanced: Data Transfer Safeguards</span>
                      <motion.div
                        animate={{ rotate: openSection === "sharing-advanced" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
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
                          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-4">
                            <p className="text-neutral-400 text-sm leading-relaxed">
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
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  4. Data Security
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We use administrative, technical, and physical security measures to protect your personal information.
                    While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                    that despite our efforts, no security measures are perfect or impenetrable.
                  </p>

                  {/* Security Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-center">
                      <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-neutral-200 font-medium">Encryption</p>
                      <p className="text-neutral-500 text-sm">AES-256 at rest</p>
                    </div>
                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-center">
                      <Globe className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-neutral-200 font-medium">TLS 1.3</p>
                      <p className="text-neutral-500 text-sm">In transit</p>
                    </div>
                    <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                      <p className="text-neutral-200 font-medium">2FA</p>
                      <p className="text-neutral-500 text-sm">Optional</p>
                    </div>
                  </div>

                  {/* Example Scenario */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-emerald-400" />
                      Security in Practice
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      All data transmitted between your browser and our servers is encrypted using TLS 1.3.
                      Your stored data is encrypted at rest using AES-256 encryption, ensuring protection even in the unlikely event of a breach.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <RefreshCcw className="w-6 h-6 text-emerald-400" />
                  5. Data Retention
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We will retain your personal information only for as long as is necessary for the purposes set out in
                    this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>

                  {/* Collapsible Advanced Section */}
                  <div className="mt-6">
                    <button
                      onClick={() => toggleSection("retention")}
                      className="w-full flex items-center justify-between bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-left hover:bg-neutral-800/70 transition-colors"
                    >
                      <span className="text-neutral-200 font-medium">Advanced: Retention Periods</span>
                      <motion.div
                        animate={{ rotate: openSection === "retention" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
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
                          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-4">
                            <ul className="text-neutral-400 text-sm space-y-2">
                              <li><strong className="text-neutral-300">Account data:</strong> Retained while your account is active plus 3 years</li>
                              <li><strong className="text-neutral-300">Transaction data:</strong> 7 years for tax compliance</li>
                              <li><strong className="text-neutral-300">Analytics data:</strong> 26 months, then anonymized</li>
                              <li><strong className="text-neutral-300">Support tickets:</strong> 3 years from resolution</li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Section 6 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-emerald-400" />
                  6. Your Privacy Rights
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>The right to access, update, or delete your information</li>
                    <li>The right to rectification and erasure</li>
                    <li>The right to restrict or object to processing</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      To exercise your rights, contact our privacy team at privacy@ladestack.in. We respond within 30 days.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-emerald-400" />
                  7. Cookies and Tracking Technologies
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to access or store information.
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Essential cookies — Required for site functionality</li>
                    <li>Analytics cookies — Help us understand usage patterns</li>
                    <li>Preference cookies — Remember your settings</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">8. Third-Party Websites</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Our Services may contain links to third-party websites. We are not responsible for the privacy practices
                    or content of these third-party sites. We encourage you to review the privacy policies of these websites.
                  </p>
                </div>

                {/* Section 9 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">9. Children's Privacy</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Our Services do not address anyone under the age of 18. We do not knowingly collect personal information
                    from children under 18. If we become aware that a child under 18 has provided us with personal information,
                    we will take steps to delete such information.
                  </p>
                </div>

                {/* Section 10 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">10. Changes to This Privacy Policy</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                    new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                {/* Section 11 - Contact */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  11. Contact Us
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    If you have questions or comments about this Privacy Policy, you may contact us at:
                  </p>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-6">
                    <p className="text-white font-medium mb-2">Lade Stack</p>
                    <p className="text-neutral-400">Email: privacy@ladestack.in</p>
                    <p className="text-neutral-400">Address: Mumbai, Maharashtra, India</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-800">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    >
                      Contact Our Privacy Team
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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
