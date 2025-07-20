import { Button } from '@/components/ui/button'
import { Plus, Bell, Search } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">AI Platform Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your AI agents and enterprise integrations</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" size="sm" className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
            <Bell className="h-4 w-4" />
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4" />
            Add Integration
          </Button>
        </div>
      </div>
    </div>
  )
}