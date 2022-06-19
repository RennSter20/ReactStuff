import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { MongoClient } from "mongodb";
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
 
  try{
    console.log('Trying to delete!');
    const id = req.query.postID
    const d =  Test.deleteOne({_id: id});
  }
  catch(err)
  {
    console.log(error);
        res.json({error});
  }

    
  }
  