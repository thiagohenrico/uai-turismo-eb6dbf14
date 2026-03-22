import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import uaiLogo from "@/assets/uai-logo.png";

interface HeaderProps {
  onReserveClick?: () => void;
}

const Header = ({ onReserveClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/passeios", label: "Destinos" },
    { to: "/galeria", label: "Galeria" },
    { to: "/sobre-nos", label: "Sobre Nós" },
    { to: "/perguntas-frequentes", label: "FAQ" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={uaiLogo} alt="Uai Turismo" className="h-12 w-12 md:h-14 md:w-14" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 hidden sm:block max-w-[120px] leading-tight">Seu turismo no lugar certo</span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.to)
                    ? "bg-primary/15 text-golden-yellow"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Social - Right */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.instagram.com/uai_turismo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-golden-yellow transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <Button
              onClick={onReserveClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile - Right */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="https://www.instagram.com/uai_turismo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-golden-yellow transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <button
              className="text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 flex flex-col gap-1 border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary/15 text-golden-yellow"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => { onReserveClick?.(); setIsOpen(false); }}
              className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full"
              size="lg"
            >
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
