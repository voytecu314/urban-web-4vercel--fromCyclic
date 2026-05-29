import express from 'express';
import cors from 'cors';
import { connectToDb } from "./db/db_connection.js";
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import systemRouter from './routers/System/systemRouter.js';

await connectToDb();
const app = express();

const PORT = process.env.PORT || 5500;

app.use( cors() );
app.use('/',express.json());

app.use('/system', systemRouter);

//Global error handle
app.use('/', globalErrorHandler);

const server = app.listen(PORT,()=>console.log('Server listens on port %s !',server.address().port));