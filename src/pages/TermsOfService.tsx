import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const lastUpdated = "June 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service - Lade Stack"
        description="Read our Terms of Service to understand the rules and regulations for using Lade Stack's services."
        keywords="terms of service, user agreement, legal terms, Lade Stack terms"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-muted-foreground mb-6">
                  These Terms of Service ("Terms") govern your access to and use of the Lade Stack website and services.
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By registering for, accessing, or using our services, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use
                  our services.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Lade Stack provides a suite of AI-powered development tools designed to enhance the software
                  development lifecycle. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>API testing platforms with AI capabilities</li>
                  <li>No-code website builders with AI generation</li>
                  <li>Cloud file management and CDN services</li>
                  <li>Technical documentation AI tools</li>
                  <li>Other development tools and services we may offer</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features of our services, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  You are responsible for all activities that occur under your account.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Use the services for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt the services or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the services</li>
                  <li>Transmit any viruses, worms, or other malicious code</li>
                  <li>Reverse engineer or attempt to extract the source code</li>
                  <li>Remove, alter, or obscure any proprietary notices</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The services and all materials contained therein, including but not limited to software, text,
                  graphics, logos, images, and content, are the property of Lade Stack or its licensors and are
                  protected by copyright and other intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license
                  to access and use our services for your internal business purposes.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Certain features of our services may require payment of fees. You agree to pay all fees as described
                  in the applicable pricing plan. All fees are non-refundable except as required by law.
                </p>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify our pricing at any time with 30 days' notice. Your continued use of
                  the services after such notice constitutes acceptance of the modified pricing.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account and access to our services immediately, without prior notice,
                  for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Breach of these Terms</li>
                  <li>Request by law enforcement or governmental authorities</li>
                  <li>Unexpected technical issues or security problems</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Upon termination, your right to use the services will immediately cease.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express
                  or implied. We do not warrant that the services will be uninterrupted, secure, or error-free.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, Lade Stack shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our total liability to you for any claim arising out of or relating to these Terms or our services
                  shall not exceed the amount you have paid us in the 12 months preceding the claim.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to indemnify, defend, and hold harmless Lade Stack and its affiliates, officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising
                  out of or in any way connected with your access to or use of the services.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of California, without
                  regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting
                  the new Terms on this page and updating the "Last Updated" date. Your continued use of the services
                  after such notice constitutes acceptance of the modified Terms.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-foreground font-medium">Lade Stack</p>
                  <p className="text-muted-foreground">Email: legal@ladestack.in</p>
                  <p className="text-muted-foreground">Address: San Francisco, CA</p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Our Legal Team
                  </Link>
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