import s3paths from "../../../services/AWS/S3_Bucket_FS/bucketPaths.js";
import AWS from "aws-sdk";
const s3 = new AWS.S3();

export default async (req, res,next) => {

    try {
        
        const userFromTokenPayload = req.user;
        const { root, language, textNodesJsonData } = req.body;

        if(userFromTokenPayload !== root) throw new Error('Path and user don\'t match'); 

        const s3path = s3paths[root].languages[language];
        
        await s3.putObject({
            Body: JSON.stringify(textNodesJsonData),
            Bucket: process.env.CYCLIC_BUCKET_NAME,
            Key: s3path,
        }).promise()
        
        res.json({error: false, message: "Data saved !"});
        
    } catch (error) {
        
        next(error);

    }

}