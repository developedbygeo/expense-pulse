import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import express from 'express';

import { ROOT_ENDPOINTS } from './enums/endpoints';
import user from './routes/user';
import statusCheck from './routes/status-check';

const corsOptions: CorsOptions | CorsOptionsDelegate = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (!origin || origin.startsWith('http://localhost') || origin.startsWith('https://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: ['GET', 'POST'],
};

const app = express();

app.use(express.json());

export const startServer = async (port: number) => {
  app.use(cors(corsOptions));

  app.use(`/api/${ROOT_ENDPOINTS.STATUS_CHECK}`, statusCheck);
  app.use(`/api/${ROOT_ENDPOINTS.USERS}`, user);
  app.listen(port);
  console.log(`Server started on port ${port}`);
};
