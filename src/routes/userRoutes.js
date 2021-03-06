import express from 'express';

import { handleDate, handleNullDate } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/', handleNullDate);

userRouter.get('/:date', handleDate);

export default userRouter;
