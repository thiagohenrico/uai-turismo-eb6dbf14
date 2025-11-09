import buggyTour from "@/assets/buggy-tour.jpg";
import maragogi from "@/assets/maragogi.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
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
    { src: buggyTour, alt: "Passeio de Buggy" },
    { src: praiaCarneiros, alt: "Praia dos Carneiros" },
    { src: maragogi, alt: "Maragogi" },
    { src: saoMiguel, alt: "São Miguel dos Milagres" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-midnight overflow-hidden pt-24 pb-12 px-4">
      {/* Wavy background */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-ocean-blue/20 to-ocean-blue/40">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor" className="text-ocean-blue/30"/>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Experiências inesquecíveis no litoral Sul de <span className="text-primary">Pernambuco</span> e Norte de <span className="text-secondary">Alagoas!</span>
          </h1>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
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
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div
                    className="relative group cursor-pointer"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    }}
                  >
                    <div 
                      className="relative bg-white p-4 shadow-2xl transform transition-all duration-500 hover:scale-105 rotate-[-2deg] hover:rotate-0"
                    >
                      <div className="aspect-[3/4] overflow-hidden rounded-sm">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-center mt-3 font-script text-gray-700 text-base">
                        {photo.alt}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
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
                  "rotate-[5deg]"
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center mt-3 font-script text-gray-700 text-base">
                  {photo.alt}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const element = document.getElementById("orcamento");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            RESERVE JÁ
          </button>
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
