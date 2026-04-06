import express from 'express';
import cors from 'cors';
import { connectToDb } from "../lib/db/db_connection.js";
import globalErrorHandler from '../lib/middlewares/globalErrorHandler.js';
import systemRouter from '../lib/routers/System/systemRouter.js';

connectToDb();
const app = express();

const PORT = process.env.PORT || 5500;

app.options("*", cors());
app.use( cors() );

app.use('/',express.json());

app.use('/system', systemRouter);

//Global error handle
app.use('/', globalErrorHandler);

const server = app.listen(PORT,()=>console.log('Server listens on port %s !',server.address().port));