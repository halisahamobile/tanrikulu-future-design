import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onStartProject: () => void;
}

const Hero = ({ onStartProject }: HeroProps) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic technology background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in pt-40">
          {/* Logo/Brand */}
          <div className="inline-block flex flex-col items-center gap-1 mb-16">
            {/* Logo SVG with hover glow effect */}
            <div className="logo-glow-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                preserveAspectRatio="xMidYMid meet"
                viewBox="258.03 280.9 509.19 459.1"
                width="240"
                height="240"
                className="text-white"
              >
                <g
                  transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  fill="white"
                  stroke="none"
                >
                  <path
                    d="M2701 7408 c-57 -29 -101 -85 -112 -140 -13 -67 -11 -601 3 -655 14 -59 78 -127 133 -142 27 -7 281 -11 808 -11 l767 0 0 -1058 0 -1057 -47 -25 c-67 -35 -134 -105 -169 -175 -26 -54 -29 -70 -29 -160 0 -88 3 -107 27 -157 34 -74 112 -152 186 -186 81 -38 221 -43 305 -12 106 40 200 136 229 234 7 23 12 79 13 126 0 77 -3 92 -33 152 -36 74 -105 143 -177 178 l-45 22 0 1061 c-1 584 -5 1093 -9 1130 -11 79 -41 126 -101 157 -38 19 -60 20 -825 20 l-785 0 0 234 0 234 53 6 c75 8 2592 5 2782 -4 255 -12 475 -66 692 -170 539 -257 914 -775 1035 -1430 30 -159 32 -550 5 -715 -63 -379 -180 -692 -365 -975 -307 -471 -749 -752 -1274 -809 -103 -12 -555 -15 -582 -5 -14 5 -16 28 -16 145 l0 139 120 0 c658 0 1176 324 1483 927 146 287 217 588 217 916 -1 446 -142 823 -421 1121 -151 161 -380 308 -576 370 -189 59 -256 67 -578 73 -332 6 -364 2 -414 -49 -65 -67 -62 20 -59 -1408 l3 -1295 25 -43 c15 -27 42 -54 70 -70 44 -26 50 -27 235 -30 163 -3 205 0 295 18 252 51 413 157 505 331 59 113 65 156 65 510 l0 317 54 26 c33 16 77 51 109 86 183 197 118 508 -129 622 -41 19 -66 23 -154 23 -88 0 -113 -4 -154 -23 -157 -72 -244 -219 -234 -396 4 -65 11 -93 35 -141 39 -75 111 -148 181 -182 l54 -26 -4 -306 c-4 -291 -5 -309 -27 -364 -42 -106 -151 -191 -297 -232 -37 -11 -116 -19 -216 -22 l-158 -6 0 1207 0 1206 198 0 c304 0 444 -23 623 -103 132 -60 228 -126 334 -232 129 -129 230 -288 298 -470 175 -471 82 -1091 -231 -1540 -70 -101 -244 -274 -342 -341 -148 -102 -300 -166 -488 -205 -73 -16 -153 -23 -328 -27 -231 -7 -231 -7 -266 -34 -61 -46 -68 -74 -68 -265 0 -92 -3 -178 -6 -190 l-6 -23 -634 0 -634 0 0 1008 0 1007 55 28 c30 16 74 50 99 77 187 200 134 507 -110 631 -63 32 -74 34 -163 34 -112 0 -174 -19 -248 -75 -127 -95 -185 -249 -153 -400 25 -119 124 -243 223 -278 l47 -17 0 -1028 c0 -748 3 -1041 12 -1074 17 -70 87 -137 156 -152 37 -8 373 -11 1115 -11 997 0 1070 1 1193 19 491 73 901 308 1227 706 304 370 489 814 553 1322 19 155 22 487 5 628 -82 679 -447 1274 -991 1615 -221 139 -456 225 -745 273 -129 21 -148 21 -1655 24 l-1525 4 -44 -23z m872 -1772 c18 -7 47 -30 65 -50 27 -31 32 -45 32 -87 0 -99 -62 -169 -148 -169 -87 0 -150 53 -159 135 -14 124 100 217 210 171z m2525 -76 c46 -28 72 -76 72 -133 0 -58 -19 -98 -62 -131 -50 -37 -94 -41 -148 -14 -83 42 -113 131 -74 215 37 76 140 107 212 63z m-1586 -1446 c59 -30 87 -129 54 -192 -27 -52 -62 -75 -118 -79 -41 -3 -61 1 -86 16 -73 47 -95 143 -47 214 14 20 27 37 28 37 1 0 20 7 42 14 42 15 83 12 127 -10z"
                  />
                </g>
              </svg>
            </div>
            <h2 className="font-mono text-primary text-[2.25rem] tracking-widest">
              TANRIKULU.DEV
            </h2>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display">
            <span className="block mb-2">Building Tomorrow's</span>
            <span className="text-gradient glow-text">Digital Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional mobile applications, cutting-edge websites, and stunning graphical designs 
            that transform your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={onStartProject}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>

          {/* Tech Stack Indicators */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Mobile Apps
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Web Development
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Graphic Design
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
