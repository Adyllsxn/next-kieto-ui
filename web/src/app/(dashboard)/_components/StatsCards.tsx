// app/(dashboard)/_components/StatsCards.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  type LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StatCard } from '@/lib/types/dashboard'

// Mapeamento de ícones por nome com tipo correto
const iconMap: Record<string, LucideIcon> = {
  Users,
  ShoppingBag,
  TrendingUp,
  Activity
}

interface StatsCardsProps {
  stats: StatCard[]
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon]
        if (!Icon) return null
        
        return (
          <Card key={stat.title} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={cn("p-3 rounded-xl", stat.bg)}>
                  <Icon className={cn("h-6 w-6", stat.color)} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  stat.trend === 'up' ? "text-green-600" : "text-red-600"
                )}>
                  {stat.change}
                  {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}