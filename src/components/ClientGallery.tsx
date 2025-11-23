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
import galeriaSaoMiguel3 from "@/assets/galeria-sao-miguel-3.jpg";
import galeriaBuggyCabo3 from "@/assets/galeria-buggy-cabo-3.jpg";
import galeriaMaragogiPontaMangue11 from "@/assets/galeria-maragogi-ponta-11.jpg";
import galeriaMaragogiPontaMangue12 from "@/assets/galeria-maragogi-ponta-12.jpg";
import galeriaMaragogiPontaMangue13 from "@/assets/galeria-maragogi-ponta-13.jpg";
import galeriaMaragogiBarraGrande3 from "@/assets/galeria-maragogi-barra-3.jpg";
import galeriaMaragogiBarraGrande4 from "@/assets/galeria-maragogi-barra-4.jpg";
import galeriaMaragogiBarraGrande5 from "@/assets/galeria-maragogi-barra-5.jpg";
import galeriaMaragogiBarraGrande6 from "@/assets/galeria-maragogi-barra-6.jpg";
import galeriaIlhaSantoAleixo4 from "@/assets/galeria-ilha-santo-aleixo-4.jpg";
import galeriaEcoparkMaragogi2 from "@/assets/galeria-ecopark-maragogi-2.jpg";
import galeriaCitytour5 from "@/assets/galeria-citytour-5.jpg";
import galeriaCitytour6 from "@/assets/galeria-citytour-6.jpg";
import galeriaBuggyCabo4 from "@/assets/galeria-buggy-cabo-4.jpg";
import galeriaMaragogiBarraGrande7 from "@/assets/galeria-maragogi-barra-7.jpg";
import galeriaMaragogiBarraGrande8 from "@/assets/galeria-maragogi-barra-8.jpg";
import galeriaMaragogiBarraGrande9 from "@/assets/galeria-maragogi-barra-9.jpg";
import galeriaIlhaSantoAleixo5 from "@/assets/galeria-ilha-santo-aleixo-5.jpg";
import galeriaEcoparkMaragogi3 from "@/assets/galeria-ecopark-maragogi-3.jpg";
import galeriaSaoMiguel4 from "@/assets/galeria-sao-miguel-4.jpg";
import galeriaSaoMiguel5 from "@/assets/galeria-sao-miguel-5.jpg";
import galeriaMaragogiBarraGrande10 from "@/assets/galeria-maragogi-barra-10.jpg";
import galeriaMaragogiBarraGrande11 from "@/assets/galeria-maragogi-barra-11.jpg";
import galeriaCarneiros7 from "@/assets/galeria-carneiros-7.jpg";

const ClientGallery = () => {
  const clientPhotos = [
    {
      src: galeriaBuggyCabo1,
      alt: "Clientes aproveitando o passeio de buggy",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaMaragogiPontaMangue1,
      alt: "Família nas piscinas naturais de Maragogi",
      location: "Maragogi - Ponta de Mangue"
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
      src: galeriaSaoMiguel1,
      alt: "Clientes curtindo São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaIlhaSantoAleixo1,
      alt: "Casal com bebê na Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaMaragogiBarraGrande1,
      alt: "Clientes nas águas cristalinas de Maragogi",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaPortoGalinhas2,
      alt: "Casal no buggy amarelo em meio aos coqueiros",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaCitytour1,
      alt: "Clientes no city tour",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiPontaMangue2,
      alt: "Cliente com seu cachorro nas águas de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaCarneiros2,
      alt: "Família curtindo a Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaBuggyCabo2,
      alt: "Família no Mirante de Cabo de Santo Agostinho",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaEcoparkMaragogi1,
      alt: "Cliente com jiboia no Ecopark Maragogi",
      location: "Ecopark Maragogi"
    },
    {
      src: galeriaMaragogiBarraGrande2,
      alt: "Grupo com guias da Uai Turismo em Maragogi",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaPortoGalinhas3,
      alt: "Clientes com guia da Uai Turismo no buggy",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaSaoMiguel2,
      alt: "Cliente no catamaran em São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaMaragogiPontaMangue3,
      alt: "Clientes nas águas cristalinas de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaIlhaSantoAleixo2,
      alt: "Casal aproveitando a vista da Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaCarneiros3,
      alt: "Clientes na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCitytour2,
      alt: "Grupo no Marco Zero em Recife",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiPontaMangue4,
      alt: "Família aproveitando as piscinas naturais",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaPortoGalinhas4,
      alt: "Passeio de buggy em Porto de Galinhas",
      location: "Buggy Porto de Galinhas"
    },
    {
      src: galeriaBuggyCabo3,
      alt: "Aventura de buggy em Cabo de Santo Agostinho",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaMaragogiBarraGrande3,
      alt: "Cliente curtindo Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaCarneiros4,
      alt: "Família aproveitando a Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaEcoparkMaragogi2,
      alt: "Visitando o Ecopark Maragogi",
      location: "Ecopark Maragogi"
    },
    {
      src: galeriaMaragogiPontaMangue5,
      alt: "Grupo nas águas de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaSaoMiguel3,
      alt: "Clientes curtindo as belezas de São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaIlhaSantoAleixo3,
      alt: "Cliente relaxando na Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaCitytour3,
      alt: "Cliente nas ruas coloridas de Olinda",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiBarraGrande4,
      alt: "Família em Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaCarneiros5,
      alt: "Grupo curtindo o passeio na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaMaragogiPontaMangue6,
      alt: "Cliente nas águas cristalinas de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaPortoGalinhas5,
      alt: "Casal no ponto turístico de Porto de Galinhas",
      location: "Porto de Galinhas"
    },
    {
      src: galeriaBuggyCabo4,
      alt: "Mais aventura em Cabo de Santo Agostinho",
      location: "Buggy Cabo de Santo Agostinho"
    },
    {
      src: galeriaMaragogiBarraGrande5,
      alt: "Momentos especiais em Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaCarneiros6,
      alt: "Momento especial na Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaEcoparkMaragogi3,
      alt: "Aventura no Ecopark Maragogi",
      location: "Ecopark Maragogi"
    },
    {
      src: galeriaMaragogiPontaMangue7,
      alt: "Guia com clientes em Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaSaoMiguel4,
      alt: "Apreciando São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaCitytour4,
      alt: "Grupo com sombrinhas coloridas em Recife",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaIlhaSantoAleixo4,
      alt: "Explorando a Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaMaragogiBarraGrande6,
      alt: "Aventura em Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue8,
      alt: "Cliente na areia de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaCarneiros7,
      alt: "Família curtindo a Praia dos Carneiros",
      location: "Praia dos Carneiros"
    },
    {
      src: galeriaCitytour5,
      alt: "Descobrindo Recife e Olinda",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiBarraGrande7,
      alt: "Explorando Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue9,
      alt: "Criança nas piscinas naturais",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaSaoMiguel5,
      alt: "Cliente curtindo São Miguel dos Milagres",
      location: "São Miguel dos Milagres"
    },
    {
      src: galeriaIlhaSantoAleixo5,
      alt: "Descobrindo a Ilha de Santo Aleixo",
      location: "Ilha de Santo Aleixo"
    },
    {
      src: galeriaMaragogiBarraGrande8,
      alt: "Diversão em Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaCitytour6,
      alt: "Passeio cultural por Recife e Olinda",
      location: "City Tour Recife e Olinda"
    },
    {
      src: galeriaMaragogiPontaMangue10,
      alt: "Família com bebê nas piscinas naturais",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaMaragogiBarraGrande9,
      alt: "Passeio inesquecível em Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue11,
      alt: "Família nas piscinas naturais de Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaMaragogiBarraGrande10,
      alt: "Relaxando em Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue12,
      alt: "Clientes relaxando em Maragogi",
      location: "Maragogi - Ponta de Mangue"
    },
    {
      src: galeriaMaragogiBarraGrande11,
      alt: "Casal nas águas de Maragogi e Barra Grande",
      location: "Maragogi - Barra Grande"
    },
    {
      src: galeriaMaragogiPontaMangue13,
      alt: "Grupo aproveitando as águas cristalinas",
      location: "Maragogi - Ponta de Mangue"
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
                      <div className="absolute bottom-2 left-2">
                        <div className="bg-black/75 backdrop-blur-sm rounded px-2 py-1">
                          <p className="text-yellow-400 font-semibold text-xs md:text-sm">
                            {photo.location}
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
