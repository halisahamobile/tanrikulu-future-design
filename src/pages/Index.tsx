import { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectDialog from "@/components/ProjectDialog";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onStartProject={() => setIsDialogOpen(true)} />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ProjectDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </main>
  );
};

export default Index;
