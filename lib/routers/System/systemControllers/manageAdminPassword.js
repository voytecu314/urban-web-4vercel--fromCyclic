import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
    try {

        const response = {
            success: false,
            message: null,
        }

        const {action, user, password, new_password} = req.body;
        
        //later add pepper from env

        const collection = mongoose.connection.db.collection('cms_admins');
        const adminDoc = await collection.find({website_name: user.split('_')[0]}).toArray();
        const hashes = adminDoc[0].hash;
        //const userHash = process.env[`${user.toUpperCase()}_HASH`]
        let userHash;
        //short-circuit return implementation for asyn callbac ('some' array method alternative)
        const checkHash = async (hash) => {return await bcrypt.compare(password, hash)};

        const checkHahes = async (hashesArray, asyncCheckFunction) => {
            for (const hash of hashesArray) {
                if (await asyncCheckFunction(hash)) {
                  userHash = hash;
                  return true; // If any item passes the test, return true immediately
                }
              }
              return false; // If no item passes the test, return false
        }
        
        const passwordMatch = await checkHahes(hashes, checkHash);
        
        if(passwordMatch) {


            
            
            response.message = `Password ${action}ed`;

            res.json(response);
            return;
        }

        response.message = 'Wrong login credentials';
        res.json(response);

    } catch (error) {
        next(error)
    }
}
