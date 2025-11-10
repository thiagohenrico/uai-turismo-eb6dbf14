import { useState } from "react";
import Header from "@/components/Header";
import HeroCollage from "@/components/HeroCollage";
import CadasturBadge from "@/components/CadasturBadge";
import Tours from "@/components/Tours";
import FAQ from "@/components/FAQ";
import FrequentQuestions from "@/components/FrequentQuestions";
import Reviews from "@/components/Reviews";
import ClientGallery from "@/components/ClientGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingDialog from "@/components/BookingDialog";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main>
        <HeroCollage onReserveClick={() => setIsBookingOpen(true)} />
        <Tours />
        <CadasturBadge />
        <ClientGallery />
        <FAQ />
        <Reviews />
        <FrequentQuestions />
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsBookingOpen(true)} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
