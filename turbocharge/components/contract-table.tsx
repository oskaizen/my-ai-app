"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export function ContractTable() {
  const contracts = [
    {
      id: 1,
      vendor: "TechSupply Inc",
      item: "Laptop Computers",
      quantity: 250,
      unitPrice: 1450,
      benchmark: 1000,
      variance: 45,
      category: "IT Equipment",
      status: "flagged",
    },
    {
      id: 2,
      vendor: "OfficePro Ltd",
      item: "Desk Chairs",
      quantity: 150,
      unitPrice: 380,
      benchmark: 280,
      variance: 36,
      category: "Furniture",
      status: "flagged",
    },
    {
      id: 3,
      vendor: "StationeryPlus",
      item: "Paper (Reams)",
      quantity: 5000,
      unitPrice: 5.5,
      benchmark: 5.25,
      variance: 5,
      category: "Office Supplies",
      status: "compliant",
    },
    {
      id: 4,
      vendor: "CleanServices Co",
      item: "Janitorial Supplies",
      quantity: 100,
      unitPrice: 45,
      benchmark: 42,
      variance: 7,
      category: "Maintenance",
      status: "compliant",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Contract Analysis</CardTitle>
        <CardDescription>Detailed breakdown of analyzed contracts with variance analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Vendor</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Item</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Qty</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Unit Price</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Benchmark</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Variance</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-4 px-4 text-foreground font-medium">{contract.vendor}</td>
                  <td className="py-4 px-4 text-foreground">{contract.item}</td>
                  <td className="py-4 px-4 text-right text-foreground">{contract.quantity.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right text-foreground">${contract.unitPrice.toFixed(2)}</td>
                  <td className="py-4 px-4 text-right text-foreground">${contract.benchmark.toFixed(2)}</td>
                  <td
                    className={`py-4 px-4 text-right font-semibold ${
                      contract.variance > 20
                        ? "text-destructive"
                        : contract.variance > 10
                          ? "text-orange-500"
                          : "text-primary"
                    }`}
                  >
                    +{contract.variance}%
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Badge variant={contract.status === "flagged" ? "destructive" : "secondary"}>
                      {contract.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
