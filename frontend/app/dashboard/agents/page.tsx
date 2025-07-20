import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Database, 
  Cloud, 
  MessageSquare, 
  Users, 
  BarChart3, 
  Settings,
  Play,
  Pause,
  Square
} from 'lucide-react'

// Using the same mock data as the dashboard
const agents = [
  {
    id: 1,
    name: "SAP ERP Integration",
    description: "Connects to SAP ERP system for real-time data synchronization and business process automation",
    status: "active",
    agent_type: "sap_erp",
    created_at: "2025-07-20T13:08:53",
    last_sync: "2 minutes ago",
    records_processed: "24,532",
    config: {
      sap_server: "sap.company.com",
      sap_client: "100",
      modules: ["FI", "CO", "SD", "MM"]
    }
  },
  {
    id: 2,
    name: "SAP SuccessFactors HR",
    description: "Integrates with SAP SuccessFactors for employee data and HR process automation",
    status: "active",
    agent_type: "sap_successfactors",
    created_at: "2025-07-20T13:08:53",
    last_sync: "5 minutes ago",
    records_processed: "8,943",
    config: {
      datacenter: "eu1",
      company_id: "COMP001"
    }
  },
  {
    id: 3,
    name: "Salesforce CRM Agent",
    description: "Integrates with Salesforce for customer data management and sales automation",
    status: "active",
    agent_type: "salesforce",
    created_at: "2025-07-20T13:08:53",
    last_sync: "1 minute ago",
    records_processed: "15,642"
  },
  {
    id: 4,
    name: "Slack Communication Bot",
    description: "AI-powered Slack bot for team communication and workflow automation",
    status: "active",
    agent_type: "slack",
    created_at: "2025-07-20T13:08:53",
    last_sync: "30 seconds ago",
    records_processed: "2,351"
  },
  {
    id: 5,
    name: "AWS Cloud Monitor",
    description: "Monitors AWS infrastructure and provides automated scaling recommendations",
    status: "inactive",
    agent_type: "aws_monitor",
    created_at: "2025-07-20T13:08:53",
    last_sync: "2 hours ago",
    records_processed: "45,123"
  },
  {
    id: 6,
    name: "Database Analytics Agent",
    description: "Analyzes database performance and suggests optimizations",
    status: "error",
    agent_type: "database_analytics",
    created_at: "2025-07-20T13:08:53",
    last_sync: "Failed",
    records_processed: "0"
  }
]

function getAgentIcon(type: string) {
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

function getStatusColor(status: string) {
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

export default function AgentsPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">AI Agents</h1>
            <p className="text-gray-400 mt-1">Manage and monitor your integration agents</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
              <Search className="h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              New Agent
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-800 border border-gray-700">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-white">6</div>
            <p className="text-sm text-gray-400">Total Agents</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border border-gray-700">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-400">4</div>
            <p className="text-sm text-gray-400">Active</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border border-gray-700">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-400">1</div>
            <p className="text-sm text-gray-400">Inactive</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border border-gray-700">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-400">1</div>
            <p className="text-sm text-gray-400">Errors</p>
          </CardContent>
        </Card>
      </div>

      {/* Agents Table */}
      <Card className="bg-gray-800 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">All Agents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agents.map((agent) => {
              const Icon = getAgentIcon(agent.agent_type)
              return (
                <div 
                  key={agent.id} 
                  className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-800">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{agent.name}</h3>
                      <p className="text-sm text-gray-400">{agent.description}</p>
                      {agent.agent_type.includes('sap') && (
                        <div className="flex items-center mt-1">
                          <Badge variant="outline" className="bg-blue-900/30 text-blue-400 border-blue-800 text-xs">
                            SAP Enterprise
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Last Sync</div>
                      <div className="text-white">{agent.last_sync}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Records</div>
                      <div className="text-white">{agent.records_processed}</div>
                    </div>
                    <Badge variant="outline" className={`${getStatusColor(agent.status)}`}>
                      {agent.status.toUpperCase()}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      {agent.status === 'active' ? (
                        <Button size="sm" variant="outline" className="border-gray-700 bg-gray-800 text-gray-300">
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="border-gray-700 bg-gray-800 text-gray-300">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="border-gray-700 bg-gray-800 text-gray-300">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}