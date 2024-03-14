import { z, ZodType } from 'zod'

import { User } from '@/types/store/user'
import { Prettify } from '@/types/UI'

import {
    LOGIN_FIELD_NAMES,
    REGISTER_FIELD_NAMES,
} from '../../types/data/enums/auth'

export type RegisterUser = Prettify<
    Omit<User, 'UserId'> & {
        [REGISTER_FIELD_NAMES.CONFIRM_PASSWORD]: string
    }
>

export type LoginUser = Pick<RegisterUser, 'Username' | 'Password'>

export const LoginUserSchema: ZodType<LoginUser> = z.object({
    [LOGIN_FIELD_NAMES.USERNAME]: z.string().min(5, {
        message: 'Username must be at least 5 characters long.',
    }),
    [LOGIN_FIELD_NAMES.PASSWORD]: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .regex(/[0-9]/, {
            message: 'Password must contain at least one number.',
        }),
})

export const RegisterUserSchema: ZodType<RegisterUser> = z
    .object({
        [REGISTER_FIELD_NAMES.USERNAME]: z.string().min(5, {
            message: 'Username must be at least 5 characters long.',
        }),
        [REGISTER_FIELD_NAMES.PASSWORD]: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long.' })
            .regex(/[0-9]/, {
                message: 'Password must contain at least one number.',
            })
            .regex(/[\W_]/, {
                message:
                    'Password must contain at least one special character.',
            }),

        [REGISTER_FIELD_NAMES.CONFIRM_PASSWORD]: z.string(),
        [REGISTER_FIELD_NAMES.FIRST_NAME]: z.string(),
        [REGISTER_FIELD_NAMES.LAST_NAME]: z.string(),
        [REGISTER_FIELD_NAMES.ANNUAL_INCOME]: z.number().optional(),
        [REGISTER_FIELD_NAMES.ALLOWANCE]: z
            .number()
            .min(100, { message: 'Allowance must be at least 100.' }),
        [REGISTER_FIELD_NAMES.PROFILE_IMAGE]: z.string().optional(),
    })
    .refine((values) => values.Password === values.ConfirmPassword, {
        message: 'The password must match!',
        path: ['ConfirmPassword'],
    })
