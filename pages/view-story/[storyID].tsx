import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import BackArrow from '../../components/util/BackArrow'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingComponent from '../../components/util/Loading';
const Story = () => {
    const router = useRouter()
    const { account, storyID } = router.query
  
    const [story, setStory] = useState<any>(null)
    // const [storyImage, setStoryImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const getStory = async () => {
        
        
        // get the post

        const url = `/api/mongodb/story/${storyID}`

        console.log(url)

        let response = await fetch(url, {
            method: 'GET'
        });

        // get the data
        let data = await response.json();

        // get the data

        if (data.success) {
            // reset the fields
            // set the message
            // alert(JSON.stringify(data))
            // alert(JSON.stringify(data.stories[0]))
            setStory(data.stories[0])
            // return data.stories;
        } else {
            // set the error
            return console.log(data.message);
        }
    };

    useEffect(()=>{
        getStory()
    },[])

    useEffect(()=>{

        // Load story    
    
      }, [])
    

    return (
        <div className="container gx-0 py-5 h-100 d-flex flex-column">
            <ToastContainer />

            <BackArrow href = "../../my-stories"/>

            {
                loading &&
                <div className="w-100 h-100 d-flex justify-content-center">
                <LoadingComponent/>
                </div>
            }
                
            {
                story && !loading && 
                
                <div className="container px-lg-5 py-lg-4 py-lg-4 d-flex">
                    <div className="flex-grow-1 px-lg-5 py-lg-4 p-4 border-start border-end book-shadow story-pages h-100">
                    {/* <h1 className="text-center">{prompt.name} the {prompt.subject}</h1> */}
                    <hr className="mt-4"/>  

                    {
                        story?.picture ?
                        <div className="w-100 d-flex my-4 justify-content-center" style={{minHeight:200}}>
                        <img className = "bg-info border border-dark rounded-3" src={"data:image/jpeg;base64,"+story?.picture}/>
                        </div>
                        
                        :
                        <div className="w-100 bg-info border border-dark rounded-3 my-4" style={{minHeight:200}}></div>

                    }


                    <div className="double-space fs-4">
                        
                        {
                         story?.text && story?.text.map((ele:any, index:number)=>{
                            return (
                            // <StoryBlock 
                            //   index = {index}
                            //   key = {`p-${index}`}
                            //   text = {ele}  
                            // />   
                                    <p key={'p-'+index}>{ele}</p>
                        
                            )
                        })
                        }
                    </div>
                    <hr/>  
                    
                    </div>
                </div>
            }
        </div>
    )
  }

export default Story