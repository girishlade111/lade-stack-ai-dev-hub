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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
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
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">Service</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary/80 to-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">Legally Binding</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">Global Coverage</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground text-sm">User Protection</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            These Terms of Service ("Terms") govern your access to and use of the Lade Stack website and services.
            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
          </p>

          <div className="space-y-8">
            {/* Key Notice */}
            <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary">
              <p className="font-medium flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                Please read these Terms carefully. By using our services, you agree to be legally bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By registering for, accessing, or using our services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use
                our services.
              </p>

              {/* Key Takeaway */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Key Takeaway
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Using Lade Stack constitutes your acceptance of these Terms. If you disagree, please discontinue use immediately.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                2. Services Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lade Stack provides a suite of AI-powered development tools designed to enhance the software
                development lifecycle. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>API testing platforms with AI capabilities</li>
                <li>No-code website builders with AI generation</li>
                <li>Cloud file management and CDN services</li>
                <li>Technical documentation AI tools</li>
                <li>Other development tools and services we may offer</li>
              </ul>

              {/* Example Scenario */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-primary" />
                  Example Scenario
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You can use our API testing platform to validate endpoints, our no-code builder to create landing pages,
                  and our documentation AI to generate technical docs—all under this single Terms agreement.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <UserX className="w-6 h-6 text-primary" />
                3. Account Registration
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for all activities that occur under your account.
              </p>

              {/* Key Takeaway */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Key Takeaway
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Keep your account credentials secure. You're responsible for all activity under your account, even if unauthorized.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                4. User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Use the services for any illegal or unauthorized purpose</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-muted-foreground">
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
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  Violation of these responsibilities may result in immediate account suspension or termination.
                </p>
              </div>

              {/* Collapsible Advanced Section */}
              <div className="mt-6">
                <button
                  onClick={() => toggleSection("acceptable-use")}
                  className="w-full flex items-center justify-between bg-muted border border-border rounded-xl p-4 text-left hover:bg-muted/80 transition-colors"
                >
                  <span className="text-foreground font-medium">Advanced: Acceptable Use Policy Details</span>
                  <motion.div
                    animate={{ rotate: openSection === "acceptable-use" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
                      <div className="bg-muted border border-border rounded-xl p-4 mt-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The services and all materials contained therein, including but not limited to software, text,
                graphics, logos, images, and content, are the property of Lade Stack or its licensors and are
                protected by copyright and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license
                to access and use our services for your internal business purposes.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">Ownership and Licensing</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Ownership of tools</strong>
                  <span className="text-muted-foreground"> — All Lade Stack technology remains our exclusive property</span>
                </li>
                <li>
                  <strong className="text-foreground">Licensing terms</strong>
                  <span className="text-muted-foreground"> — Limited license for permitted use only</span>
                </li>
                <li>
                  <strong className="text-foreground">Restrictions</strong>
                  <span className="text-muted-foreground"> — No sublicensing, selling, or distributing</span>
                </li>
              </ul>

              {/* Key Takeaway */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Key Takeaway
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You're granted a limited license to use our services. All intellectual property rights remain with Lade Stack.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                6. Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features of our services may require payment of fees. You agree to pay all fees as described
                in the applicable pricing plan. All fees are non-refundable except as required by law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify our pricing at any time with 30 days' notice. Your continued use of
                the services after such notice constitutes acceptance of the modified pricing.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">Payment Details</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Subscription billing</strong>
                  <ul className="list-circle pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Billed monthly or annually based on your plan</li>
                    <li>Auto-renewal unless cancelled before billing cycle</li>
                    <li>Prorated charges for mid-cycle upgrades</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-foreground">Refund policy</strong>
                  <span className="text-muted-foreground"> — Fees are non-refundable except where required by law</span>
                </li>
                <li>
                  <strong className="text-foreground">Failed payment handling</strong>
                  <span className="text-muted-foreground"> — Service suspension after 7 days of failed payment</span>
                </li>
                <li>
                  <strong className="text-foreground">Chargebacks</strong>
                  <span className="text-muted-foreground"> — May result in immediate account termination</span>
                </li>
              </ul>

              {/* Highlight Block */}
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  All prices are in USD. You're responsible for maintaining a valid payment method on file.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <UserX className="w-6 h-6 text-primary" />
                7. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and access to our services immediately, without prior notice,
                for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Breach of these Terms</li>
                <li>Request by law enforcement or governmental authorities</li>
                <li>Unexpected technical issues or security problems</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use the services will immediately cease.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6">Termination Types</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong className="text-foreground">Voluntary cancellation</strong>
                  <span className="text-muted-foreground"> — You may cancel anytime from account settings</span>
                </li>
                <li>
                  <strong className="text-foreground">Suspension</strong>
                  <span className="text-muted-foreground"> — Temporary restriction for policy violations</span>
                </li>
                <li>
                  <strong className="text-foreground">Abuse prevention</strong>
                  <span className="text-muted-foreground"> — Immediate termination for severe violations</span>
                </li>
              </ul>

              {/* Collapsible Advanced Section */}
              <div className="mt-6">
                <button
                  onClick={() => toggleSection("termination-data")}
                  className="w-full flex items-center justify-between bg-muted border border-border rounded-xl p-4 text-left hover:bg-muted/80 transition-colors"
                >
                  <span className="text-foreground font-medium">Advanced: Data After Termination</span>
                  <motion.div
                    animate={{ rotate: openSection === "termination-data" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
                      <div className="bg-muted border border-border rounded-xl p-4 mt-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">8. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express
                or implied. We do not warrant that the services will be uninterrupted, secure, or error-free.
              </p>
              <div className="rounded-md bg-muted p-4 mt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This includes but is not limited to: implied warranties of merchantability, fitness for a particular purpose,
                  and non-infringement. Some jurisdictions don't allow exclusion of certain warranties, so these limitations
                  may not fully apply to you.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Lade Stack shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability to you for any claim arising out of or relating to these Terms or our services
                shall not exceed the amount you have paid us in the 12 months preceding the claim.
              </p>

              {/* Key Takeaway */}
              <div className="rounded-md bg-muted p-4 mt-6">
                <h4 className="text-foreground font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Key Takeaway
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our liability is limited to the amount you paid us in the last 12 months. We're not liable for indirect damages.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Lade Stack and its affiliates, officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising
                out of or in any way connected with your access to or use of the services.
              </p>
            </div>

            {/* Section 11 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                11. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without
                regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these Terms shall be resolved exclusively in the courts
                located in Mumbai, Maharashtra, India.
              </p>
            </div>

            {/* Section 12 */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
                new Terms on this page and updating the "Last Updated" date. Your continued use of the services
                after such notice constitutes acceptance of the modified Terms.
              </p>

              {/* Highlight Block */}
              <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-primary mt-6">
                <p className="font-medium">
                  We recommend reviewing these Terms periodically. Material changes will be communicated via email or in-app notice.
                </p>
              </div>
            </div>

            {/* Section 13 - Contact */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                13. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-muted border border-border rounded-xl p-6 mt-4">
                <p className="text-foreground font-medium mb-2">Lade Stack</p>
                <p className="text-muted-foreground">Email: legal@ladestack.in</p>
                <p className="text-muted-foreground">Address: Mumbai, Maharashtra, India</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Contact Our Legal Team
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

export default TermsOfService;
