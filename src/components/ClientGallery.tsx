import { Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import galeriaBuggyCabo1 from "@/assets/galeria-buggy-cabo-1.jpg";
import galeriaPortoGalinhas1 from "@/assets/galeria-porto-galinhas-1.jpg";
import galeriaCarneiros1 from "@/assets/galeria-carneiros-1.jpg";
import galeriaCarneiros2 from "@/assets/galeria-carneiros-2.jpg";
import galeriaMaragogiBarraGrande1 from "@/assets/galeria-maragogi-barra-1.jpg";
import galeriaMaragogiBarraGrande2 from "@/assets/galeria-maragogi-barra-2.jpg";
import galeriaMaragogiPontaMangue1 from "@/assets/galeria-maragogi-ponta-1.jpg";

const ClientGallery = () => {
  const clientPhotos = [
    {
      src: galeriaBuggyCabo1,
      alt: "Clientes aproveitando o passeio de buggy",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaPortoGalinhas1,
      alt: "Grupo de clientes com os buggys na praia",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaCarneiros1,
      alt: "Casal aproveitando o passeio de lancha",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCarneiros2,
      alt: "Família curtindo a Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaMaragogiBarraGrande1,
      alt: "Clientes nas águas cristalinas de Maragogi",
      location: "Maragogi e Barra Grande"
    },
    {
      src: galeriaMaragogiBarraGrande2,
      alt: "Grupo com guias da Uai Turismo em Maragogi",
      location: "Maragogi e Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue1,
      alt: "Família nas piscinas naturais de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
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
