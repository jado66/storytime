import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import BackArrow from '../../components/util/BackArrow'
import { ToastContainer, toast } from 'react-toastify';
import LoadingComponent from '../../components/util/Loading';
const Story = () => {
    const router = useRouter()
    const { account, storyID } = router.query
  
    const [story, setStory] = useState<string[]|null>(null)
    const [storyImage, setStoryImage] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        // Load story    
    
      }, [])
    

    return (
        <div className="container gx-0 py-5 h-100 d-flex flex-column">
            <ToastContainer />

            <BackArrow href = "../../new-story"/>


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
                        storyImage ?
                        <div className="w-100 d-flex my-4 justify-content-center" style={{minHeight:200}}>
                        <img className = "bg-info border border-dark rounded-3" src={"data:image/jpeg;base64,"+storyImage}/>
                        </div>
                        
                        :
                        <div className="w-100 bg-info border border-dark rounded-3 my-4" style={{minHeight:200}}></div>

                    }


                    <div className="double-space fs-4">
                        {
                        story.map((ele, index)=>{
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