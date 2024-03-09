import { Avatar, AvatarFallback } from '@/components/elements/Avatar'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const Header = ({ className }: WithClassName) => {
    return (
        <header
            className={cn('py-4 bg-neutral-100 dark:bg-neutral-900', className)}
        >
            <div className="flex justify-end container">
                <Avatar className="shadow-md">
                    <AvatarFallback>
                        <span className="text-lg">GA</span>
                    </AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

export default Header
