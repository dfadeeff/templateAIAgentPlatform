import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Database, 
  Shield, 
  Bell, 
  Key, 
  Users, 
  Settings, 
  Save,
  TestTube,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Settings</h1>
            <p className="text-gray-400 mt-1">Configure your AI platform and integrations</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                General
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300">Platform Name</label>
                <div className="mt-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white">
                  AI Platform Enterprise
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Environment</label>
                <div className="mt-1 flex items-center space-x-2">
                  <Badge className="bg-green-900/50 text-green-400 border-green-800">Production</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Time Zone</label>
                <div className="mt-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white">
                  UTC+01:00 (Europe/Berlin)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SAP Integration Settings */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="h-5 w-5 mr-2" />
                SAP Integration
                <Badge className="ml-2 bg-blue-900/50 text-blue-400 border-blue-800">Enterprise</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300">SAP Server</label>
                  <div className="mt-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white">
                    sap.company.com
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Client</label>
                  <div className="mt-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white">
                    100
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Active Modules</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">FI - Financial Accounting</Badge>
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">CO - Controlling</Badge>
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">SD - Sales & Distribution</Badge>
                  <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">MM - Materials Management</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">Sync Interval</label>
                <div className="mt-1 p-3 bg-gray-900 border border-gray-700 rounded-lg text-white">
                  5 minutes
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-white">SAP ERP Connection</span>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Connected</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-white">SAP SuccessFactors</span>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Connected</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-gray-400">Add an extra layer of security</div>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">API Key Rotation</div>
                  <div className="text-sm text-gray-400">Automatic key rotation every 90 days</div>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Encryption at Rest</div>
                  <div className="text-sm text-gray-400">AES-256 encryption for stored data</div>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Enabled</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Agent Status Changes</div>
                  <div className="text-sm text-gray-400">Get notified when agents go online/offline</div>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Error Alerts</div>
                  <div className="text-sm text-gray-400">Immediate notifications for critical errors</div>
                </div>
                <Badge className="bg-green-900/50 text-green-400 border-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
                <div>
                  <div className="text-white font-medium">Weekly Reports</div>
                  <div className="text-sm text-gray-400">Summary of platform activity</div>
                </div>
                <Badge className="bg-gray-800 text-gray-400 border-gray-600">Disabled</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* System Status */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">API Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Database</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">Healthy</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">SAP Connection</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Monitoring</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 text-sm">Partial</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                <TestTube className="h-4 w-4 mr-2" />
                Test All Connections
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                <Key className="h-4 w-4 mr-2" />
                Regenerate API Keys
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                <Database className="h-4 w-4 mr-2" />
                Backup Configuration
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
              >
                <Users className="h-4 w-4 mr-2" />
                Manage Users
              </Button>
            </CardContent>
          </Card>

          {/* License Info */}
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">License</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-400">Plan</div>
                  <div className="text-white font-medium">Enterprise</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Agents Limit</div>
                  <div className="text-white font-medium">6 / Unlimited</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Valid Until</div>
                  <div className="text-white font-medium">Dec 31, 2025</div>
                </div>
                <Badge className="bg-blue-900/50 text-blue-400 border-blue-800">
                  SAP Certified
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}