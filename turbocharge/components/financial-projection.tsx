"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

export function FinancialProjection() {
  const projectionData = [
    { month: "Jan", revenue: 64000, cost: 52000, margin: 12000 },
    { month: "Feb", revenue: 68000, cost: 53500, margin: 14500 },
    { month: "Mar", revenue: 72000, cost: 54200, margin: 17800 },
    { month: "Apr", revenue: 75000, cost: 55000, margin: 20000 },
    { month: "May", revenue: 78000, cost: 55800, margin: 22200 },
    { month: "Jun", revenue: 82000, cost: 56500, margin: 25500 },
  ]

  const costBreakdown = [
    { category: "Direct Labor", value: 65000, percent: 55 },
    { category: "Materials", value: 12000, percent: 10 },
    { category: "Overhead", value: 18000, percent: 15 },
    { category: "Compliance", value: 5000, percent: 4 },
    { category: "Transportation", value: 8000, percent: 7 },
    { category: "Profit Margin", value: 12000, percent: 10 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Revenue vs Cost Projection</CardTitle>
          <CardDescription>6-month financial modeling</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0369a1" strokeWidth={2} />
              <Line type="monotone" dataKey="cost" stroke="#dc2626" strokeWidth={2} />
              <Line type="monotone" dataKey="margin" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Cost Structure Breakdown</CardTitle>
          <CardDescription>Annual cost allocation by driver</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costBreakdown} layout="vertical" margin={{ top: 5, right: 30, left: 150, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis type="number" stroke="var(--muted-foreground)" />
              <YAxis dataKey="category" type="category" width={140} stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="value" fill="#0369a1" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
