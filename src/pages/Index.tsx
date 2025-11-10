import Header from "@/components/Header";
import HeroCollage from "@/components/HeroCollage";
import Tours from "@/components/Tours";
import ImportantInfo from "@/components/ImportantInfo";
import FAQ from "@/components/FAQ";
import FrequentQuestions from "@/components/FrequentQuestions";
import Reviews from "@/components/Reviews";
import ClientGallery from "@/components/ClientGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCollage />
        <Tours />
        <ImportantInfo />
        <ClientGallery />
        <FAQ />
        <Reviews />
        <FrequentQuestions />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
