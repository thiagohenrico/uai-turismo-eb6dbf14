import { Shield } from "lucide-react";

const CadasturBadge = () => {
  return (
    <section className="py-8 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <div className="text-left">
              <p className="text-sm md:text-base text-muted-foreground">
                Empresa Credenciada
              </p>
              <p className="text-xl md:text-2xl font-bold text-foreground">
                CADASTUR
              </p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl">
            Empresa oficialmente registrada no Ministério do Turismo, 
            garantindo qualidade e segurança nos nossos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CadasturBadge;
