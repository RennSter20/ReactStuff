import connectMongo from '../../../utlis/connectMongo';
import Test from '../../../models/testModel';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
    try{
      console.log(req.body.name);
      const test = await Test.remove(req.body)
      
    res.send('Item deleted');
    }catch(error)
    {
      console.log(error)
    }
  }
  