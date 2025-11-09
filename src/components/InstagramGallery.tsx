import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramGallery = () => {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Galeria <span className="text-primary">Instagram</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg mb-6">
            Acompanhe nossos passeios e momentos inesquecíveis
          </p>
          <Button 
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://www.instagram.com/uai_turismo/", "_blank")}
          >
            <Instagram className="w-5 h-5" />
            Seguir @uai_turismo
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <Instagram className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Visite nosso Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Confira as fotos reais dos nossos passeios, depoimentos em vídeo e muito mais!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => window.open("https://www.instagram.com/uai_turismo/", "_blank")}
                >
                  <Instagram className="w-12 h-12 text-primary/40" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Clique para ver todas as fotos e vídeos no Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
