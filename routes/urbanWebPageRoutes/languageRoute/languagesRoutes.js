import express from 'express';
import getLanguage from './languageControllers/getLanguage.js';

const router = express.Router();

router.get('/:language', getLanguage);

export default router;