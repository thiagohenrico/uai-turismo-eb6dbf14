import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Política de <span className="text-primary">Privacidade</span>
          </h1>

          <div className="space-y-6 text-muted-foreground text-center">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
              <p>
                A Uai Turismo coleta informações pessoais fornecidas voluntariamente por você ao solicitar
                orçamentos, fazer reservas ou entrar em contato conosco. Estas informações podem incluir:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 inline-block text-left">
                <li>Nome completo</li>
                <li>Número de telefone (WhatsApp)</li>
                <li>E-mail</li>
                <li>Local de hospedagem</li>
                <li>Datas de viagem</li>
                <li>Número de passageiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso das Informações</h2>
              <p>As informações coletadas são utilizadas para:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 inline-block text-left">
                <li>Processar suas reservas e fornecer os serviços contratados</li>
                <li>Entrar em contato para confirmações e atualizações sobre seus passeios</li>
                <li>Melhorar nossos serviços e experiência do cliente</li>
                <li>Enviar informações sobre promoções e novos passeios (com seu consentimento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Proteção de Dados</h2>
              <p>
                Comprometemo-nos a proteger suas informações pessoais. Não compartilhamos, vendemos ou
                alugamos seus dados pessoais a terceiros sem seu consentimento explícito, exceto quando
                necessário para a prestação dos serviços contratados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
              <p>
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Você pode
                configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades
                do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 inline-block text-left">
                <li>Solicitar acesso aos seus dados pessoais</li>
                <li>Corrigir dados incorretos ou incompletos</li>
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="ml-4 mt-2 space-y-1">
                <p><strong>Nome:</strong> Marcos Vinicius Silva Souza</p>
                <p><strong>Telefone:</strong> (81) 99748-4915</p>
                <p><strong>E-mail:</strong> contato@uaitur.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Atualizações</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você
                revise esta página regularmente para se manter informado sobre como protegemos suas
                informações.
              </p>
              <p className="mt-2">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PoliticaPrivacidade;
