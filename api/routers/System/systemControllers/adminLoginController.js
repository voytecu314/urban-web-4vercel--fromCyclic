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
        
        const userHash = process.env[`${user.toUpperCase()}_PASS`]
        
        const passwordMatch = await bcrypt.compare(password, userHash);
        
        if(passwordMatch) {

            const jwtToken = jwt.sign({ user: user.toLowerCase() }, process.env.JWT_SECRET+userPass, { expiresIn: '15min' });

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