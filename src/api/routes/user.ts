import express from 'express';

import { USER_ENDPOINTS } from '@/api/enums/endpoints';
import { STATUS } from '@/api/enums/status';
import { validateUserRegistration } from '@/api/lib/validators';
import { UserRegistrationBody } from '@/api/types/user';
import { insertUser } from '@/db/queries/user';

const router = express.Router();

router.post(`/${USER_ENDPOINTS.REGISTER}`, validateUserRegistration, async (req, res) => {
  const userData: UserRegistrationBody = req.body;

  try {
    await insertUser(userData);
    res.json({
      message: 'User registered successfully',
      status: STATUS.OK,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error registering user',
      status: STATUS.ERROR,
    });
  }
});

router.post(`/${USER_ENDPOINTS.LOGIN}`, (req, res) => {
  res.json({ message: 'Hello from LOGIN_USER', status: 200 });
});

export default router;
