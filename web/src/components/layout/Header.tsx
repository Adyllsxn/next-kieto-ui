// components/layout/Header.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  Search, 
  Menu, 
  Moon, 
  Sun, 
  ChevronDown,
  Settings,
  LogOut,
  User,
  HelpCircle,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Notification {
  id: number
  title: string
  description: string
  time: string
  read: boolean
  icon?: React.ReactNode
}

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Nova mensagem',
      description: 'Você recebeu uma nova mensagem de João',
      time: '5 min atrás',
      read: false,
    },
    {
      id: 2,
      title: 'Atualização disponível',
      description: 'Nova versão do sistema disponível',
      time: '1 hora atrás',
      read: false,
    },
    {
      id: 3,
      title: 'Reunião agendada',
      description: 'Reunião com equipe em 30 minutos',
      time: '2 horas atrás',
      read: true,
    },
  ])
  
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }
  
  const unreadCount = notifications.filter(n => !n.read).length
  
  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }
  
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Menu size={20} />
          </Button>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
            <Input
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 pl-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300"
            />
          </div>
          
          {/* Search Button - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(true)}
            className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Search size={20} />
          </Button>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </motion.div>
          
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Bell size={18} />
                {unreadCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5"
                  >
                    <Badge className="h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                      {unreadCount}
                    </Badge>
                  </motion.div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-96 p-0">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <DropdownMenuLabel className="p-0 text-base font-semibold">
                  Notificações
                </DropdownMenuLabel>
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    Marcar todas como lidas
                  </Button>
                )}
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Bell size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Nenhuma notificação</p>
                  </div>
                ) : (
                  notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <DropdownMenuItem
                        onClick={() => markAsRead(notification.id)}
                        className={cn(
                          "flex flex-col items-start gap-1 p-4 cursor-pointer",
                          !notification.read && "bg-blue-50/50 dark:bg-blue-950/20"
                        )}
                      >
                        <div className="flex items-start justify-between w-full gap-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {notification.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {notification.description}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                              {notification.time}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          )}
                        </div>
                      </DropdownMenuItem>
                      {index < notifications.length - 1 && (
                        <Separator className="my-0" />
                      )}
                    </motion.div>
                  ))
                )}
              </div>
              
              <div className="p-3 border-t border-gray-200 dark:border-gray-800">
                <Button variant="ghost" className="w-full text-sm">
                  Ver todas as notificações
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 hover:bg-transparent focus:ring-0"
              >
                <Avatar className="h-8 w-8 ring-2 ring-gray-200 dark:ring-gray-700">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    AG
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Alex Garcia
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Administrador
                  </p>
                </div>
                <ChevronDown size={16} className="hidden md:block text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <User size={16} />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings size={16} />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <HelpCircle size={16} />
                <span>Ajuda</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-red-600">
                <LogOut size={16} />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-950 md:hidden"
          >
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    autoFocus
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}