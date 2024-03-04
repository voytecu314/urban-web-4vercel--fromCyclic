import jwt from "jsonwebtoken";

export default (req, res, next) => {
    try {

        const response = {
            jswToken: undefined,
            auth: false,
            message: null,
        }

        const {user, password} = req.body;
        //later change userPass to userHash (bcrypt)
        const userPass = process.env[`${user.toUpperCase()}_PASS`]
        // const salt = userPass xxx
        
        if(password === userPass) {

            const jwtToken = jwt.sign({ user }, process.env.JWT_SECRET+userPass, { expiresIn: '15min' });

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