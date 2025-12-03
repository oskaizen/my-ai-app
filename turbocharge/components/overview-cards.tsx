"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, DollarSign, TrendingDown, CheckCircle } from "lucide-react"

export function OverviewCards() {
  const cards = [
    {
      title: "Total Contracts Analyzed",
      value: "2,847",
      change: "+12% this month",
      icon: CheckCircle,
      color: "text-primary",
    },
    {
      title: "Flagged for Review",
      value: "143",
      change: "28 high severity",
      icon: AlertTriangle,
      color: "text-destructive",
    },
    {
      title: "Potential Savings",
      value: "$4.2M",
      change: "+$890K this month",
      icon: DollarSign,
      color: "text-primary",
    },
    {
      title: "Benchmark Compliance",
      value: "87%",
      change: "+3% from last month",
      icon: TrendingDown,
      color: "text-primary",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">{card.title}</CardTitle>
              <Icon className={`w-5 h-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{card.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{card.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
