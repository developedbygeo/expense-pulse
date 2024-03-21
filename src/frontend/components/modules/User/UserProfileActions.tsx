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
import { Button } from '@/frontend/components/elements/Button'
import ChangeCurrentUser from '@/frontend/components/modules/User/ChangeCurrentUser'
import { extractNameInitials } from '@/lib/data'
import { useAppSelector } from '@/store/hooks'
import { WithClassName } from '@/types/UI'
import { useReducer } from 'react'

type UserActionProps = WithClassName & {
    dropdownContainerRef: React.RefObject<HTMLDivElement>
}

const UserProfileActions = ({
    className,
    dropdownContainerRef,
}: UserActionProps) => {
    const isUserLoggedIn = useAppSelector(
        (state) => state.user.currentUser !== null
    )
    const areMultipleUsersAvailable = useAppSelector(
        (state) => state.user.availableUsers.length > 1
    )

    const [changeUserDialog, toggleChangeUserDialog] = useReducer(
        (prev) => !prev,
        false
    )

    const shouldShowChangeUser = isUserLoggedIn && areMultipleUsersAvailable

    const userData = useAppSelector((state) => state.user.currentUser)

    const initials = extractNameInitials(
        userData?.FirstName,
        userData?.LastName
    )

    const userProfileImage = userData?.ProfileImage
        ? userData.ProfileImage
        : undefined

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="shadow-md !relative">
                        <AvatarImage
                            src={userProfileImage}
                            alt="Profile Image"
                        />
                        <AvatarFallback>
                            <span className="text-lg uppercase">
                                {initials}
                            </span>
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent container={dropdownContainerRef.current}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {shouldShowChangeUser ? (
                            <DropdownMenuItem
                                onClick={toggleChangeUserDialog}
                                className="cursor-pointer"
                            >
                                Change User
                            </DropdownMenuItem>
                        ) : null}
                        <DropdownMenuItem className="cursor-pointer" asChild>
                            <UserAuthActions isLoggedIn={isUserLoggedIn} />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <ChangeCurrentUser
                open={changeUserDialog}
                toggleOpen={toggleChangeUserDialog}
            />
        </>
    )
}

export default UserProfileActions
