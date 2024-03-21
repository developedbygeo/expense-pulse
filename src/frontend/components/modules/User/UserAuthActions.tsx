import { forwardRef } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/elements/Dialog'
import Login from '@/components/modules/ModalDialogues/Login'
import Logout from '@/components/modules/ModalDialogues/Logout'
import { WithClassName } from '@/types/UI'

type UserAuthProps = WithClassName & {
    isLoggedIn: boolean
}

const UserAuthActions = forwardRef<HTMLButtonElement, UserAuthProps>(
    ({ className, isLoggedIn }, ref) => {
        return (
            <Dialog>
                <DialogTrigger
                    className="px-2 w-full text-left py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-neutral-200"
                    ref={ref}
                >
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                </DialogTrigger>
                {isLoggedIn ? <Logout /> : <Login className="min-w-[60rem]" />}
            </Dialog>
        )
    }
)

export default UserAuthActions
