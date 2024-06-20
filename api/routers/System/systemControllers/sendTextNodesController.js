export default async (req, res,next) => {

    try {
        
        const userFromTokenPayload = req.user;
        const { user, language, textNodesArray } = req.body;

        if(userFromTokenPayload !== user) throw new Error('Path and user don\'t match'); 
        
        res.json({error: false, message: "Data saved !",user, language, textNodesArray });
        
    } catch (error) {
        
        next(error);

    }

}