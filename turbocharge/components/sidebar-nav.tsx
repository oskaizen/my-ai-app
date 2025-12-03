"use client"

import { BarChart3, FileText, Settings, TrendingUp, Users, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarNavProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function SidebarNav({ activeView, setActiveView }: SidebarNavProps) {
  const navItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "contracts", label: "Contracts", icon: FileText },
    { id: "upload", label: "Upload", icon: Upload },
    { id: "benchmarks", label: "Benchmarks", icon: TrendingUp },
    { id: "vendors", label: "Vendors", icon: Users },
    { id: "reports", label: "Reports", icon: Settings },
  ]

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground">Turbocharge</h2>
        <p className="text-xs text-sidebar-foreground/60 mt-1">Procurement Intelligence</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveView(item.id)}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          )
        })}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="outline" className="w-full text-xs bg-transparent">
          Settings
        </Button>
      </div>
    </aside>
  )
}
