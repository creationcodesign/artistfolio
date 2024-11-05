import express from 'express';
import { register, login, logout } from '../controllers/user.controller.js';

const authRouter = express.Router();

// Use POST for registration and login
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;
