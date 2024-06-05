export default async (req, res,next) => {

    try {
        
        const userFromTokenPayload = req.user;
        const { root, language, textNodesArray } = req.body;

        if(userFromTokenPayload !== root) throw new Error('Path and user don\'t match'); 
        
        res.json({error: false, message: "Data saved !",root, language, textNodesArray });
        
    } catch (error) {
        
        next(error);

    }

}