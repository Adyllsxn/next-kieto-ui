// lib/data/dashboard.ts
import type { StatCard, SalesData, VisitorsData, Activity } from '@/lib/types/dashboard'

// Dados estáticos simulando API
export const statsData: StatCard[] = [
  {
    title: 'Total de Usuários',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    icon: 'Users',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Vendas',
    value: 'R$ 45.678',
    change: '+8%',
    trend: 'up',
    icon: 'ShoppingBag',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    title: 'Receita',
    value: 'R$ 123.456',
    change: '+15%',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    title: 'Atividade',
    value: '89%',
    change: '-2%',
    trend: 'down',
    icon: 'Activity',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  }
]

// Dados para gráfico de vendas
export const salesChartData: SalesData[] = [
  { name: 'Jan', vendas: 4000, receita: 2400 },
  { name: 'Fev', vendas: 3000, receita: 1398 },
  { name: 'Mar', vendas: 5000, receita: 3800 },
  { name: 'Abr', vendas: 2780, receita: 3908 },
  { name: 'Mai', vendas: 1890, receita: 4800 },
  { name: 'Jun', vendas: 2390, receita: 3800 },
  { name: 'Jul', vendas: 3490, receita: 4300 },
]

// Dados para gráfico de visitas
export const visitorsChartData: VisitorsData[] = [
  { name: 'Seg', visitantes: 1200 },
  { name: 'Ter', visitantes: 1900 },
  { name: 'Qua', visitantes: 1500 },
  { name: 'Qui', visitantes: 1800 },
  { name: 'Sex', visitantes: 2200 },
  { name: 'Sáb', visitantes: 2800 },
  { name: 'Dom', visitantes: 2100 },
]

// Atividades recentes
export const recentActivities: Activity[] = [
  {
    id: 1,
    title: 'Novo usuário registrado',
    description: 'João Silva criou uma conta',
    time: '5 minutos atrás',
    icon: 'Users',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'Venda concluída',
    description: 'Pedido #1234 foi finalizado',
    time: '1 hora atrás',
    icon: 'ShoppingBag',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 3,
    title: 'Novo comentário',
    description: 'Maria respondeu ao ticket #567',
    time: '3 horas atrás',
    icon: 'MessageSquare',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 4,
    title: 'Atualização do sistema',
    description: 'Versão 2.0.0 foi instalada',
    time: '5 horas atrás',
    icon: 'Settings',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400'
  }
]