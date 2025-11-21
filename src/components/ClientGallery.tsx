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
import galeriaPortoGalinhas2 from "@/assets/galeria-porto-galinhas-2.jpg";
import galeriaPortoGalinhas3 from "@/assets/galeria-porto-galinhas-3.jpg";
import galeriaCarneiros1 from "@/assets/galeria-carneiros-1.jpg";
import galeriaCarneiros2 from "@/assets/galeria-carneiros-2.jpg";
import galeriaMaragogiBarraGrande1 from "@/assets/galeria-maragogi-barra-1.jpg";
import galeriaMaragogiBarraGrande2 from "@/assets/galeria-maragogi-barra-2.jpg";
import galeriaMaragogiPontaMangue1 from "@/assets/galeria-maragogi-ponta-1.jpg";
import galeriaMaragogiPontaMangue2 from "@/assets/galeria-maragogi-ponta-2.jpg";
import galeriaMaragogiPontaMangue3 from "@/assets/galeria-maragogi-ponta-3.jpg";
import galeriaMaragogiPontaMangue4 from "@/assets/galeria-maragogi-ponta-4.jpg";
import galeriaMaragogiPontaMangue5 from "@/assets/galeria-maragogi-ponta-5.jpg";
import galeriaIlhaSantoAleixo1 from "@/assets/galeria-ilha-santo-aleixo-1.jpg";
import galeriaIlhaSantoAleixo2 from "@/assets/galeria-ilha-santo-aleixo-2.jpg";
import galeriaSaoMiguel1 from "@/assets/galeria-sao-miguel-1.jpg";
import galeriaPortoGalinhas4 from "@/assets/galeria-porto-galinhas-4.jpg";
import galeriaCarneiros3 from "@/assets/galeria-carneiros-3.jpg";
import galeriaCarneiros4 from "@/assets/galeria-carneiros-4.jpg";
import galeriaCarneiros5 from "@/assets/galeria-carneiros-5.jpg";
import galeriaCarneiros6 from "@/assets/galeria-carneiros-6.jpg";
import galeriaCitytour1 from "@/assets/galeria-citytour-1.jpg";
import galeriaCitytour2 from "@/assets/galeria-citytour-2.jpg";
import galeriaCitytour3 from "@/assets/galeria-citytour-3.jpg";
import galeriaEcoparkMaragogi1 from "@/assets/galeria-ecopark-maragogi-1.jpg";
import galeriaIlhaSantoAleixo3 from "@/assets/galeria-ilha-santo-aleixo-3.jpg";
import galeriaMaragogiPontaMangue6 from "@/assets/galeria-maragogi-ponta-6.jpg";
import galeriaMaragogiPontaMangue7 from "@/assets/galeria-maragogi-ponta-7.jpg";
import galeriaMaragogiPontaMangue8 from "@/assets/galeria-maragogi-ponta-8.jpg";
import galeriaMaragogiPontaMangue9 from "@/assets/galeria-maragogi-ponta-9.jpg";
import galeriaPortoGalinhas5 from "@/assets/galeria-porto-galinhas-5.jpg";
import galeriaBuggyCabo2 from "@/assets/galeria-buggy-cabo-2.jpg";
import galeriaCitytour4 from "@/assets/galeria-citytour-4.jpg";
import galeriaMaragogiPontaMangue10 from "@/assets/galeria-maragogi-ponta-10.jpg";
import galeriaSaoMiguel2 from "@/assets/galeria-sao-miguel-2.jpg";

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
      src: galeriaPortoGalinhas2,
      alt: "Casal no buggy amarelo em meio aos coqueiros",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaPortoGalinhas3,
      alt: "Clientes com guia da Uai Turismo no buggy",
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
    {
      src: galeriaMaragogiPontaMangue2,
      alt: "Cliente com seu cachorro nas águas de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaIlhaSantoAleixo1,
      alt: "Casal com bebê na Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaIlhaSantoAleixo2,
      alt: "Casal aproveitando a vista da Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaMaragogiPontaMangue3,
      alt: "Clientes nas águas cristalinas de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaMaragogiPontaMangue4,
      alt: "Família aproveitando as piscinas naturais",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaMaragogiPontaMangue5,
      alt: "Grupo nas águas de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaSaoMiguel1,
      alt: "Clientes curtindo São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaPortoGalinhas4,
      alt: "Passeio de buggy em Porto de Galinhas",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaCarneiros3,
      alt: "Clientes na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCarneiros4,
      alt: "Família aproveitando a Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCarneiros5,
      alt: "Grupo curtindo o passeio na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCarneiros6,
      alt: "Momento especial na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCitytour1,
      alt: "Clientes no city tour",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaCitytour2,
      alt: "Grupo no Marco Zero em Recife",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaCitytour3,
      alt: "Cliente nas ruas coloridas de Olinda",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaEcoparkMaragogi1,
      alt: "Cliente com jiboia no Ecopark Maragogi",
      location: "Ecopark Maragogi"
    },
    {
      src: galeriaIlhaSantoAleixo3,
      alt: "Cliente relaxando na Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaMaragogiPontaMangue6,
      alt: "Cliente nas águas cristalinas de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaMaragogiPontaMangue7,
      alt: "Guia com clientes em Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaMaragogiPontaMangue8,
      alt: "Cliente na areia de Maragogi",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaMaragogiPontaMangue9,
      alt: "Criança nas piscinas naturais",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaPortoGalinhas5,
      alt: "Casal no ponto turístico de Porto de Galinhas",
      location: "Porto de Galinhas"
    },
    {
      src: galeriaBuggyCabo2,
      alt: "Família no Mirante de Cabo de Santo Agostinho",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaCitytour4,
      alt: "Grupo com sombrinhas coloridas em Recife",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiPontaMangue10,
      alt: "Família com bebê nas piscinas naturais",
      location: "Maragogi e Ponta de Mangue"
    },
    {
      src: galeriaSaoMiguel2,
      alt: "Cliente no catamaran em São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
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
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-black/80 backdrop-blur-sm rounded px-3 py-2 inline-block">
                          <p className="text-yellow-400 font-bold text-sm md:text-base">
                            {photo.location}
                          </p>
                          <p className="text-white/90 text-xs md:text-sm mt-1">
                            {photo.alt}
                          </p>
                        </div>
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
