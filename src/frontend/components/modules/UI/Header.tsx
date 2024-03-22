import { Avatar, AvatarFallback } from '@/components/elements/Avatar'
import UserProfileActions from '@/frontend/components/modules/User/UserProfileActions'
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
                <UserProfileActions dropdownContainerRef={headerRef} />
            </div>
        </header>
    )
}

export default Header
