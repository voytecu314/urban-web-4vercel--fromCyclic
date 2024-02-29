import express from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5500;

//app.options('*', cors({origin: 'https://urbanweb.site'}));
app.use( cors() ); //{origin: 'https://lack-docktor-urban-web-e9e6fcdb29dd4dcf9db3c9d0cc6752c1d38eb1fa.gitlab.io'}
app.use('/',express.json());

app.get('/test-get',(req, res)=>{
    res.json({get:'ok'});
});

app.post('/test-post',(req, res)=>{
    res.json({post: req.body});
});

//Global error handle
app.use('/', globalErrorHandler);

const server = app.listen(PORT,()=>console.log('Server listens on port %s !',server.address().port));