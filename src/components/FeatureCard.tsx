
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="bg-appSurface/50 border-appSurfaceHighest hover:bg-appSurface/70 transition-all duration-300 hover:scale-105 hover:border-appPrimary/50 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader>
        <div className="mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-appOnPrimary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-appOnBackground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
