// app/(dashboard)/calendar/page.tsx
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const events = [
  { id: 1, title: 'Team Meeting', date: 25, time: '10:00 AM', color: 'bg-blue-100 text-blue-700' },
  { id: 2, title: 'Client Call', date: 26, time: '2:00 PM', color: 'bg-green-100 text-green-700' },
  { id: 3, title: 'Project Review', date: 28, time: '11:00 AM', color: 'bg-purple-100 text-purple-700' },
]

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }
  
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-gray-600 mt-1">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
            <ChevronLeft size={18} />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
            <ChevronRight size={18} />
          </Button>
          <Button className="gap-2">
            <Plus size={18} />
            Add Event
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {emptyDays.map(i => (
            <div key={`empty-${i}`} className="h-32 border rounded-lg bg-gray-50"></div>
          ))}
          
          {daysArray.map(day => {
            const dayEvents = events.filter(event => event.date === day)
            return (
              <div key={day} className="h-32 border rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer">
                <span className={`text-sm font-medium ${day === new Date().getDate() ? 'bg-blue-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center' : ''}`}>
                  {day}
                </span>
                <div className="mt-1 space-y-1">
                  {dayEvents.map(event => (
                    <div key={event.id} className={`text-xs p-1 rounded ${event.color} truncate`}>
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {events.map(event => (
            <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-500">March {event.date}, {event.time}</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}