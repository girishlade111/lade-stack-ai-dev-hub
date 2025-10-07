import { Link } from "react-router-dom";
import { Mail, MessageCircle, BookOpen, Clock, User, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Support = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      responseTime: "24 hours",
      action: "support@ladestack.in"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      responseTime: "Immediate",
      action: "Start Chat"
    },
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Browse our comprehensive documentation and guides",
      responseTime: "Self-service",
      action: "Browse Articles"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your email address and follow the instructions sent to your inbox."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal and bank transfers for annual plans."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. Navigate to Billing > Subscription and click 'Cancel Plan'."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card is required to start your trial."
    },
    {
      question: "How do I upgrade my plan?",
      answer: "You can upgrade your plan at any time from your account dashboard. Go to Billing > Subscription and select 'Upgrade Plan'."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information."
    }
  ];

  const helpTopics = [
    {
      icon: User,
      title: "Account Management",
      description: "Learn how to manage your account settings, billing, and user permissions",
      link: "#"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Documentation and guides for integrating our APIs into your applications",
      link: "#"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Information about our security measures, compliance certifications, and data protection",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Support <span className="bg-gradient-primary bg-clip-text text-transparent">Center</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Get help with our platform, troubleshoot issues, and find answers to common questions. 
                Our support team is here to assist you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  How Can We Help You?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the support option that works best for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {supportOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border hover:shadow-large transition-smooth"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                      <option.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Response time: {option.responseTime}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
                <p className="text-lg text-muted-foreground">
                  Find quick answers to common questions
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-subtle border border-border"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Help Topics */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Help Topics
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Browse our documentation by category
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {helpTopics.map((topic, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border hover:shadow-large transition-smooth"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                      <topic.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {topic.description}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Learn More →
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Support */}
        <section className="py-12 sm:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Community Support
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our developer community to connect with other users, share knowledge, 
                  and get help from our community experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" size="lg">
                    Join Community Forum
                  </Button>
                  <Button variant="outline" size="lg">
                    View GitHub Discussions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;