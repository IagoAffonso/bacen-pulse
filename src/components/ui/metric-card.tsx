import { ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeLabel, 
  description, 
  icon,
  variant = "default"
}: MetricCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-transparent";
      case "success":
        return "border-l-4 border-l-success bg-gradient-to-br from-success/5 to-transparent";
      case "warning":
        return "border-l-4 border-l-warning bg-gradient-to-br from-warning/5 to-transparent";
      default:
        return "border-l-4 border-l-secondary bg-gradient-to-br from-secondary/5 to-transparent";
    }
  };

  const getChangeColor = () => {
    if (change === undefined) return "";
    return change >= 0 ? "text-success" : "text-destructive";
  };

  return (
    <Card className={`card-elegant hover:shadow-glow transition-all duration-300 ${getVariantStyles()}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className="w-10 h-10 rounded-lg bg-gradient-subtle flex items-center justify-center">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {title}
              </h3>
              {description && (
                <p className="text-xs text-muted-foreground mt-1">{description}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-metric text-foreground">
            {value}
          </div>
          
          {change !== undefined && (
            <div className={`flex items-center space-x-1 text-sm font-medium ${getChangeColor()}`}>
              {change >= 0 ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              <span>{Math.abs(change)}%</span>
              {changeLabel && (
                <span className="text-muted-foreground">• {changeLabel}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;