export default (req, res,next) => {

    try {
        
        res.json({error: false, message: "Token is ok, data can be saved!"});
        
    } catch (error) {
        
        next(error);

    }

}