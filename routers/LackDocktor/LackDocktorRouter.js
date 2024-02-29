import express from 'express';
import adminLoginController from './routes/admin-login/adminLoginController.js';

const router = express.Router();

router.post('/admin-login',adminLoginController);

export default router;