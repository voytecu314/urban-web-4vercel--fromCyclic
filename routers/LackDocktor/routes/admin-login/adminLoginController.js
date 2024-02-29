import jwt from "jsonwebtoken";

export default (req, res, next) => {
    try {

        const response = {
            jswToken: undefined,
            auth: false,
            message: null,
        }
        
        if(req.body.user + req.body.password === process.env.ADMIN_PASS) {

            const jwtToken = jwt.sign({ site: 'LackDocktor' }, process.env.JWT_SECRET, { expiresIn: '15min' });

            response.jwtToken = jwtToken;
            response.auth=true;
            response.message = 'Login credentials correct, JWT issued';

            res.json(response);
            return;
        }

        response.message = 'Wrong login credentils';
        res.json(response);

    } catch (error) {
        next(error)
    }
}