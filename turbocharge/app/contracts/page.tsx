import { ContractTable } from "@/components/contract-table"

export default function ContractsPage() {
  return (
    <main className="min-h-screen p-8">
      <div>
        <h1 className="text-3xl font-semibold text-foreground mb-6">Contracts</h1>
        <ContractTable />
      </div>
    </main>
  )
}

