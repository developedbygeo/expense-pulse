import { useReducer } from 'react'
import { MdOutlinePrivacyTip } from 'react-icons/md'

import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/elements/Dialog'
import LoginForm from '@/components/modules/Forms/LoginForm'
import RegisterForm from '@/components/modules/Forms/RegisterForm'
import { WithClassName } from '@/types/UI'

const Login = ({ className }: WithClassName) => {
    const [isRegisterForm, setIsRegisterForm] = useReducer(
        (prev) => !prev,
        false
    )

    const textToShow = isRegisterForm ? 'Register' : 'Log in'

    return (
        <DialogContent className={className}>
            <DialogHeader>
                <DialogTitle>{textToShow} to use Expense Pulse.</DialogTitle>
                {isRegisterForm ? (
                    <RegisterForm switchFormType={setIsRegisterForm} />
                ) : (
                    <LoginForm switchFormType={setIsRegisterForm} />
                )}
                <div>
                    <MdOutlinePrivacyTip className="w-5 h-5 mr-2 inline text-neutral-500 dark:text-neutral-400" />
                    <p className="text-sm inline text-neutral-600 dark:text-neutral-100">
                        Your data never leave your computer. They are only
                        stored locally, to support multiple accounts.{' '}
                    </p>
                </div>
            </DialogHeader>
        </DialogContent>
    )
}

export default Login
