import { useState } from "react";
import { Calendar, Users, MapPin, Ship, Route, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    accommodation: "",
    tours: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento:\n
Data Check-in: ${formData.checkIn}\n
Data Check-out: ${formData.checkOut}\n
Número de pessoas: ${formData.guests}\n
Local de hospedagem: ${formData.accommodation}\n
Passeios selecionados: ${formData.tours.join(", ")}`;
    
    const whatsappUrl = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="orcamento" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Reserve Sua <span className="text-primary">Experiência</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-6 bg-muted border-border">
            <Ship className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passeio de Lancha</h3>
            <p className="text-muted-foreground">Explore as águas cristalinas em lanchas confortáveis e seguras</p>
          </Card>

          <Card className="p-6 bg-muted border-border">
            <Route className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Roteiros Exclusivos</h3>
            <p className="text-muted-foreground">Experiências personalizadas para tornar sua viagem única</p>
          </Card>

          <Card className="p-6 bg-muted border-border md:col-span-2">
            <Bus className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transporte Completo</h3>
            <p className="text-muted-foreground">Buscamos e deixamos você no local de hospedagem</p>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="checkIn" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Data Check-in
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
                  Data Check-out
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
                <Label htmlFor="guests" className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Número de Pessoas
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
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
                />
              </div>
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
