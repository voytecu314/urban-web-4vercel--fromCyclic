import jwt from 'jsonwebtoken';

export default 
    (req,res,next)=>{  

        try {

            const {user, jwtToken} = req.body; 

            //later change to DB
            const userHash = process.env[`${user.toUpperCase()}_HASH`];

            const decodedPayload = jwt.verify(jwtToken, process.env.JWT_SECRET+userHash);
            req.user = decodedPayload.user;
            next();

          } catch(err) {
            
            next(err);

          }
         
    };