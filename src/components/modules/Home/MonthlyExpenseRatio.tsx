import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/elements/Card'
import { calculateRatio } from '@/lib/data'
import { colorCodeRatio } from '@/lib/UI'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

// expenses / allowance * 100
const MonthlyExpenseRatio = ({ className }: WithClassName) => {
    return (
        <Card className={cn('h-full', className)}>
            <CardHeader>
                <CardTitle>Your current expense ratio</CardTitle>
                <CardDescription>
                    This is the ratio of your current costs for this month to
                    your monthly allowance.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <h3
                        className={cn(
                            'text-4xl font-medium',
                            colorCodeRatio(300, 500)
                        )}
                    >
                        {calculateRatio(300, 500)}%
                    </h3>
                </div>
            </CardContent>
        </Card>
    )
}

export default MonthlyExpenseRatio
