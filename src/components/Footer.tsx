import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-midnight py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sunset-yellow">Uai</span>
              <span className="text-tropical-green"> Turismo</span>
            </h3>
            <p className="text-muted-foreground">
              Experiências inesquecíveis no litoral Sul de Pernambuco e Norte de Alagoas
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Porto de Galinhas, PE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(81) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contato@uaiturismo.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Uai Turismo. Todos os direitos reservados. CADASTUR: 12.345678.90.0001-2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
