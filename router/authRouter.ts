import express from 'express';
import { login, register } from '../controller/authController';

const router= express.Router();

router.route("/register").post(register)
router.route("/sign-in").post(login)


export default router