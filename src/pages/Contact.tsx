import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Lade Stack",
    "description": "Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions.",
    "url": "https://ladestack.in/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lade Stack",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "admin@ladestack.in",
        "contactType": "customer support",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "admin@ladestack.in",
      description: "Our team responds within a few hours",
      href: "mailto:admin@ladestack.in"
    },
    {
      icon: MessageSquare,
      title: "Contact Support",
      content: "Available via Email Support Only",
      description: "Reach out anytime — we're always here to help",
      href: null
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, Maharashtra, India",
      description: "Available for scheduled meetings",
      href: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Open 24 Hours",
      description: "7 Days a Week",
      href: null
    }
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond within a few hours as we operate 24/7. For complex queries, our team may take up to 24 hours to provide a thorough response."
    },
    {
      question: "Do you provide enterprise support?",
      answer: "Yes, we offer priority support and custom enterprise solutions tailored to your team's needs. Reach out to discuss your requirements."
    },
    {
      question: "Is Lade Stack available globally?",
      answer: "Yes, our platform is accessible worldwide. All tools are cloud-based and available from any location with an internet connection."
    },
    {
      question: "Can I schedule a demo of your platform?",
      answer: "Absolutely. Send us an email at admin@ladestack.in with your preferred time and we'll set up a personalized walkthrough."
    },
    {
      question: "Do you offer technical support with your products?",
      answer: "Yes, all users receive technical support. We also offer documentation, guides, and direct assistance for implementation."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message received. We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dark theme gradient overlays */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(110,143,106,0.10),_transparent_60%)]" />
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(139,175,135,0.07),_transparent_55%)]" />
      </div>
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
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Get in Touch
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Have questions about our platform? Need help with implementation? Our team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Contact Information */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-3 h-3 text-background" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.href ? (
                            <a href={info.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors mb-1 block">
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-xs text-muted-foreground mb-1">
                              {info.content}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Google Map Embed */}
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      Our Location
                    </h3>
                    <div className="relative w-full h-64 rounded-xl overflow-hidden border border-border">
                      <iframe
                        src="https://www.google.com/maps?q=Mumbai,India&output=embed"
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                        title="Lade Stack Location - Mumbai, India"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Mumbai, Maharashtra, India · Available for scheduled meetings
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Send us a Message
                  </h2>

                  <div className="border border-border rounded-lg p-4">
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-medium text-foreground mb-1">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            className="text-xs bg-muted border-border focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs font-medium text-foreground mb-1">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Your last name"
                            className="text-xs bg-muted border-border focus:ring-primary"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="text-xs bg-muted border-border focus:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          className="text-xs bg-muted border-border focus:ring-primary"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or question..."
                          rows={3}
                          className="text-xs bg-muted border-border focus:ring-primary"
                          required
                        />
                      </div>

                      <Button type="submit" size="sm" className="w-full text-xs">
                        Send Message
                        <Send className="w-3 h-3 ml-1" />
                      </Button>
                    </form>

                    <div className="mt-3 text-center">
                      <Link to="/projects" className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors">
                        Learn more about our projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs text-muted-foreground max-w-xl mx-auto">
                  Find quick answers to common questions about our platform and services
                </p>
              </div>

              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-3"
                  >
                    <h3 className="text-xs font-medium text-foreground mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="border border-border rounded-lg p-4 text-center">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xs text-muted-foreground mb-3 max-w-2xl mx-auto">
                  Our team is available 24/7 to help you with any technical issues or questions about our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a href="mailto:admin@ladestack.in">
                    <Button size="sm" className="w-full sm:w-auto">
                      Email Us Directly
                    </Button>
                  </a>
                  <Link to="/support">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Visit Support Center
                    </Button>
                  </Link>
                </div>

                <div className="mt-3">
                  <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors">
                    Learn more about our company
                  </Link>
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

export default Contact;
