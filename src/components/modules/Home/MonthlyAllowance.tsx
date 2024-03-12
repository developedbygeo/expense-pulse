import getSymbolFromCurrency from 'currency-symbol-map'

import { Button } from '@/components/elements/Button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/elements/Card'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const MonthlyAllowance = ({ className }: WithClassName) => {
    return (
        <Card className={cn('w-[380px]', className)}>
            <CardHeader>
                <CardTitle>Your allowance</CardTitle>
                <CardDescription>
                    This is the total monthly allowance you have set through
                    your profile.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div>
                    <h3 className="text-4xl font-medium">
                        {getSymbolFromCurrency('USD')}500
                    </h3>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Update</Button>
            </CardFooter>
        </Card>
    )
}

export default MonthlyAllowance
