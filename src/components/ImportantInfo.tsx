import { Baby, UtensilsCrossed, Bus, DollarSign, Camera, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const ImportantInfo = () => {
  const infoItems = [
    {
      icon: Baby,
      title: "Crianças até 5 anos",
      badge: "Gratuito",
      description: "Não pagam! Aproveite nossos passeios em família sem custo adicional para os pequenos.",
    },
    {
      icon: UtensilsCrossed,
      title: "Day-Use e Alimentação",
      badge: "Não incluso",
      description: "Day-use (uso das instalações dos restaurantes/receptivos), alimentação e bebidas não inclusos nos passeios.",
    },
    {
      icon: Bus,
      title: "Transporte",
      badge: "Já incluso",
      description: "Buscamos e deixamos você no local da sua hospedagem. Comodidade total já incluída no preço!",
    },
    {
      icon: DollarSign,
      title: "Reserva Antecipada",
      badge: "30% antecipado",
      description: "Para garantir sua vaga, solicitamos 30% do valor do serviço antecipadamente na reserva.",
    },
    {
      icon: Camera,
      title: "Fotos de Cortesia",
      badge: "Cortesia",
      description: "Registramos todos os seus melhores momentos durante o passeio sem nenhum custo adicional.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Informações <span className="text-primary">Importantes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Tudo que você precisa saber, para aproveitar ao máximo sua experiência conosco.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {item.badge}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card border-border max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Info className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Dica Importante</h3>
              <p className="text-muted-foreground">
                Para uma experiência completa, recomendamos levar protetor solar, chapéu, roupas confortáveis e dinheiro para alimentação nos restaurantes locais.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ImportantInfo;
