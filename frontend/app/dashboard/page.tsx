import { AgentGrid } from '@/components/dashboard/agent-grid'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { MetricsCards } from '@/components/dashboard/metrics-cards'

export default function DashboardPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <DashboardHeader />
      <MetricsCards />
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Active Integrations</h2>
        <AgentGrid />
      </div>
    </div>
  )
}