import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Work = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-mono text-sm tracking-widest">BACK TO HOME</span>
            </Link>
            <h1 className="font-mono text-primary text-lg tracking-widest">TANRIKULU.DEV</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display">
              <span className="text-gradient glow-text">Our Work</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions
            </p>
          </div>

          {/* Project Card */}
          <div className="max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <h3 className="text-3xl font-semibold mb-2">HalıSaha Mobile</h3>
                <p className="text-muted-foreground">
                  A comprehensive mobile application for managing football matches, connecting players, and tracking performance statistics.
                </p>
              </div>

              {/* Logo */}
              <div className="p-6">
                <div className="flex justify-center">
                  <div className="relative rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center p-4">
                    <img
                      src="/halisaha_logo_reverted_green.png"
                      alt="HalıSaha Mobile - Logo"
                      className="max-w-[200px] max-h-[150px] w-auto h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Project Features */}
              <div className="p-6 border-t border-border bg-card/30">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">⚽</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Match Management</p>
                      <p className="text-sm text-muted-foreground">Create and manage football matches easily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">👥</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Social Network</p>
                      <p className="text-sm text-muted-foreground">Connect with friends and invite players</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">📊</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Performance Stats</p>
                      <p className="text-sm text-muted-foreground">Track your performance and statistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;

