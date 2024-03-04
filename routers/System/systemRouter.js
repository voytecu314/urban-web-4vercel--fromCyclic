import express from 'express';
import adminLoginController from './systemControllers/adminLoginController.js';

const router = express.Router();

router.post('/admin-login/:site', adminLoginController);

export default router;