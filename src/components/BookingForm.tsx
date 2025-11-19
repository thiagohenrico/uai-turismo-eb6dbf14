import { useState } from "react";
import { Calendar, Users, MapPin, Ship, Route, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  const availableTours = [
    "Praia dos Carneiros",
    "São Miguel dos Milagres",
    "Maragogi - Barra Grande",
    "Maragogi - Ponta de Mangue",
    "Cabo de Santo Agostinho (Buggy)",
    "Ilha de Santo Aleixo",
    "City Tour Recife e Olinda",
    "Porto de Galinhas (Buggy)"
  ];

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "",
    hasChildren: false,
    childrenAges: "",
    needsTransfer: false,
    transferPeople: "",
    accommodation: "",
    tours: [] as string[],
  });

  const handleTourToggle = (tour: string) => {
    setFormData(prev => ({
      ...prev,
      tours: prev.tours.includes(tour)
        ? prev.tours.filter(t => t !== tour)
        : [...prev.tours, tour]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `Olá! Gostaria de solicitar um orçamento:\n\n📅 Data disponível: ${formData.checkIn}\n📅 Data final disponível: ${formData.checkOut}\n\n👥 Número de adultos: ${formData.adults}`;

    if (formData.hasChildren) {
      message += `\n👶 Crianças: Sim (Idades: ${formData.childrenAges})`;
    }

    message += `\n\n🏨 Hospedagem: ${formData.accommodation}`;

    if (formData.needsTransfer) {
      message += `\n🚗 Precisa de translado: Sim (${formData.transferPeople} pessoas)`;
    }

    if (formData.tours.length > 0) {
      message += `\n\n🎯 Passeios selecionados:\n${formData.tours.join(", ")}`;
    }
    
    const whatsappUrl = `https://wa.me/5581997484915?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="orcamento" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 px-2">
          Reserve Sua <span className="text-primary">Experiência</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-6 bg-muted border-border">
            <Ship className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passeio de Lancha</h3>
            <p className="text-muted-foreground">Explore as águas cristalinas em lanchas confortáveis e seguras.</p>
          </Card>

          <Card className="p-6 bg-muted border-border">
            <Route className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Roteiros Exclusivos</h3>
            <p className="text-muted-foreground">Experiências personalizadas para tornar sua viagem única.</p>
          </Card>

          <Card className="p-6 bg-muted border-border md:col-span-2">
            <Bus className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transporte Completo</h3>
            <p className="text-muted-foreground">Buscamos e deixamos você no local de hospedagem.</p>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="checkIn" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Data disponível para passeios
                </Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkOut" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Data final disponível para passeios
                </Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adults" className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Número de Adultos
                </Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accommodation" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Local de Hospedagem
                </Label>
                <Input
                  id="accommodation"
                  type="text"
                  value={formData.accommodation}
                  onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                  required
                  className="bg-background"
                  placeholder="Nome do hotel ou pousada"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hasChildren"
                  checked={formData.hasChildren}
                  onChange={(e) => setFormData({ ...formData, hasChildren: e.target.checked })}
                  className="w-4 h-4 rounded border-input"
                />
                <Label htmlFor="hasChildren" className="cursor-pointer">
                  Vai com crianças?
                </Label>
              </div>
              {formData.hasChildren && (
                <Input
                  id="childrenAges"
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                  placeholder="Digite as idades (ex: 5, 8, 12)"
                  className="bg-background"
                />
              )}
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">
                Selecione os passeios desejados:
              </Label>
              <div className="grid md:grid-cols-2 gap-3">
                {availableTours.map((tour) => (
                  <div key={tour} className="flex items-start gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <input
                      type="checkbox"
                      id={tour}
                      checked={formData.tours.includes(tour)}
                      onChange={() => handleTourToggle(tour)}
                      className="w-4 h-4 rounded border-input mt-0.5"
                    />
                    <Label htmlFor={tour} className="cursor-pointer text-sm leading-tight">
                      {tour}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="needsTransfer"
                  checked={formData.needsTransfer}
                  onChange={(e) => setFormData({ ...formData, needsTransfer: e.target.checked })}
                  className="w-4 h-4 rounded border-input"
                />
                <Label htmlFor="needsTransfer" className="cursor-pointer">
                  Precisa de translado?
                </Label>
              </div>
              {formData.needsTransfer && (
                <Input
                  id="transferPeople"
                  type="number"
                  min="1"
                  value={formData.transferPeople}
                  onChange={(e) => setFormData({ ...formData, transferPeople: e.target.value })}
                  placeholder="Quantas pessoas para o translado?"
                  className="bg-background"
                />
              )}
            </div>

            <div className="space-y-3 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border border-border">
              <p className="flex items-start gap-2">
                <span className="font-semibold text-foreground">OBS:</span>
                Com exceção do Passeio de buggy em Porto de Galinhas, os demais passeios são bate e volta que duram o dia inteiro.
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Translados:</span>
                Aeroporto de Recife - Porto de Galinhas (50KM)
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6">
              Solicitar Orçamento no WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
