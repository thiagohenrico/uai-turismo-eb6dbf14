import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Import gallery photos
import galeriaBuggyCabo1 from "@/assets/galeria-buggy-cabo-1.jpg";
import galeriaPortoGalinhas1 from "@/assets/galeria-porto-galinhas-1.jpg";
import galeriaPortoGalinhas2 from "@/assets/galeria-porto-galinhas-2.jpg";
import galeriaPortoGalinhas3 from "@/assets/galeria-porto-galinhas-3.jpg";
import galeriaCarneiros1 from "@/assets/galeria-carneiros-1.jpg";
import galeriaCarneiros2 from "@/assets/galeria-carneiros-2.jpg";
import galeriaMaragogiBarraGrande1 from "@/assets/galeria-maragogi-barra-1.jpg";
import galeriaMaragogiBarraGrande2 from "@/assets/galeria-maragogi-barra-2.jpg";
import galeriaMaragogiPontaMangue1 from "@/assets/galeria-maragogi-ponta-1.jpg";
import galeriaMaragogiPontaMangue2 from "@/assets/galeria-maragogi-ponta-2.jpg";
import galeriaMaragogiPontaMangue3 from "@/assets/galeria-maragogi-ponta-3.jpg";
import galeriaMaragogiPontaMangue4 from "@/assets/galeria-maragogi-ponta-4.jpg";
import galeriaMaragogiPontaMangue5 from "@/assets/galeria-maragogi-ponta-5.jpg";
import galeriaIlhaSantoAleixo1 from "@/assets/galeria-ilha-santo-aleixo-1.jpg";
import galeriaIlhaSantoAleixo2 from "@/assets/galeria-ilha-santo-aleixo-2.jpg";
import galeriaSaoMiguel1 from "@/assets/galeria-sao-miguel-1.jpg";
import galeriaPortoGalinhas4 from "@/assets/galeria-porto-galinhas-4.jpg";
import galeriaCarneiros3 from "@/assets/galeria-carneiros-3.jpg";
import galeriaCarneiros4 from "@/assets/galeria-carneiros-4.jpg";
import galeriaCarneiros5 from "@/assets/galeria-carneiros-5.jpg";
import galeriaCarneiros6 from "@/assets/galeria-carneiros-6.jpg";
import galeriaCitytour1 from "@/assets/galeria-citytour-1.jpg";
import galeriaCitytour2 from "@/assets/galeria-citytour-2.jpg";
import galeriaCitytour3 from "@/assets/galeria-citytour-3.jpg";
import galeriaEcoparkMaragogi1 from "@/assets/galeria-ecopark-maragogi-1.jpg";
import galeriaIlhaSantoAleixo3 from "@/assets/galeria-ilha-santo-aleixo-3.jpg";
import galeriaMaragogiPontaMangue6 from "@/assets/galeria-maragogi-ponta-6.jpg";
import galeriaMaragogiPontaMangue7 from "@/assets/galeria-maragogi-ponta-7.jpg";
import galeriaMaragogiPontaMangue8 from "@/assets/galeria-maragogi-ponta-8.jpg";
import galeriaMaragogiPontaMangue9 from "@/assets/galeria-maragogi-ponta-9.jpg";
import galeriaPortoGalinhas5 from "@/assets/galeria-porto-galinhas-5.jpg";
import galeriaBuggyCabo2 from "@/assets/galeria-buggy-cabo-2.jpg";
import galeriaCitytour4 from "@/assets/galeria-citytour-4.jpg";
import galeriaMaragogiPontaMangue10 from "@/assets/galeria-maragogi-ponta-10.jpg";
import galeriaSaoMiguel2 from "@/assets/galeria-sao-miguel-2.jpg";
import galeriaSaoMiguel3 from "@/assets/galeria-sao-miguel-3.jpg";
import galeriaBuggyCabo3 from "@/assets/galeria-buggy-cabo-3.jpg";
import galeriaMaragogiPontaMangue11 from "@/assets/galeria-maragogi-ponta-11.jpg";
import galeriaMaragogiPontaMangue12 from "@/assets/galeria-maragogi-ponta-12.jpg";
import galeriaMaragogiPontaMangue13 from "@/assets/galeria-maragogi-ponta-13.jpg";
import galeriaMaragogiBarraGrande3 from "@/assets/galeria-maragogi-barra-3.jpg";
import galeriaMaragogiBarraGrande4 from "@/assets/galeria-maragogi-barra-4.jpg";
import galeriaMaragogiBarraGrande5 from "@/assets/galeria-maragogi-barra-5.jpg";
import galeriaMaragogiBarraGrande6 from "@/assets/galeria-maragogi-barra-6.jpg";
import galeriaIlhaSantoAleixo4 from "@/assets/galeria-ilha-santo-aleixo-4.jpg";
import galeriaEcoparkMaragogi2 from "@/assets/galeria-ecopark-maragogi-2.jpg";
import galeriaCitytour5 from "@/assets/galeria-citytour-5.jpg";
import galeriaCitytour6 from "@/assets/galeria-citytour-6.jpg";
import galeriaBuggyCabo4 from "@/assets/galeria-buggy-cabo-4.jpg";
import galeriaMaragogiBarraGrande7 from "@/assets/galeria-maragogi-barra-7.jpg";
import galeriaMaragogiBarraGrande8 from "@/assets/galeria-maragogi-barra-8.jpg";
import galeriaMaragogiBarraGrande9 from "@/assets/galeria-maragogi-barra-9.jpg";
import galeriaIlhaSantoAleixo5 from "@/assets/galeria-ilha-santo-aleixo-5.jpg";
import galeriaEcoparkMaragogi3 from "@/assets/galeria-ecopark-maragogi-3.jpg";
import galeriaSaoMiguel4 from "@/assets/galeria-sao-miguel-4.jpg";
import galeriaSaoMiguel5 from "@/assets/galeria-sao-miguel-5.jpg";
import galeriaMaragogiBarraGrande10 from "@/assets/galeria-maragogi-barra-10.jpg";
import galeriaMaragogiBarraGrande11 from "@/assets/galeria-maragogi-barra-11.jpg";
import galeriaCarneiros7 from "@/assets/galeria-carneiros-7.jpg";

const allGalleryPhotos = [
  galeriaBuggyCabo1, galeriaPortoGalinhas1, galeriaPortoGalinhas2, galeriaPortoGalinhas3,
  galeriaCarneiros1, galeriaCarneiros2, galeriaMaragogiBarraGrande1, galeriaMaragogiBarraGrande2,
  galeriaMaragogiPontaMangue1, galeriaMaragogiPontaMangue2, galeriaMaragogiPontaMangue3,
  galeriaMaragogiPontaMangue4, galeriaMaragogiPontaMangue5, galeriaIlhaSantoAleixo1,
  galeriaIlhaSantoAleixo2, galeriaSaoMiguel1, galeriaPortoGalinhas4, galeriaCarneiros3,
  galeriaCarneiros4, galeriaCarneiros5, galeriaCarneiros6, galeriaCitytour1, galeriaCitytour2,
  galeriaCitytour3, galeriaEcoparkMaragogi1, galeriaIlhaSantoAleixo3, galeriaMaragogiPontaMangue6,
  galeriaMaragogiPontaMangue7, galeriaMaragogiPontaMangue8, galeriaMaragogiPontaMangue9,
  galeriaPortoGalinhas5, galeriaBuggyCabo2, galeriaCitytour4, galeriaMaragogiPontaMangue10,
  galeriaSaoMiguel2, galeriaSaoMiguel3, galeriaBuggyCabo3, galeriaMaragogiPontaMangue11,
  galeriaMaragogiPontaMangue12, galeriaMaragogiPontaMangue13, galeriaMaragogiBarraGrande3,
  galeriaMaragogiBarraGrande4, galeriaMaragogiBarraGrande5, galeriaMaragogiBarraGrande6,
  galeriaIlhaSantoAleixo4, galeriaEcoparkMaragogi2, galeriaCitytour5, galeriaCitytour6,
  galeriaBuggyCabo4, galeriaMaragogiBarraGrande7, galeriaMaragogiBarraGrande8,
  galeriaMaragogiBarraGrande9, galeriaIlhaSantoAleixo5, galeriaEcoparkMaragogi3,
  galeriaSaoMiguel4, galeriaSaoMiguel5, galeriaMaragogiBarraGrande10,
  galeriaMaragogiBarraGrande11, galeriaCarneiros7
];

interface HeroCollageProps {
  onReserveClick?: () => void;
}

const HeroCollage = ({ onReserveClick }: HeroCollageProps) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    // Initialize with random photos
    const getRandomPhotos = () => {
      const shuffled = [...allGalleryPhotos].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 7);
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
                  src={currentPhotos[0] || galeriaBuggyCabo1} 
                  alt="Clientes curtindo passeio de buggy" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 2 - Top right */}
            <div 
              className="absolute right-[5%] top-[5%] w-[40%] md:w-[32%] transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-15"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[1] || galeriaPortoGalinhas1} 
                  alt="Grupo nas piscinas naturais" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Large photo 3 - Center */}
            <div 
              className="absolute left-[25%] md:left-[30%] top-[25%] md:top-[30%] w-[50%] md:w-[40%] transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-25"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[2] || galeriaMaragogiPontaMangue1} 
                  alt="Família em Maragogi" 
                  className="w-full aspect-[16/10] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 4 - Bottom center */}
            <div 
              className="absolute left-[35%] md:left-[40%] bottom-[8%] w-[38%] md:w-[28%] transform -rotate-8 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-18"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[3] || galeriaCarneiros1} 
                  alt="Passeio na Praia dos Carneiros" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 5 - Top left */}
            <div 
              className="absolute left-[8%] top-[15%] w-[36%] md:w-[26%] transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-20"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[4] || galeriaIlhaSantoAleixo1} 
                  alt="Ilha de Santo Aleixo" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 6 - Bottom right */}
            <div 
              className="absolute right-0 bottom-[12%] w-[40%] md:w-[32%] transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-16"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[5] || galeriaMaragogiBarraGrande1} 
                  alt="Maragogi Barra Grande" 
                  className="w-full aspect-[4/5] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 7 - Top center */}
            <div 
              className="absolute left-[48%] md:left-[52%] top-[2%] w-[34%] md:w-[24%] transform rotate-10 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-12"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[6] || galeriaSaoMiguel1} 
                  alt="São Miguel dos Milagres" 
                  className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
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
