"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

export function VendorMarginAnalysis() {
  const vendors = [
    {
      id: 1,
      name: "EduServe Solutions",
      service: "Special Education",
      proposedPrice: 650,
      benchmarkPrice: 639.39,
      variance: 1.68,
      costPerUnit: 550,
      margin: 0.153,
      status: "healthy",
      recommendation: "Acceptable - within healthy margin range",
    },
    {
      id: 2,
      name: "TransportPlus",
      service: "Transport Services",
      proposedPrice: 295,
      benchmarkPrice: 322.56,
      variance: -8.53,
      costPerUnit: 290,
      margin: 0.017,
      status: "warning",
      recommendation: "Concerning - margin below target, may indicate quality risk",
    },
    {
      id: 3,
      name: "HighwayDynamics",
      service: "Highway Maintenance",
      proposedPrice: 2100,
      benchmarkPrice: 1947,
      variance: 7.87,
      costPerUnit: 1800,
      margin: 0.143,
      status: "concern",
      recommendation: "Review pricing - significantly above benchmark",
    },
    {
      id: 4,
      name: "Infrastructure Experts",
      service: "Highway Maintenance",
      proposedPrice: 1920,
      benchmarkPrice: 1947,
      variance: -1.39,
      costPerUnit: 1650,
      margin: 0.167,
      status: "healthy",
      recommendation: "Strong - competitive pricing with healthy margin",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      case "concern":
        return "bg-red-50 border-red-200"
      default:
        return "bg-card border-border"
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-600">Healthy</Badge>
      case "warning":
        return <Badge className="bg-yellow-600">Warning</Badge>
      case "concern":
        return <Badge className="bg-red-600">Concerning</Badge>
      default:
        return <Badge variant="secondary">Neutral</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Vendor Financial Health</CardTitle>
          <CardDescription>Proposed pricing vs benchmark with margin analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className={`p-4 border rounded-lg transition-colors ${getStatusColor(vendor.status)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{vendor.name}</h4>
                      {getStatusBadge(vendor.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{vendor.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">${vendor.proposedPrice.toLocaleString()}</div>
                    <div
                      className={`text-sm flex items-center justify-end gap-1 ${vendor.variance < 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {vendor.variance < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                      {Math.abs(vendor.variance).toFixed(2)}% vs benchmark
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Cost/Unit</span>
                    <div className="font-semibold text-foreground">${vendor.costPerUnit.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Benchmark</span>
                    <div className="font-semibold text-foreground">${vendor.benchmarkPrice.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Vendor Margin</span>
                    <div className="font-semibold text-foreground">{(vendor.margin * 100).toFixed(1)}%</div>
                  </div>
                </div>

                <div className="p-3 bg-background rounded border border-border">
                  <div className="flex gap-2">
                    <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{vendor.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
