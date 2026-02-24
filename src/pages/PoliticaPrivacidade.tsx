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

          <div className="space-y-8 text-muted-foreground">
            <p>
              A <strong>Uai Turismo</strong> (CNPJ: 54.181.357/0001-42), com sede em Porto de Galinhas – PE,
              titular do domínio <strong>uaitur.com</strong>, valoriza a privacidade dos seus usuários e está
              comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção
              de Dados (LGPD – Lei nº 13.709/2018) e com as políticas do Google.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Dados Pessoais Coletados</h2>
              <p>Coletamos os seguintes dados pessoais, fornecidos voluntariamente por você:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Nome completo</li>
                <li>Número de telefone / WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Local de hospedagem</li>
                <li>Datas de viagem</li>
                <li>Número de passageiros</li>
              </ul>
              <p className="mt-3">
                Também coletamos automaticamente dados de navegação como endereço IP, tipo de navegador,
                páginas visitadas e tempo de permanência, por meio de cookies e tecnologias semelhantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalidade do Uso dos Dados</h2>
              <p>As informações coletadas são utilizadas para:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Processar suas reservas e fornecer os serviços contratados</li>
                <li>Entrar em contato para confirmações e atualizações sobre seus passeios</li>
                <li>Melhorar nossos serviços e a experiência do usuário</li>
                <li>Enviar comunicações promocionais (somente com seu consentimento)</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Análise estatística e melhoria do desempenho do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Nosso site utiliza cookies próprios e de terceiros para melhorar a experiência de navegação,
                analisar o tráfego e personalizar conteúdo e anúncios.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.1 Google Analytics</h3>
              <p>
                Utilizamos o Google Analytics para coletar informações estatísticas sobre o uso do site, como
                páginas visitadas, tempo de permanência e origem do tráfego. O Google Analytics usa cookies para
                coletar essas informações de forma anônima. Para mais informações, consulte a{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Política de Privacidade do Google
                </a>.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.2 Google Ads</h3>
              <p>
                Podemos utilizar o Google Ads e cookies de remarketing para exibir anúncios personalizados com base
                em suas visitas anteriores ao nosso site. Fornecedores terceirizados, incluindo o Google, utilizam
                cookies para veicular anúncios com base nas visitas anteriores do usuário. Você pode desativar o
                uso de cookies pelo Google visitando a{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  página de configurações de anúncios do Google
                </a>{" "}
                ou a página da{" "}
                <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Network Advertising Initiative
                </a>.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.3 Gerenciamento de Cookies</h3>
              <p>
                Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie
                está sendo enviado. No entanto, se você não aceitar cookies, pode não conseguir usar algumas partes
                do nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p>
                Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros, exceto:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Quando necessário para a prestação dos serviços contratados (parceiros operacionais)</li>
                <li>Para cumprimento de obrigações legais ou regulatórias</li>
                <li>Com provedores de serviços de tecnologia que nos auxiliam na operação do site (Google, serviços de hospedagem), sempre sob contratos de confidencialidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Segurança dos Dados</h2>
              <p>
                Adotamos medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais de
                acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração,
                comunicação ou qualquer forma de tratamento inadequado ou ilícito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p>De acordo com a LGPD, você tem o direito de:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Solicitar a eliminação dos dados tratados com consentimento</li>
                <li>Obter informações sobre entidades com as quais seus dados foram compartilhados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retenção de Dados</h2>
              <p>
                Os dados pessoais serão mantidos pelo período necessário para o cumprimento das finalidades
                descritas nesta política, salvo quando houver obrigação legal de retenção por prazo superior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Menores de Idade</h2>
              <p>
                Nosso site e serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente
                dados pessoais de menores de idade sem o consentimento dos pais ou responsáveis legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Encarregado de Dados (DPO)</h2>
              <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:</p>
              <div className="ml-4 mt-2 space-y-1">
                <p><strong>Responsável:</strong> Marcos Vinicius Silva Souza</p>
                <p><strong>E-mail:</strong> contato@uaitur.com</p>
                <p><strong>Telefone:</strong> (81) 99748-4915</p>
                <p><strong>Endereço:</strong> Porto de Galinhas – Ipojuca/PE</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Alterações nesta Política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão
                publicadas nesta página com a data de atualização revisada. Recomendamos que você revise esta
                política regularmente.
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

export default PoliticaPrivacidade;
