import { MdCopyright } from 'react-icons/md'

import BaseChart from '@/components/modules/Charts/BaseChart'
import DonutChart from '@/components/modules/Charts/DonutChart'
import LatestExpenses from '@/components/modules/Home/LatestExpenses'
import MonthlyAllowance from '@/components/modules/Home/MonthlyAllowance'
import MonthlyExpenseRatio from '@/components/modules/Home/MonthlyExpenseRatio'
import TopExpenses from '@/components/modules/Home/TopExpenses'
import { mockHomeBar } from '@/data/mockHomeCharts'

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

export const items = [
    {
        description: <MonthlyAllowance />,
    },
    {
        description: <MonthlyExpenseRatio className="!h-full" />,
    },
    {
        description: (
            <DonutChart
                series={[60, 40]}
                labels={['Total Expenses', 'Remaining Allowance']}
            />
        ),
    },

    {
        description: (
            <BaseChart
                className="w-full h-full"
                options={mockHomeBar.options}
                series={mockHomeBar.series}
                type="line"
            />
        ),
    },
    {
        description: <TopExpenses topN={3} />,
    },
    {
        description: <LatestExpenses topN={5} />,
    },
    {
        title: 'Your Finances in a Nutshell',
        description: (
            <BaseChart
                options={mockHomeBar.options}
                series={mockHomeBar.series}
            />
        ),
    },
]
