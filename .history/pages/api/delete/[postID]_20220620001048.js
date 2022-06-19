import connectMongo from "../../../utlis/connectMongo";
import Test from "../../../models/testModel";
import { MongoClient } from "mongodb";
import mongoose from 'mongoose'
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
    try{
      console.log(mongoose.Types.ObjectId.isValid(req.query.postID));
      await Test.findOneAndDelete({_id:req.query.postID})
      res.send('Item deleted')
    }catch(error)
    {
      console.log(error)
    }
  }
  