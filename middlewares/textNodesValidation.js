let errorMessage ='';

function nodesAreOk(reqBody) {

   if( !Array.isArray(reqBody.textNodesArray) ) {
    errorMessage='Text nodes must be provided as an array';
    return false;}

   /* if( reqBody.textNodesArray.length !== 117 ) {
    errorMessage='Text nodes array should have the same length as saved on server, check if your DOM (or HTML) was not manipulated';
    return false;} */

    //check schema

   return true;
}

export default (req,res, next) => {
    if (req.body.language==='preferred') {
        req.body.language = req.headers['accept-language'].slice(0,2).toUpperCase();
    }
    if(nodesAreOk(req.body))
        next();
    else
        next(errorMessage);
}