import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
    try {

        const response = {
            jswToken: undefined,
            auth: false,
            message: null,
        }

        const {user, password} = req.body;
        
        //later get hash and salt/pepper from db
        const userHash = process.env[`${user.toUpperCase()}_HASH`]
        
        const passwordMatch = await bcrypt.compare(password, userHash);
        
        if(passwordMatch) {


            const jwtToken = jwt.sign({ user: user.toLowerCase() }, process.env.JWT_SECRET+userHash, { expiresIn: '15min' });

            response.jwtToken = jwtToken;
            response.auth=true;
            response.message = 'Login credentials correct, JWT issued';

            res.json(response);
            return;
        }

        response.message = 'Wrong login credentials';
        res.json(response);

    } catch (error) {
        next(error)
    }
}