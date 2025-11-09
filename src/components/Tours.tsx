import TourCard from "./TourCard";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";
import maragogi from "@/assets/maragogi.jpg";
import buggyTour from "@/assets/buggy-tour.jpg";
import recifeOlinda from "@/assets/recife-olinda.jpg";

const Tours = () => {
  const tours = [
    {
      title: "Praia dos Carneiros",
      image: praiaCarneiros,
      description: "Uma das praias mais belas do Brasil, com águas calmas e cristalinas, perfeita para relaxar e contemplar a natureza.",
      duration: "Passeio das 07:30 às 17:30",
      includes: [
        "Busca e retorno no local de hospedagem",
        "Guia turístico especializado",
        "Fotos de cortesia durante o passeio",
        "Tempo livre para banho de mar"
      ]
    },
    {
      title: "São Miguel dos Milagres",
      image: saoMiguel,
      description: "Piscinas naturais incríveis com águas transparentes, ideal para mergulho e observação da vida marinha.",
      duration: "Passeio das 07:30 às 17:30",
      includes: [
        "Transporte completo incluso",
        "Guia turístico credenciado",
        "Fotos profissionais de cortesia",
        "Paradas em pontos estratégicos"
      ]
    },
    {
      title: "Maragogi - Barra Grande",
      image: maragogi,
      description: "As famosas galés de Maragogi, piscinas naturais que formam um verdadeiro aquário natural.",
      duration: "Passeio das 07:30 às 17:30",
      includes: [
        "Busca e deixamos no local",
        "Guia especializado",
        "Registro fotográfico incluído",
        "Passeio de jangada opcional"
      ]
    },
    {
      title: "Cabo de Santo Agostinho - Buggy",
      image: buggyTour,
      description: "Aventura emocionante pelas dunas e praias do Cabo, uma experiência radical e inesquecível.",
      duration: "Passeio das 07:30 às 17:30",
      includes: [
        "Transporte até o ponto de partida",
        "Piloto experiente",
        "Fotos de cortesia",
        "Equipamentos de segurança"
      ]
    },
    {
      title: "City Tour Recife e Olinda",
      image: recifeOlinda,
      description: "Conheça o patrimônio histórico e cultural de duas das cidades mais importantes do Nordeste.",
      duration: "Passeio das 07:30 às 17:30",
      includes: [
        "Transporte completo",
        "Guia histórico especializado",
        "Fotos profissionais incluídas",
        "Visita aos principais pontos turísticos"
      ]
    }
  ];

  return (
    <section id="passeios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nossos Principais <span className="text-primary">Destinos</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Explore os lugares mais incríveis do litoral nordestino com conforto e segurança
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
