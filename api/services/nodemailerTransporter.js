import nodemailer from 'nodemailer';

function mailService (websiteName) {
   
    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
        user: 'info@urban-web.org',
        pass: process.env[`MAIL_PASS_${websiteName.toUpperCase()}`],
        },
    });
  
     return transporter;

}



export default mailService;