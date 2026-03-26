// app/(dashboard)/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { StatsCards } from './_components/StatsCards'
import { SalesChart, VisitorsChart } from './_components/Charts'
import { RecentActivity } from './_components/RecentActivity'
import { DashboardSkeleton } from './_components/DashboardSkeleton'
import { statsData, recentActivities } from '@/lib/data/dashboard'

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <DashboardSkeleton />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Bem-vindo de volta! Aqui está o resumo do seu sistema.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards stats={statsData} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <VisitorsChart />
      </div>

      {/* Recent Activity */}
      <RecentActivity activities={recentActivities} />
    </div>
  )
}