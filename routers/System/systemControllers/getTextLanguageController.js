export default async (req, res, next) => {

    try {

        const { websiteName, language } = req.params;

        res.json( {websiteName, language} );

    } catch (error) {
        next(error)
    }

}