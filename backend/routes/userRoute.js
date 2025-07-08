import express from 'express';
import {
  loginUser,
  registerUser,
  adminLogin
} from '../controllers/userController.js';

const userRouter = express.Router();

// Routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin); // Make sure adminLogin exists in userController.js

export default userRouter;
