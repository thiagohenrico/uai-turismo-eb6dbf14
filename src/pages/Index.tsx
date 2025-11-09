import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobilePhotoGallery from "@/components/MobilePhotoGallery";
import BookingForm from "@/components/BookingForm";
import Tours from "@/components/Tours";
import ImportantInfo from "@/components/ImportantInfo";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="md:hidden">
          <MobilePhotoGallery />
        </div>
        <div className="hidden md:block">
          <Hero />
        </div>
        <BookingForm />
        <Tours />
        <ImportantInfo />
        <InstagramGallery />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
