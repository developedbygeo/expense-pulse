import Chart from 'react-apexcharts'

import { ChartType } from '@/types/charts'
import { WithClassName } from '@/types/UI'

type BaseChartProps = WithClassName & {
    options: ApexCharts.ApexOptions
    series: ApexAxisChartSeries
    type?: ChartType
}

const BaseChart = ({
    className,
    options,
    series,
    type = 'bar',
}: BaseChartProps) => (
    <div className={className}>
        <Chart
            options={options}
            series={series}
            type={type}
            width="100%"
            height={200}
        />
    </div>
)

export default BaseChart
