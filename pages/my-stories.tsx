import { useEffect, useState } from "react";
import FloatingBook from "../components/floatingBook/FloatingBook";
import BackArrow from "../components/util/BackArrow";
import LoadingComponent from "../components/util/Loading";
import ProtectedPage from "../components/util/ProtectedPage";

export default function MyStories(){
    
    const [myStories, setMyStories] = useState(null)

    const getStories = async () => {
        
        // get the post
        let response = await fetch('/api/stories', {
            method: 'GET'
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            // set the message
            // alert(JSON.stringify(data))
            setMyStories(data.stories)
            return data.stories;
        } else {
            // set the error
            return console.log(data.message);
        }
    };

    useEffect(()=>{
        getStories()
    },[])
    
    return(
        <ProtectedPage>

        
            <div className="container pt-3 d-flex flex-column h-100 ">
                <BackArrow/>
                
                <h1 className="text-center pb-4">My Stories</h1>

                {
                    myStories?                
                    <div className="d-flex flex-sm-row flex-column border overflow-auto p-lg-5 p-1 h-100" style={{ overflowX:"auto"}}>
                        {
                            myStories.map((story) =>{
                            return <FloatingBook
                                        title = {story.title}
                                        date = {story.creationDate}
                                        key = {story["_id"]}
                                        img = {story.picture}
                                        color = {story.color}
                                    />
                            })                    
                        }
                    </div>
                    :
                    <div className="w-100 h-100 d-flex justify-content-center">
                        <LoadingComponent/>
                    </div>
                }
                
                {/* </ScrollLoop> */}
            
            </div>
        </ProtectedPage>
    )
}