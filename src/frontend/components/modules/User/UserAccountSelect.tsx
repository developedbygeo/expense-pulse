import { Button } from '@/components/elements/Button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/frontend/components/elements/Avatar'
import BarLoader from '@/frontend/components/elements/BarLoader'
import { extractNameInitials } from '@/frontend/lib/data'
import { useGetUsersQuery } from '@/frontend/store/api/user'
import { setUser } from '@/frontend/store/slices/userSlice'
import { User } from '@/frontend/types/store/user'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/store/hooks'
import { WithClassName } from '@/types/UI'

const UserAccountSelect = ({ className }: WithClassName) => {
    const dispatch = useAppDispatch()

    const { data: users, error, isLoading } = useGetUsersQuery()

    if (isLoading)
        return <BarLoader className="py-8" content="Loading users..." />

    if (users?.data?.length === 0) {
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

    const handleUserLogin = (user: User) => {
        dispatch(setUser(user))
    }

    return (
        <ul className={className}>
            {users.data.map((user) => (
                <li key={`${user.FirstName}-${user.LastName}-${user.UserId}`}>
                    <Button
                        onClick={() => handleUserLogin(user)}
                        className="flex gap-4 w-full h-16 justify-start"
                        variant="ghost"
                    >
                        <Avatar>
                            <AvatarImage src={user.ProfileImage} />
                            <AvatarFallback>
                                {extractNameInitials(
                                    user.FirstName,
                                    user.LastName
                                )}
                            </AvatarFallback>
                        </Avatar>
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
