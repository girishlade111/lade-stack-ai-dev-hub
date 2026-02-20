import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  FileText,
  CreditCard,
  Lock,
  ChevronDown,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Scale,
  Globe,
  UserX,
  BookOpen
} from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
        <div className="absolute top-0 right-[15%] w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.10),_transparent_60%)]" />
        <div className="absolute top-[45%] left-0 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.06),_transparent_55%)]" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.05),_transparent_50%)]" />
      </div>
      <SEO
        title="Terms of Service - Lade Stack"
        description="Read our Terms of Service to understand the rules and regulations for using Lade Stack's services."
        keywords="terms of service, user agreement, legal terms, Lade Stack terms"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-3xl -z-10" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Terms of <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Service</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-6 rounded-full" />
              <p className="text-lg text-neutral-400">
                Last Updated: {lastUpdated}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">Legally Binding</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">Global Coverage</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-neutral-300 text-sm">User Protection</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-neutral-900/70 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
              <div className="text-neutral-200">
                <p className="text-neutral-300 leading-relaxed mb-8">
                  These Terms of Service ("Terms") govern your access to and use of the Lade Stack website and services.
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>

                {/* Key Notice */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mb-8">
                  <p className="text-emerald-300 font-medium flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    Please read these Terms carefully. By using our services, you agree to be legally bound by these Terms.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  1. Acceptance of Terms
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    By registering for, accessing, or using our services, you acknowledge that you have read, understood,
                    and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use
                    our services.
                  </p>

                  {/* Key Takeaway */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Key Takeaway
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Using Lade Stack constitutes your acceptance of these Terms. If you disagree, please discontinue use immediately.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                  2. Services Description
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Lade Stack provides a suite of AI-powered development tools designed to enhance the software
                    development lifecycle. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>API testing platforms with AI capabilities</li>
                    <li>No-code website builders with AI generation</li>
                    <li>Cloud file management and CDN services</li>
                    <li>Technical documentation AI tools</li>
                    <li>Other development tools and services we may offer</li>
                  </ul>

                  {/* Example Scenario */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-emerald-400" />
                      Example Scenario
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      You can use our API testing platform to validate endpoints, our no-code builder to create landing pages,
                      and our documentation AI to generate technical docs—all under this single Terms agreement.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <UserX className="w-6 h-6 text-emerald-400" />
                  3. Account Registration
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    To access certain features of our services, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    You are responsible for all activities that occur under your account.
                  </p>

                  {/* Key Takeaway */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Key Takeaway
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Keep your account credentials secure. You're responsible for all activity under your account, even if unauthorized.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-emerald-400" />
                  4. User Responsibilities
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>
                      <strong className="text-neutral-200">Use the services for any illegal or unauthorized purpose</strong>
                      <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-neutral-400">
                        <li>No illegal activity — Compliance with all applicable laws required</li>
                        <li>No abuse — Harassment, threats, or harmful conduct prohibited</li>
                        <li>No scraping — Automated data extraction without permission forbidden</li>
                        <li>No reverse engineering — Decompiling or disassembling our code prohibited</li>
                      </ul>
                    </li>
                    <li>Interfere with or disrupt the services or servers</li>
                    <li>Attempt to gain unauthorized access to any portion of the services</li>
                    <li>Transmit any viruses, worms, or other malicious code</li>
                    <li>Remove, alter, or obscure any proprietary notices</li>
                  </ul>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      Violation of these responsibilities may result in immediate account suspension or termination.
                    </p>
                  </div>

                  {/* Collapsible Advanced Section */}
                  <div className="mt-6">
                    <button
                      onClick={() => toggleSection("acceptable-use")}
                      className="w-full flex items-center justify-between bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-left hover:bg-neutral-800/70 transition-colors"
                    >
                      <span className="text-neutral-200 font-medium">Advanced: Acceptable Use Policy Details</span>
                      <motion.div
                        animate={{ rotate: openSection === "acceptable-use" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openSection === "acceptable-use" && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={sectionVariants}
                          className="overflow-hidden"
                        >
                          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-4">
                            <p className="text-neutral-400 text-sm leading-relaxed">
                              Our Acceptable Use Policy prohibits activities including but not limited to: spam distribution,
                              phishing attempts, malware deployment, denial-of-service attacks, credential stuffing,
                              brute force attacks, and any activity that compromises the integrity or security of our services.
                              We reserve the right to investigate and take appropriate legal action against violators.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Section 5 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-emerald-400" />
                  5. Intellectual Property
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    The services and all materials contained therein, including but not limited to software, text,
                    graphics, logos, images, and content, are the property of Lade Stack or its licensors and are
                    protected by copyright and other intellectual property laws.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license
                    to access and use our services for your internal business purposes.
                  </p>

                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Ownership and Licensing</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>
                      <strong className="text-neutral-200">Ownership of tools</strong>
                      <span className="text-neutral-400"> — All Lade Stack technology remains our exclusive property</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Licensing terms</strong>
                      <span className="text-neutral-400"> — Limited license for permitted use only</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Restrictions</strong>
                      <span className="text-neutral-400"> — No sublicensing, selling, or distributing</span>
                    </li>
                  </ul>

                  {/* Key Takeaway */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Key Takeaway
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      You're granted a limited license to use our services. All intellectual property rights remain with Lade Stack.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-emerald-400" />
                  6. Payment Terms
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Certain features of our services may require payment of fees. You agree to pay all fees as described
                    in the applicable pricing plan. All fees are non-refundable except as required by law.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We reserve the right to modify our pricing at any time with 30 days' notice. Your continued use of
                    the services after such notice constitutes acceptance of the modified pricing.
                  </p>

                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Payment Details</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>
                      <strong className="text-neutral-200">Subscription billing</strong>
                      <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-neutral-400">
                        <li>Billed monthly or annually based on your plan</li>
                        <li>Auto-renewal unless cancelled before billing cycle</li>
                        <li>Prorated charges for mid-cycle upgrades</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Refund policy</strong>
                      <span className="text-neutral-400"> — Fees are non-refundable except where required by law</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Failed payment handling</strong>
                      <span className="text-neutral-400"> — Service suspension after 7 days of failed payment</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Chargebacks</strong>
                      <span className="text-neutral-400"> — May result in immediate account termination</span>
                    </li>
                  </ul>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      All prices are in USD. You're responsible for maintaining a valid payment method on file.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <UserX className="w-6 h-6 text-emerald-400" />
                  7. Termination
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We may terminate or suspend your account and access to our services immediately, without prior notice,
                    for any reason, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>Breach of these Terms</li>
                    <li>Request by law enforcement or governmental authorities</li>
                    <li>Unexpected technical issues or security problems</li>
                  </ul>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Upon termination, your right to use the services will immediately cease.
                  </p>

                  <h3 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Termination Types</h3>
                  <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
                    <li>
                      <strong className="text-neutral-200">Voluntary cancellation</strong>
                      <span className="text-neutral-400"> — You may cancel anytime from account settings</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Suspension</strong>
                      <span className="text-neutral-400"> — Temporary restriction for policy violations</span>
                    </li>
                    <li>
                      <strong className="text-neutral-200">Abuse prevention</strong>
                      <span className="text-neutral-400"> — Immediate termination for severe violations</span>
                    </li>
                  </ul>

                  {/* Collapsible Advanced Section */}
                  <div className="mt-6">
                    <button
                      onClick={() => toggleSection("termination-data")}
                      className="w-full flex items-center justify-between bg-neutral-800/50 border border-neutral-700 rounded-xl p-4 text-left hover:bg-neutral-800/70 transition-colors"
                    >
                      <span className="text-neutral-200 font-medium">Advanced: Data After Termination</span>
                      <motion.div
                        animate={{ rotate: openSection === "termination-data" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openSection === "termination-data" && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={sectionVariants}
                          className="overflow-hidden"
                        >
                          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-4">
                            <p className="text-neutral-400 text-sm leading-relaxed">
                              Upon termination, you have 30 days to export your data. After this period, we may delete your data
                              unless retention is required by law. We're not liable for any data loss resulting from termination.
                              We recommend regularly backing up your important data while using our services.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Section 8 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">8. Disclaimer of Warranties</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Our services are provided "as is" and "as available" without warranties of any kind, either express
                    or implied. We do not warrant that the services will be uninterrupted, secure, or error-free.
                  </p>
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <p className="text-neutral-400 text-sm">
                      This includes but is not limited to: implied warranties of merchantability, fitness for a particular purpose,
                      and non-infringement. Some jurisdictions don't allow exclusion of certain warranties, so these limitations
                      may not fully apply to you.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">9. Limitation of Liability</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Lade Stack shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, or any loss of profits or revenues.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Our total liability to you for any claim arising out of or relating to these Terms or our services
                    shall not exceed the amount you have paid us in the 12 months preceding the claim.
                  </p>

                  {/* Key Takeaway */}
                  <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-4 mt-6">
                    <h4 className="text-neutral-200 font-medium mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Key Takeaway
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      Our liability is limited to the amount you paid us in the last 12 months. We're not liable for indirect damages.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">10. Indemnification</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    You agree to indemnify, defend, and hold harmless Lade Stack and its affiliates, officers, directors,
                    employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising
                    out of or in any way connected with your access to or use of the services.
                  </p>
                </div>

                {/* Section 11 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-emerald-400" />
                  11. Governing Law
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of India, without
                    regard to its conflict of law provisions.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    Any disputes arising from these Terms shall be resolved exclusively in the courts
                    located in Mumbai, Maharashtra, India.
                  </p>
                </div>

                {/* Section 12 */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4">12. Changes to Terms</h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
                    new Terms on this page and updating the "Last Updated" date. Your continued use of the services
                    after such notice constitutes acceptance of the modified Terms.
                  </p>

                  {/* Highlight Block */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mt-6">
                    <p className="text-emerald-300 font-medium">
                      We recommend reviewing these Terms periodically. Material changes will be communicated via email or in-app notice.
                    </p>
                  </div>
                </div>

                {/* Section 13 - Contact */}
                <h2 className="text-2xl font-semibold text-white mt-10 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-emerald-400" />
                  13. Contact Information
                </h2>
                <div className="border-t border-neutral-800 pt-6">
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-6">
                    <p className="text-white font-medium mb-2">Lade Stack</p>
                    <p className="text-neutral-400">Email: legal@ladestack.in</p>
                    <p className="text-neutral-400">Address: Mumbai, Maharashtra, India</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-800">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                    >
                      Contact Our Legal Team
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

export default TermsOfService;
