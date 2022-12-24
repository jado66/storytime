import { useState, useCallback } from "react";
import axios from 'axios'
import SubjectSelect from "../components/SubjectSelect";
import NameInput from "../components/NameInput";
import MessageSelect from "../components/MessageSelect";
import LengthSlider from "../components/LengthSlider";

export default function Home() {
  const [prompt, setPrompt] = useState(
    {
      name:"",
      subject:"",
      message:"",
      length: 5
    }
  )

  const handlePromptChange = (key:string, val:string|number) =>{
    setPrompt(prev =>{
      return {
        ...prev,
        [key]: val
      }
    })
  }

  const [story, setStory] = useState<string[]|null>(null)

  const goBack = () => {
    setPrompt({
      name:"",
      subject:"",
      message:"",
      length: 5
    })
    setStory(null)
  }

  const generatePrompt = () =>{
    
    if (!prompt.name || !prompt.subject || !prompt.message ){
      return null
    }
    
    return `Can create me a ${prompt.length} paragraph children's story about a ${prompt.subject.toLowerCase()} named ${prompt.name} with a hidden message about ${prompt.message}`
  }

  const generateStory = useCallback(
    async () => {
      
      const prompt = generatePrompt()

      console.log("prompt: " +prompt)

      if (!prompt){
        return;
      }
      // setCompletion('Loading...');
      const response = await fetch('/api/getStory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt }),
      });
      const data = await response.json();

      console.log(JSON.stringify(data ))
      setStory(data.result.choices[0].text.split("\n\n"));
      }
  , [prompt]);

  return (
    <div className="container px-lg-5 pt-5">
      {
        !story ?
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
        
        :
        <div className="container px-lg-5 py-lg-4 py-lg-4 d-flex">
          <div className="flex-grow-1 px-lg-5 py-lg-4 p-4 border-start border-end book-shadow story-pages h-100">
            <h1 className="text-center">{prompt.name} the {prompt.subject}</h1>
            <hr className="mt-4"/>  

            <div className="double-space fs-4">
              {
                story.map((ele, index)=>{
                  return (
                    <p key = {`p-${index}`}>
                      {ele}
                    </p>
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
            </div>  
          </div>
        </div>

      }
    </div>
  )
}
