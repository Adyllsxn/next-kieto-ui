// components/layout/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronLeft,
  ChevronRight,
  LogOut,
  ChevronDown,
  X,
  type LucideIcon
} from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { menuCategories } from '@/lib/constants/menu'

// Componente de ícone
const IconWrapper = ({ 
  icon: Icon, 
  size = 20, 
  className 
}: { 
  icon: LucideIcon
  size?: number
  className?: string 
}) => {
  return <Icon size={size} className={className} />
}

// Componente de conteúdo do sidebar
interface SidebarContentProps {
  isMobile?: boolean
  isCollapsed?: boolean
  pathname: string
  openDropdowns: Record<string, boolean>
  toggleDropdown: (name: string) => void
  toggleSidebar?: () => void
  onClose?: () => void
}

const SidebarContent = ({
  isMobile = false,
  isCollapsed = false,
  pathname,
  openDropdowns,
  toggleDropdown,
  toggleSidebar,
  onClose
}: SidebarContentProps) => {
  const handleClose = () => {
    if (isMobile) {
      onClose?.()
    }
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-950">
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
        {!isCollapsed ? (
          <>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Kieto</h1>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">Admin Panel</p>
            </div>
            <div className="flex items-center gap-2">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={18} />
                </Button>
              )}
              {toggleSidebar && !isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="h-7 w-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ChevronLeft size={16} />
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            {toggleSidebar && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="absolute -right-3 top-5 h-6 w-6 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight size={12} />
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-3 space-y-4">
          {menuCategories.map((category) => (
            <div key={category.title} className="space-y-1">
              {!isCollapsed && (
                <div className="flex items-center gap-2 px-2 py-1">
                  {category.icon && (
                    <IconWrapper icon={category.icon} size={12} className="text-gray-400" />
                  )}
                  <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {category.title}
                  </p>
                </div>
              )}
              
              {category.items.map((item) => {
                const isActive = pathname === item.href
                const hasSubItems = item.subItems && item.subItems.length > 0
                const isOpen = openDropdowns[item.name]
                
                return (
                  <div key={item.name}>
                    {isCollapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            onClick={() => {
                              if (!item.soon) {
                                handleClose()
                                window.location.href = item.href
                              }
                            }}
                            className="group flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200 px-2 py-2"
                          >
                            <IconWrapper 
                              icon={item.icon} 
                              size={20} 
                              className={cn(
                                "flex-shrink-0 transition-colors",
                                isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                              )}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="px-2 py-1">
                          <p className="text-xs font-medium">{item.name}</p>
                          {item.badge && <p className="text-[10px] text-gray-500">{item.badge} novos</p>}
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <>
                        <div
                          onClick={() => {
                            if (hasSubItems) {
                              toggleDropdown(item.name)
                            } else if (!item.soon) {
                              handleClose()
                              window.location.href = item.href
                            }
                          }}
                          className={cn(
                            "group flex items-center justify-between rounded-lg cursor-pointer transition-all duration-200 px-3 py-2",
                            isActive && !hasSubItems
                              ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          )}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <IconWrapper 
                              icon={item.icon} 
                              size={18} 
                              className={cn(
                                "flex-shrink-0 transition-colors",
                                isActive && !hasSubItems ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                              )}
                            />
                            <span className={cn(
                              "text-sm font-medium truncate",
                              isActive && !hasSubItems ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                            )}>
                              {item.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {item.badge && (
                              <Badge className="h-5 px-1.5 text-[10px] font-medium bg-red-500">
                                {item.badge}
                              </Badge>
                            )}
                            {hasSubItems && (
                              <ChevronDown size={14} className={cn(
                                "text-gray-400 transition-transform duration-200",
                                isOpen && "rotate-180"
                              )} />
                            )}
                          </div>
                        </div>
                        
                        {/* SubItems */}
                        {hasSubItems && isOpen && (
                          <div className="ml-9 mt-1 space-y-0.5 border-l-2 border-gray-100 dark:border-gray-800 pl-2">
                            {item.subItems?.map((subItem) => {
                              const isSubActive = pathname === subItem.href
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={handleClose}
                                  className={cn(
                                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200",
                                    isSubActive
                                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30"
                                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  )}
                                >
                                  {subItem.icon && (
                                    <IconWrapper icon={subItem.icon} size={14} className="flex-shrink-0" />
                                  )}
                                  <span className="truncate text-[13px]">{subItem.name}</span>
                                  {subItem.badge && (
                                    <Badge variant="secondary" className="ml-auto text-[10px] h-4 px-1">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* User Profile */}
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
        {isCollapsed ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex justify-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <Avatar className="h-8 w-8 ring-2 ring-gray-100 dark:ring-gray-800">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-medium">
                    AG
                  </AvatarFallback>
                </Avatar>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1">
              <p className="text-xs font-medium">Alex Garcia</p>
              <p className="text-[10px] text-gray-500">alex@kieto.com</p>
            </TooltipContent>
          </Tooltip>
        ) : (
          <div 
            onClick={handleClose}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
          >
            <Avatar className="h-8 w-8 ring-2 ring-gray-100 dark:ring-gray-800">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-medium">
                AG
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                Alex Garcia
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                alex@kieto.com
              </p>
            </div>
            
            <LogOut size={14} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  )
}

interface SidebarProps {
  mobileOpen?: boolean
  setMobileOpen?: (open: boolean) => void
}

export function Sidebar({ mobileOpen: externalMobileOpen, setMobileOpen: externalSetMobileOpen }: SidebarProps = {}) {
  const pathname = usePathname()
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [internalMobileOpen, setInternalMobileOpen] = useState(false)

  // TODOS OS HOOKS SÃO CHAMADOS NO TOPO (sem condicionais)
  const mobileOpen = externalMobileOpen !== undefined ? externalMobileOpen : internalMobileOpen
  const setMobileOpen = externalSetMobileOpen || setInternalMobileOpen

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth < 1024
    setIsMobile(mobile)
  }, [])

  // Carregar estado do colapso no desktop
  useEffect(() => {
    const saved = localStorage.getItem('sidebar-collapsed')
    if (saved !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCollapsed(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [checkMobile])

  const toggleSidebar = () => {
    const newState = !collapsed
    setCollapsed(newState)
    localStorage.setItem('sidebar-collapsed', JSON.stringify(newState))
  }

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }))
  }

  // Mobile: Menu deslizante
  if (isMobile) {
    return (
      <>
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setMobileOpen(false)}
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 z-50 h-screen w-72 bg-white dark:bg-gray-950 shadow-2xl"
              >
                <TooltipProvider delayDuration={200}>
                  <SidebarContent
                    isMobile={true}
                    isCollapsed={false}
                    pathname={pathname}
                    openDropdowns={openDropdowns}
                    toggleDropdown={toggleDropdown}
                    onClose={() => setMobileOpen(false)}
                  />
                </TooltipProvider>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop
  return (
    <div className={cn(
      "h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden",
      collapsed ? "w-16" : "w-72"
    )}>
      <TooltipProvider delayDuration={200}>
        <SidebarContent
          isMobile={false}
          isCollapsed={collapsed}
          pathname={pathname}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
          toggleSidebar={toggleSidebar}
        />
      </TooltipProvider>
    </div>
  )
}