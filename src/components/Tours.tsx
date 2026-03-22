import TourCard from "./TourCard";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import maragogiBarraGrande from "@/assets/maragogi-barra-grande.jpg";
import maragogiPontaMangue from "@/assets/maragogi-ponta-mangue.jpg";
import buggyTour from "@/assets/buggy-tour.jpg";
import recifeOlinda from "@/assets/recife-olinda.jpg";
import ilhaSantoAleixo from "@/assets/ilha-santo-aleixo.jpg";
import caboSantoAgostinho from "@/assets/cabo-santo-agostinho.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import BookingDialog from "./BookingDialog";

const Tours = () => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedTour, setSelectedTour] = React.useState<string>("");

  const handleReserve = (tourTitle: string) => {
    setSelectedTour(tourTitle);
    setIsBookingOpen(true);
  };
  const tours = [
    {
      title: "Praia dos Carneiros",
      image: praiaCarneiros,
      detailsLink: "/passeios/praia-carneiros",
      description: "Um paraíso de águas cristalinas e coqueiral infinito que transforma qualquer visita em uma experiência encantadora. A charmosa igrejinha à beira-mar completa o cenário, criando um clima único e acolhedor. Aqui, cada momento é um convite para relaxar, sentir a brisa leve e viver instantes que ficam para sempre na memória.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO LANCHA - 2 HORAS:",
      itineraryItems: [
        "Capela de São Benedito",
        "Banho de Argila",
        "Banco de Areia",
        "Encontro dos Rios/Manguezal"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia",
        "🚤 Passeio de lancha"
      ],
      note: "*Day use em restaurante à beira-mar não incluso."
    },
    {
      title: "São Miguel dos Milagres",
      image: saoMiguel,
      detailsLink: "/passeios/sao-miguel",
      description: "É um refúgio de tranquilidade, com mar calmo em tons de azul, areia branca e coqueirais que emolduram um cenário de pura paz. Para completar a experiência, o passeio de jangada leva você até piscinas naturais incríveis, onde a beleza do lugar se revela ainda mais de perto.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO JANGADA - 2 HORAS:",
      itineraryItems: [
        "Piscinas Naturais",
        "Fotos boia de melancia e rede",
        "Parada do pulo"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia",
        "🚤 Passeio de lancha"
      ],
      note: "*Day use em restaurante à beira-mar não incluso."
    },
    {
      title: "Maragogi - Barra Grande",
      image: maragogiBarraGrande,
      detailsLink: "/passeios/maragogi-barra-grande",
      description: "O Caribe Brasileiro, onde o mar ganha tons de azul e verde, com piscinas naturais repletas de peixes coloridos para explorar e se apaixonar. Um cenário que hipnotiza, onde a água morninha convida para mergulhos sem pressa e cada parada revela um novo encantamento.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO LANCHA - 2 HORAS:",
      itineraryItems: [
        "Caminho de Moisés",
        "Piscinas Naturais",
        "Praia de Antunes"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia",
        "🚤 Passeio de lancha"
      ],
      note: "*Day use em restaurante à beira-mar não incluso."
    },
    {
      title: "Maragogi - Ponta de Mangue",
      image: maragogiPontaMangue,
      detailsLink: "/passeios/maragogi-ponta-mangue",
      description: "Onde o mar azul-turquesa e os cenários paradisíacos criam uma atmosfera de calma e beleza natural. As águas mornas e as piscinas naturais convidam a momentos únicos de conexão com a natureza. E para tornar tudo ainda mais especial, o passeio de lancha revela pontos ainda mais tranquilos e preservados, garantindo uma experiência leve, exclusiva e inesquecível.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO LANCHA - 2 HORAS:",
      itineraryItems: [
        "Crôa da Bruna",
        "Piscinas Naturais",
        "Praia do Xaréu"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia",
        "🚤 Passeio de lancha"
      ],
      note: "*Day use em restaurante à beira-mar não incluso."
    },
    {
      title: "Cabo de Santo Agostinho - Passeios de Buggy",
      image: caboSantoAgostinho,
      detailsLink: "/passeios/cabo-santo-agostinho",
      description: "Uma experiência completa, unindo história, natureza, sabores e aventura. Lá, você percorre pontos históricos, praias belíssimas e mirantes incríveis em um roteiro especial feito de buggy, que torna cada parada ainda mais divertida e cheia de emoção. É a combinação perfeita para quem quer explorar a região de um jeito leve, diferente e inesquecível.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO - 3 HORAS",
      itineraryItems: [
        "Praias de Calhetas, Enseada dos Corais e Gaibu",
        "Mirantes do Faroleiro e do Paraíso",
        "Degustação de doces e licores"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia"
      ],
      note: "*Day use em restaurante à beira-mar não incluso."
    },
    {
      title: "Ilha de Santo Aleixo",
      image: ilhaSantoAleixo,
      detailsLink: "/passeios/ilha-santo-aleixo",
      description: "Um paraíso de águas cristalinas, areia clara e formações rochosas únicas espera por você. O passeio oferece uma experiência tranquila e encantadora, com tempo para relaxar, explorar piscinas naturais, caminhar por trilhas leves e curtir um cenário preservado que parece ter parado no tempo.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO:",
      itineraryItems: [
        "Trilha Ecológica",
        "Praia da Ferradura",
        "Piscinas Naturais",
        "Fotos com esquilos"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia",
        "🚤 Travessia em lancha compartilhada"
      ]
    },
    {
      title: "City Tour Recife e Olinda",
      image: recifeOlinda,
      detailsLink: "/passeios/city-tour",
      description: "Uma imersão na cultura, história e beleza do Nordeste em um passeio que une tradição e modernidade. Entre pontes, igrejas seculares, casarios coloridos e mirantes de tirar o fôlego, você conhece de perto a essência de duas cidades vibrantes, cheias de arte, sabores e memórias.",
      duration: "Passeio das 07:30 às 17:30",
      itinerary: "ROTEIRO:",
      itineraryItems: [
        "Orla da Praia de Boa Viagem",
        "Marco Zero, Rua do Bom Jesus",
        "Embaixada dos Bonecos Gigantes",
        "Alto da Sé",
        "Igreja de São Salvador do Mundo",
        "Feira de Artesanato",
        "Mosteiro de São Bento"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "🎭 Serviço de guia",
        "📸 Fotos cortesia"
      ],
      note: "*Valores de entrada em museus, feiras e igrejas não inclusos."
    },
    {
      title: "Porto de Galinhas - Passeios de Buggy",
      image: buggyTour,
      detailsLink: "/passeios/porto-galinhas",
      description: "O Ponta a Ponta de Buggy em Porto de Galinhas te apresenta as praias do Balneário que possuem características únicas, te fazendo mergulhar em paisagens paradisíacas!",
      duration: "PASSEIO PRIVATIVO (manhã ou tarde)",
      itinerary: "ROTEIRO - 4 HORAS:",
      itineraryItems: [
        "Praia de Muro Alto",
        "Pontal do Cupê (piscinas naturais)",
        "Coqueiral de Maracaípe",
        "Pontal de Maracaípe"
      ],
      includes: [
        "🚐🏖️ Buscamos e deixamos no local de hospedagem",
        "📸 Fotos cortesia"
      ]
    }
  ];

  return (
    <section id="passeios" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 px-2">
          Nossos Principais <span className="text-primary">Destinos</span>
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Explore os lugares mais incríveis do litoral nordestino com conforto e segurança.
        </p>

        {/* Mobile: Vertical scroll */}
        <div className="md:hidden flex flex-col gap-6">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} onReserveClick={() => handleReserve(tour.title)} />
          ))}
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent>
              {tours.map((tour, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TourCard {...tour} onReserveClick={() => handleReserve(tour.title)} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </div>
      
      <BookingDialog 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedTour={selectedTour}
      />
    </section>
  );
};

export default Tours;
