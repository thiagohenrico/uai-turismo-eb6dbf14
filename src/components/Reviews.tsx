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

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Silva",
      date: "Há 2 semanas",
      text: "Experiência incrível! A Praia dos Carneiros é maravilhosa e o atendimento da Uai Turismo foi excepcional. Fotos lindas de cortesia e guia muito atencioso!",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      date: "Há 1 mês",
      text: "Passeio perfeito! Tudo muito organizado, desde a busca no hotel até o retorno. São Miguel dos Milagres é um paraíso e vale muito a pena conhecer.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Paula",
      date: "Há 3 semanas",
      text: "Adorei o city tour em Recife e Olinda. O guia era muito conhecedor da história local e nos levou aos melhores lugares. Recomendo demais!",
      rating: 5,
      avatar: "AP"
    },
    {
      name: "Carlos Mendes",
      date: "Há 1 semana",
      text: "Melhor agência de turismo! Fizemos o passeio de Maragogi e ficamos impressionados com a organização e qualidade. Super recomendo!",
      rating: 5,
      avatar: "CM"
    },
    {
      name: "Juliana Costa",
      date: "Há 2 meses",
      text: "Equipe super atenciosa e profissional. O passeio de buggy foi emocionante e as fotos ficaram incríveis. Voltaremos com certeza!",
      rating: 5,
      avatar: "JC"
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl md:text-6xl font-bold">5.0</span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Baseado em 200+ avaliações</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Avaliações reais de clientes do Google
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://share.google/PKrKycon1iSH3dd1S", "_blank")}
          >
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
                        <p className="font-semibold">{review.name}</p>
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
