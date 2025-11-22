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
      return shuffled.slice(0, 15);
    };
    
    setCurrentPhotos(getRandomPhotos());

    // Change photos every 7 seconds
    const interval = setInterval(() => {
      setCurrentPhotos(getRandomPhotos());
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-[#0a4b78] via-[#1a5f8a] to-[#2d7ba3] overflow-hidden pt-16 md:pt-20 pb-8">
        {/* Title */}
        <div className="relative z-30 pb-6 md:pb-8 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)] max-w-5xl mx-auto">
            Experiências inesquecíveis no litoral Sul de{" "}
            <span className="text-[#FFD700]">Pernambuco</span> e Norte de{" "}
            <span className="text-[#FFD700]">Alagoas!</span>
          </h1>
        </div>

        {/* Photo Mural Collage - Dense and Vibrant */}
        <div className="relative z-10 max-w-[95%] mx-auto px-2 md:px-4 pb-6 md:pb-10">
          <div className="relative h-[550px] md:h-[650px]">
            {/* Photo 1 - Large left */}
            <div 
              className="absolute left-[2%] top-[5%] w-[32%] md:w-[26%] transform -rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-15"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[0] || galeriaBuggyCabo1} 
                  alt="Passeio tropical" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 2 - Top center */}
            <div 
              className="absolute left-[28%] top-[2%] w-[38%] md:w-[30%] transform rotate-[6deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-18"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[1] || galeriaPortoGalinhas1} 
                  alt="Aventura na praia" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* Photo 3 - Right top */}
            <div 
              className="absolute right-[3%] top-[8%] w-[30%] md:w-[24%] transform -rotate-[12deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-20"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[2] || galeriaMaragogiPontaMangue1} 
                  alt="Maragogi paradise" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Photo 4 - Center large */}
            <div 
              className="absolute left-[15%] top-[28%] w-[42%] md:w-[34%] transform rotate-[3deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-25"
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[3] || galeriaCarneiros1} 
                  alt="Experiência única" 
                  className="w-full aspect-[16/11] object-cover"
                />
              </div>
            </div>

            {/* Photo 5 - Left middle */}
            <div 
              className="absolute left-0 top-[38%] w-[28%] md:w-[22%] transform rotate-[15deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-16"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[4] || galeriaIlhaSantoAleixo1} 
                  alt="Ilha paradisíaca" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 6 - Right center */}
            <div 
              className="absolute right-[5%] top-[35%] w-[34%] md:w-[28%] transform -rotate-[7deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-22"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[5] || galeriaMaragogiBarraGrande1} 
                  alt="Barra Grande" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* Photo 7 - Bottom left */}
            <div 
              className="absolute left-[8%] bottom-[5%] w-[30%] md:w-[24%] transform -rotate-[10deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-19"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[6] || galeriaSaoMiguel1} 
                  alt="São Miguel" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Photo 8 - Bottom center */}
            <div 
              className="absolute left-[32%] bottom-[3%] w-[36%] md:w-[30%] transform rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-17"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[7] || galeriaPortoGalinhas2} 
                  alt="Porto de Galinhas" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            {/* Photo 9 - Bottom right */}
            <div 
              className="absolute right-[2%] bottom-[8%] w-[28%] md:w-[22%] transform rotate-[12deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-14"
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[8] || galeriaCarneiros2} 
                  alt="Carneiros beach" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 10 - Small left top */}
            <div 
              className="absolute left-[5%] top-[18%] w-[24%] md:w-[18%] transform rotate-[18deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-12"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[9] || galeriaCitytour1} 
                  alt="City tour" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Photo 11 - Small top right */}
            <div 
              className="absolute right-[1%] top-[1%] w-[22%] md:w-[16%] transform rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-11"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[10] || galeriaMaragogiPontaMangue2} 
                  alt="Ponta de Mangue" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 12 - Small center overlap */}
            <div 
              className="absolute left-[52%] top-[20%] w-[20%] md:w-[15%] transform -rotate-[15deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-26"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[11] || galeriaEcoparkMaragogi1} 
                  alt="Ecopark adventure" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Photo 13 - Small bottom center */}
            <div 
              className="absolute left-[25%] bottom-[18%] w-[22%] md:w-[17%] transform -rotate-[12deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-13"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[12] || galeriaBuggyCabo2} 
                  alt="Buggy adventure" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Photo 14 - Small right middle */}
            <div 
              className="absolute right-[8%] top-[52%] w-[20%] md:w-[15%] transform rotate-[20deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-10"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[13] || galeriaIlhaSantoAleixo2} 
                  alt="Santo Aleixo" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 15 - Small left bottom */}
            <div 
              className="absolute left-[1%] bottom-[20%] w-[21%] md:w-[16%] transform -rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-40 z-9"
            >
              <div className="bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[14] || galeriaSaoMiguel2} 
                  alt="Milagres coast" 
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative z-30 text-center pb-8 md:pb-12">
          <Button 
            onClick={onReserveClick}
            size="lg"
            className="bg-[#FFD700] hover:bg-[#FFC700] text-black font-bold text-lg md:text-xl px-10 md:px-12 py-6 md:py-7 rounded-full shadow-[0_10px_40px_rgba(255,215,0,0.5)] hover:shadow-[0_15px_50px_rgba(255,215,0,0.7)] transition-all transform hover:scale-105"
          >
            RESERVE JÁ
          </Button>
        </div>

        {/* Video Section */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 pb-8">
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
