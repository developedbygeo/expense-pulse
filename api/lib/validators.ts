import { RequestHandler } from 'express'
import { z } from 'zod'

import { RegisterUserSchema } from '../../src/types/forms/userAuthSchema'
import { STATUS } from '../enums/status'

export const validateUserRegistration: RequestHandler = (req, res, next) => {
    console.log(req.body)
    try {
        RegisterUserSchema.parse(req.body)
        next()
    } catch (err) {
        if (err instanceof z.ZodError) {
            res.status(400).json({
                message: 'Invalid data',
                status: STATUS.ERROR,
                errors: err.errors,
            })
        }
    }
}
