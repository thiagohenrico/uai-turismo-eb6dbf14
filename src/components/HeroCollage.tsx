import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
import client10 from "@/assets/client-10.jpg";
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
  client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
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

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-deep-navy via-[#1a1a1a] to-background overflow-hidden pt-32">
        {/* Photo collage - Polaroid style ABOVE title */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12">
          <div className="relative h-[500px] md:h-[550px]">
            {/* Large central photo - tilted right */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-[8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-20"
              style={{ width: 'min(280px, 42%)' }}
            >
              <div className="bg-white p-3 md:p-5 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[0] || client2} 
                  alt="Cliente curtindo nas piscinas naturais" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo - tilted left, overlapped on top */}
            <div 
              className="absolute left-[8%] md:left-[15%] top-[8%] md:top-[10%] transform -rotate-[12deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-30"
              style={{ width: 'min(200px, 32%)' }}
            >
              <div className="bg-white p-2 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[1] || client4} 
                  alt="Amigos nas águas cristalinas de Maragogi" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Medium photo 2 - bottom right */}
            <div 
              className="absolute right-[5%] md:right-[10%] bottom-[6%] md:bottom-[8%] transform rotate-[15deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-25"
              style={{ width: 'min(190px, 30%)' }}
            >
              <div className="bg-white p-2 md:p-4 shadow-[0_15px_50px_rgba(0,0,0,0.6)] rounded-sm">
                <img 
                  src={currentPhotos[2] || client8} 
                  alt="Grupo comemorando em Maragogi" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Small photo - top right corner */}
            <div 
              className="absolute right-[8%] md:right-[18%] top-[5%] md:top-[8%] transform rotate-[20deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-15"
              style={{ width: 'min(150px, 24%)' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={currentPhotos[3] || client15} 
                  alt="Grande grupo em Maragogi" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra small photo - left bottom */}
            <div 
              className="absolute left-[5%] md:left-[8%] bottom-[15%] md:bottom-[20%] transform -rotate-[18deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-18"
              style={{ width: 'min(130px, 21%)' }}
            >
              <div className="bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={currentPhotos[4] || client30} 
                  alt="Grupo feliz em Maragogi" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Extra photo - bottom left corner */}
            <div 
              className="absolute left-[15%] md:left-[20%] bottom-[2%] md:bottom-[5%] transform rotate-[10deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-22"
              style={{ width: 'min(140px, 22%)' }}
            >
              <div className="bg-white p-2 md:p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={currentPhotos[5] || client1} 
                  alt="Clientes aproveitando o passeio" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>

            {/* New photo - right middle */}
            <div 
              className="absolute right-[3%] top-[35%] md:top-[40%] transform rotate-[-8deg] hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 z-17 hidden sm:block"
              style={{ width: 'min(130px, 20%)' }}
            >
              <div className="bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-sm">
                <img 
                  src={allClientPhotos[20] || client20} 
                  alt="Experiência incrível no litoral" 
                  className="w-full aspect-[3/4] object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Title BELOW photos */}
        <div className="relative z-10 pb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wider px-4 leading-tight drop-shadow-lg">
            Experiências inesquecíveis no litoral Sul de{" "}
            <span className="text-primary">Pernambuco</span> e Norte de{" "}
            <span className="text-primary">Alagoas!</span>
          </h1>
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
