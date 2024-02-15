import express from 'express';
import languagesRouter from './languageRoute/languagesRoutes.js';
import adminRouter from './adminRoute/adminRoutes.js';
import emailRouter from './emailRoute/emailRoutes.js'

const router = express.Router();

router.use('/language', languagesRouter);
router.use('/admin', adminRouter);
router.use('/email',emailRouter);

export default router;