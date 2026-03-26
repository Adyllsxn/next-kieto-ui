// app/(dashboard)/_components/RecentActivity.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  Settings,
  type LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Activity } from '@/lib/types/dashboard'

// Mapeamento de ícones por nome com tipo correto
const iconMap: Record<string, LucideIcon> = {
  Users,
  ShoppingBag,
  MessageSquare,
  Settings
}

interface RecentActivityProps {
  activities: Activity[]
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>Últimas ações no sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = iconMap[activity.icon]
            if (!Icon) return null
            
            return (
              <div 
                key={activity.id} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", activity.iconBg)}>
                  <Icon size={18} className={activity.iconColor} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.description} • {activity.time}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Ver
                </Button>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}