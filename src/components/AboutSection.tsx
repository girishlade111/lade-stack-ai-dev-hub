import { Lightbulb, Users, Award, Eye } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly strive to push the boundaries of what's possible in AI and development.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Our tools are designed to empower developers and teams to achieve more with less effort.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We aim to deliver products that meet the highest standards of excellence and reliability.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in clear communication and transparency in everything we do.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Lade Stack</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-8 mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to LadeStack, where technology meets innovation. Our mission is to provide 
                developers with powerful, easy-to-use AI tools that simplify the development process. 
                Whether you're building an application, testing APIs, or designing your next big project, 
                we have the tools to accelerate your journey.
              </p>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At LadeStack, we aim to revolutionize development processes by providing AI-enhanced 
                  tools that improve efficiency and reduce development time, empowering developers to 
                  focus on what matters most - creating amazing products.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-subtle border border-border hover:shadow-medium transition-smooth group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Placeholder */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Trusted by Developers Worldwide
            </h3>
            <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
              <p className="text-lg italic text-muted-foreground mb-4">
                "LadeStack's AI tools have revolutionized our development workflow. 
                The API testing platform alone has saved us countless hours."
              </p>
              <div className="text-primary font-semibold">
                - Development Team Lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;