import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const lastUpdated = "June 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - Lade Stack"
        description="Read our Privacy Policy to understand how we collect, use, and protect your personal information at Lade Stack."
        keywords="privacy policy, data protection, personal information, Lade Stack privacy"
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-muted-foreground mb-6">
                  At Lade Stack, we are committed to protecting your personal information and your right to privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  visit our website and use our services.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information You Disclose to Us</h3>
                <p className="text-muted-foreground mb-4">
                  We collect personal information that you voluntarily provide to us when you register on the Services,
                  express an interest in obtaining information about us or our products and Services, when you participate
                  in activities on the Services, or otherwise when you contact us.
                </p>
                <p className="text-muted-foreground mb-4">
                  The personal information we collect may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and payment information</li>
                  <li>Company name and job title</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information Automatically Collected</h3>
                <p className="text-muted-foreground mb-4">
                  We automatically collect certain information when you visit, use, or navigate the Services.
                  This information does not reveal your specific identity but may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Device and usage information</li>
                  <li>IP address and browser type</li>
                  <li>Operating system and device characteristics</li>
                  <li>Referring URLs and exit pages</li>
                  <li>Language preferences</li>
                  <li>Clickstream data</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use personal information collected via our Services for a variety of business purposes described below:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>To facilitate account creation and login process</li>
                  <li>To manage user accounts and provide customer support</li>
                  <li>To send administrative information and respond to inquiries</li>
                  <li>To fulfill and manage purchases and payments</li>
                  <li>To send marketing and promotional communications (with your consent)</li>
                  <li>To protect our Services and enforce our terms and policies</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Sharing Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We may process or share your data that we hold based on the following legal basis:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li><strong>Consent:</strong> We may process your data if you have given us specific consent</li>
                  <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary</li>
                  <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you</li>
                  <li><strong>Legal Obligations:</strong> We may disclose your information where required by law</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We use administrative, technical, and physical security measures to protect your personal information.
                  While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                  that despite our efforts, no security measures are perfect or impenetrable.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground mb-4">
                  We will retain your personal information only for as long as is necessary for the purposes set out in
                  this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>The right to access, update, or delete your information</li>
                  <li>The right to rectification and erasure</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to access or store information.
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Third-Party Websites</h2>
                <p className="text-muted-foreground mb-4">
                  Our Services may contain links to third-party websites. We are not responsible for the privacy practices
                  or content of these third-party sites. We encourage you to review the privacy policies of these websites.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground mb-4">
                  Our Services do not address anyone under the age of 18. We do not knowingly collect personal information
                  from children under 18. If we become aware that a child under 18 has provided us with personal information,
                  we will take steps to delete such information.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or comments about this Privacy Policy, you may contact us at:
                </p>
                <div className="bg-muted rounded-lg p-4 mb-6">
                  <p className="text-foreground font-medium">Lade Stack</p>
                  <p className="text-muted-foreground">Email: privacy@ladestack.in</p>
                  <p className="text-muted-foreground">Address: San Francisco, CA</p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Our Privacy Team
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

export default PrivacyPolicy;