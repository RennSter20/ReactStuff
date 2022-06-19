import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { MongoClient } from "mongodb";
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
    const db = client.db(process.env.MONGODB_DB);
    const ObjectId = require('mongodb').ObjectID

    try
    {
        console.log('CONNECTING TO MONGO');

        await connectMongo();
    
        console.log('CONNECTED TO MONGO');
        console.log('DELETING DOCUMENT');

        console.log('DELETED DOCUMENT');
    
        res.json({test});
    }
    catch(error)
    {
        console.log('could not delete');
        res.json({error});
    }
    
  }
  