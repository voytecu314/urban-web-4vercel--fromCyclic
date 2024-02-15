import { urbanWebS3Paths } from "../../../../services/AWS_S3/pathsInBucket.js";
import AWS from "aws-sdk";
const s3 = new AWS.S3();

async function getLanguage (language) {
  
  const bucketResponse = await s3.getObject({
      Bucket: process.env.CYCLIC_BUCKET_NAME,
      Key: urbanWebS3Paths.languages[language],
  }).promise()

  return JSON.parse(bucketResponse.Body.toString());
  
}

export default 
async (req,res, next)=>{
    try {
      
      let language=req.params.language;
      
      do {
          
        switch(language) {
          
          case 'EN': { res.json(await getLanguage('EN')).end(); return; }
          case 'DE': { res.json(await getLanguage('DE')).end(); return; }
          case 'PL': { res.json(await getLanguage('PL')).end(); return; }
  
          case 'preferred': { language = req.headers['accept-language'].slice(0,2).toUpperCase(); }
          break;
          
          default: { res.end(); return; }
          }   
          
      } while (language!=='preferred');
      
    } catch (error) {
      next(error);
    }
     
}