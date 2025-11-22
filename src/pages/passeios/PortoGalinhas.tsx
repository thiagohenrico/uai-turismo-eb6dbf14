import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingDialog from "@/components/BookingDialog";
import buggyTour from "@/assets/buggy-tour.jpg";

const PortoGalinhas = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={buggyTour} 
            alt="Porto de Galinhas - Passeios de Buggy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={20} />
                Voltar
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Porto de Galinhas - Passeio de Buggy
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Ponta a ponta pelas praias mais bonitas de Porto de Galinhas
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Sobre o Passeio
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  O passeio de buggy Ponta a Ponta em Porto de Galinhas é uma experiência completa pelas praias do famoso balneário pernambucano. Cada praia possui características únicas, criando um roteiro diversificado que combina aventura, natureza e paisagens paradisíacas.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  De Muro Alto, com sua piscina natural gigante, até o Pontal de Maracaípe com seus cavalos-marinhos, passando pelo coqueiral de Maracaípe e as piscinas naturais do Cupê, este passeio revela os tesouros escondidos de Porto de Galinhas de uma forma emocionante e inesquecível.
                </p>
              </div>

              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Duração</h3>
                </div>
                <p className="text-muted-foreground ml-9">Passeio privativo (manhã ou tarde)</p>
              </div>

              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Roteiro de Buggy - 4 Horas</h3>
                </div>
                <ul className="space-y-3 ml-9">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Praia de Muro Alto - Piscina natural gigante formada por recifes.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Pontal do Cupê - Piscinas naturais de águas cristalinas.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Coqueiral de Maracaípe - Cenário paradisíaco com coqueiros.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Pontal de Maracaípe - Encontro do rio com o mar e santuário dos cavalos-marinhos.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">O que está incluído</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>🚐🏖️ Buscamos e deixamos no local de hospedagem.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>📸 Fotos cortesia durante o passeio.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto px-12"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Reservar Este Passeio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingDialog 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedTour="Porto de Galinhas - Passeios de Buggy"
      />
    </div>
  );
};

export default PortoGalinhas;
