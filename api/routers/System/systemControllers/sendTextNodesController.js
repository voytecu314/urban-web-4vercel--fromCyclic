import {TextNodesModel} from '../../../models/textNodesModel.js';

export default async (req, res,next) => {

    try {
        
        const jwtPayload = req.jwtPayload;
        const { user, language, textNodesArray } = req.body;

        if(jwtPayload.user !== user.toLowerCase()) throw new Error('Path and user don\'t match'); 

        const updateNodes = textNodesArray.map( ({nodeAddress, textContent}) => {
            
            return {
                updateOne: {
                    filter:{
                        nodeAddress
                    },
                    update:{
                        $set: {[`textContent.${language}`]: textContent[language]},
                        $push: { [`textBackup.${language}`]: textContent[language] }
                    }
                }
            }
            
        } );

        const updateResult = await TextNodesModel.bulkWrite(updateNodes);
        
        res.json({error: false, message: "Data arrived !", user, language, textNodesArray, updateResult });
        
    } catch (error) {
        
        next(error);

    }

}