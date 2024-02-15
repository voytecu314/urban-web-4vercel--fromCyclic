import * as url from 'url';
//import jwt from 'jsonwebtoken';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
/* const __dirnameSplitted = __dirname.split('\\');*/ 
const __dirnameSplitted = __dirname.split('/');
export const myPath = __dirnameSplitted.slice(0,__dirnameSplitted.length-5).join('/');

export default 
    (req,res,next)=>{  

        if(req.jwtToken.verified) {

            //const decodedPayload = jwt.verify(req.cookies.jwt_token, process.env.JWT_SECRET);
            
            res.sendFile(myPath+'/adminHtml/admin.html',(err) => {
                if (err) {
                    console.log(err);
                    next('Something went wrong, please contact admin');
                }
            });
            return;

          } 
            
        res.sendFile(myPath+'/public/admin-login.html',(err) => {
            if (err) {
                console.log(err);
                next({msg:'Something went wrong, please contact admin',path:myPath+'/adminHtml/admin.html',myPath});
            }
        });

    };