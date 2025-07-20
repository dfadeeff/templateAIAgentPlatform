export interface Agent {
  id: number
  name: string
  description?: string
  status: string
  agent_type: string
  created_at: string
  updated_at?: string
  is_active: boolean
  config?: Record<string, any>
}