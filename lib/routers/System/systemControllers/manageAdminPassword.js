import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
    try {

        const response = {
            success: false,
            error: null,
            message: null,
        }

        const {action, user: websiteName, password, new_password} = req.body;
        
        //later add pepper from env

        const collection = mongoose.connection.db.collection('cms_admins');
        const adminDoc = await collection.find({website_name: user.split('_')[0]}).toArray();

        if (!adminDoc) {
            next('Admin not found');
            }

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

            if(new_password.length < 8)
                next({message:'New password is to short'})

            // hash new password
            const saltRounds = 12;
            const newHash = await bcrypt.hash(new_password, saltRounds);

            if (action === 'change') {

                // replace the matched hash with new one
                await collection.updateOne(
                    { website_name: websiteName, hashes: userHash },
                    { $set: { "hashes.$": newHash } }
                );

            } else if (action === 'add') {

                // push new hash into array
                await collection.updateOne(
                    { website_name: websiteName },
                    { $push: { hashes: newHash } }
                );
            }
            
            response.message = `Password ${action}ed`;
            response.success = true;
            response.error = false;

            res.json(response);
            return;
        }

        response.message = 'Wrong login credentials';
        res.json(response);

    } catch (error) {
        next(error)
    }
}
