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
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                preserveAspectRatio="xMidYMid meet"
                viewBox="258.03 280.9 509.19 459.1"
                width="18"
                height="18"
                className="text-primary"
              >
                <g
                  transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M2701 7408 c-57 -29 -101 -85 -112 -140 -13 -67 -11 -601 3 -655 14 -59 78 -127 133 -142 27 -7 281 -11 808 -11 l767 0 0 -1058 0 -1057 -47 -25 c-67 -35 -134 -105 -169 -175 -26 -54 -29 -70 -29 -160 0 -88 3 -107 27 -157 34 -74 112 -152 186 -186 81 -38 221 -43 305 -12 106 40 200 136 229 234 7 23 12 79 13 126 0 77 -3 92 -33 152 -36 74 -105 143 -177 178 l-45 22 0 1061 c-1 584 -5 1093 -9 1130 -11 79 -41 126 -101 157 -38 19 -60 20 -825 20 l-785 0 0 234 0 234 53 6 c75 8 2592 5 2782 -4 255 -12 475 -66 692 -170 539 -257 914 -775 1035 -1430 30 -159 32 -550 5 -715 -63 -379 -180 -692 -365 -975 -307 -471 -749 -752 -1274 -809 -103 -12 -555 -15 -582 -5 -14 5 -16 28 -16 145 l0 139 120 0 c658 0 1176 324 1483 927 146 287 217 588 217 916 -1 446 -142 823 -421 1121 -151 161 -380 308 -576 370 -189 59 -256 67 -578 73 -332 6 -364 2 -414 -49 -65 -67 -62 20 -59 -1408 l3 -1295 25 -43 c15 -27 42 -54 70 -70 44 -26 50 -27 235 -30 163 -3 205 0 295 18 252 51 413 157 505 331 59 113 65 156 65 510 l0 317 54 26 c33 16 77 51 109 86 183 197 118 508 -129 622 -41 19 -66 23 -154 23 -88 0 -113 -4 -154 -23 -157 -72 -244 -219 -234 -396 4 -65 11 -93 35 -141 39 -75 111 -148 181 -182 l54 -26 -4 -306 c-4 -291 -5 -309 -27 -364 -42 -106 -151 -191 -297 -232 -37 -11 -116 -19 -216 -22 l-158 -6 0 1207 0 1206 198 0 c304 0 444 -23 623 -103 132 -60 228 -126 334 -232 129 -129 230 -288 298 -470 175 -471 82 -1091 -231 -1540 -70 -101 -244 -274 -342 -341 -148 -102 -300 -166 -488 -205 -73 -16 -153 -23 -328 -27 -231 -7 -231 -7 -266 -34 -61 -46 -68 -74 -68 -265 0 -92 -3 -178 -6 -190 l-6 -23 -634 0 -634 0 0 1008 0 1007 55 28 c30 16 74 50 99 77 187 200 134 507 -110 631 -63 32 -74 34 -163 34 -112 0 -174 -19 -248 -75 -127 -95 -185 -249 -153 -400 25 -119 124 -243 223 -278 l47 -17 0 -1028 c0 -748 3 -1041 12 -1074 17 -70 87 -137 156 -152 37 -8 373 -11 1115 -11 997 0 1070 1 1193 19 491 73 901 308 1227 706 304 370 489 814 553 1322 19 155 22 487 5 628 -82 679 -447 1274 -991 1615 -221 139 -456 225 -745 273 -129 21 -148 21 -1655 24 l-1525 4 -44 -23z m872 -1772 c18 -7 47 -30 65 -50 27 -31 32 -45 32 -87 0 -99 -62 -169 -148 -169 -87 0 -150 53 -159 135 -14 124 100 217 210 171z m2525 -76 c46 -28 72 -76 72 -133 0 -58 -19 -98 -62 -131 -50 -37 -94 -41 -148 -14 -83 42 -113 131 -74 215 37 76 140 107 212 63z m-1586 -1446 c59 -30 87 -129 54 -192 -27 -52 -62 -75 -118 -79 -41 -3 -61 1 -86 16 -73 47 -95 143 -47 214 14 20 27 37 28 37 1 0 20 7 42 14 42 15 83 12 127 -10z"
                  />
                </g>
              </svg>
              <h1 className="font-mono text-primary text-lg tracking-widest">TANRIKULU.DEV</h1>
            </div>
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {/* HalıSaha Mobile */}
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

            {/* CanSuyu */}
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:shadow-glow">
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <h3 className="text-3xl font-semibold mb-2">CanSuyu</h3>
                <p className="text-muted-foreground">
                  Your intelligent companion for keeping your plants healthy and thriving. CanSuyu helps you care for your plants with AI-powered analysis and smart watering reminders.
                </p>
              </div>

              {/* Logo */}
              <div className="p-6">
                <div className="flex justify-center">
                  <div className="relative rounded-lg overflow-hidden border border-border bg-background flex items-center justify-center p-4">
                    <img
                      src="/CanSuyuLogo.png"
                      alt="CanSuyu Logo"
                      className="max-w-[200px] max-h-[150px] w-auto h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Project Features */}
              <div className="p-6 border-t border-border bg-card/30">
                <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">💧</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Smart Watering Reminders</p>
                      <p className="text-sm text-muted-foreground">Personalized reminders based on plant needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">🤖</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">AI Plant Analysis</p>
                      <p className="text-sm text-muted-foreground">Identify plants and diagnose issues with AI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">📚</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Plant Care Library</p>
                      <p className="text-sm text-muted-foreground">Comprehensive database of plant care information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">📈</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Health Tracking</p>
                      <p className="text-sm text-muted-foreground">Monitor plant health over time</p>
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

