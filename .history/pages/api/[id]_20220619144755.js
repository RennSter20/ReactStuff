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
    const id = req.query.id
    try
    {
        console.log('FINDING DOCUMENT');

        let postData = await db.collection("posts").findOne( {"_id": ObjectId(id)} );
    
        let isDeleted = await db.collection("posts").deleteOne( {"_id": ObjectId(id)} );
    }
    catch(error)
    {
        console.log('could not delete');
        res.json({error});
    }
    
  }
  