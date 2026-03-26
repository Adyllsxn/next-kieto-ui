// app/(dashboard)/_components/Charts.tsx
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'
import { salesChartData, visitorsChartData } from '@/lib/data/dashboard'

export function SalesChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Visão Geral de Vendas</CardTitle>
        <CardDescription>Vendas e receita dos últimos 7 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line" className="space-y-4">
          <TabsList>
            <TabsTrigger value="line">Linha</TabsTrigger>
            <TabsTrigger value="area">Área</TabsTrigger>
            <TabsTrigger value="bar">Barras</TabsTrigger>
          </TabsList>
          
          <TabsContent value="line" className="pt-4">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={salesChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="vendas" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2 }}
                  name="Vendas"
                />
                <Line 
                  type="monotone" 
                  dataKey="receita" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', strokeWidth: 2 }}
                  name="Receita"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="area" className="pt-4">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={salesChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="vendas" 
                  stackId="1"
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.2}
                  name="Vendas"
                />
                <Area 
                  type="monotone" 
                  dataKey="receita" 
                  stackId="2"
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.2}
                  name="Receita"
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="bar" className="pt-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={salesChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip />
                <Legend />
                <Bar dataKey="vendas" fill="#3b82f6" name="Vendas" />
                <Bar dataKey="receita" fill="#10b981" name="Receita" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export function VisitorsChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Visitantes por Dia</CardTitle>
        <CardDescription>Últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={visitorsChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="visitantes" 
              stroke="#8b5cf6" 
              fill="#8b5cf6" 
              fillOpacity={0.2}
              name="Visitantes"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}