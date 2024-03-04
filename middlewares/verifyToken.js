import jwt from 'jsonwebtoken';

export default 
    (req,res,next)=>{  

        try {

            //later change userPass to userHash (bcrypt)
            const userPass = process.env[`${user.toUpperCase()}_PASS`];
            // const salt = userPass xxx

            const decodedPayload = jwt.verify(req.body.jwtToken, process.env.JWT_SECRET+userPass);
            req.user = decodedPayload.user;
            next();

          } catch(err) {
            
            next(err);

          }
         
    };