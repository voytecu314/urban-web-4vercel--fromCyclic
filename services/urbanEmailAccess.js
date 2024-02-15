import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@urban-web.org',
      pass: process.env.MAIL_PASS,
    },
  });

export default transporter;