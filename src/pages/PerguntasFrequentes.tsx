import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FrequentQuestions from "@/components/FrequentQuestions";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const PerguntasFrequentes = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main className="pt-24">
        <FrequentQuestions />
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsBookingOpen(true)} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default PerguntasFrequentes;
