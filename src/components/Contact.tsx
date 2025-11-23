import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Get In Touch
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold font-display">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <Card className="p-8 sm:p-12 bg-card/50 backdrop-blur-sm border-border relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative z-10 space-y-8">
            {/* Contact Methods */}
            <div className="flex justify-center">
              <a 
                href="mailto:contact@tanrikulu.dev"
                className="flex items-start gap-4 p-6 rounded-lg bg-background/50 border border-border hover-glow transition-all max-w-md w-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Send us your project details
                  </p>
                  <span className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    contact@tanrikulu.dev
                  </span>
                </div>
              </a>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <Button variant="hero" size="lg" className="group">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Typically respond within 24 hours
              </p>
            </div>

            {/* Optional: Social proof or additional info */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">Fast</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">Professional</div>
                  <div className="text-sm text-muted-foreground">Service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground font-display">Quality</div>
                  <div className="text-sm text-muted-foreground">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
