import { cn } from '@/frontend/lib/utils'
import { WithClassName } from '@/frontend/types/UI'

const Block = ({ className }: WithClassName) => (
    <div className={cn('bg-neutral-200/80 animate-pulse', className)} />
)

export default Block
