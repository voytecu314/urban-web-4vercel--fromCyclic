import mailService from "../../../services/nodemailerTransporter.js";

export default async (req, res, next)=>{

    try {
        const info = await mailService(req.params.websiteName).sendMail({
            from: `ME testing urban web`, // sender address
            to: "info@urban-web.org, wojtek.urbanski.web.dev@gmail.com", // list of receivers
            subject: "Your Website", // Subject line
            text: JSON.stringify(req.body), // plain text body
            html: `<b>TEST</b><p>test</p> <ul><li>test}</li><li>test</li><li>test</li></ul>`, // html body
          });
        res.json(info.response);
    } catch (error) {
        next(error)
    }
}