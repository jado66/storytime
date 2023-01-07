import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToStripe } from '../../../../lib/stripe';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const query = req.query;
    const { email } = query;
    const stripe = await connectToStripe()

    let customer = null

    if (stripe){
        customer = await stripe.customers.search({
            query: `email:"${email}"`,
          });
    }


    res.status(200).json({ result: customer });
}
