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

          <div className="space-y-8 text-muted-foreground">
            <p>
              A <strong>Uai Turismo</strong> (CNPJ: 54.181.357/0001-42) segue rigorosamente as diretrizes
              de publicidade do Google e a legislação brasileira, incluindo o Código de Defesa do Consumidor
              (Lei nº 8.078/1990) e o Marco Civil da Internet (Lei nº 12.965/2014).
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Transparência na Comunicação</h2>
              <p>
                Todas as informações sobre nossos serviços, preços e condições são apresentadas de forma
                clara, precisa e não enganosa. Comprometemo-nos a não utilizar práticas publicitárias que
                possam induzir o consumidor a erro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações Sobre a Empresa</h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Razão Social:</strong> Marcos Vinicius Silva Souza</li>
                <li><strong>Nome Fantasia:</strong> Uai Turismo</li>
                <li><strong>CNPJ:</strong> 54.181.357/0001-42</li>
                <li><strong>Cadastur:</strong> Cadastro de Prestadores de Serviços Turísticos – Ministério do Turismo</li>
                <li><strong>Endereço:</strong> Porto de Galinhas – Ipojuca/PE</li>
                <li><strong>Telefone:</strong> (81) 99748-4915</li>
                <li><strong>E-mail:</strong> contato@uaitur.com</li>
                <li><strong>Site:</strong> uaitur.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Google Ads e Remarketing</h2>
              <p>
                A Uai Turismo pode utilizar o Google Ads para veicular anúncios em resultados de pesquisa e
                em sites parceiros da Rede de Display do Google.
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>Remarketing:</strong> Podemos exibir anúncios para usuários que já visitaram nosso site
                  anteriormente, utilizando cookies de remarketing do Google.
                </li>
                <li>
                  <strong>Cookies de terceiros:</strong> Fornecedores terceirizados, incluindo o Google, usam
                  cookies para veicular anúncios com base em visitas anteriores do usuário ao nosso site.
                </li>
                <li>
                  <strong>Opt-out:</strong> Você pode desativar o uso de cookies pelo Google visitando a{" "}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    página de configurações de anúncios
                  </a>{" "}
                  ou o site da{" "}
                  <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    Network Advertising Initiative
                  </a>.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conteúdo dos Anúncios</h2>
              <p>Todos os nossos anúncios seguem as políticas do Google Ads, garantindo:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Veracidade das informações anunciadas</li>
                <li>Identificação clara como anúncio publicitário</li>
                <li>Ausência de conteúdo enganoso, ofensivo ou discriminatório</li>
                <li>Conformidade com as políticas de conteúdo restrito do Google</li>
                <li>Clareza sobre preços, condições e disponibilidade dos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Fotos e Imagens</h2>
              <p>
                As fotos utilizadas em nosso site, anúncios e materiais publicitários são de passeios reais
                realizados pela Uai Turismo. As imagens representam fielmente os locais e experiências
                oferecidas. Eventuais ajustes de cor ou luminosidade são feitos apenas para melhor visualização,
                sem alterar a realidade do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Depoimentos e Avaliações</h2>
              <p>
                Todos os depoimentos e avaliações exibidos são de clientes reais. As avaliações do Google
                são autênticas e podem ser verificadas diretamente na plataforma do Google Maps/Google Business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Preços e Condições</h2>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Os preços apresentados estão sujeitos a alterações sem aviso prévio</li>
                <li>Todas as condições de pagamento são informadas antes da confirmação da reserva</li>
                <li>Políticas de cancelamento e remarcação são comunicadas claramente no ato da reserva</li>
                <li>Recomendamos sempre solicitar um orçamento atualizado antes de confirmar</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Marketing por E-mail e WhatsApp</h2>
              <p>
                Enviamos comunicações promocionais apenas para pessoas que forneceram seus dados voluntariamente
                e consentiram em recebê-las. Você pode cancelar o recebimento a qualquer momento, bastando
                solicitar via e-mail ou WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Redes Sociais</h2>
              <p>
                Nossas páginas oficiais nas redes sociais são gerenciadas pela Uai Turismo e seguem as
                políticas das respectivas plataformas.
              </p>
              <div className="ml-4 mt-2 space-y-1">
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/uai_turismo/" target="_blank" rel="noopener noreferrer" className="text-primary underline">@uai_turismo</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Proteção ao Consumidor</h2>
              <p>
                Todas as nossas práticas publicitárias estão em conformidade com:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Código de Defesa do Consumidor (Lei nº 8.078/1990)</li>
                <li>Marco Civil da Internet (Lei nº 12.965/2014)</li>
                <li>Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018)</li>
                <li>Políticas de publicidade do Google Ads</li>
                <li>Regulamentações do Ministério do Turismo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contato</h2>
              <p>Para dúvidas, reclamações ou sugestões sobre nossa publicidade:</p>
              <div className="ml-4 mt-2 space-y-1">
                <p><strong>Responsável:</strong> Marcos Vinicius Silva Souza</p>
                <p><strong>E-mail:</strong> contato@uaitur.com</p>
                <p><strong>Telefone:</strong> (81) 99748-4915</p>
                <p><strong>Endereço:</strong> Porto de Galinhas – Ipojuca/PE</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Atualizações</h2>
              <p>
                Esta Política de Publicidade pode ser atualizada periodicamente para refletir mudanças em
                nossas práticas ou na legislação. Recomendamos que você revise esta página regularmente.
              </p>
              <p className="mt-2">
                <strong>Última atualização:</strong> 24 de fevereiro de 2025
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
