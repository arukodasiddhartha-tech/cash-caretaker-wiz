import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Target,
  AlertCircle,
  Sparkles,
  Coffee,
  Car,
  Book,
  ShoppingBag,
  Film,
  MoreHorizontal
} from "lucide-react";
import { FinanceChart } from "@/components/FinanceChart";
import { TransactionList } from "@/components/TransactionList";
import { BudgetProgress } from "@/components/BudgetProgress";
import { PredictiveInsights } from "@/components/PredictiveInsights";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary px-6 py-8 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Finance Manager</h1>
              <p className="text-white/80 mt-1">Track, predict, and manage your student finances</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="w-4 h-4 mr-1" />
                AI Enabled
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$2,847.32</div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-success">+12.5%</span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                This Month Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$1,234.56</div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingDown className="w-4 h-4 text-warning mr-1" />
                <span className="text-warning">+8.2%</span>
                <span className="text-muted-foreground ml-1">vs budget</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Budget Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$1,500.00</div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-success">82%</span>
                <span className="text-muted-foreground ml-1">of budget used</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-warning shadow-primary border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-warning-foreground flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Budget Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-warning-foreground">Over Limit</div>
              <div className="text-sm text-warning-foreground/80 mt-1">
                Food category exceeds budget by $45
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Insights Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FinanceChart />
          <PredictiveInsights />
        </div>

        {/* Budget Progress and Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BudgetProgress />
          </div>
          <div className="lg:col-span-2">
            <TransactionList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;