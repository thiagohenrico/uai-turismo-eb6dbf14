import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("orcamento");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Experiências inesquecíveis no litoral Sul de <span className="text-primary">Pernambuco</span> e Norte de <span className="text-secondary">Alagoas!</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-primary px-6 py-3 rounded-full">
            <span className="font-semibold text-white">CADASTUR - Empresa Credenciada</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto font-light">
          Descubra as praias mais paradisíacas do Nordeste com roteiros exclusivos e atendimento personalizado
        </p>

        <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90" onClick={scrollToBooking}>
          Solicitar Orçamento no WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;
