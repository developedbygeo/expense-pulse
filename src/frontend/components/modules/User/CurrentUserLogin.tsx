import { useReducer } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/elements/AlertDialog'
import { Dialog } from '@/components/elements/Dialog'
import { Separator } from '@/components/elements/Separator'
import Login from '@/components/modules/ModalDialogues/Login'
import UserAccountSelect from '@/components/modules/User/UserAccountSelect'
import { useAppSelector } from '@/store/hooks'

const CurrentUserLogin = () => {
    const currentUser = useAppSelector((state) => state.user.currentUser)
    const availableUsers = useAppSelector((state) => state.user.availableUsers)

    const [alertOpen, toggleAlertOpen] = useReducer(
        (prev) => !prev,
        !currentUser
    )
    const [registerUserOpen, toggleRegisterUserOpen] = useReducer(
        (prev) => !prev,
        false
    )

    const availableUsersExist = availableUsers.length > 0
    const isUserLoggedIn = currentUser !== null
    const isThisFirstTime = !availableUsersExist && !isUserLoggedIn

    const ctaText = isThisFirstTime ? 'Register' : 'Log in'

    const handleFirstTimeUser = () => {
        toggleAlertOpen()
        toggleRegisterUserOpen()
    }

    if (currentUser) {
        return null
    }

    if (registerUserOpen) {
        return (
            <Dialog open={registerUserOpen}>
                <Login shouldShowRegisterFirst className="min-w-[60rem]" />
            </Dialog>
        )
    }

    return (
        <AlertDialog open={alertOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Oops, you are not logged in.
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        To use this application, please log in with your
                        account.
                    </AlertDialogDescription>
                    <Separator className="!mt-4" />
                    <div className="my-4">
                        <UserAccountSelect className="my-4" />
                    </div>
                    <Separator className="!mb-4" />
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleFirstTimeUser}>
                        {ctaText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CurrentUserLogin
