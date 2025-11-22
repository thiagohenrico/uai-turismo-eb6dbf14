import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticaPublicidade = () => {
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
            Política de <span className="text-primary">Publicidade</span>
          </h1>

          <div className="space-y-6 text-muted-foreground text-center">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Transparência na Comunicação</h2>
              <p>
                A Uai Turismo compromete-se a manter uma comunicação transparente e honesta em todas as
                suas ações publicitárias. Todas as informações sobre nossos serviços, preços e condições
                são apresentadas de forma clara e objetiva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações Sobre Serviços</h2>
              <p>
                Todos os passeios, translados e serviços anunciados em nosso site e redes sociais são
                devidamente autorizados e seguem as regulamentações do setor turístico brasileiro.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 inline-block text-left">
                <li>CNPJ: 54.181.357/0001-42</li>
                <li>Certificação Cadastur - Cadastro de Prestadores de Serviços Turísticos</li>
                <li>Empresa cadastrada no Ministério do Turismo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Fotos e Imagens</h2>
              <p>
                As fotos utilizadas em nosso site e materiais publicitários são de passeios reais
                realizados pela Uai Turismo. Algumas imagens podem ter sido editadas para melhor
                visualização, mas sempre representam fielmente os locais e experiências oferecidas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Depoimentos e Avaliações</h2>
              <p>
                Todos os depoimentos e avaliações compartilhados são de clientes reais que utilizaram
                nossos serviços. As avaliações do Google são autênticas e podem ser verificadas
                diretamente na plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Preços e Condições</h2>
              <p>
                Os preços apresentados estão sujeitos a alterações sem aviso prévio. Recomendamos sempre
                solicitar um orçamento atualizado antes de confirmar sua reserva. Todas as condições
                de pagamento, cancelamento e remarcação serão informadas claramente durante o processo
                de reserva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Marketing por E-mail e WhatsApp</h2>
              <p>
                Podemos enviar comunicações promocionais por e-mail ou WhatsApp apenas para clientes que
                forneceram seus dados voluntariamente e consentiram em receber tais comunicações. Você
                pode cancelar sua inscrição a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Redes Sociais</h2>
              <p>
                Nossas páginas nas redes sociais (Instagram, Facebook) são gerenciadas pela Uai Turismo
                e seguem as políticas das respectivas plataformas. Interações, comentários e mensagens
                são monitorados e respondidos durante nosso horário comercial.
              </p>
              <p className="mt-2">
                <strong>Instagram oficial:</strong> @uai_turismo
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Proteção ao Consumidor</h2>
              <p>
                Todas as nossas práticas publicitárias estão em conformidade com o Código de Defesa do
                Consumidor (Lei nº 8.078/1990) e demais legislações aplicáveis ao setor turístico brasileiro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contato</h2>
              <p>
                Para dúvidas, reclamações ou sugestões sobre nossa publicidade:
              </p>
              <div className="ml-4 mt-2 space-y-1">
                <p><strong>Responsável:</strong> Marcos Vinicius Silva Souza</p>
                <p><strong>Telefone:</strong> (81) 99748-4915</p>
                <p><strong>E-mail:</strong> contato@uaitur.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Atualizações</h2>
              <p>
                Esta Política de Publicidade pode ser atualizada periodicamente para refletir mudanças
                em nossas práticas ou na legislação. Recomendamos que você revise esta página regularmente.
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

export default PoliticaPublicidade;
