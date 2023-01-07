import { useState, useCallback, useEffect } from "react";
import axios from 'axios'
import SubjectSelect from "../components/SubjectSelect";
import NameInput from "../components/NameInput";
import MessageSelect from "../components/MessageSelect";
import LengthSlider from "../components/LengthSlider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "../components/util/Loading";

export default function Home() {
  const [prompt, setPrompt] = useState(
    {
      name:"",
      subject:"",
      message:"",
      length: 5
    }
  )

  const saveToast = () => toast("Save successful!");

  const handlePromptChange = (key:string, val:string|number) =>{
    setPrompt(prev =>{
      return {
        ...prev,
        [key]: val
      }
    })
  }

  // const [story, setStory] = useState<string[]|null>([null])
  const [story, setStory] = useState<string[]|null>(
  
  [
"    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec est sed nunc molestie venenatis vel id ligula. Donec eu lorem felis. Pellentesque eget faucibus risus. Integer at leo vel ex ullamcorper sagittis. Sed pulvinar lacus diam, id faucibus nibh malesuada id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lacinia ligula ipsum, ac luctus nisi placerat a. Ut venenatis lobortis tellus a luctus. Nulla sit amet leo faucibus nisi commodo consectetur ut in purus. Phasellus cursus egestas leo nec pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
"Ut vitae ex mattis, mattis nulla eget, efficitur libero. Quisque facilisis, leo in aliquet volutpat, nisl nisl luctus mi, id aliquam felis turpis sed nunc. Vestibulum libero libero, hendrerit in lorem condimentum, blandit maximus tortor. Fusce metus risus, semper sit amet pulvinar eget, vulputate a neque. Nam eget fermentum tellus, in pretium est. Curabitur in nulla non mi laoreet cursus. Etiam fringilla mauris non vehicula porttitor. Nunc mattis lorem augue, sit amet imperdiet arcu pretium eu. Aliquam gravida ligula at elementum viverra. Phasellus eu nisl vel odio lobortis congue sed ut quam. Etiam dapibus in ipsum ut egestas.",
"Fusce id vulputate lacus. Integer odio eros, vehicula at ornare vel, tempus vitae nisl. Maecenas id massa euismod, iaculis metus a, ornare odio. Duis enim dui, suscipit a nulla vitae, pellentesque suscipit libero. Integer viverra dapibus aliquet. Aenean condimentum lorem sed mi faucibus molestie. Sed sed quam pharetra, cursus nulla non, sagittis erat. Duis a lorem ac nunc gravida dictum id quis tellus.",
"Aliquam erat volutpat. Vivamus congue fringilla pretium. Donec ipsum turpis, ultricies eu lorem ut, viverra laoreet velit. Etiam scelerisque lacus ut dui dapibus, a ornare ante convallis. Vivamus elementum tellus in velit semper, et aliquam mauris posuere. Etiam eget tincidunt elit, vel facilisis augue. Suspendisse eu dui et sem sollicitudin suscipit. Praesent nec lacinia eros. Nullam lacus odio, finibus ac tempus non, porttitor interdum massa. Sed a velit sagittis, venenatis turpis scelerisque, feugiat justo. Integer commodo metus quis turpis vehicula sollicitudin. Phasellus posuere fringilla leo, eu varius enim porta id. Nullam quis elementum turpis, vel condimentum enim. Donec vestibulum elit vel mauris ultrices, nec dictum eros hendrerit.",
"Fusce placerat dolor at sapien dignissim rhoncus. Fusce faucibus sodales urna vitae ullamcorper. Nullam maximus orci id quam porta, ac pharetra ex dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sapien felis, consectetur at finibus sed, vehicula vel orci. Donec eget quam eget justo feugiat laoreet ac in diam. Vivamus vehicula tempus nisl, id congue enim lacinia posuere. Integer rutrum eros magna, nec molestie nibh dictum ac. Aenean ornare fermentum augue ut dignissim. Aliquam accumsan interdum elit, sed malesuada augue consequat a. Nunc dui leo, tincidunt sit amet magna vel, volutpat tempor nibh."  
])

  const [storyImage, setStoryImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const goBack = () => {
    setPrompt({
      name:"",
      subject:"",
      message:"",
      length: 5
    })
    setStory(null)
  }

  const saveStory = async (e:any) => {
    e.preventDefault();

    // reset error and message
    
    // fields check

    // post structure
    let storyObj = {
        piture : storyImage,
        title: `${prompt.name} the ${prompt.subject}`,
        text: story, 
        creationDate: new Date().toISOString(),
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
        return console.log(data.message);
    } else {
        // set the error
        return console.log(data.message);
    }
};

  const generateImagePrompt = () =>{
    if (!prompt.name || !prompt.subject || !prompt.message ){
      return null
    }
    return `cute storybook illustration of a ${prompt.subject}`

  }

  const generateStoryPrompt = () =>{
    
    if (!prompt.name || !prompt.subject || !prompt.message ){
      return null
    }
    
    return `Can create me a ${prompt.length} paragraph children's story about a ${prompt.subject.toLowerCase()} named ${prompt.name} with a hidden message about ${prompt.message}`
  }

  const generateImage = useCallback(
    async () => {
      
      const prompt = generateImagePrompt()

      console.log("prompt: " +prompt)

      if (!prompt){
        return;
      }
      // setCompletion('Loading...');
      const response = await fetch('/api/createImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });
      const data = await response.json();

      console.log(JSON.stringify(data ))
      setStoryImage(data.result.data[0].url);
      
      }
  , [prompt]); 

  const generateStory = () =>{
    setLoading(true)
    generateStoryText()
    generateImage()
  }

  useEffect(()=>{

    if (storyImage){
      setLoading(false)
    }
  }, [storyImage])

  const generateStoryText = useCallback(
    async () => {
      
      const prompt = generateStoryPrompt()

      // console.log("prompt: " +prompt)

      if (!prompt){
        return;
      }
      // setCompletion('Loading...');
      const response = await fetch('/api/createStory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });
      const data = await response.json();

      // console.log(JSON.stringify(data ))
      setStory(data.result.choices[0].text.split("\n\n"));
      }
  , [prompt]);

  return (
    <div className="container gx-0 py-5 h-100 d-flex flex-column">
      <ToastContainer />
      {
        !story && !loading &&
        <>
        <h1 className="text-center">Story Generator</h1>
        <div className="card p-4 d-flex justify-content-center flex-column mt-3 shadow border-0">
          <h2 className="h4 text-center">Tell me a childrens story story about a</h2>
          <div className="w-lg-50 px-sm-5 mx-auto my-2">
            <SubjectSelect 
              setSubject={(val:string)=>handlePromptChange('subject',val)} 
            />
          </div>
            
          <h2 className="h4 text-center my-3">named</h2>
          
          <div className="px-sm-5 w-lg-50 mx-auto my-2">
            <NameInput
              name={prompt.name} 
              setName={(val:string)=>handlePromptChange('name',val)} 
              className = "form-control"  
            />
          </div>
          
          <h2 className="h4 text-center my-3">including a positive message about </h2>
          
          <div className="w-lg-50 mx-auto my-2">
            <MessageSelect 
              setMessage={(val:string)=>handlePromptChange('message',val)} 
              className = "mx-sm-5"
            />
          </div>
          
          <h2 className="h4 text-center my-3">Story length</h2>
          
          <div className="px-sm-5 w-lg-50 mx-auto my-2 flex-row d-flex">
            <LengthSlider
              length={prompt.length} 
              setLength={(val:number)=>handlePromptChange('length',val)} 
              className = "form-control"  
            />
            <span className="ms-3">{prompt.length}</span>
          </div>
          

          <hr/>          

          <button 
            className="btn btn-primary w-lg-50 mt-2 mx-auto text-uppercase"
            onClick={generateStory}
          >
            Generate my story
          </button>
        </div>
        
        </>
      }

      {
        loading &&
        <div className="w-100 h-100 d-flex justify-content-center">
          <LoadingComponent/>
        </div>
      }
        
      {
        story && !loading && 
        
        // <Book2
        //   images = {[storyImage]}
        //   story = {story}
        // />
        <div className="container px-lg-5 py-lg-4 py-lg-4 d-flex">
            <div className="flex-grow-1 px-lg-5 py-lg-4 p-4 border-start border-end book-shadow story-pages h-100">
              <h1 className="text-center">{prompt.name} the {prompt.subject}</h1>
              <hr className="mt-4"/>  

              {
                storyImage ?
                <div className="w-100 d-flex my-4 justify-content-center" style={{minHeight:200}}>
                  <img className = "bg-info border border-dark rounded-3" src={storyImage}/>
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
                  onClick={goBack}
                >
                  Create a new story
                </button>
                <button 
                  className="btn btn-primary w-50 mt-2 mx-auto text-uppercase"
                  onClick={saveStory}
                >
                  Save Story 
                </button>
              </div>  
            </div>
        </div>
      }
        

      
    </div>
  )
}


// const StoryBlock = (props:any) =>{
//   return(
//     <div>
      
//       {
//         props.index === 0 && props.text.split(" ").length >50 &&
//         <div className="w-100 bg-info border border-dark rounded-3 my-4" style={{minHeight:200}}></div>
//       }
      
//       <p className="">{props.text}</p>
//       {/* <p>-{props.text.split(" ").length} words</p> */}
//     </div>
//   )
// }