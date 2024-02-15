import transporter from "../../../../services/urbanEmailAccess.js";

export default async (req, res, next)=>{

    const {name, email,subject,message} = req.body;

    try {
        const info = await transporter.sendMail({
            from: `"${name}" info@urban-web.org`, // sender address
            to: "info@urban-web.org, wojtek.urbanski.web.dev@gmail.com", // list of receivers
            subject, // Subject line
            text: "Hello world? text", // plain text body
            html: `<b>TEST</b><p>${message}</p> <ul><li>${subject}</li><li>${name}</li><li>${email}</li></ul>`, // html body
          });
        res.json(info.response);
    } catch (error) {
        next(error)
    }
}