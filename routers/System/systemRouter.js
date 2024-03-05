import express from 'express';
import adminLoginController from './systemControllers/adminLoginController.js';
import sendTextNodesController from './systemControllers/sendTextNodesController.js';
import verifyToken from '../../middlewares/verifyToken.js';

const router = express.Router();

router.post('/admin-login/:site', adminLoginController);
router.post('/send-text-nodes', verifyToken ,sendTextNodesController);

export default router;