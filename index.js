import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import urbanWebRouter from './routes/urbanWebPageRoutes/urbanWebRouter.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5500;

app.options('*', cors({origin: 'https://urbanweb.site'}));
app.use( cors({origin: 'https://urbanweb.site'}) );
app.use(cookieParser());
app.use('/',express.json());
app.use('/urban-web',express.static('public'))

app.use('/urban-web', urbanWebRouter);

//Global error handle
app.use('/', globalErrorHandler);

const server = app.listen(PORT,()=>console.log('Server listens on port %s !',server.address().port));