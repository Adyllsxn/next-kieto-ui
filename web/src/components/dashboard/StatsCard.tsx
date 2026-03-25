// components/dashboard/StatsCard.tsx
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
}

export function StatsCard({ title, value, change, trend }: StatsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className={cn(
          "text-sm",
          trend === 'up' ? "text-green-600" : "text-red-600"
        )}>
          {change}
        </p>
      </CardContent>
    </Card>
  )
}