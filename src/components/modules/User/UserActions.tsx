import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/elements/Avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/elements/Dropdown'
import UserAuthActions from '@/components/modules/User/UserAuthActions'
import { extractNameInitials } from '@/lib/data'
import { useAppSelector } from '@/store/hooks'
import { WithClassName } from '@/types/UI'

const UserActions = ({ className }: WithClassName) => {
    const isUserLoggedIn = useAppSelector((state) => state.user.data !== null)
    const userData = useAppSelector((state) => state.user.data)

    const initials = extractNameInitials(
        userData?.FirstName,
        userData?.LastName
    )

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="shadow-md">
                    <AvatarImage
                        src={userData?.ProfileImage}
                        alt="Profile Image"
                    />
                    <AvatarFallback>
                        <span className="text-lg uppercase">{initials}</span>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <UserAuthActions isLoggedIn={isUserLoggedIn} />
                    </DropdownMenuItem>
                    {isUserLoggedIn ? (
                        <DropdownMenuItem>Change User</DropdownMenuItem>
                    ) : null}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserActions
