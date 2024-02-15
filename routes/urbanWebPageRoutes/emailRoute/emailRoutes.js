import express from 'express';
import upload from '../../../services/multerUploadFiles.js';
import contactController from './emailControllers/contactController.js';
import {preVoucherController, voucherController} from './emailControllers/voucherControllers.js';

const router = express.Router();

router
    .post('/contact',contactController)
    .post('/pre-voucher', preVoucherController)
    .post('/voucher', upload.fields([{name:'customer-file'}]), voucherController);

export default router;