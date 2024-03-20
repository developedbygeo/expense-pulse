import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import InputPassword from '@/components/elements/InputPassword'
import { Separator } from '@/components/elements/Separator'
import { cn } from '@/lib/utils'
import { useRegisterUserMutation } from '@/store/api/user'
import { RegisterOrLoginFormProps } from '@/types/forms/props'
import { RegisterUser, RegisterUserSchema } from '@/types/forms/userAuthSchema'
import Spinner from '@/frontend/components/elements/Spinner'
import { generateCtaAsyncText } from '@/frontend/lib/async'
import { useEffect } from 'react'
import { MESSAGES } from '@/frontend/types/data/enums/messages'
import { useAppDispatch } from '@/frontend/store/hooks'
import { setUser } from '@/frontend/store/slices/userSlice'

const RegisterForm = ({
    className,
    switchFormType,
}: RegisterOrLoginFormProps) => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<RegisterUser>({
        mode: 'onChange',
        resolver: zodResolver(RegisterUserSchema),
    })

    const dispatch = useAppDispatch()

    const [
        registerUser,
        {
            data: registrationData,
            isLoading,
            isSuccess: registrationSuccess,
            isError: registrationError,
        },
    ] = useRegisterUserMutation()

    const handleRegisterSubmission: SubmitHandler<RegisterUser> = (data) => {
        registerUser(data)
    }

    // side effect to trigger user state update
    useEffect(() => {
        if (registrationSuccess) {
            const registrationValues = getValues()
            console.log(registrationData)

            const newUser = {
                ...registrationValues,
                UserId: registrationData.insertedUserId,
            }
            dispatch(setUser(newUser))
        }
    }, [registrationSuccess])

    return (
        <form
            onSubmit={handleSubmit(handleRegisterSubmission)}
            className={cn('flex flex-col w-full gap-8', className)}
        >
            <fieldset className="grid gap-8 grid-cols-2 mt-12">
                <Input
                    {...register('Username')}
                    className="col-span-2"
                    type="text"
                    id="username"
                    label="Username"
                    errorMessage={errors.Username?.message}
                />
                <InputPassword
                    {...register('Password')}
                    id="password"
                    label="Password"
                    autoComplete="new-password"
                    errorMessage={errors.Password?.message}
                />
                <InputPassword
                    {...register('ConfirmPassword')}
                    id="ConfirmPassword"
                    label="Confirm Password"
                    autoComplete="new-password"
                    errorMessage={errors.ConfirmPassword?.message}
                />
            </fieldset>
            <Separator />
            <fieldset className="grid grid-cols-2 gap-8">
                <Input
                    {...register('FirstName')}
                    type="text"
                    id="FirstName"
                    label="First Name"
                    errorMessage={errors.FirstName?.message}
                />
                <Input
                    {...register('LastName')}
                    type="text"
                    id="LastName"
                    label="Last Name"
                    errorMessage={errors.LastName?.message}
                />
            </fieldset>
            <Separator />

            <fieldset className="grid grid-cols-2 gap-8">
                <Input
                    {...register('AnnualIncome', { valueAsNumber: true })}
                    type="number"
                    id="AnnualIncome"
                    label="Annual Income (optional)"
                    errorMessage={errors.AnnualIncome?.message}
                />
                <Input
                    {...register('Allowance', { valueAsNumber: true })}
                    type="number"
                    id="Allowance"
                    label="Allowance (USD)"
                    errorMessage={errors.Allowance?.message}
                />
            </fieldset>
            <Separator />
            <fieldset className="flex flex-col space-y-8">
                <Input
                    {...register('ProfileImage')}
                    type="url"
                    id="ProfileImage"
                    label="Profile Image (URL)"
                    errorMessage={errors.ProfileImage?.message}
                />
            </fieldset>
            <Separator />
            <div>
                <Button
                    onClick={switchFormType}
                    className="hover:text-blue-800 transition-colors"
                    type="button"
                    variant="ghost"
                >
                    Already have an account? Log in
                </Button>
            </div>
            <Separator />

            {registrationSuccess && (
                <p className="text-success font-medium">
                    {MESSAGES.REGISTER_SUCCESS}
                </p>
            )}

            <div className="flex my-8 gap-6">
                <Button
                    className="flex gap-2"
                    disabled={isLoading || registrationSuccess}
                    type="submit"
                    variant="default"
                    size="default"
                >
                    {isLoading && <Spinner />}
                    {generateCtaAsyncText('Register', isLoading)}
                </Button>
                <Button
                    disabled={isLoading || registrationSuccess}
                    type="button"
                    variant="outline"
                    size="default"
                >
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default RegisterForm
