import { useReducer } from 'react'

import {
    AlertDialog,
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
import { Button } from '@/frontend/components/elements/Button'

type ChangeCurrentUserProps = {
    open: boolean
    toggleOpen: () => void
}

const ChangeCurrentUser = ({ open, toggleOpen }: ChangeCurrentUserProps) => {
    const availableUsers = useAppSelector((state) => state.user.availableUsers)

    const [registerUserOpen, toggleRegisterUserOpen] = useReducer(
        (prev) => !prev,
        false
    )

    const handleFirstTimeUser = () => {
        toggleRegisterUserOpen()
    }

    if (registerUserOpen) {
        return (
            <Dialog open={registerUserOpen}>
                <Login shouldShowRegisterFirst className="min-w-[60rem]" />
            </Dialog>
        )
    }

    return (
        <AlertDialog open={open} onOpenChange={toggleOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Ready to log in as a different user?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Select one of the available accounts to log in. If you
                        would like to create a new one, click the link below.
                    </AlertDialogDescription>
                    <Separator className="!mt-4" />
                    <div className="my-4">
                        <UserAccountSelect
                            className="my-4"
                            handleModalExternally={toggleOpen}
                        />
                    </div>
                    <Separator className="!mb-4" />
                </AlertDialogHeader>
                <AlertDialogFooter className="!flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <p>Would you like to create a new account? </p>
                        <Button
                            onClick={handleFirstTimeUser}
                            className="!px-0 text-blue-600 hover:bg-transparent hover:text-blue-800 font-semibold"
                            variant="ghost"
                        >
                            Click here
                        </Button>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ChangeCurrentUser
