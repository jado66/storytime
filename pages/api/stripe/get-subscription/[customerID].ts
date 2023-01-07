import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToStripe } from '../../../../lib/stripe';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const query = req.query;
    const { customerID } = query;

    const stripe = await connectToStripe()

    if (customerID){
      const subscriptions = await stripe.subscriptions.list({ // eslint-disable-line
        customer: customerID, // eslint-disable-line
        status: "active" // eslint-disable-line
      });
      res.status(200).json({ result: subscriptions });

    }

    else{
      console.log("couldn't find customer")
      res.status(200).json({ result: null });
    }
    

}
