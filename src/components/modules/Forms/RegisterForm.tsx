import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import { Separator } from '@/components/elements/Separator'
import { cn } from '@/lib/utils'
import { RegisterOrLoginFormProps } from '@/types/forms/props'

const RegisterForm = ({
    className,
    switchFormType,
}: RegisterOrLoginFormProps) => {
    return (
        <form className={cn('flex flex-col w-full gap-8', className)}>
            <fieldset className="grid gap-8 grid-cols-2 mt-12">
                <Input
                    className="col-span-2"
                    type="text"
                    id="username"
                    label="Username"
                />
                <Input
                    type="password"
                    id="password"
                    label="Password"
                    autoComplete="new-password"
                />
                <Input
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password"
                    autoComplete="new-password"
                />
            </fieldset>
            <Separator />
            <fieldset className="grid grid-cols-2 gap-8">
                <Input type="text" id="FirstName" label="First Name" />
                <Input type="text" id="LastName" label="Last Name" />
            </fieldset>
            <Separator />

            <fieldset className="grid grid-cols-2 gap-8">
                <Input type="date" id="dob" label="Date of Birth" />
                <Input type="number" id="allowance" label="Allowance (USD)" />
            </fieldset>
            <Separator />
            <fieldset className="flex flex-col space-y-8">
                <Input
                    type="url"
                    id="profileImage"
                    label="Profile Image (URL)"
                />
            </fieldset>
            <Separator />
            <div>
                <Button onClick={switchFormType} type="button" variant="ghost">
                    Already have an account? Log in
                </Button>
            </div>
            <Separator />
            <div className="flex my-8 gap-6">
                <Button type="submit" variant="default" size="default">
                    Register
                </Button>
                <Button type="button" variant="outline" size="default">
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default RegisterForm
