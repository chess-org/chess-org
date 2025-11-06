import { ReactNode, CSSProperties } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon?: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}

const InfoCard = ({ icon: Icon, emoji, title, description, className, style }: InfoCardProps) => {
  return (
    <Card 
      className={cn(
        "bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in",
        className
      )}
      style={style}
    >
      <CardContent className="p-6 text-center">
        {Icon && (
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
        )}
        {emoji && (
          <div className="text-4xl mb-4">{emoji}</div>
        )}
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
