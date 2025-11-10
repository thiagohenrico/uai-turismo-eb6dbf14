import TourCard from "./TourCard";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import maragogi from "@/assets/maragogi.jpg";
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

const Tours = () => {
  const tours = [
    {
      title: "Praia dos Carneiros",
      image: praiaCarneiros,
      description: "Um paraíso de águas cristalinas, coqueiral infinito e uma charmosa igrejinha à beira-mar, perfeito para relaxar e viver momentos inesquecíveis.",
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
      title: "São Miguel dos Milagres - Alagoas",
      image: saoMiguel,
      description: "Um refúgio de tranquilidade, com mar calmo em tons de azul, areia branca e extensos coqueirais que criam um cenário de pura paz.",
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
      image: maragogi,
      description: "O Caribe Brasileiro, onde o mar ganha tons de azul e verde, com piscinas naturais cheias de peixes coloridos para explorar e se apaixonar.",
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
      image: maragogi,
      description: "Mar azul-turquesa, cenários paradisíacos, águas mornas e piscinas naturais que convidam a momentos únicos em contato com a natureza.",
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
      description: "Te levamos até Cabo de Santo Agostinho e lá você conhece pontos históricos, praias e mirantes em um roteiro especial feito de Buggy.",
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
      description: "Ilha ecológica preservada com trilhas, praias paradisíacas e vida selvagem única.",
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
      description: "Mergulhe na história e cultura pernambucana visitando os principais pontos turísticos.",
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
    <section id="passeios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 px-2">
          Nossos Principais <span className="text-primary">Destinos</span>
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Explore os lugares mais incríveis do litoral nordestino com conforto e segurança
        </p>

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
                <TourCard {...tour} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
          {/* Mobile navigation arrows */}
          <CarouselPrevious className="md:hidden left-2" />
          <CarouselNext className="md:hidden right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Tours;
