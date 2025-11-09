import { Clock, MapPin, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TourCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  includes: string[];
}

const TourCard = ({ title, image, description, duration, includes }: TourCardProps) => {
  const handleBooking = () => {
    const message = `Olá! Tenho interesse no passeio: ${title}`;
    const whatsappUrl = `https://wa.me/5581999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>{duration}</span>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-primary">INCLUSO:</h4>
          <ul className="space-y-2">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={handleBooking} className="w-full" size="lg">
          Reservar Este Passeio
        </Button>
      </div>
    </Card>
  );
};

export default TourCard;
