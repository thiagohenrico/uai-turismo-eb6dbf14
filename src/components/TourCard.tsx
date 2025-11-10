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

        {!simplified && itinerary && itineraryItems && (
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">{itinerary}</h4>
            <ul className="space-y-1 text-sm">
              {itineraryItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!simplified && (
          <div className="space-y-2">
            <h4 className="font-semibold text-primary">INCLUSO:</h4>
            <ul className="space-y-2">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!simplified && note && (
          <p className="text-xs text-muted-foreground italic">{note}</p>
        )}

        <div className="flex flex-col gap-3 pt-2">
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
