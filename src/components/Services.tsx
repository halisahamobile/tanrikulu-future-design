import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps built with cutting-edge technology, delivering seamless user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Flutter", "Performance Optimized"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications designed to engage users and drive results with the latest web technologies.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Cloud Deployment"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visual identities and design systems that capture your brand essence and create lasting impressions.",
    features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Design Systems"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase">
            Services
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold font-display">
            What We <span className="text-gradient">Create</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover-glow p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute inset-0 w-14 h-14 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold font-display mb-3 text-foreground">
                {service.title}
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
