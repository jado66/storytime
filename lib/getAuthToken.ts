const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET

// check the MongoDB URI
if (!AUTH0_CLIENT_SECRET) {
    throw new Error('Define the STRIPE_KEY_TEST environmental variable');
}

// check the MongoDB DB
if (!AUTH0_CLIENT_ID) {
    throw new Error('Define the STRIPE_SECRET_KEY_TEST environmental variable');
}

export async function getAuthToken() {

    const resp = await fetch('https://storygen.us.auth0.com/oauth/token', {
        method: 'POST',
        headers: {
        'content-Type': 'application/json',
        },
        body:JSON.stringify({
            client_id: AUTH0_CLIENT_ID,
            client_secret: AUTH0_CLIENT_SECRET,
            audience:"https://storygen.us.auth0.com/api/v2/",
            grant_type:"client_credentials"
        }) 
    })

    const data = await resp.json()    

    return data

}




