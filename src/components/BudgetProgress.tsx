import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, Plus } from "lucide-react";

const budgetCategories = [
  {
    name: "Food & Dining",
    spent: 450,
    budget: 400,
    color: "food",
    percentage: 112.5,
  },
  {
    name: "Study Materials",
    spent: 320,
    budget: 500,
    color: "study",
    percentage: 64,
  },
  {
    name: "Transportation",
    spent: 180,
    budget: 250,
    color: "transport",
    percentage: 72,
  },
  {
    name: "Entertainment",
    spent: 160,
    budget: 200,
    color: "entertainment",
    percentage: 80,
  },
  {
    name: "Shopping",
    spent: 124,
    budget: 150,
    color: "shopping",
    percentage: 82.7,
  },
];

const getProgressColor = (percentage: number) => {
  if (percentage > 100) return "bg-destructive";
  if (percentage > 80) return "bg-warning";
  return "bg-success";
};

export const BudgetProgress = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2 text-primary" />
            Budget Overview
          </CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-1" />
            Add Budget
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgetCategories.map((category) => (
          <div key={category.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">{category.name}</h4>
              <span className={`text-sm font-semibold ${
                category.percentage > 100 
                  ? 'text-destructive' 
                  : category.percentage > 80 
                    ? 'text-warning'
                    : 'text-success'
              }`}>
                {category.percentage.toFixed(0)}%
              </span>
            </div>
            <Progress 
              value={Math.min(category.percentage, 100)} 
              className="h-2"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${category.spent} spent</span>
              <span>${category.budget} budget</span>
            </div>
            {category.percentage > 100 && (
              <div className="text-xs text-destructive bg-destructive/10 p-2 rounded">
                Over budget by ${(category.spent - category.budget).toFixed(2)}
              </div>
            )}
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Total Budget</span>
            <span className="font-semibold">$1,234 / $1,500</span>
          </div>
          <Progress value={82.3} className="mt-2 h-3" />
          <p className="text-xs text-muted-foreground mt-2">
            You have $266 left for this month
          </p>
        </div>
      </CardContent>
    </Card>
  );
};