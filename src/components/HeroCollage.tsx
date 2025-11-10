import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookingDialog from "./BookingDialog";
import uaiLogo from "@/assets/uai-logo.png";

// Import tour images
import buggyTour from "@/assets/buggy-tour.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import maragogiBarraGrande from "@/assets/maragogi-barra-grande.jpg";
import maragogiPontaMangue from "@/assets/maragogi-ponta-mangue.jpg";

const HeroCollage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToTours = () => {
    const element = document.getElementById("passeios");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-[#0A2540] via-[#0D3B5C] to-[#0A2540] overflow-hidden">
        {/* Social media icons */}
        <div className="absolute top-6 left-4 flex gap-4 z-20">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </a>
          <a href="https://wa.me/5581997484915" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:scale-110 transition-transform">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>

        {/* Logo and tagline */}
        <div className="relative z-10 pt-20 pb-8 text-center">
          <img src={uaiLogo} alt="Milagres Transparente" className="w-48 h-48 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            SEU TURISMO NO LUGAR CERTO
          </h1>
        </div>

        {/* Photo collage */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
            {/* Top left - Buggy tour */}
            <div 
              className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '20px' }}
            >
              <div className="bg-white p-3 shadow-2xl rounded-lg">
                <img 
                  src={buggyTour} 
                  alt="Buggy Tour" 
                  className="w-full h-48 md:h-64 object-cover rounded"
                />
              </div>
            </div>

            {/* Top center - Beach scene */}
            <div 
              className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '-10px' }}
            >
              <div className="bg-white p-3 shadow-2xl rounded-lg">
                <img 
                  src={praiaCarneiros} 
                  alt="Praia dos Carneiros" 
                  className="w-full h-56 md:h-80 object-cover rounded"
                />
              </div>
            </div>

            {/* Top right - Maragogi */}
            <div 
              className="relative transform rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20"
              style={{ marginTop: '30px' }}
            >
              <div className="bg-white p-3 shadow-2xl rounded-lg">
                <img 
                  src={maragogiBarraGrande} 
                  alt="Maragogi" 
                  className="w-full h-52 md:h-72 object-cover rounded"
                />
              </div>
            </div>

            {/* Bottom - Hammock */}
            <div 
              className="relative col-span-2 md:col-start-2 transform -rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-110 hover:z-20 mx-auto"
              style={{ marginTop: '-20px', maxWidth: '400px' }}
            >
              <div className="bg-white p-3 shadow-2xl rounded-lg">
                <img 
                  src={maragogiPontaMangue} 
                  alt="Relaxamento" 
                  className="w-full h-48 md:h-64 object-cover rounded"
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
          <p className="text-white mt-6 text-sm">milagrestransparente.com</p>
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
