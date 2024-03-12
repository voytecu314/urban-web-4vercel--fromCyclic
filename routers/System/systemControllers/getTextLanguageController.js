import s3paths from "../../../services/AWS/S3_Bucket_FS/bucketPaths.js";
import AWS from "aws-sdk";
const s3 = new AWS.S3();

export default async (req, res, next) => {

    try {

        const { websiteName, language } = req.params;

        const bucketResponse = await s3.getObject({
            Bucket: process.env.CYCLIC_BUCKET_NAME,
            Key: s3paths[websiteName].languages[language],
        }).promise()

        res.json( JSON.parse(bucketResponse.Body.toString()) );

    } catch (error) {
        next(error)
    }

}