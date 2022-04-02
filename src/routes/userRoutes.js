import express from 'express';

import { handleDate, handleNullDate } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/timestamp', handleNullDate);

export default userRouter;
