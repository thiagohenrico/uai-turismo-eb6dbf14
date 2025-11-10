import { Baby, Bus, Camera, Calendar, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      icon: Camera,
      title: "Fotos de Cortesia",
      description: "Cortesia",
      detail: "Fotos profissionais durante todo o passeio sem custo adicional"
    },
    {
      icon: Calendar,
      title: "Reserva Antecipada",
      description: "30% do valor total",
      detail: "Garanta sua vaga com apenas 30% de entrada, o restante paga no dia"
    },
    {
      icon: Bus,
      title: "Transporte Incluso",
      description: "Já incluso no pacote",
      detail: "Buscamos e deixamos você no local de hospedagem em veículo confortável"
    },
    {
      icon: Baby,
      title: "Crianças até 5 anos",
      description: "Cortesia",
      detail: "Crianças até 5 anos têm cortesia em todos os nossos passeios"
    },
    {
      icon: CreditCard,
      title: "Formas de Pagamento",
      description: "PIX, Cartão ou Dinheiro",
      detail: "Aceitamos diversas formas de pagamento para sua comodidade"
    }
  ];

  return (
    <section id="duvidas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Informações <span className="text-primary">Importantes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tudo o que você precisa saber antes de reservar seu passeio
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:shadow-lg transition-shadow">
              <faq.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{faq.title}</h3>
              <p className="text-primary font-semibold mb-2">{faq.description}</p>
              <p className="text-muted-foreground text-sm">{faq.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
