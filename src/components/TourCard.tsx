import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TourCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  itinerary?: string;
  itineraryItems?: string[];
  includes: string[];
  note?: string;
  onReserveClick?: () => void;
  detailsLink?: string;
  simplified?: boolean;
}

const TourCard = ({ title, image, description, duration, itinerary, itineraryItems, includes, note, onReserveClick, detailsLink, simplified = false }: TourCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-center mb-3">{title}</h3>
        <p className="text-muted-foreground text-center mb-4 flex-1">{description}</p>

        <div className="flex flex-col gap-3 mt-auto">
          {detailsLink && (
            <Link to={detailsLink}>
              <Button 
                variant="outline"
                className="w-full"
                size="lg"
              >
                Ver Detalhes
              </Button>
            </Link>
          )}
          <Button
            onClick={onReserveClick}
            className="w-full"
            size="lg"
          >
            Reservar Este Passeio
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
