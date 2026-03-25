// app/(dashboard)/file-manager/page.tsx
'use client'

import { useState } from 'react'
import { Folder, File, Image, Video, MoreVertical, Upload, Search } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const files = [
  { id: 1, name: 'Project Documents', type: 'folder', size: '2.4 GB', modified: '2 hours ago', icon: Folder },
  { id: 2, name: 'Design Assets', type: 'folder', size: '856 MB', modified: 'Yesterday', icon: Folder },
  { id: 3, name: 'presentation.pdf', type: 'file', size: '2.3 MB', modified: '3 days ago', icon: File },
  { id: 4, name: 'screenshot.png', type: 'image', size: '1.2 MB', modified: '1 week ago', icon: Image },
  { id: 5, name: 'demo.mp4', type: 'video', size: '45 MB', modified: '2 weeks ago', icon: Video },
]

const getIconColor = (icon: unknown) => {
  if (icon === Folder) return 'text-yellow-500'
  if (icon === Image) return 'text-green-500'
  if (icon === Video) return 'text-purple-500'
  return 'text-blue-500'
}

export default function FileManagerPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">File Manager</h1>
          <p className="text-gray-600 mt-1">Manage your files and folders</p>
        </div>
        <Button className="gap-2">
          <Upload size={18} />
          Upload
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-500">Total Storage</p>
            <p className="text-2xl font-bold mt-1">45.2 GB</p>
            <p className="text-sm text-gray-500 mt-1">of 100 GB used</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-500">Files</p>
            <p className="text-2xl font-bold mt-1">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-500">Folders</p>
            <p className="text-2xl font-bold mt-1">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-500">Recent Uploads</p>
            <p className="text-2xl font-bold mt-1">23</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search files..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Files Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {files.map((file) => {
          const Icon = file.icon
          return (
            <Card key={file.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <Icon className={`w-10 h-10 ${getIconColor(file.icon)}`} />
                  <Button variant="ghost" size="icon">
                    <MoreVertical size={16} />
                  </Button>
                </div>
                <p className="font-medium truncate">{file.name}</p>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{file.size}</span>
                  <span>{file.modified}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}