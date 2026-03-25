// app/(dashboard)/kanban/page.tsx
'use client'

import { useState } from 'react'
import { Plus, MoreVertical } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const initialTasks = {
  todo: [
    { id: 1, title: 'Design System Setup', priority: 'high' },
    { id: 2, title: 'API Integration', priority: 'medium' },
  ],
  inProgress: [
    { id: 3, title: 'User Authentication', priority: 'high' },
  ],
  review: [
    { id: 4, title: 'Code Review', priority: 'low' },
  ],
  done: [
    { id: 5, title: 'Project Setup', priority: 'low' },
  ]
}

const columns = ['todo', 'inProgress', 'review', 'done']
const columnNames = {
  todo: 'To Do',
  inProgress: 'In Progress',
  review: 'Review',
  done: 'Done'
}

const priorityColors = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-green-100 text-green-700'
}

export default function KanbanPage() {
  const [tasks] = useState(initialTasks)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Kanban Board</h1>
          <p className="text-gray-600 mt-1">Manage your tasks and projects</p>
        </div>
        <Button className="gap-2">
          <Plus size={18} />
          Add Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column} className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-700">{columnNames[column as keyof typeof columnNames]}</h2>
              <span className="text-sm text-gray-500">{tasks[column as keyof typeof tasks].length}</span>
            </div>
            
            <div className="space-y-3">
              {tasks[column as keyof typeof tasks].map((task) => (
                <Card key={task.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{task.title}</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreVertical size={14} />
                    </Button>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                    {task.priority}
                  </span>
                </Card>
              ))}
              
              <Button variant="ghost" className="w-full justify-start gap-2 text-gray-500">
                <Plus size={16} />
                Add card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}