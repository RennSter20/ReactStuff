import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import { useRouter } from 'next/dist/client/router';
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function addTest(req, res) {
    const router = useRouter();
    const forceReload = () => {
      router.reload();
    }
    try
    {
        console.log('CONNECTING TO MONGO');

        await connectMongo();
    
        console.log('CONNECTED TO MONGO');
        console.log('CREATING DOCUMENT');

        const test = await Test.create(req.body)

        console.log('CREATED DOCUMENT');

        res.json({test})
        
        forceReload();
    }
    catch(error)
    {
        console.log(error);
        res.json({error});
    }
    
  }
  