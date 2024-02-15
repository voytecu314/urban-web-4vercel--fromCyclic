import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default 
    (req,res,next)=>{
        const {pass} = req.body;
        
        bcrypt.compare(pass, process.env.ADMIN_HASH, function(err, isPassCorrect) {
            if(err) console.log('bcrypt compare error',err);

            if (isPassCorrect) {

            const jwtToken = jwt.sign({ site: 'urban/web' }, process.env.JWT_SECRET, { expiresIn: '15min' });

            res.cookie('jwt_token', jwtToken, { origin: 'https://voytecu314.github.io', sameSite:'None',httpOnly:true, secure: true, maxAge:1000*60*15}).json({auth: true});
            return;
            } 

            next('Wrong password');
        });     
    };