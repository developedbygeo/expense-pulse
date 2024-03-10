import { Avatar, AvatarFallback } from '@/components/elements/Avatar'
import UserActions from '@/components/modules/User/UserActions'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'

const Header = ({ className }: WithClassName) => {
    return (
        <header
            className={cn('py-4 bg-neutral-100 dark:bg-neutral-900', className)}
        >
            <div className="flex justify-end container">
                <UserActions />
            </div>
        </header>
    )
}

export default Header
