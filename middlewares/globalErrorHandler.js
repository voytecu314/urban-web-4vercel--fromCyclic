export default (error, req, res, next) => {
    
    res.json({error: true, message: error.message});

}