import { Card } from "@/components/ui/card";
import { Code2, Zap, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, label: "Clean Code", value: "Always" },
    { icon: Zap, label: "Fast Delivery", value: "Guaranteed" },
    { icon: Users, label: "Client Focus", value: "100%" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
              About Us
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold font-display leading-tight">
              Transforming Ideas Into
              <span className="text-gradient block mt-2">Digital Excellence</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Tanrikulu Development, we specialize in creating innovative digital solutions 
                that push boundaries and exceed expectations. With expertise across mobile development, 
                web technologies, and visual design, we bring a holistic approach to every project.
              </p>
              <p>
                Our commitment to quality, performance, and user experience drives us to stay at 
                the forefront of technology trends. We don't just build applications—we craft 
                experiences that make a lasting impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="p-4 bg-card/30 backdrop-blur-sm border-border text-center hover-glow"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-foreground text-sm">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Modern Technology Stack</h4>
                      <p className="text-sm text-muted-foreground">
                        We leverage cutting-edge frameworks and tools to build scalable, 
                        maintainable solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">User-Centric Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Every interface we create is designed with the end user in mind, 
                        ensuring intuitive and delightful experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Agile Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Flexible, iterative approach that adapts to your needs and 
                        delivers value at every stage.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Code-like decoration */}
                <div className="mt-8 p-4 bg-background/50 rounded border border-border font-mono text-xs">
                  <div className="text-muted-foreground">
                    <span className="text-accent">const</span>{" "}
                    <span className="text-primary">mission</span> ={" "}
                    <span className="text-foreground">"Excellence in every pixel"</span>;
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
