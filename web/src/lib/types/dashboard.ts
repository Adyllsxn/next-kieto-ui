// lib/types/dashboard.ts
export interface StatCard {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: string  // nome do ícone como string
  color: string
  bg: string
}

export interface SalesData {
  name: string
  vendas: number
  receita: number
}

export interface VisitorsData {
  name: string
  visitantes: number
}

export interface Activity {
  id: number
  title: string
  description: string
  time: string
  icon: string  
  iconBg: string
  iconColor: string
}