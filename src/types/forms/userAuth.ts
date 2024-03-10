import { z, ZodType } from 'zod'

import { User } from '@/types/store/user'
import { Prettify } from '@/types/UI'

export type RegisterUser = Prettify<
    Omit<User, 'UserId' | 'DateOfBirth'> & {
        ConfirmPassword: string
    }
>

export type LoginUser = Pick<RegisterUser, 'Username' | 'Password'>

export const LoginUserSchema: ZodType<LoginUser> = z.object({
    Username: z.string().min(5, {
        message: 'Username must be at least 5 characters long.',
    }),
    Password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .regex(/[0-9]/, {
            message: 'Password must contain at least one number.',
        }),
})

export const RegisterUserSchema: ZodType<RegisterUser> = z
    .object({
        Username: z.string().min(5, {
            message: 'Username must be at least 5 characters long.',
        }),
        Password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long.' })
            .regex(/[0-9]/, {
                message: 'Password must contain at least one number.',
            })
            .regex(/[\W_]/, {
                message:
                    'Password must contain at least one special character.',
            }),
        ConfirmPassword: z.string(),
        FirstName: z.string(),
        LastName: z.string(),
        Allowance: z
            .number()
            .min(100, { message: 'Allowance must be at least 100.' }),
        ProfileImage: z.string().optional(),
    })
    .refine((data) => data.Password === data.ConfirmPassword, {
        message: 'Passwords do not match.',
        path: ['ConfirmPassword'], // This shows which field the error is associated with
    })
