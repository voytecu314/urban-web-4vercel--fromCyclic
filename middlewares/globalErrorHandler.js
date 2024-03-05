export default (error, req, res, next) => {
    error.error = true;
    res.json(error);
}