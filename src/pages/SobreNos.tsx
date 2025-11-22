import { Building2, Phone, Mail, MapPin, Shield, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CadasturBadge from "@/components/CadasturBadge";
import cadasturCertificate from "@/assets/cadastur-certificate.jpg";
import proprietariosUai from "@/assets/proprietarios-uai.jpg";
import equipeUaiNew from "@/assets/equipe-uai-new.jpg";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-deep-navy to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Sobre a <span className="text-primary">Uai Turismo</span>
              </h1>
               <p className="text-lg md:text-xl text-white/90">
                  Sua experiência inesquecível no litoral nordestino começa aqui.
                </p>
            </div>
          </div>
        </section>

        {/* Cadastur Badge */}
        <CadasturBadge />

        {/* Nossa História */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Nossa <span className="text-primary">História</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground text-center">
                <p className="text-lg leading-relaxed mb-6">
                  A Uai Turismo nasceu da paixão em compartilhar as maravilhas do litoral Sul de Pernambuco e do Norte de Alagoas com quem deseja viver dias inesquecíveis. Com experiência sólida no mercado e um olhar atento para cada detalhe, transformamos passeios em memórias que ficam para sempre.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  O nome Uai carrega nossa história no próprio som: o fundador, mineiro de Belo Horizonte, veio passear em Porto de Galinhas e… não voltou mais. Se apaixonou pela região, pelas pessoas e por esse ritmo único do litoral. Decidiu ficar e criar uma empresa que mostrasse toda a beleza desse pedaço do paraíso para mais pessoas, unindo o acolhimento mineiro à alma vibrante do Nordeste.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Com esse DNA, nos especializamos em levar você aos cenários mais paradisíacos da região: de Maragogi à Praia dos Carneiros, da São Miguel dos Milagres ao Cabo de Santo Agostinho. Nossa missão é simples: unir qualidade, segurança e cuidado para que cada viajante se sinta especial do início ao fim.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Nossa equipe é formada por profissionais apaixonados pelo que fazem e comprometidos em proporcionar uma experiência verdadeira, autêntica e cheia de atenção. Cada roteiro é planejado com carinho, respeitando o ritmo da natureza e garantindo que seu tempo e investimento sejam aproveitados ao máximo.
                </p>
                <p className="text-lg leading-relaxed">
                  Mais do que passeios, oferecemos vivências. Mais do que clientes, recebemos amigos. Essa é a essência da Uai Turismo!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Proprietários */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  <div className="flex flex-col justify-center text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Nossos Proprietários
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Com paixão pelo turismo e compromisso com a excelência, nossos proprietários lideram a Uai Turismo com dedicação e experiência, garantindo que cada passeio seja uma experiência inesquecível.
                    </p>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={proprietariosUai}
                      alt="Proprietários da Uai Turismo"
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Equipe */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg order-2 md:order-1">
                    <img
                      src={equipeUaiNew}
                      alt="Equipe da Uai Turismo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center order-1 md:order-2 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Nossa Equipe
                    </h3>
                    <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                      <p>
                        Profissionais qualificados, apaixonados pelo que fazem e comprometidos em entregar a melhor experiência. Nossa equipe de marinheiros, motoristas, guias, atendente, social media e gestor de tráfego, trabalha em sintonia para garantir que cada detalhe da sua viagem seja pensado com cuidado, segurança e carinho.
                      </p>
                      <p>
                        Nos bastidores, nossa equipe de comunicação está sempre atenta para manter você bem informado, compartilhando dicas, atualizações e tudo o que faz parte do seu roteiro. Já em campo, nossos motoristas e guias conduzem cada passeio com responsabilidade e entusiasmo, enquanto os marinheiros oferecem toda a atenção necessária para que a experiência no mar seja tranquila, divertida e segura.
                      </p>
                      <p>
                        Do momento em que você chega até o último instante do passeio, estamos ao seu lado, cuidando para que tudo aconteça de forma leve e organizada. Trabalhamos todos os dias para transformar sua viagem em memórias que emocionam, porque acreditamos que a experiência começa muito antes de você embarcar e continua viva muito depois de voltar pra casa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Diferenciais */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
              Nossos <span className="text-primary">Diferenciais</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Segurança</h3>
                <p className="text-muted-foreground">
                  Empresa credenciada no CADASTUR, garantindo qualidade e segurança em todos os nossos serviços.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qualidade</h3>
                <p className="text-muted-foreground">
                  Parceiros selecionados e roteiros testados para garantir a melhor experiência possível.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Atendimento</h3>
                <p className="text-muted-foreground">
                  Equipe dedicada e atenciosa, pronta para tornar sua viagem inesquecível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Passeios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
                Nossos <span className="text-primary">Passeios</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                Oferecemos uma variedade de passeios cuidadosamente selecionados para você conhecer o melhor do litoral nordestino:
              </p>
              <ul className="space-y-4 text-muted-foreground text-center max-w-2xl mx-auto">
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Praia dos Carneiros:</strong> Paraíso de águas cristalinas com a famosa Capela de São Benedito.</span>
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">São Miguel dos Milagres:</strong> Refúgio de tranquilidade com piscinas naturais espetaculares.</span>
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Maragogi:</strong> O Caribe Brasileiro com praias paradisíacas.</span>
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Passeios de Buggy:</strong> Aventura pelas praias de Porto de Galinhas e Cabo de Santo Agostinho.</span>
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Ilha de Santo Aleixo:</strong> Um paraíso de águas cristalinas, areia clara e formações rochosas únicas.</span>
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">City Tour:</strong> Uma imersão na cultura, história e beleza do Nordeste entre pontes, igrejas seculares e casarios coloridos.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dados da Empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                Dados da <span className="text-primary">Empresa</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6 text-center md:text-left">
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">CNPJ</h3>
                      <p className="text-muted-foreground">54.181.357/0001-42</p>
                      <p className="text-sm text-muted-foreground mt-1">MARCOS VINICIUS SILVA SOUZA (MEI)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">CADASTUR</h3>
                      <p className="text-muted-foreground">54.181.357/0001-42</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 text-center md:text-left">
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground">Porto de Galinhas, Pernambuco</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(81) 99748-4915</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-center md:justify-start">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@uaitur.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
