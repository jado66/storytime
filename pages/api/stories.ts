const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
 
export default async function handler(req:any, res:any) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getStories(req, res);
        }

        case 'POST': {
            return addStory(req, res);
        }

        case 'DELETE': {
            return deleteStory(req, res);
        }
    }
}

async function getStories(req:any ,res: any){
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        
        let stories:any = []

        client.connect(err => {

            // const db = client.db("stories")
            
            // db.listCollections().forEach((c:any) => {
            //     db.collection(c).find().forEach((d:any) => {
            //         console.log(c); 
            //         console.log(JSON.stringify(d))
            //     })
            // })

            stories = client.db("stories").collection("sample_stories")
            // perform actions on the collection object
            .find({})
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

async function addStory(req:any, res:any) {
    try {
        // connect to the database
        const MONGODB_URI = process.env.MONGODB_URI;
        const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        
            client.connect(err => {

                // console.log("adding "+req.body)

                const collection = client.db("stories").collection("sample_stories")
                // perform actions on the collection object
                .insertOne(JSON.parse(req.body));
                // return a message
                
                
                // client.close();
                
            });

            return res.json({
                message: 'Story added successfully',
                success: true,
            });
    } catch (error:any) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function deleteStory(req:any, res:any) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

        // Deleting the post
        await db.collection('stories').deleteOne({
            _id: new ObjectId(req.body),
        });

        // returning a message
        return res.json({
            message: 'Story deleted successfully',
            success: true,
        });
    } catch (error:any) {

        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}