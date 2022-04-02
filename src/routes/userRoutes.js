import express from 'express';

import { handleDate, handleNullDate } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/timestamp', handleNullDate);

userRouter.get('/timestamp/:data', handleDate);

export default userRouter;
