"use client"

import { useState } from "react"
import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { OverviewCards } from "@/components/overview-cards"
import { ContractTable } from "@/components/contract-table"
import { AlertsPanel } from "@/components/alerts-panel"
import { AnalyticsSection } from "@/components/analytics-section"
import { ContractUpload } from "@/components/contract-upload"
import { BenchmarkConfig } from "@/components/benchmark-config"
import { VendorAnalytics } from "@/components/vendor-analytics"
import { ReportsView } from "@/components/reports-view"

export function Dashboard() {
  const [activeView, setActiveView] = useState("overview")

  return (
    <div className="flex h-screen bg-background">
      <SidebarNav activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {activeView === "overview" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-semibold text-foreground mb-2">Procurement Dashboard</h1>
                  <p className="text-muted-foreground">Monitor contracts, benchmarks, and savings opportunities</p>
                </div>
                <OverviewCards />
                <AlertsPanel />
                <AnalyticsSection />
              </div>
            )}
            {activeView === "contracts" && (
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-6">Contracts</h1>
                <ContractTable />
              </div>
            )}
            {activeView === "upload" && (
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-6">Upload Contracts</h1>
                <ContractUpload />
              </div>
            )}
            {activeView === "benchmarks" && (
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-6">Pricing Benchmarks</h1>
                <BenchmarkConfig />
              </div>
            )}
            {activeView === "vendors" && (
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-6">Vendor Performance</h1>
                <VendorAnalytics />
              </div>
            )}
            {activeView === "reports" && (
              <div>
                <h1 className="text-3xl font-semibold text-foreground mb-6">Reports & Investigation</h1>
                <ReportsView />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
