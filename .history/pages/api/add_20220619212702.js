import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { Router } from "express";
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function addTest(req, res) {

    try
    {
        console.log('CONNECTING TO MONGO');

        await connectMongo();
    
        console.log('CONNECTED TO MONGO');
        console.log('CREATING DOCUMENT');

        const test = await Test.create(req.body)

        console.log('CREATED DOCUMENT');

        if(res.json({test}))
        {
            Router.push('/');
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.json({error});
    }
    
  }
  