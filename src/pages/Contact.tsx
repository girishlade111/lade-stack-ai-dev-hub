import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our platform? Need help with implementation? Our team is here to assist you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Our Location
                    </h3>
                    <div className="bg-card rounded-xl sm:rounded-2xl h-64 flex items-center justify-center border border-border shadow-medium">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                        <p className="text-lg font-medium text-foreground">
                          San Francisco, California
                        </p>
                        <p className="text-muted-foreground mt-1">
                          Available for in-person meetings by appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                    Send us a Message
                  </h2>
                  
                  <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-medium border border-border">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name" 
                            className="py-5"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name" 
                            className="py-5"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          className="py-5"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          className="py-5"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project or question..." 
                          rows={5}
                          className="py-5"
                        />
                      </div>
                      
                      <Button variant="hero" size="lg" className="w-full group">
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                    
                    <div className="mt-6 text-center">
                      <Link to="/projects" className="text-primary hover:underline">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-6 sm:mb-8 rounded-full" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find quick answers to common questions about our platform and services
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
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
                  Our support team is available 24/7 to help you with any technical issues or questions about our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Open a Support Ticket
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Live Chat
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Link to="/about" className="text-primary hover:underline">
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