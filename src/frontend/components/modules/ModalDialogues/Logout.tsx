import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/elements/Dialog'
import { WithClassName } from '@/types/UI'

const Logout = ({ className }: WithClassName) => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>You are about to log out.</DialogTitle>
                <DialogDescription>
                    Are you sure you want to log out? You can always log back in
                    if you change your mind.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default Logout
