import { useState, useCallback, useEffect } from "react";
import axios from 'axios'
import SubjectSelect from "../components/SubjectSelect";
import NameInput from "../components/NameInput";
import MessageSelect from "../components/MessageSelect";
import LengthSlider from "../components/LengthSlider";
import HTMLFlipBook from 'react-pageflip';
import StoryBook from "../components/book/Book";
import Book2 from "../components/book/Book2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "../components/util/Loading";
import BackArrow from "../components/util/BackArrow";
import { type } from "os";
import { useSession } from "next-auth/react";
import shortUUID from "short-uuid";
import { useRouter } from "next/router";
import ProtectedPage from "../components/util/ProtectedPage";

export default function Home() {

  const { data: session, status } = useSession()
  const router = useRouter()

  const [prompt, setPrompt] = useState(
    {
      name:"",
      subject:"",
      message:"",
      length: 5,
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

  const generateStory = () =>{
        
    if (!prompt.message || !prompt.name || !prompt.subject){
      return;
    }

    const username = session?.user?.name
    const id = shortUUID.generate()

    if (username){

      localStorage.setItem("prompt",JSON.stringify(prompt))

      router.push(`new-story/${id}`)
    }
    
  }
  
  return (
    <ProtectedPage>
      <div className="container gx-0 py-5 h-100 d-flex flex-column">
        <BackArrow/>
        <ToastContainer />
        
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
        

        
          

        
      </div>
    </ProtectedPage>
    
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