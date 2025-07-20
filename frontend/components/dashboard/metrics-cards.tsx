import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Users, Zap, AlertTriangle } from 'lucide-react'

export function MetricsCards() {
  const metrics = [
    {
      title: "Total Agents",
      value: "6",
      description: "Active integrations",
      icon: Users,
      trend: "+2 from last month"
    },
    {
      title: "Active Connections",
      value: "4",
      description: "Currently running",
      icon: Activity,
      trend: "All systems operational"
    },
    {
      title: "Data Synced",
      value: "1.2M",
      description: "Records processed",
      icon: Zap,
      trend: "+15% this week"
    },
    {
      title: "Issues",
      value: "1",
      description: "Requires attention",
      icon: AlertTriangle,
      trend: "Database agent offline"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index} className="bg-gray-800 shadow-lg border border-gray-700 hover:border-gray-600 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <p className="text-xs text-gray-400 mt-1">
                {metric.description}
              </p>
              <p className="text-xs text-blue-400 mt-1">
                {metric.trend}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}