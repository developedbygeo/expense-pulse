import getSymbolFromCurrency from 'currency-symbol-map'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/elements/Card'
import { getTopExpenses } from '@/lib/data'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const mockExpenses = [
    {
        Vendor: 'Spotify',
        Amount: 50,
        Currency: 'USD',
    },
    {
        Vendor: 'Netflix',
        Amount: 10.99,
        Currency: 'USD',
    },
    {
        Vendor: 'Amazon',
        Amount: 23,
        Currency: 'USD',
    },
    {
        Vendor: 'Apple',
        Amount: 150,
        Currency: 'USD',
    },
    {
        Vendor: 'Google',
        Amount: 171,
        Currency: 'USD',
    },
    {
        Vendor: 'Microsoft',
        Amount: 22,
        Currency: 'USD',
    },
]

type TopExpensesProps = WithClassName & {
    topN: number
}

const TopExpenses = ({ className, topN }: TopExpensesProps) => {
    const topExpenses = getTopExpenses(mockExpenses as any, topN)

    console.log(topExpenses)

    return (
        <Card className={cn('h-full', className)}>
            <CardHeader>
                <CardTitle>Your top expenses</CardTitle>
                <CardDescription>
                    Wondering what you spend the most on? Here are your top
                    ones.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {topExpenses.map((expense, index) => (
                    <div key={index} className="flex justify-between">
                        <p>{expense.Vendor}</p>
                        <p>
                            <span>
                                {getSymbolFromCurrency(expense.Currency)}
                            </span>
                            {expense.Amount}
                        </p>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default TopExpenses
