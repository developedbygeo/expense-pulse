import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import InputPassword from '@/components/elements/InputPassword'
import { Separator } from '@/components/elements/Separator'
import { cn } from '@/lib/utils'
import { RegisterOrLoginFormProps } from '@/types/forms/props'
import { LoginUser, LoginUserSchema } from '@/types/forms/userAuthSchema'

const LoginForm = ({ className, switchFormType }: RegisterOrLoginFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUser>({
        mode: 'onChange',
        resolver: zodResolver(LoginUserSchema),
    })

    const handleLoginSubmission: SubmitHandler<LoginUser> = (data) => {
        console.log('SUCCESS', data)
    }

    return (
        <form
            onSubmit={handleSubmit(handleLoginSubmission)}
            className={cn('flex flex-col w-full gap-8', className)}
        >
            <fieldset className="grid gap-8 grid-cols-2 mt-12">
                <Input
                    {...register('Username')}
                    type="text"
                    id="username"
                    label="Username"
                    errorMessage={errors.Username?.message}
                />
                <InputPassword
                    {...register('Password')}
                    id="password"
                    label="Password"
                    autoComplete="current-password"
                    errorMessage={errors.Password?.message}
                />
            </fieldset>
            <Separator />
            <div>
                <p> </p>
                <Button
                    onClick={switchFormType}
                    className="hover:text-blue-800 transition-colors"
                    type="button"
                    variant="ghost"
                >
                    No account yet? Register now.{' '}
                </Button>
            </div>
            <Separator />
            <div className="flex my-8 gap-6">
                <Button type="submit" variant="default" size="default">
                    Log In
                </Button>
                <Button type="button" variant="outline" size="default">
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default LoginForm
