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
import client35 from "@/assets/client-35.jpg";
import client36 from "@/assets/client-36.jpg";
import client37 from "@/assets/client-37.jpg";
import client38 from "@/assets/client-38.jpg";
import client39 from "@/assets/client-39.jpg";
import client40 from "@/assets/client-40.jpg";
import client41 from "@/assets/client-41.jpg";
import client42 from "@/assets/client-42.jpg";
import client43 from "@/assets/client-43.jpg";
import client44 from "@/assets/client-44.jpg";
import client45 from "@/assets/client-45.jpg";
import client46 from "@/assets/client-46.jpg";
import client47 from "@/assets/client-47.jpg";
import client48 from "@/assets/client-48.jpg";
import client49 from "@/assets/client-49.jpg";
import client50 from "@/assets/client-50.jpg";
import client51 from "@/assets/client-51.jpg";
import client52 from "@/assets/client-52.jpg";
import client53 from "@/assets/client-53.jpg";
import client54 from "@/assets/client-54.jpg";
import client55 from "@/assets/client-55.jpg";
import client56 from "@/assets/client-56.jpg";
import client57 from "@/assets/client-57.jpg";
import client58 from "@/assets/client-58.jpg";
import client59 from "@/assets/client-59.jpg";
import client60 from "@/assets/client-60.jpg";
import client61 from "@/assets/client-61.jpg";
import client62 from "@/assets/client-62.jpg";
import client63 from "@/assets/client-63.jpg";
import client64 from "@/assets/client-64.jpg";
import client65 from "@/assets/client-65.jpg";
import client66 from "@/assets/client-66.jpg";

const ClientGallery = () => {
  const clientPhotos = [];

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
            Momentos inesquecíveis capturados pelos nossos clientes.
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
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          console.error(`Erro ao carregar imagem: ${photo.alt} - ${photo.location}`);
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';
                          target.style.opacity = '0.5';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                        <p className="text-yellow-400 font-bold text-sm md:text-base drop-shadow-lg">
                          {photo.location}
                        </p>
                        <p className="text-white/90 text-xs md:text-sm drop-shadow-lg mt-1">
                          {photo.alt}
                        </p>
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
      </div>
    </section>
  );
};

export default ClientGallery;
