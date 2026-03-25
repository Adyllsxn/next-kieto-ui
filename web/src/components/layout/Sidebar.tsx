// components/layout/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Key, 
  Calendar, 
  Kanban, 
  MessageSquare, 
  Contact, 
  FolderOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Authentication', href: '/authentication', icon: Key },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Kanban Board', href: '/kanban', icon: Kanban },
  { name: 'Chat', href: '/chat', icon: MessageSquare },
  { name: 'Contacts', href: '/contacts', icon: Contact },
  { name: 'File Manager', href: '/file-manager', icon: FolderOpen },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={cn(
      "h-screen bg-gray-900 text-white transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {!collapsed && <span className="text-xl font-bold">EasyAdmin</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-700 rounded"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors",
                isActive 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}