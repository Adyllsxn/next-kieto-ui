// lib/data/stats.ts
export interface Stat {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
}
export const stats: Stat[] = [
  {
    title: 'Total Revenue',
    value: '$84,254.32',
    change: '+23.5% vs last month',
    trend: 'up'
  },
  // Adicione mais stats depois
]