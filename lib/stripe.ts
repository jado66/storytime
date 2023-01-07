import Stripe from "stripe";

const STRIPE_PK = process.env.STRIPE_KEY_TEST
const STIRPE_CL = process.env.STRIPE_SECRET_KEY_TEST

// check the MongoDB URI
if (!STRIPE_PK) {
    throw new Error('Define the STRIPE_KEY_TEST environmental variable');
}

// check the MongoDB DB
if (!STIRPE_CL) {
    throw new Error('Define the STRIPE_SECRET_KEY_TEST environmental variable');
}

export async function connectToStripe() {
    // check the cached.
    if (STIRPE_CL)
        return new Stripe(STIRPE_CL,{apiVersion:'2022-11-15'}); // eslint-disable-line

    return null

}