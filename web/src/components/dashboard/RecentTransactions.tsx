// components/dashboard/RecentTransactions.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { transactions } from '@/lib/data/transactions'

export function RecentTransactions() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <p className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}