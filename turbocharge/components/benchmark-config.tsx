"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Edit2, Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BenchmarkConfig() {
  const [benchmarks, setBenchmarks] = useState([
    {
      id: 1,
      category: "Special Education Services",
      service: "Special Education SEN School",
      costDrivers: {
        directLabor: 65000,
        laborPercentage: 55,
        materials: 12000,
        overhead: 18000,
        compliance: 5000,
        transportation: 0,
      },
      margins: {
        targetMargin: 0.15,
        operatingMargin: 0.12,
      },
      annualCapacity: 180,
      costPerUnit: 555.56,
      recommendedPrice: 639.39,
      status: "active",
      expanded: false,
    },
    {
      id: 2,
      category: "Transport Services",
      service: "School Transport Contracts",
      costDrivers: {
        directLabor: 45000,
        laborPercentage: 62,
        materials: 8000,
        overhead: 12000,
        compliance: 3000,
        transportation: 6000,
      },
      margins: {
        targetMargin: 0.12,
        operatingMargin: 0.09,
      },
      annualCapacity: 250,
      costPerUnit: 288,
      recommendedPrice: 322.56,
      status: "active",
      expanded: false,
    },
    {
      id: 3,
      category: "Highway Maintenance",
      service: "Road & Highway Services",
      costDrivers: {
        directLabor: 85000,
        laborPercentage: 45,
        materials: 35000,
        overhead: 22000,
        compliance: 8000,
        transportation: 15000,
      },
      margins: {
        targetMargin: 0.18,
        operatingMargin: 0.15,
      },
      annualCapacity: 100,
      costPerUnit: 1650,
      recommendedPrice: 1947,
      status: "active",
      expanded: false,
    },
  ])
  const [isAddingNew, setIsAddingNew] = useState(false)

  const toggleExpanded = (id: any) => {
    setBenchmarks(benchmarks.map((b) => (b.id === id ? { ...b, expanded: !b.expanded } : b)))
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-foreground">Financial Benchmarks</CardTitle>
            <CardDescription>First-principles cost modeling with financial projections</CardDescription>
          </div>
          <Button onClick={() => setIsAddingNew(!isAddingNew)}>
            <Plus className="w-4 h-4 mr-2" />
            New Benchmark
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {isAddingNew && (
            <Alert className="border-primary/50 bg-primary/5">
              <AlertDescription>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Service Category</label>
                    <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm">
                      <option>Special Education Services</option>
                      <option>Transport Services</option>
                      <option>Highway Maintenance</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Service Description"
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Annual Capacity (units/contracts)"
                    className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setIsAddingNew(false)}>
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setIsAddingNew(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpanded(benchmark.id)}
                  className="w-full p-4 hover:bg-muted/30 transition-colors flex items-start justify-between"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{benchmark.service}</h4>
                      <Badge variant="secondary">{benchmark.category}</Badge>
                      <Badge className="bg-blue-600 text-white">Active</Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>
                        Cost/Unit:{" "}
                        <span className="text-foreground font-medium">
                          ${benchmark.costPerUnit.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </span>
                      </span>
                      <span>
                        Recommended:{" "}
                        <span className="text-foreground font-medium text-green-700">
                          ${benchmark.recommendedPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </span>
                      </span>
                      <span>
                        Margin:{" "}
                        <span className="text-foreground font-medium">
                          {(benchmark.margins.targetMargin * 100).toFixed(1)}%
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {benchmark.expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {benchmark.expanded && (
                  <div className="border-t border-border bg-muted/20 p-4 space-y-4">
                    {/* Income Statement Projection */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 text-sm">Income Statement Projection</h5>
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Annual Revenue (units × price)</span>
                            <span className="font-medium">
                              $
                              {(benchmark.annualCapacity * benchmark.recommendedPrice).toLocaleString("en-US", {
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                          <div className="border-t border-border pt-2 flex justify-between font-medium">
                            <span>Total Cost of Delivery</span>
                            <span>
                              $
                              {(benchmark.annualCapacity * benchmark.costPerUnit).toLocaleString("en-US", {
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                          <div className="border-t border-border pt-2 flex justify-between text-green-700 font-semibold">
                            <span>Operating Margin</span>
                            <span>
                              $
                              {(
                                benchmark.annualCapacity * benchmark.recommendedPrice -
                                benchmark.annualCapacity * benchmark.costPerUnit
                              ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Margin %</span>
                            <span>
                              {(
                                ((benchmark.recommendedPrice - benchmark.costPerUnit) / benchmark.recommendedPrice) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 text-sm">Cost Driver Analysis</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Direct Labor</span>
                          <span className="font-medium">
                            ${benchmark.costDrivers.directLabor.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({benchmark.costDrivers.laborPercentage}%)
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Materials & Equipment</span>
                          <span className="font-medium">
                            ${benchmark.costDrivers.materials.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Overhead & Administration</span>
                          <span className="font-medium">
                            ${benchmark.costDrivers.overhead.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Compliance & Training</span>
                          <span className="font-medium">
                            ${benchmark.costDrivers.compliance.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        {benchmark.costDrivers.transportation > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Transportation</span>
                            <span className="font-medium">
                              $
                              {benchmark.costDrivers.transportation.toLocaleString("en-US", {
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                        )}
                        <div className="border-t border-border pt-2 flex justify-between font-semibold text-foreground">
                          <span>Total Annual Cost</span>
                          <span>
                            $
                            {Object.values(benchmark.costDrivers)
                              .filter((_, idx) => idx < 5 || (idx === 5 && benchmark.costDrivers.transportation > 0))
                              .reduce((sum, val) => (typeof val === "number" && val > 0 ? sum + val : sum), 0)
                              .toLocaleString("en-US", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Vendor Margin Analysis */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 text-sm">Vendor Financial Targets</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-background rounded-lg p-3 border border-border">
                          <div className="text-xs text-muted-foreground mb-1">Target Margin</div>
                          <div className="text-lg font-semibold text-foreground">
                            {(benchmark.margins.targetMargin * 100).toFixed(1)}%
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">Healthy profit range</div>
                        </div>
                        <div className="bg-background rounded-lg p-3 border border-border">
                          <div className="text-xs text-muted-foreground mb-1">Operating Margin</div>
                          <div className="text-lg font-semibold text-green-700">
                            {(benchmark.margins.operatingMargin * 100).toFixed(1)}%
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">After all costs</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2 border-t border-border">
                      <Button variant="outline" size="sm" onClick={() => toggleExpanded(benchmark.id)}>
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Model
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Service Category Templates</CardTitle>
          <CardDescription>Pre-built financial models for complex government contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <TemplateCard
              title="Special Education"
              description="SEN schools, specialist services"
              metrics={["Labor intensive", "Compliance focused", "Capacity: 150-300"]}
            />
            <TemplateCard
              title="Transport Services"
              description="School & public transport contracts"
              metrics={["Vehicle depreciation", "Fuel cost drivers", "Capacity: 200-500"]}
            />
            <TemplateCard
              title="Highway Maintenance"
              description="Roads, maintenance, infrastructure"
              metrics={["Material heavy", "Equipment costs", "Capacity: 50-200"]}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TemplateCard({ title, description, metrics }: any) {
  return (
    <button className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors text-left bg-background">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="space-y-1">
        {metrics.map((metric: any, idx: any) => (
          <div key={idx} className="text-xs text-muted-foreground flex items-center">
            <span className="inline-block w-1 h-1 bg-primary rounded-full mr-2" />
            {metric}
          </div>
        ))}
      </div>
    </button>
  )
}
