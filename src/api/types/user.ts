import { z } from 'zod';

import { RegisterUserSchema } from '@/types/forms/userAuthSchema';

export type UserRegistrationBody = z.infer<typeof RegisterUserSchema>;
