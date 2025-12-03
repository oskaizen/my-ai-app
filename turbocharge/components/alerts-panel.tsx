"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, AlertCircle } from "lucide-react"

export function AlertsPanel() {
  const alerts = [
    {
      id: 1,
      severity: "critical",
      vendor: "TechSupply Inc",
      item: "Laptop Computers",
      variance: "+45%",
      message: "Office supplies exceed benchmark by 45%",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      severity: "high",
      vendor: "OfficePro Ltd",
      item: "Desk Chairs",
      variance: "+32%",
      message: "Furniture pricing significantly above market rate",
      timestamp: "4 hours ago",
    },
    {
      id: 3,
      severity: "medium",
      vendor: "GlobalServices",
      item: "Consulting Hours",
      variance: "+18%",
      message: "Service rate variance detected",
      timestamp: "6 hours ago",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Active Alerts</CardTitle>
        <CardDescription>Items flagged for pricing review</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            className={`border-l-4 ${
              alert.severity === "critical"
                ? "border-l-destructive bg-destructive/5"
                : alert.severity === "high"
                  ? "border-l-orange-500 bg-orange-50"
                  : "border-l-yellow-500 bg-yellow-50"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {alert.severity === "critical" ? (
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                  )}
                  <span className="font-semibold text-foreground">{alert.vendor}</span>
                  <Badge variant={alert.severity === "critical" ? "destructive" : "secondary"}>{alert.variance}</Badge>
                </div>
                <AlertDescription className="text-sm text-foreground/80">
                  {alert.item}: {alert.message}
                </AlertDescription>
                <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}
