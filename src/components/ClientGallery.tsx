import { Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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

const ClientGallery = () => {
  const clientPhotos = [
    { src: client1, alt: "Cliente feliz em passeio com cobra" },
    { src: client2, alt: "Cliente curtindo nas piscinas naturais" },
    { src: client3, alt: "Casal apaixonado em Porto de Galinhas" },
    { src: client4, alt: "Amigos nas águas cristalinas de Maragogi" },
    { src: client5, alt: "Casal com arara em passeio" },
    { src: client6, alt: "Cliente relaxando no barco" },
    { src: client7, alt: "Cliente feliz na praia" },
    { src: client8, alt: "Grupo comemorando em Maragogi" },
    { src: client9, alt: "Família curtindo o dia de praia" },
    { src: client10, alt: "Casal em aventura radical" },
    { src: client11, alt: "Cliente com cachorrinho na praia" },
    { src: client12, alt: "Grupo animado no passeio de buggy" },
    { src: client13, alt: "Família com bebê nas piscinas naturais" },
    { src: client14, alt: "Cliente aproveitando as águas cristalinas" },
    { src: client15, alt: "Grande grupo em Maragogi" },
    { src: client16, alt: "Grupo em frente à Capela de São Benedito" },
    { src: client17, alt: "Casal no passeio de barco" },
    { src: client18, alt: "Cliente relaxando na boia de melancia" },
    { src: client19, alt: "Família com criança em Carneiros" },
    { src: client20, alt: "Grupo no buggy amarelo" },
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Clientes que <span className="text-primary">Confiaram</span> na Uai Turismo
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Momentos inesquecíveis capturados pelos nossos clientes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {clientPhotos.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientGallery;
