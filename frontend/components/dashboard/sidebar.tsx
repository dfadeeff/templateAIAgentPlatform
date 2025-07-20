'use client'

import { cn } from '@/lib/utils'
import { Bot, Settings, Home, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Agents',
    href: '/dashboard/agents',
    icon: Bot,
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 relative flex flex-col h-full">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h1 className="text-xl font-bold text-white ml-3">Platform</h1>
        </div>
      </div>
      <nav className="mt-6 flex-1">
        <div className="px-3 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                )}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </div>
      </nav>
      
      {/* Bottom section */}
      <div className="p-3 border-t border-gray-800">
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <p className="text-xs font-medium text-white">Enterprise Edition</p>
          <p className="text-xs text-gray-400 mt-1">Advanced SAP integrations</p>
        </div>
      </div>
    </div>
  )
}