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
import { useAppSelector } from '@/frontend/store/hooks'
import withPrimitiveValueDataCheck from '@/frontend/components/modules/UI/HOC/withPrimitiveValueDataCheck'
import PrimitiveDisplay from '@/frontend/components/elements/PrimitiveDisplay'
import Block from '@/frontend/components/elements/Skeletons/Block'

const AllowanceDisplay = withPrimitiveValueDataCheck({
    Component: ({ className, data }) => (
        <PrimitiveDisplay className={className} as="span">
            <span>{data as unknown as JSX.Element}</span>
        </PrimitiveDisplay>
    ),
    Skeleton: Block,
    skeletonClassName: 'h-16 w-full',
})

const MonthlyAllowance = ({ className }: WithClassName) => {
    const allowance = useAppSelector(
        (state) => state.user.currentUser?.Allowance
    )

    const allowanceToRender = allowance
        ? `${getSymbolFromCurrency('USD')} ${allowance}`
        : undefined

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
                        <AllowanceDisplay data={allowanceToRender} />
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
