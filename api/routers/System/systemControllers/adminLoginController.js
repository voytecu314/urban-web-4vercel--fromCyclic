import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
    try {

        const response = {
            jwtToken: undefined,
            auth: false,
            message: null,
        }

        const {user, password} = req.body;
        
        //later add pepper from env

        const collection = mongoose.connection.db.collection('cms_admins');
        const adminDoc = await collection.find({website_name: user}).toArray();
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


            const jwtToken = jwt.sign({ user: user.toLowerCase() }, process.env.JWT_SECRET+user.toLowerCase(), { expiresIn: '15min' });

            response.jwtToken = jwtToken;
            response.auth=true;
            response.message = 'Login credentials correct, JWT issued';

            res.json(response);
            return;
        }

        response.message = 'Wrong login credentials';
        res.json(response);

    } catch (error) {
        next(error)
    }
}