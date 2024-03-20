import express from 'express'

import { USER_ENDPOINTS } from '@/api/enums/endpoints'
import { STATUS } from '@/api/enums/status'
import { validateUserRegistration } from '@/api/lib/validators'
import { UserRegistrationBody } from '@/api/types/user'
import { getAllUsers, insertUser } from '@/db/queries/user'

const router = express.Router()

router.post(
    `/${USER_ENDPOINTS.REGISTER}`,
    validateUserRegistration,
    async (req, res) => {
        const userData: UserRegistrationBody = req.body

        try {
            const data = await insertUser(userData)
            res.json({
                message: 'User registered successfully',
                status: STATUS.OK,
                data,
            })
        } catch (err) {
            res.status(500).json({
                message: 'Error registering user',
                status: STATUS.ERROR,
                data: null,
            })
        }
    }
)

router.post(`/${USER_ENDPOINTS.LOGIN}`, (req, res) => {
    res.json({ message: 'Hello from LOGIN_USER', status: 200 })
})

router.get(`/${USER_ENDPOINTS.GET_USERS}`, async (req, res) => {
    try {
        const users = await getAllUsers()
        res.json({
            message: 'Users retrieved successfully',
            status: STATUS.OK,
            data: users,
        })
    } catch (err) {
        res.status(500).json({ message: err, status: STATUS.ERROR })
    }
})

export default router
