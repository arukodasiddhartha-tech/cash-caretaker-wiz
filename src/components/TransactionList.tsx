import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Coffee, 
  Car, 
  Book, 
  ShoppingBag, 
  Film, 
  MoreHorizontal,
  CreditCard 
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Starbucks Coffee",
    amount: -5.85,
    category: "food",
    date: "Today, 2:30 PM",
    icon: Coffee,
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: -12.50,
    category: "transport",
    date: "Today, 1:15 PM",
    icon: Car,
  },
  {
    id: 3,
    description: "Textbook Purchase",
    amount: -89.99,
    category: "study",
    date: "Yesterday, 4:20 PM",
    icon: Book,
  },
  {
    id: 4,
    description: "Movie Tickets",
    amount: -24.00,
    category: "entertainment",
    date: "Yesterday, 7:30 PM",
    icon: Film,
  },
  {
    id: 5,
    description: "Grocery Shopping",
    amount: -67.43,
    category: "food",
    date: "2 days ago",
    icon: ShoppingBag,
  },
  {
    id: 6,
    description: "Part-time Job",
    amount: +150.00,
    category: "income",
    date: "3 days ago",
    icon: CreditCard,
  },
  {
    id: 7,
    description: "Amazon Purchase",
    amount: -34.99,
    category: "shopping",
    date: "3 days ago",
    icon: ShoppingBag,
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    food: "bg-food/10 text-food border-food/20",
    transport: "bg-transport/10 text-transport border-transport/20",
    study: "bg-study/10 text-study border-study/20",
    entertainment: "bg-entertainment/10 text-entertainment border-entertainment/20",
    shopping: "bg-shopping/10 text-shopping border-shopping/20",
    income: "bg-success/10 text-success border-success/20",
  };
  return colors[category] || "bg-other/10 text-other border-other/20";
};

export const TransactionList = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-0 animate-slide-up">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-primary" />
            Recent Transactions
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ScrollArea className="h-[400px]">
          <div className="space-y-1">
            {transactions.map((transaction) => {
              const Icon = transaction.icon;
              return (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors mx-6 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(transaction.category)}
                    >
                      {transaction.category}
                    </Badge>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.amount > 0 
                          ? 'text-success' 
                          : 'text-foreground'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};