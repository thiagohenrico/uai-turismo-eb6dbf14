import buggyTour from "@/assets/buggy-tour.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import maragogiBarraGrande from "@/assets/maragogi-barra-grande.jpg";
import maragogiPontaMangue from "@/assets/maragogi-ponta-mangue.jpg";
import recifeOlinda from "@/assets/recife-olinda.jpg";
import ilhaSantoAleixo from "@/assets/ilha-santo-aleixo.jpg";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const MobilePhotoGallery = () => {
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

  return (
    <section id="inicio" className="relative min-h-screen bg-midnight overflow-hidden pt-16 pb-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-navy to-ocean-blue/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-2 leading-tight">
            Experiências inesquecíveis no litoral Sul de <span className="text-primary">Pernambuco</span> e Norte de <span className="text-secondary">Alagoas!</span>
          </h1>
        </div>

        {/* Mobile: Stacked Polaroid Gallery / Desktop: Carousel */}
        <div className="mb-12">
          {/* Mobile View - Stacked Polaroids */}
          <div className="block md:hidden space-y-8">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative mx-auto animate-fade-in"
                style={{
                  maxWidth: index % 3 === 0 ? '85%' : index % 3 === 1 ? '90%' : '80%',
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div 
                  className={`relative bg-white p-3 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-0 ${
                    index % 4 === 0 ? "rotate-[-4deg]" : 
                    index % 4 === 1 ? "rotate-[3deg]" : 
                    index % 4 === 2 ? "rotate-[-2deg]" : 
                    "rotate-[4deg]"
                  }`}
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.2)',
                  }}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="text-center mt-3 font-script text-gray-700 text-base font-medium">
                    {photo.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Carousel */}
          <div className="hidden md:block">
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
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-6">
          <button
            onClick={() => {
              const element = document.getElementById("orcamento");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            RESERVE JÁ
          </button>
          
          {/* Scroll indicator for mobile */}
          <div className="md:hidden flex flex-col items-center gap-2 animate-bounce">
            <p className="text-white text-sm">Ver Destinos</p>
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
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
  );
};

export default MobilePhotoGallery;
