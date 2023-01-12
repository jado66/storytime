import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'
import BackArrow from '../../components/util/BackArrow'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingComponent from '../../components/util/Loading';
import ProtectedPage from '../../components/util/ProtectedPage';
const Story = () => {
    const router = useRouter()
    const { account, storyID } = router.query
  
    const [hasSaved, setHasSaved] = useState(false)

    const [prompt,setPrompt] = useState<any>(null)

    const [story, setStory] = useState<string[]|null>(null)
    const [storyImage, setStoryImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const convertImageBase64 = async(blob:any) => {
    
        console.log("Image is " + typeof blob)
        
      }
    
    const generateImagePrompt = () =>{
    
        return (`A cute children's image of a ${prompt.promptJSON.subject}`)
    }

    
    const generateImage = useCallback(
        async () => {
        
        if (!prompt){
            return;
        }

        const imagePrompt = generateImagePrompt()

        if (!imagePrompt){
            return;
        }

        console.log("prompt: " +imagePrompt)

        
        // setCompletion('Loading...');
        const response = await fetch('/api/createImage', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: imagePrompt }),
        });
        const data = await response.json();

        console.log(JSON.stringify(data ))
        setStoryImage(data.result.data[0].b64_json);

        }
    , [prompt]); 

 

    const generateStoryText = useCallback(
        async () => {
          
          const promptText = prompt.promptText
    
          // console.log("prompt: " +prompt)
    
          if (!promptText){
            return;
          }
          // setCompletion('Loading...');
          const response = await fetch('/api/createStory', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: promptText }),
          });
          const data = await response.json();
    
          // console.log(JSON.stringify(data ))
          setStory(data.result.choices[0].text.split("\n\n"));
          }
      , [prompt]);
    

    const generateStory = () =>{
        
        setLoading(true)
        generateStoryText()
        generateImage()
    }

    const saveToast = () => toast("Save successful!");

    const saveStory = async (e:any) => {
        e.preventDefault();
    
        // reset error and message
        const random_color = `hsl(${Math.floor(Math.random()*360)},80%,80%)`
        // fields check
    
        if (!prompt){
            return
        }

        // post structure
        let storyObj = {
            _id: storyID,
            picture : storyImage,
            title: `${(prompt?.promptJSON?.name?prompt.promptJSON.name+" ":"")}`+
                    "The " +
                    `${(prompt?.promptJSON?.adjective?prompt.promptJSON.adjective+" ":"")}`+
                    prompt?.promptJSON?.subject,
            text: story, 
            creationDate: new Date().toISOString(),
            color: random_color
        };
        // save the post
        let response = await fetch('/api/stories', {
            method: 'POST',
            body: JSON.stringify(storyObj),
        });
    
        // get the data
        let data = await response.json();
    
        if (data.success) {
            // reset the fields
            saveToast()
            // set the message
            setHasSaved(true)
            return console.log(data.message);
        } else {
            // set the error
            return console.log(data.message);
        }
    };
    
    useEffect(()=>{
        const promptObj = localStorage.getItem("prompt")
        if (promptObj){
            setPrompt(JSON.parse(promptObj))
        }
    },[])

    useEffect(()=>{
        if (prompt){
            generateStory()
        }
    },[prompt])

    useEffect(()=>{

        if (storyImage){
          setLoading(false)
        }
        convertImageBase64(storyImage)
    
      }, [storyImage])
    
    if (!prompt){
        return null
    }


    return (
        <ProtectedPage>
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
                    {/*  // eslint-disable-next-line */}
                    
                    <h1 className="text-center">
                        {
                            prompt?.promptJSON?.name &&
                            <span>{prompt.promptJSON.name+ " "}</span>
                        }
                        The 
                        {
                            prompt?.promptJSON?.adjective &&
                            <span>{" "+prompt.promptJSON.adjective}</span>
                        }
                        {" "+prompt.promptJSON.subject}</h1> 

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
                    <div className="w-100 text-center">
                        
                        <button 
                            className="btn btn-primary w-50 mt-2 mx-auto text-uppercase"
                            onClick={saveStory}
                            disabled = {hasSaved}
                        >
                            {hasSaved?"Story Saved":"Save Story"} 
                        </button>
                    </div>  
                    </div>
                </div>
            }
        </div>
        </ProtectedPage>
        
    )
  }

export default Story