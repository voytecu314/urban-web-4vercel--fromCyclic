import nodemailer from 'nodemailer';

function mailService (websiteName) {
   
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: 'wojtek.urbanski.web.dev@gmail.com',
        pass: process.env[`MAIL_PASS_${websiteName.toUpperCase()}`],
        },
    });
  
     return transporter;

}



export default mailService;
