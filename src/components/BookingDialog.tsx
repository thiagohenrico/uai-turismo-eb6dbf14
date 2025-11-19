import { useState } from "react";
import { Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTour?: string;
}

const BookingDialog = ({ isOpen, onClose, preSelectedTour }: BookingDialogProps) => {
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
    transferArrivalTime: "",
    transferDepartureTime: "",
    accommodation: "",
    tours: preSelectedTour ? [preSelectedTour] : [] as string[],
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
      message += `\n🚗 Precisa de translado: Sim (${formData.transferPeople} pessoas)\n🕐 Horário de chegada do voo: ${formData.transferArrivalTime}\n🕐 Horário de saída do voo: ${formData.transferDepartureTime}`;
    }

    if (formData.tours.length > 0) {
      message += `\n\n🎯 Passeios selecionados:\n${formData.tours.join(", ")}`;
    }
    
    const whatsappUrl = `https://wa.me/5581997484915?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            Solicitar <span className="text-primary">Orçamento</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Preencha os dados abaixo e receba seu orçamento personalizado via WhatsApp
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
          <form onSubmit={handleSubmit} className="space-y-6 p-1">
            <div className="grid md:grid-cols-2 gap-4">
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
                  Data final disponível
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
                <div className="space-y-4 pl-6 border-l-2 border-primary/30">
                  <Input
                    id="transferPeople"
                    type="number"
                    min="1"
                    value={formData.transferPeople}
                    onChange={(e) => setFormData({ ...formData, transferPeople: e.target.value })}
                    placeholder="Quantas pessoas para o translado?"
                    className="bg-background"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="transferArrivalTime">Horário de Chegada do Voo</Label>
                      <Input
                        id="transferArrivalTime"
                        type="time"
                        value={formData.transferArrivalTime}
                        onChange={(e) => setFormData({ ...formData, transferArrivalTime: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="transferDepartureTime">Horário de Saída do Voo</Label>
                      <Input
                        id="transferDepartureTime"
                        type="time"
                        value={formData.transferDepartureTime}
                        onChange={(e) => setFormData({ ...formData, transferDepartureTime: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                  </div>
                </div>
              )}
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
              <div className="grid md:grid-cols-2 gap-2">
                {availableTours.map((tour) => (
                  <div key={tour} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors">
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


            <div className="space-y-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border border-border">
              <p className="flex items-start gap-2">
                <span className="font-semibold text-foreground">OBS:</span>
                Com exceção do Passeio de buggy em Porto de Galinhas, os demais passeios são bate e volta que duram o dia inteiro.
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold text-foreground">Translados:</span>
                Aeroporto de Recife - Porto de Galinhas (50KM)
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851]">
              Solicitar Orçamento no WhatsApp
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
