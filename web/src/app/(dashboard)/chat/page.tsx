// app/(dashboard)/chat/page.tsx
'use client'

import { useState } from 'react'
import { Search, Send, MoreVertical, Phone, Video, Paperclip } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    lastMessage: 'Hey, how are you?',
    time: '2m ago',
    unread: 2,
    avatar: 'SJ',
    online: true
  },
  {
    id: 2,
    name: 'Mike Chen',
    lastMessage: 'The project looks great!',
    time: '1h ago',
    unread: 0,
    avatar: 'MC',
    online: false
  },
  {
    id: 3,
    name: 'Emily Davis',
    lastMessage: 'When is the meeting?',
    time: '3h ago',
    unread: 5,
    avatar: 'ED',
    online: true
  }
]

const messages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    content: 'Hey, are we still meeting today?',
    time: '10:30 AM',
    isOwn: false
  },
  {
    id: 2,
    sender: 'You',
    content: 'Yes! At 2 PM, right?',
    time: '10:32 AM',
    isOwn: true
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    content: 'Perfect! See you then 👋',
    time: '10:33 AM',
    isOwn: false
  }
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="h-[calc(100vh-120px)] flex gap-6">
      {/* Conversations List */}
      <Card className="w-80 flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv)}
              className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedChat.id === conv.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback>{conv.avatar}</AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium truncate">{conv.name}</p>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{selectedChat.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{selectedChat.name}</p>
              <p className="text-xs text-green-600">
                {selectedChat.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Phone size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <Video size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical size={18} />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                <p className="text-sm">{msg.content}</p>
                <p className={`text-xs mt-1 ${msg.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Paperclip size={18} />
            </Button>
            <Input 
              placeholder="Type a message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && setNewMessage('')}
            />
            <Button size="icon">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}