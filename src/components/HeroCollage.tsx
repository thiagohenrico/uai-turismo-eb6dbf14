import { Button } from "@/components/ui/button";

// Import client gallery images
import client2 from "@/assets/client-2.jpg";
import client4 from "@/assets/client-4.jpg";
import client8 from "@/assets/client-8.jpg";
import client15 from "@/assets/client-15.jpg";
import client30 from "@/assets/client-30.jpg";
import heroVideo from "@/assets/hero-video.mp4";

interface HeroCollageProps {
  onReserveClick?: () => void;
}

const HeroCollage = ({ onReserveClick }: HeroCollageProps) => {

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-deep-navy via-[#1a1a1a] to-background overflow-hidden pt-24">
        {/* Title */}
        <div className="relative z-10 pb-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider px-4 leading-tight">
            Experiências inesquecíveis no litoral Sul de{" "}
            <span className="text-primary">Pernambuco</span> e Norte de{" "}
            <span className="text-primary">Alagoas!</span>
          </h1>
        </div>

        {/* Photo collage - Polaroid style */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
            {/* Photo 1 - Top Left */}
            <div 
              className="relative transform -rotate-[18deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-20"
              style={{ marginTop: '60px' }}
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={client2} 
                  alt="Cliente curtindo nas piscinas naturais" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 2 - Center Left */}
            <div 
              className="relative transform rotate-[15deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-20"
              style={{ marginTop: '-30px' }}
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={client4} 
                  alt="Amigos nas águas cristalinas de Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 3 - Center */}
            <div 
              className="relative transform -rotate-[12deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-20"
              style={{ marginTop: '80px' }}
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={client8} 
                  alt="Grupo comemorando em Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 4 - Center Right */}
            <div 
              className="relative transform rotate-[20deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-20"
              style={{ marginTop: '20px' }}
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={client15} 
                  alt="Grande grupo em Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Photo 5 - Top Right */}
            <div 
              className="relative transform -rotate-[16deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-20"
              style={{ marginTop: '-15px' }}
            >
              <div className="bg-white p-3 md:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={client30} 
                  alt="Grupo feliz em Maragogi" 
                  className="w-full aspect-[3/4] object-cover"
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
            <video 
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src={`${heroVideo}#t=5`} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
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
