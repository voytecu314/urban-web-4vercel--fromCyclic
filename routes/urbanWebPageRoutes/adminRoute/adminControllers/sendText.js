import { urbanWebS3Paths } from "../../../../services/AWS_S3/pathsInBucket.js";
import AWS from "aws-sdk";
const s3 = new AWS.S3();

export default 
    async (req, res, next)=>{

        if(!req.jwtToken.verified){
            next({msg:'Bad JWT, please login as admin again!', cookieHttp: JSON.stringify(req.cookies),})
            return;
        }

        try {
            const {language, textNodesArray} = req.body;

            const laguagesPath = urbanWebS3Paths.languages[language];
    
            await s3.putObject({
                Body: JSON.stringify(textNodesArray),
                Bucket: process.env.CYCLIC_BUCKET_NAME,
                Key: laguagesPath,
            }).promise()
    
            res.json(req.body);
        } catch (error) {
            
            next(error);

        }

    };