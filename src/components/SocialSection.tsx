import { useMemo, useState } from "react";
import { Github, Instagram, Linkedin, Code2, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeWindowOpen, safeClipboard } from "@/utils/safe";

const SocialSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setValidationError('Email is required');
      return false;
    }
    if (!emailRegex.test(email)) {
      setValidationError('Please enter a valid email address');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validationError) {
      setValidationError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration, we'll just copy the email to clipboard
      const success = await safeClipboard.writeText(`Newsletter subscription: ${email}`);
      
      if (success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        throw new Error('Failed to process subscription');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Memoize social links to prevent re-renders
  const socialLinks = useMemo(() => [
    {
      platform: "GitHub",
      username: "Girish Lade",
      description: "Explore my open-source contributions and projects.",
      url: "https://github.com/girishlade111",
      icon: Github,
    },
    {
      platform: "LinkedIn",
      username: "Girish Lade",
      description: "Connect professionally and stay updated on projects.",
      url: "https://www.linkedin.com/in/girish-lade-075bba201/",
      icon: Linkedin,
    },
    {
      platform: "Instagram",
      username: "Girish Lade",
      description: "Follow my journey in tech and development insights.",
      url: "https://www.instagram.com/girish_lade_/",
      icon: Instagram,
    },
    {
      platform: "CodePen",
      username: "Girish Lade",
      description: "Check out my creative coding experiments and demos.",
      url: "https://codepen.io/Girish-Lade-the-looper",
      icon: Code2,
    },
  ], []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Mobile optimized */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              Stay Connected
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Follow me across platforms for the latest updates, development tips, and insights
            </p>
          </div>

          {/* GitHub Highlight - Simplified */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border text-center performance-optimized">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Open Source Contributions</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 max-w-2xl mx-auto">
                Explore my open-source contributions and projects on GitHub.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full sm:w-auto text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
                onClick={() => safeWindowOpen('https://github.com/girishlade111')}
              >
                View GitHub Profile
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Social Links Grid - Mobile optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-lg p-3 sm:p-4 border border-border hover:bg-muted/30 transition-fast touch-target touch-manipulation"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-foreground rounded flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
                    </div>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-foreground truncate">
                        {social.platform}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter Signup - Simplified */}
          <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border text-center performance-optimized">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
              Stay Updated
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 max-w-2xl mx-auto">
              Get notified about new projects, tools, and insights directly in your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-3 py-2 rounded border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                    validationError ? 'border-destructive' : 'border-input'
                  }`}
                  autoComplete="email"
                  inputMode="email"
                  disabled={isSubmitting}
                  aria-label="Email for newsletter subscription"
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? 'email-error' : undefined}
                />
                {validationError && (
                  <p id="email-error" className="text-xs text-destructive mt-1" role="alert">
                    {validationError}
                  </p>
                )}
                {submitStatus === 'success' && (
                  <p className="text-xs text-success mt-1" role="alert">
                    Subscription successful! Check your email for confirmation.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-xs text-destructive mt-1" role="alert">
                    Subscription failed. Please try again.
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="default"
                size="sm"
                disabled={isSubmitting}
                className="text-xs hover:bg-muted/50 transition-fast touch-target touch-manipulation"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;