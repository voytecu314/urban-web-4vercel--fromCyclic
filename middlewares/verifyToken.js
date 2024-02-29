import jwt from 'jsonwebtoken';

export default 
    (req,res,next)=>{  

        try {

            const decodedPayload = jwt.verify(req.body.jwt_token, process.env.JWT_SECRET);
            next();

          } catch(err) {
            
            next(err);

          }
         
    };