import jwt from "jsonwebtoken";

export default (req, res, next) => {
    try {
        
        if(req.body.user + req.body.password === process.env.ADMIN_PASS) {

            const jwtToken = jwt.sign({ site: 'LackDocktor' }, process.env.JWT_SECRET, { expiresIn: '15min' });

            res.json({jwtToken});
            return;
        }

        res.json("Bad login credentials");

    } catch (error) {
        next(error)
    }
}