import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Import destination photos
import heroBeach from "@/assets/hero-beach.jpg";
import buggyTour from "@/assets/buggy-tour.jpg";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";
import maragogi from "@/assets/maragogi.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import ilhaSantoAleixo from "@/assets/ilha-santo-aleixo.jpg";
import maragogiBarraGrande from "@/assets/maragogi-barra-grande.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import recifeOlinda from "@/assets/recife-olinda.jpg";

// Import gallery photos
import galeriaPorto1 from "@/assets/galeria-porto-galinhas-1.jpg";
import galeriaPorto2 from "@/assets/galeria-porto-galinhas-2.jpg";
import galeriaMaragogi1 from "@/assets/galeria-maragogi-ponta-1.jpg";
import galeriaMaragogi2 from "@/assets/galeria-maragogi-barra-1.jpg";
import galeriaCarneiros1 from "@/assets/galeria-carneiros-1.jpg";
import galeriaBuggy1 from "@/assets/galeria-buggy-cabo-1.jpg";
import galeriaCityTour1 from "@/assets/galeria-citytour-1.jpg";
import galeriaIlha1 from "@/assets/galeria-ilha-santo-aleixo-1.jpg";

const allDestinationPhotos = [
  heroBeach, buggyTour, caboSantoAgostinho, maragogi, praiaCarneiros, 
  ilhaSantoAleixo, maragogiBarraGrande, saoMiguel, recifeOlinda,
  galeriaPorto1, galeriaPorto2, galeriaMaragogi1, galeriaMaragogi2,
  galeriaCarneiros1, galeriaBuggy1, galeriaCityTour1, galeriaIlha1
];

interface HeroCollageProps {
  onReserveClick?: () => void;
}

const HeroCollage = ({ onReserveClick }: HeroCollageProps) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    // Initialize with random photos
    const getRandomPhotos = () => {
      const shuffled = [...allDestinationPhotos].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 12);
    };
    
    setCurrentPhotos(getRandomPhotos());

    // Change photos every 6 seconds
    const interval = setInterval(() => {
      setCurrentPhotos(getRandomPhotos());
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-deep-navy via-[#1a1a1a] to-background overflow-hidden pt-16 md:pt-20">
        {/* Title */}
        <div className="relative z-20 pb-8 md:pb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider px-4 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Experiências inesquecíveis no litoral Sul de{" "}
            <span className="text-primary">Pernambuco</span> e Norte de{" "}
            <span className="text-primary">Alagoas!</span>
          </h1>
        </div>

        {/* Photo Mural Collage */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 md:pb-20">
          <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
            {/* Large photo 1 - Bottom left */}
            <div 
              className="absolute left-0 bottom-0 w-[45%] md:w-[35%] transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-10"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[0] || heroBeach} 
                  alt="Praias paradisíacas de Pernambuco" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 2 - Top right */}
            <div 
              className="absolute right-[5%] top-[5%] w-[38%] md:w-[28%] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-15"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[1] || buggyTour} 
                  alt="Passeio de buggy nas dunas" 
                  className="w-full aspect-square object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Small photo 3 - Center left */}
            <div 
              className="absolute left-[8%] top-[15%] w-[32%] md:w-[22%] transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-20"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[2] || maragogi} 
                  alt="Piscinas naturais de Maragogi" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Large photo 4 - Center */}
            <div 
              className="absolute left-[25%] md:left-[30%] top-[25%] md:top-[30%] w-[48%] md:w-[38%] transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-25"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[3] || praiaCarneiros} 
                  alt="Praia dos Carneiros" 
                  className="w-full aspect-[16/10] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 5 - Bottom center */}
            <div 
              className="absolute left-[35%] md:left-[40%] bottom-[8%] w-[35%] md:w-[26%] transform -rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-18"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[4] || ilhaSantoAleixo} 
                  alt="Ilha de Santo Aleixo" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Small photo 6 - Top left */}
            <div 
              className="absolute left-[48%] md:left-[52%] top-[2%] w-[28%] md:w-[20%] transform rotate-15 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-12"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[5] || saoMiguel} 
                  alt="São Miguel dos Milagres" 
                  className="w-full aspect-square object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 7 - Bottom right */}
            <div 
              className="absolute right-0 bottom-[12%] w-[38%] md:w-[30%] transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-16"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[6] || maragogiBarraGrande} 
                  alt="Maragogi e Barra Grande" 
                  className="w-full aspect-[4/5] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Small photo 8 - Top center */}
            <div 
              className="absolute left-[15%] md:left-[18%] top-[8%] w-[26%] md:w-[18%] transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-14"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[7] || recifeOlinda} 
                  alt="Recife e Olinda" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra small photo 9 - Right side */}
            <div 
              className="absolute right-[8%] top-[35%] w-[24%] md:w-[16%] transform -rotate-10 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-22"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[8] || galeriaPorto1} 
                  alt="Porto de Galinhas" 
                  className="w-full aspect-square object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra photo 10 - Left bottom */}
            <div 
              className="absolute left-[5%] bottom-[35%] w-[30%] md:w-[22%] transform rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-13"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[9] || galeriaCarneiros1} 
                  alt="Aventuras nos Carneiros" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra photo 11 - Bottom far right */}
            <div 
              className="absolute right-[2%] bottom-0 w-[32%] md:w-[24%] transform -rotate-4 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-11"
            >
              <div className="bg-white p-3 md:p-3 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[10] || galeriaBuggy1} 
                  alt="Buggy tours" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra photo 12 - Center top */}
            <div 
              className="absolute left-[38%] md:left-[42%] top-[12%] w-[22%] md:w-[15%] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-17"
            >
              <div className="bg-white p-2 md:p-2 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[11] || galeriaCityTour1} 
                  alt="City Tour" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-10 text-center pb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              onClick={onReserveClick}
              className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 font-bold w-[90%] sm:w-auto"
            >
              RESERVE JÁ
            </Button>
            <Button 
              onClick={scrollToTours}
              variant="outline"
              className="bg-white/10 border-2 border-white text-white text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-full hover:bg-white hover:text-deep-navy transition-all transform hover:scale-105 font-bold backdrop-blur-sm w-[90%] sm:w-auto"
            >
              VER PASSEIOS
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 pb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://www.youtube.com/embed/s3oA1Zzh7DE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroCollage;
