import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ClientGallery from "@/components/ClientGallery";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const Galeria = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossa <span className="text-primary">Galeria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja os momentos especiais que nossos clientes viveram conosco. 
              Cada foto conta uma história de alegria, aventura e descoberta nas praias mais bonitas do Nordeste.
            </p>
          </div>
        </div>
        <ClientGallery />
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsBookingOpen(true)} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Galeria;
