export default (req, res, next) => {
    res.json({post: req.body, env: process.env.ADMIN_PASS});
}