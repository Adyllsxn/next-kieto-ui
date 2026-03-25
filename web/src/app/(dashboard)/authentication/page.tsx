// app/(dashboard)/authentication/page.tsx
'use client'

import { Shield, Users, Activity, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const logs = [
  { id: 1, user: 'alex@example.com', action: 'Login', status: 'Success', time: '2 minutes ago', ip: '192.168.1.1' },
  { id: 2, user: 'sarah@example.com', action: 'Failed Login', status: 'Failed', time: '15 minutes ago', ip: '192.168.1.2' },
  { id: 3, user: 'mike@example.com', action: 'Password Change', status: 'Success', time: '1 hour ago', ip: '192.168.1.3' },
]

export default function AuthenticationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Authentication</h1>
        <p className="text-gray-600 mt-1">Manage user access and security</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Shield className="text-blue-500" size={24} />
              <span className="text-2xl font-bold">2FA</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Two-factor authentication enabled for 85% of users</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Users className="text-green-500" size={24} />
              <span className="text-2xl font-bold">1,234</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Total registered users</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Activity className="text-purple-500" size={24} />
              <span className="text-2xl font-bold">89%</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Active sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Clock className="text-orange-500" size={24} />
              <span className="text-2xl font-bold">24h</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Session timeout</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Authentication Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-3">User</th>
                  <th className="pb-3">Action</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Time</th>
                  <th className="pb-3">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b last:border-0">
                    <td className="py-3">{log.user}</td>
                    <td className="py-3">{log.action}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        log.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-500">{log.time}</td>
                    <td className="py-3 text-sm text-gray-500">{log.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}