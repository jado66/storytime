import type { NextApiRequest, NextApiResponse } from 'next';
const { MongoClient, ServerApiVersion } = require('mongodb');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {        
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        
        const query = req.query;
        const { storyID } = query;

        let stories:any = []

        client.connect((err:any) => {

            // const db = client.db("stories")
            
            // db.listCollections().forEach((c:any) => {
            //     db.collection(c).find().forEach((d:any) => {
            //         console.log(c); 
            //         console.log(JSON.stringify(d))
            //     })
            // })

            stories = client.db("stories").collection("sample_stories")
            // perform actions on the collection object
            .find({_id:storyID})
            .toArray( 
                function(err:any, result:any) {
                
                console.log("Made it this far")
                
                    if (err) throw err;
                    return res.json({
                        stories: result,
                        success: true,
                    });


              })
            // return a message

           
            // client.close();
           
        });
        
        
    } catch (error:any) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }  
}
