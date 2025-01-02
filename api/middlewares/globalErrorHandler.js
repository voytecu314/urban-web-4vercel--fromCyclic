export default (error, req, res, next) => {
    
    res.json({error: true, message: 'Something went wrong, try again later'});

}