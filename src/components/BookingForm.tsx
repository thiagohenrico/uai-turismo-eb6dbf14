import { useState } from "react";
import { Calendar, Users, MapPin, Ship, Route, Bus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

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
    fullName: "",
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
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

  const formatDateBR = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "dd/MM/yyyy", { locale: ptBR });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedName = formData.fullName.trim().slice(0, 100);
    const sanitizedAccommodation = formData.accommodation.trim().slice(0, 200);
    const sanitizedAdults = formData.adults.trim().slice(0, 5);
    const sanitizedChildrenAges = formData.childrenAges.trim().slice(0, 100);
    const sanitizedTransferPeople = formData.transferPeople.trim().slice(0, 5);

    let message = `Olá! Vim do site uaitur.com e gostaria de solicitar um orçamento (ID4915)\n\n`;
    message += `👤 Nome: ${sanitizedName}\n`;
    message += `📅 Data disponível: ${formatDateBR(formData.checkIn)}\n📅 Data final disponível: ${formatDateBR(formData.checkOut)}\n\n👥 Número de adultos: ${sanitizedAdults}`;

    if (formData.hasChildren) {
      message += `\n👶 Crianças: Sim (Idades: ${sanitizedChildrenAges})`;
    }

    message += `\n\n🏨 Hospedagem: ${sanitizedAccommodation}`;

    if (formData.needsTransfer) {
      message += `\n🚗 Precisa de translado: Sim (${sanitizedTransferPeople} pessoas)`;
    }

    if (formData.tours.length > 0) {
      message += `\n\n🎯 Passeios selecionados:\n${formData.tours.join(", ")}`;
    }

    const whatsappUrl = `https://wa.me/5581997484915?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="orcamento" className="py-28 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 px-2">
          Reserve Sua <span className="text-primary">Experiência</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
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
            {/* Nome Completo - First field */}
            <div className="space-y-2">
              <Label htmlFor="formFullName" className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Nome Completo
              </Label>
              <Input
                id="formFullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                maxLength={100}
                className="bg-background"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Data disponível para passeios
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background",
                        !formData.checkIn && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {formData.checkIn ? formatDateBR(formData.checkIn) : "DD/MM/AAAA"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={formData.checkIn}
                      onSelect={(date) => setFormData({ ...formData, checkIn: date })}
                      disabled={(date) => date < new Date()}
                      locale={ptBR}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Data final disponível para passeios
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background",
                        !formData.checkOut && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {formData.checkOut ? formatDateBR(formData.checkOut) : "DD/MM/AAAA"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={formData.checkOut}
                      onSelect={(date) => setFormData({ ...formData, checkOut: date })}
                      disabled={(date) => date < (formData.checkIn || new Date())}
                      locale={ptBR}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="formAdults" className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Número de Adultos
                </Label>
                <Input
                  id="formAdults"
                  type="number"
                  min="1"
                  max="50"
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="formAccommodation" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Local de Hospedagem
                </Label>
                <Input
                  id="formAccommodation"
                  type="text"
                  value={formData.accommodation}
                  onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                  required
                  maxLength={200}
                  className="bg-background"
                  placeholder="Nome do hotel ou pousada"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="formHasChildren"
                  checked={formData.hasChildren}
                  onChange={(e) => setFormData({ ...formData, hasChildren: e.target.checked })}
                  className="w-4 h-4 rounded border-input"
                />
                <Label htmlFor="formHasChildren" className="cursor-pointer">
                  Vai com crianças?
                </Label>
              </div>
              {formData.hasChildren && (
                <Input
                  id="formChildrenAges"
                  type="text"
                  value={formData.childrenAges}
                  onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                  placeholder="Digite as idades (ex: 5, 8, 12)"
                  maxLength={100}
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
                      id={`form-${tour}`}
                      checked={formData.tours.includes(tour)}
                      onChange={() => handleTourToggle(tour)}
                      className="w-4 h-4 rounded border-input mt-0.5"
                    />
                    <Label htmlFor={`form-${tour}`} className="cursor-pointer text-sm leading-tight">
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
                  id="formNeedsTransfer"
                  checked={formData.needsTransfer}
                  onChange={(e) => setFormData({ ...formData, needsTransfer: e.target.checked })}
                  className="w-4 h-4 rounded border-input"
                />
                <Label htmlFor="formNeedsTransfer" className="cursor-pointer">
                  Precisa de translado?
                </Label>
              </div>
              {formData.needsTransfer && (
                <Input
                  id="formTransferPeople"
                  type="number"
                  min="1"
                  max="50"
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
