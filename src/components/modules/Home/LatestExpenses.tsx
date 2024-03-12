import getSymbolFromCurrency from 'currency-symbol-map'

import { Separator } from '@/components/elements/Separator'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/elements/Card'
import { getLatestExpenses, getTopExpenses } from '@/lib/data'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const mockExpenses = [
    {
        Vendor: 'Spotify',
        CreatedAt: '2021-08-01T00:00:00.000Z',
        Amount: 50,
        Currency: 'USD',
    },
    {
        Vendor: 'Netflix',
        CreatedAt: '2021-05-01T00:00:00.000Z',
        Amount: 10.99,
        Currency: 'USD',
    },
    {
        Vendor: 'Amazon',
        CreatedAt: '2021-11-01T00:00:00.000Z',
        Amount: 23,
        Currency: 'USD',
    },
    {
        Vendor: 'Apple',
        CreatedAt: '2021-23-01T00:00:00.000Z',
        Amount: 150,
        Currency: 'USD',
    },
    {
        Vendor: 'Google',
        CreatedAt: '2021-13-01T00:00:00.000Z',
        Amount: 171,
        Currency: 'USD',
    },
    {
        Vendor: 'Microsoft',
        CreatedAt: '2021-14-01T00:00:00.000Z',
        Amount: 22,
        Currency: 'USD',
    },
    {
        Vendor: 'Shein',
        CreatedAt: '2021-08-01T00:00:00.000Z',
        Amount: 100,
        Currency: 'USD',
    },
]

type TopExpensesProps = WithClassName & {
    topN: number
}

const LatestExpenses = ({ className, topN }: TopExpensesProps) => {
    const latestExpenses = getLatestExpenses(mockExpenses as any, topN)

    return (
        <Card className={cn('h-full', className)}>
            <CardHeader>
                <CardTitle>Latest expenses</CardTitle>
                <CardDescription>
                    Wondering what your latest expenses are? Here are your top
                    ones.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {latestExpenses.map((expense, index) => (
                    <>
                        <div key={index} className="flex justify-between">
                            <p>{expense.Vendor}</p>
                            <p>
                                <span>
                                    {getSymbolFromCurrency(expense.Currency)}
                                </span>
                                {expense.Amount}
                            </p>
                        </div>
                        <Separator />
                    </>
                ))}
            </CardContent>
        </Card>
    )
}

export default LatestExpenses
