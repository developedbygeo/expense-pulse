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

type UserActionProps = WithClassName & {
    dropdownContainerRef: React.RefObject<HTMLDivElement>
}

const UserActions = ({ className, dropdownContainerRef }: UserActionProps) => {
    const isUserLoggedIn = useAppSelector(
        (state) => state.user.currentUser !== null
    )
    const areMultipleUsersAvailable = useAppSelector(
        (state) => state.user.availableUsers.length > 1
    )

    const shouldShowChangeUser = isUserLoggedIn && areMultipleUsersAvailable

    console.log('shouldShowChangeUser', shouldShowChangeUser)

    const userData = useAppSelector((state) => state.user.currentUser)

    const initials = extractNameInitials(
        userData?.FirstName,
        userData?.LastName
    )

    const userProfileImage = userData?.ProfileImage
        ? userData.ProfileImage
        : undefined

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="shadow-md !relative">
                    <AvatarImage src={userProfileImage} alt="Profile Image" />
                    <AvatarFallback>
                        <span className="text-lg uppercase">{initials}</span>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent container={dropdownContainerRef.current}>
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
                    {shouldShowChangeUser ? (
                        <DropdownMenuItem>Change User</DropdownMenuItem>
                    ) : null}
                    <DropdownMenuItem asChild>
                        <UserAuthActions isLoggedIn={isUserLoggedIn} />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserActions
