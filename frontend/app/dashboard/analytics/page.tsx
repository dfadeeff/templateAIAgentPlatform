import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Database, 
  Clock, 
  AlertTriangle,
  Download,
  RefreshCw,
  Calendar
} from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="text-gray-400 mt-1">Monitor performance and insights across all integrations</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 days
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total Data Processed</CardTitle>
            <Database className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.4M</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Average Response Time</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">145ms</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingDown className="h-3 w-3 mr-1" />
              -8% faster
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Uptime</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">99.8%</div>
            <p className="text-xs text-green-400 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +0.2% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Error Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">0.12%</div>
            <p className="text-xs text-red-400 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +0.02% this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Agent Performance */}
        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Agent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white">SAP ERP Integration</span>
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">Enterprise</Badge>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">98.7%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white">SAP SuccessFactors HR</span>
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">Enterprise</Badge>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">99.2%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-white">Salesforce CRM Agent</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">97.4%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-white">AWS Cloud Monitor</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">85.3%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-white">Database Analytics Agent</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">0%</div>
                  <div className="text-xs text-red-400">Connection Failed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Flow */}
        <Card className="bg-gray-800 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Data Flow (Last 24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">SAP ERP → Platform</div>
                  <div className="text-xs text-gray-400">Financial & Operational Data</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">24,532</div>
                  <div className="text-xs text-green-400">+5.2%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">SAP SuccessFactors → Platform</div>
                  <div className="text-xs text-gray-400">Employee & HR Data</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">8,943</div>
                  <div className="text-xs text-green-400">+2.1%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Salesforce → Platform</div>
                  <div className="text-xs text-gray-400">Customer & Sales Data</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">15,642</div>
                  <div className="text-xs text-green-400">+8.7%</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Slack → Platform</div>
                  <div className="text-xs text-gray-400">Communication Data</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">2,351</div>
                  <div className="text-xs text-gray-400">+1.2%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-800 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-white text-sm">SAP ERP sync completed successfully</div>
                <div className="text-xs text-gray-400">2 minutes ago • 1,245 records processed</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-white text-sm">Salesforce data refresh completed</div>
                <div className="text-xs text-gray-400">5 minutes ago • 892 records updated</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-white text-sm">AWS Monitor: High CPU usage detected</div>
                <div className="text-xs text-gray-400">12 minutes ago • Auto-scaling triggered</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-white text-sm">Database Analytics Agent connection failed</div>
                <div className="text-xs text-gray-400">2 hours ago • Retrying in 15 minutes</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}