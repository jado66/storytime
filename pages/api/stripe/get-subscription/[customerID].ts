import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToStripe } from '../../../../lib/stripe';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const query = req.query;
    const { customerID } = query;

    const stripe = await connectToStripe()

    let subscriptions = null

    if (customerID && stripe){
        subscriptions = await stripe.subscriptions.list({ // @ts-ignore
        customer: customerID, // @ts-ignore 
        status: "active" // @ts-ignore 
      });
      res.status(200).json({ result: subscriptions });

    }

    else{
      console.log("couldn't find customer")
      res.status(200).json({ result: null });
    }
    

}
