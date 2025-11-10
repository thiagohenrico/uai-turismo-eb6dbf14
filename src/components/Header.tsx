import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import uaiLogo from "@/assets/uai-logo.png";

interface HeaderProps {
  onReserveClick?: () => void;
}

const Header = ({ onReserveClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/98 backdrop-blur-md border-b border-primary/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={uaiLogo} alt="Uai Turismo" className="h-14 w-14 md:h-16 md:w-16" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">SEU TURISMO NO LUGAR CERTO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="font-elegant text-2xl text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("passeios")} className="font-elegant text-2xl text-foreground hover:text-primary transition-colors">
              Passeios
            </button>
            <button onClick={() => scrollToSection("galeria")} className="font-elegant text-2xl text-foreground hover:text-primary transition-colors">
              Galeria
            </button>
            <Link to="/sobre-nos" className="font-elegant text-2xl text-foreground hover:text-primary transition-colors">
              Sobre nós
            </Link>
            <Button onClick={onReserveClick} size="lg" className="bg-primary hover:bg-primary/90">
              RESERVE JÁ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-primary/20 pt-4">
            <button onClick={() => scrollToSection("inicio")} className="font-elegant text-xl text-foreground hover:text-primary transition-colors text-left">
              Início
            </button>
            <button onClick={() => scrollToSection("passeios")} className="font-elegant text-xl text-foreground hover:text-primary transition-colors text-left">
              Passeios
            </button>
            <button onClick={() => scrollToSection("galeria")} className="font-elegant text-xl text-foreground hover:text-primary transition-colors text-left">
              Galeria
            </button>
            <Link to="/sobre-nos" className="font-elegant text-xl text-foreground hover:text-primary transition-colors text-left" onClick={() => setIsOpen(false)}>
              Sobre nós
            </Link>
            <Button onClick={() => { onReserveClick?.(); setIsOpen(false); }} size="lg" className="w-full bg-primary hover:bg-primary/90">
              RESERVE JÁ
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
