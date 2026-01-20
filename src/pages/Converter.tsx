import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpDown, Calculator, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const lengthUnits = [
  { id: "meter", label: "Metre", factor: 1 },
  { id: "kilometer", label: "Kilometre", factor: 1000 },
  { id: "centimeter", label: "Santimetre", factor: 0.01 },
  { id: "millimeter", label: "Milimetre", factor: 0.001 },
  { id: "inch", label: "İnç", factor: 0.0254 },
  { id: "foot", label: "Fit", factor: 0.3048 },
  { id: "yard", label: "Yard", factor: 0.9144 },
  { id: "mile", label: "Mil", factor: 1609.34 },
];

const categories = [
  "Uzunluk",
  "Ağırlık",
  "Sıcaklık",
  "Hacim",
  "Alan",
  "Hız",
  "Zaman",
  "Dijital Depolama",
  "Basınç",
];

const Converter = () => {
  const [activeCategory] = useState<string>("Uzunluk");
  const [sourceUnit, setSourceUnit] = useState<string>("meter");
  const [targetUnit, setTargetUnit] = useState<string>("meter");
  const [sourceValue, setSourceValue] = useState<string>("1");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const numeric = parseFloat(sourceValue.replace(",", "."));
    if (Number.isNaN(numeric)) return "";

    const from = lengthUnits.find((u) => u.id === sourceUnit);
    const to = lengthUnits.find((u) => u.id === targetUnit);
    if (!from || !to) return "";

    const valueInMeters = numeric * from.factor;
    const converted = valueInMeters / to.factor;

    // 1 Metre = 1.000,00 Metre gibi aşırı uzun olmasın diye
    return converted.toLocaleString("tr-TR", {
      maximumFractionDigits: 6,
      useGrouping: true,
    });
  }, [sourceUnit, targetUnit, sourceValue]);

  const handleSwap = () => {
    setSourceUnit(targetUnit);
    setTargetUnit(sourceUnit);
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  const sourceUnitLabel = lengthUnits.find((u) => u.id === sourceUnit)?.label ?? "";
  const targetUnitLabel = lengthUnits.find((u) => u.id === targetUnit)?.label ?? "";

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
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
                  <path d="M2701 7408 c-57 -29 -101 -85 -112 -140 -13 -67 -11 -601 3 -655 14 -59 78 -127 133 -142 27 -7 281 -11 808 -11 l767 0 0 -1058 0 -1057 -47 -25 c-67 -35 -134 -105 -169 -175 -26 -54 -29 -70 -29 -160 0 -88 3 -107 27 -157 34 -74 112 -152 186 -186 81 -38 221 -43 305 -12 106 40 200 136 229 234 7 23 12 79 13 126 0 77 -3 92 -33 152 -36 74 -105 143 -177 178 l-45 22 0 1061 c-1 584 -5 1093 -9 1130 -11 79 -41 126 -101 157 -38 19 -60 20 -825 20 l-785 0 0 234 0 234 53 6 c75 8 2592 5 2782 -4 255 -12 475 -66 692 -170 539 -257 914 -775 1035 -1430 30 -159 32 -550 5 -715 -63 -379 -180 -692 -365 -975 -307 -471 -749 -752 -1274 -809 -103 -12 -555 -15 -582 -5 -14 5 -16 28 -16 145 l0 139 120 0 c658 0 1176 324 1483 927 146 287 217 588 217 916 -1 446 -142 823 -421 1121 -151 161 -380 308 -576 370 -189 59 -256 67 -578 73 -332 6 -364 2 -414 -49 -65 -67 -62 20 -59 -1408 l3 -1295 25 -43 c15 -27 42 -54 70 -70 44 -26 50 -27 235 -30 163 -3 205 0 295 18 252 51 413 157 505 331 59 113 65 156 65 510 l0 317 54 26 c33 16 77 51 109 86 183 197 118 508 -129 622 -41 19 -66 23 -154 23 -88 0 -113 -4 -154 -23 -157 -72 -244 -219 -234 -396 4 -65 11 -93 35 -141 39 -75 111 -148 181 -182 l54 -26 -4 -306 c-4 -291 -5 -309 -27 -364 -42 -106 -151 -191 -297 -232 -37 -11 -116 -19 -216 -22 l-158 -6 0 1207 0 1206 198 0 c304 0 444 -23 623 -103 132 -60 228 -126 334 -232 129 -129 230 -288 298 -470 175 -471 82 -1091 -231 -1540 -70 -101 -244 -274 -342 -341 -148 -102 -300 -166 -488 -205 -73 -16 -153 -23 -328 -27 -231 -7 -231 -7 -266 -34 -61 -46 -68 -74 -68 -265 0 -92 -3 -178 -6 -190 l-6 -23 -634 0 -634 0 0 1008 0 1007 55 28 c30 16 74 50 99 77 187 200 134 507 -110 631 -63 32 -74 34 -163 34 -112 0 -174 -19 -248 -75 -127 -95 -185 -249 -153 -400 25 -119 124 -243 223 -278 l47 -17 0 -1028 c0 -748 3 -1041 12 -1074 17 -70 87 -137 156 -152 37 -8 373 -11 1115 -11 997 0 1070 1 1193 19 491 73 901 308 1227 706 304 370 489 814 553 1322 19 155 22 487 5 628 -82 679 -447 1274 -991 1615 -221 139 -456 225 -745 273 -129 21 -148 21 -1655 24 l-1525 4 -44 -23z m872 -1772 c18 -7 47 -30 65 -50 27 -31 32 -45 32 -87 0 -99 -62 -169 -148 -169 -87 0 -150 53 -159 135 -14 124 100 217 210 171z m2525 -76 c46 -28 72 -76 72 -133 0 -58 -19 -98 -62 -131 -50 -37 -94 -41 -148 -14 -83 42 -113 131 -74 215 37 76 140 107 212 63z m-1586 -1446 c59 -30 87 -129 54 -192 -27 -52 -62 -75 -118 -79 -41 -3 -61 1 -86 16 -73 47 -95 143 -47 214 14 20 27 37 28 37 1 0 20 7 42 14 42 15 83 12 127 -10z" />
                </g>
              </svg>
              <h1 className="font-mono text-primary text-lg tracking-widest">TANRIKULU.DEV</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero + Converter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Top icon + title */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-[0_18px_45px_rgba(168,85,247,0.5)]">
              <Calculator className="h-7 w-7 text-white" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Evrensel </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-400">
                  Çevirici
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tüm birimleri hassas ve kolay bir şekilde dönüştürün.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border/70 text-sm">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                <span className="font-medium">14 Kategori</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border/70 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-medium">99 Birim</span>
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={
                  cat === activeCategory
                    ? "px-4 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-xs sm:text-sm text-white shadow-[0_10px_30px_rgba(168,85,247,0.5)]"
                    : "px-4 sm:px-5 py-1.5 rounded-full bg-card/60 border border-border/60 text-xs sm:text-sm text-muted-foreground cursor-not-allowed"
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main converter card */}
          <Card className="relative overflow-hidden border border-border/80 bg-card/60 backdrop-blur-xl shadow-[0_22px_60px_rgba(15,23,42,0.55)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500" />
            <div className="p-6 sm:p-8 space-y-8">
              {/* Source */}
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Kaynak
                </p>
                <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-3 items-center">
                  <Input
                    type="text"
                    inputMode="decimal"
                    value={sourceValue}
                    onChange={(e) => setSourceValue(e.target.value)}
                    className="h-12 rounded-xl bg-background/70 border-border/60 text-base"
                  />
                  <Select value={sourceUnit} onValueChange={setSourceUnit}>
                    <SelectTrigger className="h-12 rounded-xl bg-background/70 border-border/60 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {lengthUnits.map((unit) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Swap button */}
              <div className="flex justify-center">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-full border border-purple-500/70 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 text-purple-300 hover:text-white hover:bg-purple-500/70"
                  onClick={handleSwap}
                >
                  <ArrowUpDown className="h-5 w-5" />
                </Button>
              </div>

              {/* Target */}
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Hedef
                </p>
                <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-3 items-center">
                  <div className="relative">
                    <Input
                      readOnly
                      value={result || ""}
                      placeholder="0"
                      className="h-12 rounded-xl bg-background/60 border-border/60 text-base pr-10"
                    />
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="absolute inset-y-0 right-2 flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <Select value={targetUnit} onValueChange={setTargetUnit}>
                    <SelectTrigger className="h-12 rounded-xl bg-background/70 border-border/60 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {lengthUnits.map((unit) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Result text */}
              <p className="text-xs sm:text-sm text-muted-foreground pt-2">
                {result
                  ? `1 ${sourceUnitLabel} = ${(1 * (lengthUnits.find((u) => u.id === sourceUnit)?.factor ?? 1) / (lengthUnits.find((u) => u.id === targetUnit)?.factor ?? 1)).toLocaleString("tr-TR", { maximumFractionDigits: 6 })} ${targetUnitLabel}`
                  : "Geçerli bir sayı girerek dönüştürmeye başlayın."}
              </p>
              {copied && (
                <p className="text-xs text-emerald-400">Sonuç panoya kopyalandı.</p>
              )}
            </div>
          </Card>

          {/* Tips */}
          <Card className="border border-border/70 bg-card/70 backdrop-blur-md">
            <div className="px-6 py-4 border-b border-border/60">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Hızlı İpuçları
              </p>
            </div>
            <div className="px-6 py-4 grid gap-3 text-xs sm:text-sm text-muted-foreground sm:grid-cols-3">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                <p>Birimleri değiştirmek için ok butonuna tıklayın.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p>Sonucu kopyalamak için kopyala ikonuna tıklayın.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <p>Kategoriler arasında kaydırarak gezinin.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Converter;

