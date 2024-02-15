import express from 'express';

import validateBody from '../../../middlewares/textNodesValidation.js';
import getAdminPage from './adminControllers/getAdminPage.js';
import sendText from './adminControllers/sendText.js';
import adminLogin from './adminControllers/adminLogin.js';
import verifyToken from '../../../middlewares/verifyToken.js'

const router = express.Router();

router
    .get('/',verifyToken, getAdminPage)
    .post('/text-nodes', verifyToken, validateBody, sendText)
    .post('/login', express.urlencoded({extended:true}), adminLogin);

export default router;