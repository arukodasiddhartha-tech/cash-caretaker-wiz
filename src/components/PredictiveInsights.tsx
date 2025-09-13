import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb,
  Brain,
  ArrowRight
} from "lucide-react";

const insights = [
  {
    type: "prediction",
    title: "End of Month Forecast",
    description: "Based on current spending, you'll likely spend $1,650 this month",
    impact: "high",
    recommendation: "Consider reducing entertainment spending by $150",
    icon: TrendingUp,
    color: "text-info",
  },
  {
    type: "alert",
    title: "Food Budget Alert",
    description: "You're spending 40% more on food than last month",
    impact: "medium",
    recommendation: "Try meal prepping to save $80/month",
    icon: AlertTriangle,
    color: "text-warning",
  },
  {
    type: "opportunity",
    title: "Savings Opportunity",
    description: "You could save $45 by switching to a student transport pass",
    impact: "low",
    recommendation: "Check university transport discounts",
    icon: Lightbulb,
    color: "text-success",
  },
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high": return "bg-destructive/10 text-destructive border-destructive/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-success/10 text-success border-success/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

export const PredictiveInsights = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2 text-primary" />
            AI Insights
          </CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Powered by AI
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div 
              key={index}
              className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-background ${insight.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={getImpactColor(insight.impact)}
                    >
                      {insight.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm font-medium text-foreground">
                      💡 {insight.recommendation}
                    </p>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full">
            <Sparkles className="w-4 h-4 mr-2" />
            Get More AI Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};