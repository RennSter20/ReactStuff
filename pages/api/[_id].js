import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { MongoClient } from "mongodb";
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function deleteTest(req, res) {
    if(req.method === 'DELETE')
    {
        const deleted = test.find((tests) => tests._id === parseInt(testsId)
        )
        const index = test
        res.status(200).json(deleted)
    }
    
  }
  