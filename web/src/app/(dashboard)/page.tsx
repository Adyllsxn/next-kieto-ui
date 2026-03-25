// app/(dashboard)/page.tsx
import { StatsCard } from '@/components/dashboard/StatsCard'
import { RecentTransactions } from '@/components/dashboard/RecentTransactions'
import { stats } from '@/lib/data/stats'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Good morning, Alex</h1>
        <p className="text-gray-600 mt-1">Here&apos;s what&apos;s happening with your business today.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
      
      {/* Recent Transactions */}
      <RecentTransactions />
    </div>
  )
}