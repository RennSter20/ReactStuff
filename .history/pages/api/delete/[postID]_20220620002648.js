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
      const object = Test.find({_id:postID})
      console.log(object.name)
      await Test.findOneAndDelete({name:object.name})
      res.send('Item deleted')
    }catch(error)
    {
      console.log(error)
    }
  }
  