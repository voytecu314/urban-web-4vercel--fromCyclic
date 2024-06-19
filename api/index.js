import express from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
//import dotenv from 'dotenv';
import systemRouter from './routers/System/systemRouter.js';
import lackDoktorRouter from './routers/LackDocktor/lackDoktorRouter.js';
//dotenv.config();

const app = express();

const PORT = process.env.PORT || 5500;

//app.options('*', cors({origin: 'https://urbanweb.site'}));
app.use( cors() ); //{origin: 'https://lack-docktor-urban-web-e9e6fcdb29dd4dcf9db3c9d0cc6752c1d38eb1fa.gitlab.io'}
app.use('/',express.json());

app.use('/system', systemRouter);
app.use('/lackdoktor',lackDoktorRouter);

//Global error handle
app.use('/', globalErrorHandler);

const server = app.listen(PORT,()=>console.log('Server listens on port %s !',server.address().port));