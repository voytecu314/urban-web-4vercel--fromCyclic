import transporter from "../../../../services/urbanEmailAccess.js";
import emailTmp from '../emailTemplate.js';


export const preVoucherController = async (req, res, next) => {
    const {brandName, siteCategory, userEmail} = req.body;

    try {
        const info = await transporter.sendMail({
            from: `"${brandName} - ${userEmail}" info@urban-web.org`, // sender address
            to: "wojtek.urbanski.web.dev@gmail.com", // list of receivers
            subject: "Pre Voucher entries", // Subject line
            text: `Category of the page: ${siteCategory}`, // plain text body
            /* html: `<b>TEST</b><p>${message}</p> <ul><li>${subject}</li><li>${name}</li><li>${email}</li></ul>`, // html body */
          });
        res.json(info);
    } catch (error) {
        next(error)
    }
}

export const voucherController = async (req, res, next) => {
    
    const {brandName, siteCategory, userEmail} = req.body;

    try {

          const userEntriesInfo = await transporter.sendMail({
            from: `"${brandName}" info@urban-web.org`, // sender address
            to: ["wojtek.urbanski.web.dev@gmail.com"], // list of receivers
            subject: "Voucher issued", // Subject line
            html: `<h1>${JSON.stringify(req.body)}</h1>`, // plain text body
            attachments: req.files['customer-file'] && req.files['customer-file'].map(file => {return {filename: file.originalname, content: file.buffer}})
          })
          
          const infoVoucher = await transporter.sendMail({
              from: `"UrbanWeb" info@urban-web.org`, // sender address
              to: userEmail, // list of receivers
              subject: "Urban Web Voucher", // Subject line
              text: brandName+`: Category of the page: ${siteCategory}`, // plain text body
              html: emailTmp('the-word', brandName, userEmail), // html body,
            });

        res.json({info: {voucher: infoVoucher, userEntries: userEntriesInfo}, body: req.body, files: req.files});
    } catch (error) {
        next(error)
    }
}