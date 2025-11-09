import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-sunset-yellow">Uai</span>
              <span className="text-tropical-green"> Turismo</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("orcamento")} className="text-foreground hover:text-primary transition-colors">
              Orçamento
            </button>
            <button onClick={() => scrollToSection("passeios")} className="text-foreground hover:text-primary transition-colors">
              Passeios
            </button>
            <button onClick={() => scrollToSection("avaliacoes")} className="text-foreground hover:text-primary transition-colors">
              Avaliações
            </button>
            <button onClick={() => scrollToSection("duvidas")} className="text-foreground hover:text-primary transition-colors">
              Dúvidas
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
            <Button onClick={() => scrollToSection("orcamento")} size="lg">
              Reservar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection("orcamento")} className="text-foreground hover:text-primary transition-colors text-left">
              Orçamento
            </button>
            <button onClick={() => scrollToSection("passeios")} className="text-foreground hover:text-primary transition-colors text-left">
              Passeios
            </button>
            <button onClick={() => scrollToSection("avaliacoes")} className="text-foreground hover:text-primary transition-colors text-left">
              Avaliações
            </button>
            <button onClick={() => scrollToSection("duvidas")} className="text-foreground hover:text-primary transition-colors text-left">
              Dúvidas
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors text-left">
              Contato
            </button>
            <Button onClick={() => scrollToSection("orcamento")} size="lg" className="w-full">
              Reservar Agora
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
