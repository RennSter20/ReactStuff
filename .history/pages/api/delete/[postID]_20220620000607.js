import connectMongo from "../../../utlis/connectMongo";
import Test from "../../../models/testModel";
import { MongoClient } from "mongodb";

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
    try{
      await Test.findOneAndDelete({_id:req.query.postID})
      res.send('Item deleted')
    }catch(error)
    {
      console.log(error)
    }
  }
  