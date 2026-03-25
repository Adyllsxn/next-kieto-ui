// lib/data/transactions.ts
export interface Transaction {
  id: string
  description: string
  date: string
  amount: number
  type: 'income' | 'expense'
}

export const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Payment from John D.',
    date: 'Today, 2:30 PM',
    amount: 2450,
    type: 'income'
  },
  {
    id: '2',
    description: 'AWS Services',
    date: 'Today, 11:15 AM',
    amount: -320,
    type: 'expense'
  },
  {
    id: '3',
    description: 'Premium Upgrade',
    date: 'Yesterday',
    amount: 890,
    type: 'income'
  },
  {
    id: '4',
    description: 'Enterprise License',
    date: 'Yesterday',
    amount: 5200,
    type: 'income'
  },
  {
    id: '5',
    description: 'Refund - Order #4521',
    date: 'Jan 18',
    amount: -199,
    type: 'expense'
  }
]