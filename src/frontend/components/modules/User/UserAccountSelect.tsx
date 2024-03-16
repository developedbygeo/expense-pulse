import { Button } from '@/components/elements/Button'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/store/hooks'
import { WithClassName } from '@/types/UI'

const UserAccountSelect = ({ className }: WithClassName) => {
    const userAccounts = useAppSelector((state) => state.user.availableUsers)

    if (userAccounts.length === 0) {
        return (
            <p
                className={cn(
                    'text-sm text-neutral-800 font-medium',
                    className
                )}
            >
                No accounts found.
            </p>
        )
    }

    return (
        <ul className={className}>
            {userAccounts.map((user) => (
                <li key={user.UserId}>
                    <Button variant="ghost">
                        <span>
                            {user.FirstName} {user.LastName}
                        </span>
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default UserAccountSelect
