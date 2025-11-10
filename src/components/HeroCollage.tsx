import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

// Import client gallery images
import client2 from "@/assets/client-2.jpg";
import client4 from "@/assets/client-4.jpg";
import client8 from "@/assets/client-8.jpg";
import client15 from "@/assets/client-15.jpg";
import client30 from "@/assets/client-30.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const HeroCollage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-[#0A2540] via-[#0D3B5C] to-[#0A2540] overflow-hidden pt-24">
        {/* Title */}
        <div className="relative z-10 pb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider px-4">
            Uai Turismo - O Ponto de partida para momentos Inesquecíveis
          </h1>
        </div>

        {/* Photo collage */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-center justify-center">
            {/* Photo 1 */}
            <div 
              className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '20px' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-2xl rounded-lg">
                <img 
                  src={client2} 
                  alt="Cliente curtindo nas piscinas naturais" 
                  className="w-full h-40 md:h-56 object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 2 */}
            <div 
              className="relative transform rotate-4 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '-10px' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-2xl rounded-lg">
                <img 
                  src={client4} 
                  alt="Amigos nas águas cristalinas de Maragogi" 
                  className="w-full h-44 md:h-64 object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 3 */}
            <div 
              className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '30px' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-2xl rounded-lg">
                <img 
                  src={client8} 
                  alt="Grupo comemorando em Maragogi" 
                  className="w-full h-40 md:h-60 object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 4 */}
            <div 
              className="relative transform rotate-5 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '10px' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-2xl rounded-lg">
                <img 
                  src={client15} 
                  alt="Grande grupo em Maragogi" 
                  className="w-full h-42 md:h-58 object-cover rounded"
                />
              </div>
            </div>

            {/* Photo 5 */}
            <div 
              className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '-20px' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-2xl rounded-lg">
                <img 
                  src={client30} 
                  alt="Grupo feliz em Maragogi" 
                  className="w-full h-40 md:h-56 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-10 text-center pb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 font-bold"
            >
              RESERVE JÁ
            </Button>
            <Button 
              onClick={scrollToTours}
              variant="outline"
              className="bg-white/10 border-2 border-white text-white text-lg px-10 py-6 rounded-full hover:bg-white hover:text-[#0A2540] transition-all transform hover:scale-105 font-bold backdrop-blur-sm"
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
              poster={client2}
            >
              <source src={heroVideo} type="video/mp4" />
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

      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default HeroCollage;
