// app/(dashboard)/contacts/page.tsx
'use client'

import { useState } from 'react'
import { Search, Phone, Mail, MoreVertical, Plus } from 'lucide-react'
import { Card, CardContent} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const contacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 890', company: 'Tech Corp', avatar: 'JD' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 891', company: 'Design Co', avatar: 'JS' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 892', company: 'Marketing Inc', avatar: 'BJ' },
]

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your contact list</p>
        </div>
        <Button className="gap-2">
          <Plus size={18} />
          Add Contact
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          placeholder="Search contacts..." 
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="text-lg">{contact.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{contact.company}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical size={18} />
                </Button>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} />
                  <span>{contact.phone}</span>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <Button size="sm" className="flex-1">Message</Button>
                <Button size="sm" variant="outline" className="flex-1">Call</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}