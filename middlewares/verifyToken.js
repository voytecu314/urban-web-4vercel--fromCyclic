import jwt from 'jsonwebtoken';

export default 
    (req,res,next)=>{  

        try {

            const decodedPayload = jwt.verify(req.cookies.jwt_token, process.env.JWT_SECRET);
            req.jwtToken={verified: true};

          } catch(err) {
            
            req.jwtToken={verified: false};

          }

          next();
    };