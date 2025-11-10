import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Tours from "@/components/Tours";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const Passeios = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-primary">Passeios</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra os destinos mais paradisíacos do litoral de Pernambuco e Alagoas. 
              Cada passeio é cuidadosamente planejado para proporcionar uma experiência única e inesquecível.
            </p>
          </div>
        </div>
        <Tours />
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsBookingOpen(true)} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Passeios;
