import express from 'express';
import getTextLanguageController from './systemControllers/getTextLanguageController.js';
import adminLoginController from './systemControllers/adminLoginController.js';
import sendTextNodesController from './systemControllers/sendTextNodesController.js';
import verifyToken from '../../middlewares/verifyToken.js';
import sendEmail from './systemControllers/sendEmailController.js'

const router = express.Router();

router.get('/:websiteName/languages/:language', getTextLanguageController);
router.post('/admin-login/:site', adminLoginController);
router.post('/send-text-nodes', verifyToken ,sendTextNodesController);
router.post(':websiteName/send-email/:feedbackStatus' ,sendEmail);

export default router;