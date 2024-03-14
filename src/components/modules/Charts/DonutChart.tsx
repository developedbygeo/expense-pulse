import Chart from 'react-apexcharts'

import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

type DonutChartProps = WithClassName & {
    options?: Record<string, never>
    series: ApexNonAxisChartSeries
    labels: string[]
}

const DonutChart = ({ className, series, labels }: DonutChartProps) => {
    return (
        <div className={cn('donut', className)}>
            <Chart
                options={{
                    labels,
                    tooltip: {
                        enabled: true,
                    },
                }}
                series={series}
                type="donut"
                width={400}
                height={200}
            />
        </div>
    )
}

export default DonutChart
