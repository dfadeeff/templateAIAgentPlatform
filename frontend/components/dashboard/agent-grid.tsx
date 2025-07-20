'use client'

import { AgentCard } from './agent-card'
import { Agent } from '@/types/agent'

// Mock data for now - this will show SAP and other integrations
const mockAgents: Agent[] = [
  {
    id: 1,
    name: "SAP ERP Integration",
    description: "Connects to SAP ERP system for real-time data synchronization and business process automation",
    status: "active",
    agent_type: "sap_erp",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      sap_server: "sap.company.com",
      sap_client: "100",
      modules: ["FI", "CO", "SD", "MM"],
      sync_interval: 300,
      authentication: "oauth2"
    }
  },
  {
    id: 2,
    name: "SAP SuccessFactors HR",
    description: "Integrates with SAP SuccessFactors for employee data and HR process automation",
    status: "active",
    agent_type: "sap_successfactors",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      datacenter: "eu1",
      company_id: "COMP001",
      modules: ["Employee Central", "Performance & Goals", "Learning"],
      sync_schedule: "daily"
    }
  },
  {
    id: 3,
    name: "Salesforce CRM Agent",
    description: "Integrates with Salesforce for customer data management and sales automation",
    status: "active",
    agent_type: "salesforce",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      instance_url: "https://company.salesforce.com",
      api_version: "v58.0",
      objects: ["Account", "Contact", "Opportunity", "Lead"],
      sync_interval: 600
    }
  },
  {
    id: 4,
    name: "Slack Communication Bot",
    description: "AI-powered Slack bot for team communication and workflow automation",
    status: "active",
    agent_type: "slack",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      workspace: "company-workspace",
      channels: ["#general", "#ai-platform", "#alerts"],
      features: ["nlp", "task_automation", "reporting"]
    }
  },
  {
    id: 5,
    name: "AWS Cloud Monitor",
    description: "Monitors AWS infrastructure and provides automated scaling recommendations",
    status: "inactive",
    agent_type: "aws_monitor",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      regions: ["us-east-1", "eu-west-1"],
      services: ["EC2", "RDS", "Lambda", "S3"],
      alert_threshold: 80
    }
  },
  {
    id: 6,
    name: "Database Analytics Agent",
    description: "Analyzes database performance and suggests optimizations",
    status: "error",
    agent_type: "database_analytics",
    created_at: "2025-07-20T13:08:53",
    updated_at: null,
    is_active: true,
    config: {
      databases: ["postgresql", "mysql"],
      metrics: ["query_performance", "index_usage", "table_size"],
      report_frequency: "weekly"
    }
  }
]

export function AgentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockAgents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  )
}