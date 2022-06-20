import connectMongo from "../../utlis/connectMongo";
import Test from "../../models/testModel";
import Alert from '@mui/material/Alert';
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
        res.json({test})
        
  
    }
    catch(error)
    {
        console.log(error);
        res.json({error});
    }
    <Alert severity="error">This is an error alert — check it out!</Alert>
  }
  