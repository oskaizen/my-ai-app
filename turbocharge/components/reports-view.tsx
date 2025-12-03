"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, MessageSquare, Plus } from "lucide-react"

export function ReportsView() {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Q2 Overpriced Laptop Contracts Analysis",
      category: "IT Equipment",
      severity: "critical",
      savingsPotential: 850000,
      contractsAffected: 23,
      status: "completed",
      date: "2024-06-15",
      findings: "TechSupply Inc charging 45% above benchmark for enterprise laptops",
    },
    {
      id: 2,
      title: "Furniture Pricing Review",
      category: "Furniture",
      severity: "high",
      savingsPotential: 420000,
      contractsAffected: 18,
      status: "in-progress",
      date: "2024-06-10",
      findings: "OfficePro Ltd premium pricing justified by warranty terms in 12 contracts only",
    },
    {
      id: 3,
      title: "Vendor Performance Scorecard",
      category: "Overall",
      severity: "medium",
      savingsPotential: 340000,
      contractsAffected: 156,
      status: "completed",
      date: "2024-06-01",
      findings: "GlobalServices maintains best pricing compliance at 8% average variance",
    },
  ])
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [investigationNotes, setInvestigationNotes] = useState<string>("")

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive"
      case "high":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reports.map((report) => (
          <Card
            key={report.id}
            className="bg-card border-border cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedReport(report)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant={getSeverityColor(report.severity)}>{report.severity}</Badge>
                <Badge variant="outline" className="text-xs">
                  {report.status}
                </Badge>
              </div>
              <CardTitle className="text-sm font-semibold text-foreground line-clamp-2">{report.title}</CardTitle>
              <CardDescription className="text-xs mt-2">{report.date}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">Potential Savings</p>
                  <p className="font-semibold text-foreground">${(report.savingsPotential / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Contracts</p>
                  <p className="font-semibold text-foreground">{report.contractsAffected}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                <FileText className="w-3 h-3 mr-1" />
                View Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedReport && (
        <Card className="bg-card border-border border-2 border-primary/30">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-foreground">{selectedReport.title}</CardTitle>
                <CardDescription className="mt-2">{selectedReport.findings}</CardDescription>
              </div>
              <Button variant="ghost" onClick={() => setSelectedReport(null)}>
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Potential Savings</p>
                <p className="text-2xl font-bold text-primary">
                  ${(selectedReport.savingsPotential / 1000).toFixed(0)}K
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Contracts Affected</p>
                <p className="text-2xl font-bold text-primary">{selectedReport.contractsAffected}</p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Category</p>
                <p className="text-2xl font-bold text-primary">{selectedReport.category}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-semibold text-foreground block mb-2">Investigation Notes</label>
                <textarea
                  value={investigationNotes}
                  onChange={(e) => setInvestigationNotes(e.target.value)}
                  placeholder="Add investigation findings, negotiation recommendations, or follow-up actions..."
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  rows={4}
                />
              </div>
              <div className="flex gap-2">
                <Button>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Save Notes
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
