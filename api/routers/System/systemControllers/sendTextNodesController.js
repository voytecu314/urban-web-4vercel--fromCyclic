export default async (req, res,next) => {

    try {
        
        const jwtPayload = req.jwtPayload;
        const { user, language, textNodesArray } = req.body;

        if(jwtPayload.user !== user.toLowerCase()) throw new Error('Path and user don\'t match'); 
        
        res.json({error: false, message: "Data arrived !",user, language, textNodesArray });
        
    } catch (error) {
        
        next(error);

    }

}