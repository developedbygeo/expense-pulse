import { z } from 'zod'

import { RegisterUserSchema } from '../../src/types/forms/userAuthSchema'

export type UserRegistrationBody = z.infer<typeof RegisterUserSchema>
