import { Avatar, AvatarFallback } from '@/components/elements/Avatar'
import UserActions from '@/components/modules/User/UserActions'
import { cn } from '@/lib/utils'
import { WithClassName } from '@/types/UI'
import { useRef } from 'react'

const Header = ({ className }: WithClassName) => {
    const headerRef = useRef<HTMLDivElement>(null)

    return (
        <header
            ref={headerRef}
            className={cn(
                'relative py-4 bg-neutral-100 overflow-hidden',
                className
            )}
        >
            <div className="flex justify-end container">
                <UserActions dropdownContainerRef={headerRef} />
            </div>
        </header>
    )
}

export default Header
