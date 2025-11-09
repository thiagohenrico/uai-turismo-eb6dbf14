import { Star, Quote, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import googleLogo from "@/assets/google-logo.png";

const Reviews = () => {
  const reviews = [
    {
      name: "Lia Raquel Mascarenhas",
      date: "Há 1 mês",
      text: "Tivemos uma experiência incrível com a Uai Turismo, sob a direção do guia Marcos, que tornou nossos dias inesquecíveis. Eu e meu marido conhecemos a praia de Carneiros, fizemos o passeio por Recife e Olinda, exploramos as piscinas naturais...",
      rating: 5,
      avatar: "LR",
      reviewCount: 9,
      photoCount: 16
    },
    {
      name: "Janainni",
      date: "Há 1 mês",
      text: "Fomos para Porto de Galinhas e contratamos a Uai Turismo para todos os nossos passeios. Foi simplesmente incrível! Os guias foram super divertidos, nos fizeram rir o tempo todo e ainda compartilharam várias histórias sobre cada lugar...",
      rating: 5,
      avatar: "JA",
      reviewCount: 1,
      photoCount: 11
    },
    {
      name: "Taiara Ferreira",
      date: "Há 1 mês",
      text: "Foi uma das minhas melhores viagens e experiência sem dúvidas. A UAI turismo é extremamente atenciosa com o cliente e o Marcos é um dos guias excepcional que faz parte dessa empresa, ele pensa em cada detalhe do passeio sem contar nas fotos...",
      rating: 5,
      avatar: "TF",
      reviewCount: 1,
      photoCount: 11
    },
    {
      name: "Rafaela Susan",
      date: "Há 2 meses",
      text: "Simplesmente maravilhoso! O Marcos é um excelente Guia Turístico, muito simpático, tem o maior carinho e paciência com os turistas, além de tirar fotos IMPECÁVEIS!! Os passeios valem cada centavo, experiências únicas como mergulho nas...",
      rating: 5,
      avatar: "RS",
      reviewCount: 9,
      photoCount: 20,
      localGuide: true
    },
    {
      name: "Crissia Batista",
      date: "Há 1 mês",
      text: "Nas minhas férias de Julho/25 viajei para Porto de Galinhas e fechei passeio com a Uai Turismo para todos os dias… Foi simplesmente incrível ter um guia exclusivamente para minha família, além de nos levar nos melhores receptivos e ainda...",
      rating: 5,
      avatar: "CB",
      reviewCount: 3,
      photoCount: 6
    },
    {
      name: "Camilla Cristina",
      date: "Há 2 meses",
      text: "Chegamos até a Uai turismo através do Instagram. Marcos é excelente guia, entende e sabe o que faz! tirou todas nossas dúvidas, ajudou a definir os passeios. Fizemos passeio para Maragogi e Carneiros. Pontual...",
      rating: 5,
      avatar: "CC",
      reviewCount: 8,
      photoCount: 21
    },
    {
      name: "Arlene Rodrigues",
      date: "Há 2 meses",
      text: "Eu gostei de todos os passeios: ilha de santo aleixo (a paisagem é lindíssima); praia de carneiros foi ótimo (a igrejinha é linda); maragogi é incrível, vale muito a pena e a comida foi sensacional; rota dos milagres foi incrível, o melhor...",
      rating: 5,
      avatar: "AR",
      reviewCount: 3,
      photoCount: 6
    },
    {
      name: "Daniley Victor",
      date: "Há 2 meses",
      text: "Fiz um passeio incrível com a Uai Turismo para a Praia dos Carneiros e Ilha de Santo Aleixo. Tudo muito bem organizado, seguro e pontual. Nosso guia, Marcos, foi super atencioso e ainda registrou o passeio com fotos maravilhosas, qualidade...",
      rating: 5,
      avatar: "DV",
      reviewCount: 2,
      photoCount: 4
    },
    {
      name: "Marília Ribeiro",
      date: "Há 2 meses",
      text: "Nossas férias em Porto de Galinhas foram simplesmente inesquecíveis, e grande parte disso devemos à UAI Turismo e ao nosso guia Marcos, que foi excepcional do início ao fim.",
      rating: 5,
      avatar: "MR",
      reviewCount: 4,
      photoCount: 5
    },
    {
      name: "Debora Rodrigues",
      date: "Há 2 meses",
      text: "A Uai Turismo foi a indicação de uma amiga. Fui super, hiper, bem atendida pelo Marcos, com sua simpatia e amizade, fora o profissionalismo. Nossos passeios foram de uma beleza e leveza excepecional. Marcos ficou com a gente o tempo todo.",
      rating: 5,
      avatar: "DR",
      reviewCount: 92,
      photoCount: 22,
      localGuide: true
    },
    {
      name: "Amanda Karina",
      date: "Há 1 mês",
      text: "Melhor empresa de turismo de porto de galinhas!!! Pessoal super atenciosos e prestativos, sabem tudo sobre a história das cidades, nos explicam tudo direitinho, ficam do nosso lado o tempo todo, acredito q esse carinho é o q diferencia essa equipe das demais ❤️",
      rating: 5,
      avatar: "AK",
      reviewCount: 6,
      photoCount: 10
    },
    {
      name: "Mariana Cintra Sampaio",
      date: "Há 2 meses",
      text: "Eu e meu grupo com 7 amigos contratamos a Uai Turismo e só temos elogios! O roteiro foi IMPECÁVEL, cheio de lugares paradisíacos: passeio de bug pra conhecer as praias de Porto, Ilha de Santo Aleixo, Maragogi e Praia de Carneiros. O Marcos...",
      rating: 5,
      avatar: "MC",
      reviewCount: 2,
      photoCount: 6
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={googleLogo} alt="Google" className="h-8" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground mt-1">Baseado em 200+ avaliações</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Avaliações reais de clientes verificadas pelo Google
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://www.google.com/search?q=Uai+Turismo+-+Porto+de+Galinhas", "_blank")}
          >
            <img src={googleLogo} alt="Google" className="h-4" />
            <ExternalLink className="w-4 h-4" />
            Ver todas as avaliações no Google
          </Button>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
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
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{review.name}</p>
                          {review.localGuide && (
                            <span className="text-xs bg-muted px-2 py-0.5 rounded">Local Guide</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {review.reviewCount} avaliações · {review.photoCount} fotos
                        </p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 mb-2" />
                    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
