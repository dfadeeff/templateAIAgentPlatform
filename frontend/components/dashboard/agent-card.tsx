
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Agent } from '@/types/agent'
import { 
  Database, 
  Cloud, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings,
  MoreVertical,
  Circle
} from 'lucide-react'

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const getAgentIcon = (type: string) => {
    switch (type) {
      case 'sap_erp':
      case 'sap_successfactors':
        return Database
      case 'salesforce':
        return Users
      case 'slack':
        return MessageSquare
      case 'aws_monitor':
        return Cloud
      case 'database_analytics':
        return BarChart3
      default:
        return Settings
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500'
      case 'inactive':
        return 'text-gray-400'
      case 'error':
        return 'text-red-500'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-900/50 text-green-400 border-green-800'
      case 'inactive':
        return 'bg-gray-800 text-gray-400 border-gray-600'
      case 'error':
        return 'bg-red-900/50 text-red-400 border-red-800'
      default:
        return 'bg-gray-800 text-gray-400 border-gray-600'
    }
  }

  const Icon = getAgentIcon(agent.agent_type)

  return (
    <Card className="bg-gray-800 border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:border-gray-600">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
              <Icon className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold text-white leading-tight">
                {agent.name}
              </CardTitle>
              <div className="flex items-center mt-1">
                <Circle className={`h-2 w-2 fill-current ${getStatusColor(agent.status)}`} />
                <span className="text-xs text-gray-400 ml-1 capitalize">
                  {agent.status}
                </span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-700">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
            {agent.description || 'No description provided'}
          </p>
          
          <div className="flex items-center justify-between">
            <Badge 
              variant="outline" 
              className={`text-xs font-medium border ${getStatusBadge(agent.status)}`}
            >
              {agent.status.toUpperCase()}
            </Badge>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              {agent.agent_type.replace('_', ' ')}
            </span>
          </div>

          {/* Additional info for SAP agents */}
          {(agent.agent_type === 'sap_erp' || agent.agent_type === 'sap_successfactors') && (
            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">SAP Integration</span>
                <span className="text-blue-400 font-medium">Enterprise Ready</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}