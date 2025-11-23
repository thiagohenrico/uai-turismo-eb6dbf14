import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FrequentQuestionsProps {
  onReserveClick?: () => void;
}

const FrequentQuestions = ({ onReserveClick }: FrequentQuestionsProps) => {
  const faqs = [
    {
      question: "Como funciona o processo de reserva?",
      answer: "É muito simples! Você pode solicitar um orçamento através do formulário do site ou pelo WhatsApp (81) 99748-4915. Para garantir sua vaga, pedimos 30% do valor total como entrada, e o restante pode ser pago no dia do passeio. Aceitamos PIX, cartão de crédito e dinheiro."
    },
    {
      question: "O transporte está incluído no valor do passeio?",
      answer: "Sim! Todos os nossos passeios incluem transporte de ida e volta. Buscamos você no seu hotel ou pousada e deixamos no final do dia, em veículo confortável e climatizado."
    },
    {
      question: "Crianças pagam?",
      answer: "Crianças até 5 anos têm cortesia! Para crianças acima dessa idade, consulte valores específicos através do nosso WhatsApp (81) 99748-4915."
    },
    {
      question: "As fotos estão incluídas?",
      answer: "Sim! Oferecemos fotos profissionais de cortesia durante todo o passeio, sem custo adicional. Você receberá suas fotos após o passeio para guardar de recordação."
    },
    {
      question: "Qual a melhor época para visitar?",
      answer: "O litoral de Pernambuco e Alagoas pode ser visitado o ano todo! A alta temporada vai de dezembro a março, com águas mais quentes. De abril a novembro as praias ficam mais tranquilas, mas igualmente lindas."
    },
    {
      question: "Posso cancelar ou reagendar minha reserva?",
      answer: "Sim, oferecemos flexibilidade para reagendamento. Entre em contato conosco pelo WhatsApp (81) 99748-4915 com antecedência para ajustarmos sua reserva da melhor forma possível."
    },
    {
      question: "Quantas pessoas cabem por veículo?",
      answer: "Trabalhamos com veículos de diferentes capacidades para atender grupos de todos os tamanhos, desde casais até grupos grandes. Informe o número de pessoas ao solicitar o orçamento para providenciarmos o veículo adequado."
    },
    {
      question: "O que está incluído nos passeios?",
      answer: "Todos os passeios incluem: transporte de ida e volta, fotos profissionais de cortesia, e acompanhamento de guia experiente. Alimentação e ingressos para passeios opcionais não estão inclusos, mas podemos orientar sobre os melhores lugares."
    },
    {
      question: "Preciso levar algum documento?",
      answer: "Recomendamos levar documento de identidade (RG ou CNH). Para passeios que incluem travessias de barco ou buggy, é obrigatório apresentar documento com foto."
    },
    {
      question: "Como são os horários dos passeios?",
      answer: "Geralmente saímos pela manhã (entre 7h e 8h) e retornamos no final da tarde (entre 16h e 18h). Os horários podem variar de acordo com o passeio escolhido e sua localização. Confirmaremos o horário exato ao fechar sua reserva."
    },
    {
      question: "Posso personalizar meu passeio?",
      answer: "Sim! Podemos criar roteiros personalizados de acordo com suas preferências, tempo disponível e interesses. Entre em contato pelo WhatsApp (81) 99748-4915 para conversarmos sobre seu passeio ideal."
    },
    {
      question: "O que devo levar nos passeios?",
      answer: "Recomendamos: protetor solar, boné ou chapéu, óculos de sol, roupa de banho, toalha, roupa confortável, chinelo, e um pouco de dinheiro para alimentação e compras. Para passeios de buggy, evite roupas claras."
    },
    {
      question: "Qual é a diferença entre os roteiros de Barra Grande e Ponta de Mangue em Maragogi?",
      answer: "Em Maragogi, os passeios são feitos para um roteiro ou outro, e cada um oferece uma experiência diferente. Barra Grande é o roteiro mais famoso na internet, por isso costuma ser o mais movimentado. A praia tem um visual mais urbano, com restaurantes e pousadas, e os pontos de parada da lancha geralmente ficam mais cheios. É nesse roteiro que está o Caminho de Moisés, o banco de areia que só aparece quando a maré está até 0.2. Acima disso, ele fica coberto pela água. Ponta de Mangue oferece um cenário mais natural e tranquilo. O receptivo é maior, conta com uma piscina ampla, e as paradas de lancha costumam ser mais vazias. Outra vantagem é que esse roteiro permite realizar o passeio com a maré um pouco mais alta, até 0.7."
    }
  ];

  return (
    <section id="perguntas-frequentes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos passeios e serviços.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed text-center">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <button
            onClick={onReserveClick}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
