import { useState } from "react";
import Header from "@/components/Header";
import MobilePhotoGallery from "@/components/MobilePhotoGallery";
import CadasturBadge from "@/components/CadasturBadge";
import Tours from "@/components/Tours";
import FAQ from "@/components/FAQ";
import FrequentQuestions from "@/components/FrequentQuestions";
import Reviews from "@/components/Reviews";
import ClientGallery from "@/components/ClientGallery";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingDialog from "@/components/BookingDialog";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onReserveClick={() => setIsBookingOpen(true)} />
      <main>
        <MobilePhotoGallery />
        <div className="bg-[hsl(210,35%,10%)]">
          <Tours />
          <ClientGallery />
          <InstagramFeed />
          <FAQ />
          <CadasturBadge />
          <Reviews />
          <FrequentQuestions onReserveClick={() => setIsBookingOpen(true)} />
        </div>
      </main>
      <Footer />
      <WhatsAppButton onClick={() => setIsBookingOpen(true)} />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
