import express from 'express'

import { USER_ENDPOINTS } from './enums/endpoints'
import { validateUserRegistration } from './lib/validators'
import { UserRegistrationBody } from './types/user'

const router = express.Router()

router.post(
    `/${USER_ENDPOINTS.REGISTER}`,
    validateUserRegistration,
    (req, res) => {
        console.log(req)
        const userData: UserRegistrationBody = req.body

        /* TODO userData logic here */

        res.json({ message: 'User registered successfully' })
        // if (req.body) console.log(req.body)
        // res.json({ message: 'Hello from POST - REGISTER_USER', status: 200 })
    }
)

router.post(`/${USER_ENDPOINTS.LOGIN}`, (req, res) => {
    res.json({ message: 'Hello from LOGIN_USER', status: 200 })
})

export default router
