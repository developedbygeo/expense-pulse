import express from 'express';

import { STATUS } from '@/api/enums/status';
import { ROOT_ENDPOINTS } from '@/api/enums/endpoints';

const router = express.Router();

router.get(`/`, async (req, res) => {
  res.json({ message: 'Server is running', status: STATUS.OK });
});

export default router;
