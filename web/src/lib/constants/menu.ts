// lib/constants/menu.ts
import {
  LayoutDashboard,
  Users,
  Key,
  Calendar,
  Kanban,
  MessageSquare,
  Contact,
  FolderOpen,
  TrendingUp,
  Wallet,
  PieChart,
  Briefcase,
  Star,
  HelpCircle,
  LifeBuoy,
  FileText,
  Award,
  CreditCard,
  Shield,
  Globe,
  BellRing,
  BarChart3,
  ShoppingBag,
  Truck,
  Package,
  User,
  Settings,
  type LucideIcon
} from 'lucide-react'

export interface SubMenuItem {
  name: string
  href: string
  icon?: LucideIcon
  badge?: number
}

export interface MenuItem {
  name: string
  href: string
  icon: LucideIcon
  badge?: number
  soon?: boolean
  subItems?: SubMenuItem[]
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
  icon?: LucideIcon
}

export const menuCategories: MenuCategory[] = [
  {
    title: 'PRINCIPAL',
    items: [
      { name: 'Dashboard', href: '/', icon: LayoutDashboard },
      { name: 'Usuários', href: '/users', icon: Users, badge: 12 },
      { name: 'Autenticação', href: '/authentication', icon: Key, soon: true },
    ]
  },
  {
    title: 'FINANCEIRO',
    icon: Wallet,
    items: [
      { name: 'Dashboard', href: '/finance/dashboard', icon: TrendingUp },
      { name: 'Transações', href: '/finance/transactions', icon: CreditCard, badge: 3 },
      { name: 'Faturas', href: '/finance/invoices', icon: FileText },
      { name: 'Relatórios', href: '/finance/reports', icon: PieChart },
      { 
        name: 'Investimentos', 
        href: '#',
        icon: TrendingUp,
        subItems: [
          { name: 'Carteira', href: '/finance/investments/portfolio', icon: Briefcase },
          { name: 'Ações', href: '/finance/investments/stocks', icon: TrendingUp },
          { name: 'Fundos', href: '/finance/investments/funds', icon: PieChart },
        ]
      },
    ]
  },
  {
    title: 'PRODUTOS',
    icon: ShoppingBag,
    items: [
      { name: 'Catálogo', href: '/products/catalog', icon: Package },
      { name: 'Estoque', href: '/products/inventory', icon: Truck, badge: 5 },
      { name: 'Vendas', href: '/products/sales', icon: BarChart3 },
      { name: 'Promoções', href: '/products/promotions', icon: Star },
    ]
  },
  {
    title: 'FERRAMENTAS',
    icon: Briefcase,
    items: [
      { name: 'Calendário', href: '/calendar', icon: Calendar },
      { name: 'Quadro', href: '/kanban', icon: Kanban },
      { name: 'Chat', href: '/chat', icon: MessageSquare, badge: 3 },
      { name: 'Contatos', href: '/contacts', icon: Contact },
      { name: 'Arquivos', href: '/file-manager', icon: FolderOpen },
    ]
  },
  {
    title: 'CONFIGURAÇÕES',
    icon: Settings,
    items: [
      { name: 'Perfil', href: '/settings/profile', icon: User },
      { name: 'Segurança', href: '/settings/security', icon: Shield },
      { name: 'Notificações', href: '/settings/notifications', icon: BellRing },
      { name: 'Preferências', href: '/settings/preferences', icon: Globe },
    ]
  },
  {
    title: 'SUPORTE',
    icon: LifeBuoy,
    items: [
      { name: 'Ajuda', href: '/help', icon: HelpCircle },
      { name: 'Feedback', href: '/feedback', icon: Star },
      { name: 'Recompensas', href: '/rewards', icon: Award },
    ]
  }
]