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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"

export function AnalyticsSection() {
  const savingsData = [
    { month: "Jan", savings: 120000, contracts: 320 },
    { month: "Feb", savings: 180000, contracts: 380 },
    { month: "Mar", savings: 220000, contracts: 420 },
    { month: "Apr", savings: 290000, contracts: 480 },
    { month: "May", savings: 350000, contracts: 540 },
    { month: "Jun", savings: 420000, contracts: 620 },
  ]

  const categoryData = [
    { name: "IT Equipment", value: 35, fill: "#1e3a5f" },
    { name: "Furniture", value: 25, fill: "#2d5a8c" },
    { name: "Office Supplies", value: 20, fill: "#3d7eb8" },
    { name: "Services", value: 12, fill: "#4d9ee5" },
    { name: "Other", value: 8, fill: "#7db8f0" },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Savings Trend</CardTitle>
          <CardDescription>Monthly savings and contract volume</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={savingsData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }} />
                <Legend />
                <Line type="monotone" dataKey="savings" stroke="#1e3a5f" strokeWidth={2} name="Savings ($)" />
                <Line type="monotone" dataKey="contracts" stroke="#4d9ee5" strokeWidth={2} name="Contracts" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Category Distribution</CardTitle>
          <CardDescription>Flagged items by category</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
