import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingDialog from "@/components/BookingDialog";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";

const CaboSantoAgostinho = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={caboSantoAgostinho} 
            alt="Cabo de Santo Agostinho" 
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
                Cabo de Santo Agostinho
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                Aventura de buggy por praias paradisíacas e mirantes espetaculares
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Sobre o Passeio
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  O passeio de buggy pelo Cabo de Santo Agostinho é uma experiência emocionante que combina história, natureza e aventura. Explore praias paradisíacas, visite mirantes com vistas espetaculares e conheça pontos históricos importantes da região.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Durante o trajeto, você terá a oportunidade de visitar praias famosas como Calhetas, Enseada dos Corais e Gaibu, além de degustar doces e licores típicos da região. É uma forma divertida e diferente de conhecer as belezas do litoral sul de Pernambuco.
                </p>
              </div>

              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Duração</h3>
                </div>
                <p className="text-muted-foreground ml-9">Passeio das 07:30 às 17:30</p>
              </div>

              <div className="mb-8 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">Roteiro de Buggy - 3 Horas</h3>
                </div>
                <ul className="space-y-3 ml-9">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Praias de Calhetas, Enseada dos Corais e Gaibu - Belezas naturais imperdíveis.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Mirantes do Faroleiro e do Paraíso - Vistas panorâmicas espetaculares.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Degustação de doces e licores - Sabores típicos da região.</span>
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
                    <span>🎭 Serviço de guia especializado.</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>📸 Fotos cortesia durante o passeio.</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  *Day use em restaurante à beira-mar não incluso.
                </p>
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
        preSelectedTour="Cabo de Santo Agostinho - Passeios de Buggy"
      />
    </div>
  );
};

export default CaboSantoAgostinho;
