import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Silva",
      date: "Há 2 semanas",
      text: "Experiência incrível! A Praia dos Carneiros é maravilhosa e o atendimento da Uai Turismo foi excepcional. Fotos lindas de cortesia e guia muito atencioso!",
      rating: 5
    },
    {
      name: "João Santos",
      date: "Há 1 mês",
      text: "Passeio perfeito! Tudo muito organizado, desde a busca no hotel até o retorno. São Miguel dos Milagres é um paraíso e vale muito a pena conhecer.",
      rating: 5
    },
    {
      name: "Ana Paula",
      date: "Há 3 semanas",
      text: "Adorei o city tour em Recife e Olinda. O guia era muito conhecedor da história local e nos levou aos melhores lugares. Recomendo demais!",
      rating: 5
    }
  ];

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-5xl font-bold">5.0</span>
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
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{review.text}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
