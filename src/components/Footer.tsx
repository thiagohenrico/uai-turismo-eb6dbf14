import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-midnight py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sunset-yellow">Uai</span>
              <span className="text-tropical-green"> Turismo</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Passeios privativos e compartilhados, translados e buggy em Pernambuco e Alagoas.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>CNPJ: 54.181.357/0001-42</p>
              <p className="text-xs">MARCOS VINICIUS SILVA SOUZA</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#orcamento" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Orçamento
              </a>
              <a href="#passeios" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Passeios
              </a>
              <a href="#avaliacoes" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Avaliações
              </a>
              <a href="#galeria" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Galeria
              </a>
              <a href="#duvidas" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dúvidas
              </a>
              <a href="#contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Porto de Galinhas - PE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5581997484915" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (81) 99748-4915
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contato@uaitur.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contato@uaitur.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Siga no Instagram</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Veja mais fotos dos nossos passeios e clientes felizes!
            </p>
            <a 
              href="https://www.instagram.com/uai_turismo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@uai_turismo</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Certificação Cadastur - Cadastro de Prestadores de Serviços Turísticos
            </p>
            <p className="text-sm text-muted-foreground">
              Empresa cadastrada no Ministério do Turismo
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Uai Turismo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
