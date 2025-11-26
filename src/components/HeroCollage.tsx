import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import tour images
import buggyTour from "@/assets/buggy-tour.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import maragogiBarraGrande from "@/assets/maragogi-barra-grande.jpg";
import maragogiPontaMangue from "@/assets/maragogi-ponta-mangue.jpg";
import recifeOlinda from "@/assets/recife-olinda.jpg";
import ilhaSantoAleixo from "@/assets/ilha-santo-aleixo.jpg";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";

// Import all client gallery images
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";
import client7 from "@/assets/client-7.jpg";
import client8 from "@/assets/client-8.jpg";
import client9 from "@/assets/client-9.jpg";
import client11 from "@/assets/client-11.jpg";
import client12 from "@/assets/client-12.jpg";
import client13 from "@/assets/client-13.jpg";
import client14 from "@/assets/client-14.jpg";
import client15 from "@/assets/client-15.jpg";
import client16 from "@/assets/client-16.jpg";
import client17 from "@/assets/client-17.jpg";
import client18 from "@/assets/client-18.jpg";
import client19 from "@/assets/client-19.jpg";
import client20 from "@/assets/client-20.jpg";
import client21 from "@/assets/client-21.jpg";
import client22 from "@/assets/client-22.jpg";
import client23 from "@/assets/client-23.jpg";
import client24 from "@/assets/client-24.jpg";
import client25 from "@/assets/client-25.jpg";
import client26 from "@/assets/client-26.jpg";
import client27 from "@/assets/client-27.jpg";
import client28 from "@/assets/client-28.jpg";
import client29 from "@/assets/client-29.jpg";
import client30 from "@/assets/client-30.jpg";
import client31 from "@/assets/client-31.jpg";
import client32 from "@/assets/client-32.jpg";
import client33 from "@/assets/client-33.jpg";
import client34 from "@/assets/client-34.jpg";


const allClientPhotos = [
  client1, client2, client3, client4, client5, client6, client7, client8, client9,
  client11, client12, client13, client14, client15, client16, client17, client18, client19, client20,
  client21, client22, client23, client24, client25, client26, client27, client28, client29, client30,
  client31, client32, client33, client34
];

interface HeroCollageProps {
  onReserveClick?: () => void;
}

const HeroCollage = ({ onReserveClick }: HeroCollageProps) => {
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

  useEffect(() => {
    // Initialize with random photos
    const getRandomPhotos = () => {
      const shuffled = [...allClientPhotos].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6);
    };
    
    setCurrentPhotos(getRandomPhotos());

    // Change photos every 5 seconds
    const interval = setInterval(() => {
      setCurrentPhotos(getRandomPhotos());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const photos = [
    { src: praiaCarneiros, alt: "Praia dos Carneiros" },
    { src: saoMiguel, alt: "São Miguel dos Milagres" },
    { src: maragogiBarraGrande, alt: "Maragogi - Barra Grande" },
    { src: maragogiPontaMangue, alt: "Maragogi - Ponta de Mangue" },
    { src: caboSantoAgostinho, alt: "Cabo de Santo Agostinho" },
    { src: ilhaSantoAleixo, alt: "Ilha de Santo Aleixo" },
    { src: recifeOlinda, alt: "City Tour Recife e Olinda" },
    { src: buggyTour, alt: "Porto de Galinhas - Buggy" },
  ];

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-deep-navy via-[#1a1a1a] to-background overflow-hidden pt-20">
        {/* Mobile: Photo collage - Polaroid style */}
        <div className="block md:hidden relative z-10 max-w-5xl mx-auto px-2 sm:px-4 pb-8">
          <div className="relative h-[600px]">
            {/* Foto 1 - Canto superior esquerdo */}
            <div 
              className="absolute transition-all duration-500 hover:scale-105 hover:z-40"
              style={{
                width: '360px',
                top: '60px',
                left: '-10px',
                transform: 'rotate(-4deg)',
                zIndex: 1
              }}
            >
              <div className="bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[0] || client2} 
                  alt="Cliente curtindo nas piscinas naturais" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Foto 2 - Principal central (buggy amarelo) */}
            <div 
              className="absolute transition-all duration-500 hover:scale-105 hover:z-40"
              style={{
                width: '420px',
                top: '140px',
                left: '120px',
                transform: 'rotate(3deg)',
                zIndex: 4
              }}
            >
              <div className="bg-white p-4 shadow-[0_25px_70px_rgba(0,0,0,0.8)] rounded-sm">
                <img 
                  src={currentPhotos[1] || client4} 
                  alt="Amigos nas águas cristalinas de Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Foto 3 - Canto inferior esquerdo */}
            <div 
              className="absolute transition-all duration-500 hover:scale-105 hover:z-40"
              style={{
                width: '350px',
                top: '330px',
                left: '20px',
                transform: 'rotate(-2deg)',
                zIndex: 3
              }}
            >
              <div className="bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[2] || client8} 
                  alt="Grupo comemorando em Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Foto 4 - Lado direito, parcialmente visível */}
            <div 
              className="absolute transition-all duration-500 hover:scale-105 hover:z-40"
              style={{
                width: '320px',
                top: '240px',
                right: '-30px',
                transform: 'rotate(2deg)',
                zIndex: 2
              }}
            >
              <div className="bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.7)] rounded-sm">
                <img 
                  src={currentPhotos[3] || client15} 
                  alt="Grande grupo em Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Carousel with tour names */}
        <div className="hidden md:block relative z-10 pb-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 lg:basis-1/4">
                  <div
                    className="relative group cursor-pointer h-full"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div 
                      className={`relative bg-white p-4 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-10 ${
                        index === 0 ? "rotate-[-5deg]" : 
                        index === 1 ? "rotate-[4deg]" : 
                        index === 2 ? "rotate-[-3deg]" : 
                        index === 3 ? "rotate-[5deg]" :
                        index === 4 ? "rotate-[-4deg]" :
                        index === 5 ? "rotate-[3deg]" :
                        index === 6 ? "rotate-[-2deg]" :
                        "rotate-[2deg]"
                      }`}
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-sm">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-center mt-3 font-script text-gray-700 text-sm">
                        {photo.alt}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Video and Content Section */}
        <div className="relative z-10 pb-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Video - Left */}
              <div className="order-2 md:order-1">
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

              {/* Text - Right */}
              <div className="order-1 md:order-2 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider leading-tight drop-shadow-lg mb-8">
                  Experiências inesquecíveis no litoral Sul de{" "}
                  <span className="text-primary">Pernambuco</span> e Norte de{" "}
                  <span className="text-primary">Alagoas!</span>
                </h1>
              </div>
            </div>

            {/* CTA Buttons - Centered Below */}
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          </div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
          </svg>
        </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
      </section>
    </>
  );
};

export default HeroCollage;
