export default (global_error, req, res, next) => {
    res.json({global_error, msg: global_error.message});
}