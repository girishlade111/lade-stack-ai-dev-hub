import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Contact Lade Stack - Get in Touch for AI Development Support";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions. Our team responds within 24 hours.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions. Our team responds within 24 hours.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Lade Stack contact, AI development support, technical assistance, enterprise solutions, customer support, software development help');
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = 'Lade Stack contact, AI development support, technical assistance, enterprise solutions, customer support, software development help';
      document.head.appendChild(keywordsMeta);
    }

    // Open Graph Meta Tags
    const updateMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('og:title', 'Contact Lade Stack - Get in Touch for AI Development Support');
    updateMetaTag('og:description', 'Get in touch with Lade Stack for AI development support, technical assistance, and enterprise solutions.');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:image', `${window.location.origin}/og-contact.png`);

    // Twitter Meta Tags
    const updateTwitterMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateTwitterMeta('twitter:card', 'summary_large_image');
    updateTwitterMeta('twitter:title', 'Contact Lade Stack - AI Development Support');
    updateTwitterMeta('twitter:description', 'Get in touch for AI development support and technical assistance.');

    // JSON-LD Structured Data
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
          "email": "girishlade111@gmail.com",
          "contactType": "customer support",
          "availableLanguage": "English",
          "hoursAvailable": {
            "@type": "OpeningHours",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      },
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://ladestack.in/contact"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(contactStructuredData);

  }, []);
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@ladestack.in",
      description: "Our support team responds within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Available for scheduled meetings"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM PST"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line."
    },
    {
      question: "Do you offer technical support with your products?",
      answer: "Yes, all our plans include technical support. Premium plans include priority support with faster response times."
    },
    {
      question: "Can I schedule a demo of your platform?",
      answer: "Absolutely! You can book a personalized demo through our website or contact our sales team directly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                Have questions about our platform? Need help with implementation? Our team is here to assist you every step of the way.
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
                          <p className="text-xs text-muted-foreground mb-1">
                            {info.content}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      Our Location
                    </h3>
                    <div className="border border-border rounded-lg h-24 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                        <p className="text-xs font-medium text-foreground">
                          San Francisco, California
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Available for meetings by appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Send us a Message
                  </h2>
                  
                  <div className="border border-border rounded-lg p-4">
                    <form className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="firstName" className="block text-xs font-medium text-foreground mb-1">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            className="text-xs"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-xs font-medium text-foreground mb-1">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Your last name"
                            className="text-xs"
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
                          className="text-xs"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          className="text-xs"
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
                          className="text-xs"
                        />
                      </div>
                      
                      <Button size="sm" className="w-full text-xs">
                        Send Message
                        <Send className="w-3 h-3 ml-1" />
                      </Button>
                    </form>
                    
                    <div className="mt-3 text-center">
                      <Link to="/projects" className="text-xs text-muted-foreground hover:underline">
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
                  Our support team is available 24/7 to help you with any technical issues or questions about our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button size="sm" className="w-full sm:w-auto">
                    Open a Support Ticket
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Live Chat
                  </Button>
                </div>
                
                <div className="mt-3">
                  <Link to="/about" className="text-xs text-muted-foreground hover:underline">
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