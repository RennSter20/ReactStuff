import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { MongoClient } from "mongodb";
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
  const id = req.query.postID
    console.log(id);
  }
  