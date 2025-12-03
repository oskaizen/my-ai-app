"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { TrendingUp, TrendingDown } from "lucide-react"

export function VendorAnalytics() {
  const vendorPerformance = [
    {
      vendor: "TechSupply Inc",
      contracts: 45,
      variance: 28,
      savings: 340000,
      trend: "up",
      reliability: 72,
    },
    {
      vendor: "OfficePro Ltd",
      contracts: 38,
      variance: 22,
      savings: 280000,
      trend: "down",
      reliability: 85,
    },
    {
      vendor: "GlobalServices",
      contracts: 52,
      variance: 8,
      savings: 520000,
      trend: "up",
      reliability: 92,
    },
    {
      vendor: "StationeryPlus",
      contracts: 28,
      variance: 5,
      savings: 180000,
      trend: "stable",
      reliability: 95,
    },
  ]

  const trendData = [
    { month: "Jan", TechSupply: 32, OfficePro: 24, GlobalServices: 10 },
    { month: "Feb", TechSupply: 28, OfficePro: 22, GlobalServices: 8 },
    { month: "Mar", TechSupply: 30, OfficePro: 20, GlobalServices: 7 },
    { month: "Apr", TechSupply: 26, OfficePro: 18, GlobalServices: 6 },
    { month: "May", TechSupply: 24, OfficePro: 16, GlobalServices: 5 },
    { month: "Jun", TechSupply: 28, OfficePro: 22, GlobalServices: 8 },
  ]

  const performanceMatrix = [
    { vendor: "TechSupply Inc", spending: 1200000, variance: 28 },
    { vendor: "OfficePro Ltd", spending: 950000, variance: 22 },
    { vendor: "GlobalServices", spending: 1850000, variance: 8 },
    { vendor: "StationeryPlus", spending: 450000, variance: 5 },
    { vendor: "CleanServices", spending: 320000, variance: 12 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {vendorPerformance.map((vendor) => (
          <Card key={vendor.vendor} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground">{vendor.vendor}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Contracts</p>
                <p className="text-2xl font-bold text-foreground">{vendor.contracts}</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Avg Variance</p>
                  <p className={`text-lg font-semibold ${vendor.variance > 15 ? "text-destructive" : "text-primary"}`}>
                    +{vendor.variance}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Reliability</p>
                  <Badge variant={vendor.reliability > 90 ? "default" : "secondary"}>{vendor.reliability}%</Badge>
                </div>
              </div>
              <div className="flex items-center gap-1 pt-2">
                {vendor.trend === "up" && <TrendingUp className="w-4 h-4 text-destructive" />}
                {vendor.trend === "down" && <TrendingDown className="w-4 h-4 text-primary" />}
                <span className="text-xs text-muted-foreground">{vendor.trend} trend</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Pricing Variance Trend</CardTitle>
          <CardDescription>Average variance percentage by vendor over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }} />
                <Legend />
                <Line type="monotone" dataKey="TechSupply" stroke="#1e3a5f" strokeWidth={2} name="TechSupply Inc" />
                <Line type="monotone" dataKey="OfficePro" stroke="#4d9ee5" strokeWidth={2} name="OfficePro Ltd" />
                <Line type="monotone" dataKey="GlobalServices" stroke="#7db8f0" strokeWidth={2} name="GlobalServices" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Spending vs Variance Analysis</CardTitle>
          <CardDescription>Vendor spending volume vs pricing variance performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="spending" name="Annual Spending" stroke="#9ca3af" />
                <YAxis dataKey="variance" name="Avg Variance %" stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb" }}
                  formatter={(value, name) => {
                    if (name === "Annual Spending") return `$${value.toLocaleString()}`
                    return `${value}%`
                  }}
                />
                <Scatter name="Vendors" data={performanceMatrix} fill="#1e3a5f" />
              </ScatterChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
