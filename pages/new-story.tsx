import { useState } from "react";
import SubjectSelect from "../components/SubjectSelect";
import NameInput from "../components/NameInput";
import MessageSelect from "../components/MessageSelect";
import LengthSlider from "../components/LengthSlider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackArrow from "../components/util/BackArrow";
import { useSession } from "next-auth/react";
import shortUUID from "short-uuid";
import { useRouter } from "next/router";
import ProtectedPage from "../components/util/ProtectedPage";
import AnimalSelect from "../components/customSelects/AnimalSelect";
import PeopleSelect from "../components/customSelects/PeopleSelect";
import ThingsSelect from "../components/customSelects/ThingsSelect";
import { X, Plus } from "react-bootstrap-icons";
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [prompt, setPrompt] = useState({
    subject: "",
    extras:{
      name:'',
      storyLength: '',
      mood:'',
      moral:'',
      style:'',
      adjective:''
    }
  });

  const [category, setCategory] = useState("");

  const [showExtras, setShowExtras] = useState({
    name:false,
    storyLength: false,
    mood:false,
    moral:false,
    style:false,
    adjective:false
  })

  const [showExtrasOptions, setExtrasOptions] = useState(false)


  const handleExtraChange = (key:string, value:string) =>{
    setPrompt((prev) => {
      return {
        ...prev,
        extras:
          {
            ...prev.extras,
            [key]: value,
          }
       
      };
    });
  }

  const createPrompt = () =>{
    let promptText = "Tell me a "

    if (prompt.extras?.storyLength){
      promptText += prompt.extras?.storyLength + " "
    }
    if (prompt.extras?.mood){
      promptText += prompt.extras?.mood + " "
    }
    
    promptText += "story"
    
    if (prompt.extras?.style){
      promptText += " in the style of " + prompt.extras?.style
    }

    promptText += " starring a "

    if (prompt.extras?.adjective){
      promptText += prompt.extras?.adjective + " "
    }
    
    promptText += prompt.subject
    
    if (prompt.extras?.name){
      promptText += " named " + prompt.extras?.name 
    }
    
    return promptText
    // alert("Creating story: "+promptText)
    
  }

  const generateStory = () => {
    
    if (!prompt.subject) {
      return;
    }

    const promptText = createPrompt()
    const promptObj = {
      promptText: promptText,
      promptJSON: prompt
    }
    const username = session?.user?.name;
    const id = shortUUID.generate();

    if (username) {
      localStorage.setItem("prompt", JSON.stringify(promptObj));

      router.push(`new-story/${id}`);
    }
  };

  const handleCategoryChange = (newCategory: string) =>{
    setCategory(newCategory)
    handleSubjectChange('')
  }  

  const handleSubjectChange = (newSubject: string) => {
    setPrompt(prev => {
      return {...prev,
      subject: newSubject}
    })
  }

  const visualPrompt = <>
    <div className="fs-3" >
      <span>{"Tell me a "}</span>
    {
      showExtras.storyLength && (
      <select 
        className="border hide-arrow px-1 text-center"
        onChange={(evt)=>handleExtraChange("storyLength",evt.target.value)}
      >
        <option value={"null"}>- Length -</option>
        <option>super short</option>
        <option>short</option>
        <option>medium length</option>
        <option>long</option>
        <option>really long</option>
      </select>)
    }

    {
      showExtras.mood && (
        <select 
          className="border hide-arrow px-1 text-center"
          onChange={(evt)=>handleExtraChange("mood",evt.target.value)}
        >
          <option value={"null"}>- Mood -</option>
          <option>anxious</option>	        
          <option>calm</option>
          <option>cheerful</option>
          <option>depressing</option>
          <option>eerie</option>
          <option>festive</option>
          <option>foreboding</option>
          <option>frightening</option>
          <option>frustrated</option>
          <option>hopeless</option>
          <option>humorous</option>
          <option>idyllic</option>
          <option>joyful</option>
          <option>light-hearted</option>
          <option>lonely</option>
          <option>melancholic</option>
          <option>ominous</option>
          <option>optimistic</option>
          <option>panicked</option>
          <option>peaceful</option>
          <option>pensive</option>
          <option>pessimistic</option>
          <option>reflective</option>
          <option>restless</option>
          <option>romantic</option>
          <option>sad</option>
          <option>sentimental</option>
          <option>stressed</option>
          <option>tense</option>
          <option>uneasy</option>       
        </select>)
    }
    <span> story</span>
    {
      showExtras.style && (
        <>
        <span>{" in the style of "}</span>
        <select 
          onChange={(evt)=>handleExtraChange("style",evt.target.value)}

          className="border hide-arrow px-1 text-center"
          // value={}
        >
          <option value={"null"}>- Style -</option>
          <option>Dr. Suess</option>	        
          <option>Roal Dahl</option>
          <option>Eric Carle</option>
          <option>Mo Willems</option>
          <option>William Shakespeare</option>
          <option>Shel Silverstein</option>

        </select>
      </>)
    }
    {/* {
      promptObj.moral && <span>{" with a message about " + promptObj.moral + ", starring a "}</span>
    }
     */}
     
    <br/>
    {"starring a "}
    {
      showExtras.adjective && (
        <select 
          className="border hide-arrow px-1 text-center"
          onChange={(evt)=>handleExtraChange("adjective",evt.target.value)}
        >
          <option value={"null"}>- Adjective -</option>
          <option>adorable</option>
          <option>adventurous</option>
          <option>aggressive</option>
          <option>agreeable</option>
          <option>alert</option>
          <option>alive</option>
          <option>amused</option>
          <option>angry</option>
          <option>annoyed</option>
          <option>annoying</option>
          <option>anxious</option>
          <option>arrogant</option>
          <option>ashamed</option>
          <option>attractive</option>
          <option>average</option>
          <option>awful</option>
          <option>bad</option>
          <option>beautiful</option>
          <option>better</option>
          <option>bewildered</option>
          <option>black</option>
          <option>bloody</option>
          <option>blue</option>
          <option>blue-eyed</option>
          <option>blushing</option>
          <option>bored</option>
          <option>brainy</option>
          <option>brave</option>
          <option>breakable</option>
          <option>bright</option>
          <option>busy</option>
          <option>calm</option>
          <option>careful</option>
          <option>cautious</option>
          <option>charming</option>
          <option>cheerful</option>
          <option>clean</option>
          <option>clear</option>
          <option>clever</option>
          <option>cloudy</option>
          <option>clumsy</option>
          <option>colorful</option>
          <option>combative</option>
          <option>comfortable</option>
          <option>concerned</option>
          <option>condemned</option>
          <option>confused</option>
          <option>cooperative</option>
          <option>courageous</option>
          <option>crazy</option>
          <option>creepy</option>
          <option>crowded</option>
          <option>cruel</option>
          <option>curious</option>
          <option>cute</option>
          <option>dangerous</option>
          <option>dark</option>
          <option>dead</option>
          <option>defeated</option>
          <option>defiant</option>
          <option>delightful</option>
          <option>depressed</option>
          <option>determined</option>
          <option>different</option>
          <option>difficult</option>
          <option>disgusted</option>
          <option>distinct</option>
          <option>disturbed</option>
          <option>dizzy</option>
          <option>doubtful</option>
          <option>drab</option>
          <option>dull</option>
          <option>eager</option>
          <option>easy</option>
          <option>elated</option>
          <option>elegant</option>
          <option>embarrassed</option>
          <option>enchanting</option>
          <option>encouraging</option>
          <option>energetic</option>
          <option>enthusiastic</option>
          <option>envious</option>
          <option>evil</option>
          <option>excited</option>
          <option>expensive</option>
          <option>exuberant</option>
          <option>fair</option>
          <option>faithful</option>
          <option>famous</option>
          <option>fancy</option>
          <option>fantastic</option>
          <option>fierce</option>
          <option>filthy</option>
          <option>fine</option>
          <option>foolish</option>
          <option>fragile</option>
          <option>frail</option>
          <option>frantic</option>
          <option>friendly</option>
          <option>frightened</option>
          <option>funny</option>
          <option>gentle</option>
          <option>gifted</option>
          <option>glamorous</option>
          <option>gleaming</option>
          <option>glorious</option>
          <option>good</option>
          <option>gorgeous</option>
          <option>graceful</option>
          <option>grieving</option>
          <option>grotesque</option>
          <option>grumpy</option>
          <option>handsome</option>
          <option>happy</option>
          <option>healthy</option>
          <option>helpful</option>
          <option>helpless</option>
          <option>hilarious</option>
          <option>homeless</option>
          <option>homely</option>
          <option>horrible</option>
          <option>hungry</option>
          <option>hurt</option>
          <option>ill</option>
          <option>important</option>
          <option>impossible</option>
          <option>inexpensive</option>
          <option>innocent</option>
          <option>inquisitive</option>
          <option>itchy</option>
          <option>jealous</option>
          <option>jittery</option>
          <option>jolly</option>
          <option>joyous</option>
          <option>kind</option>
          <option>lazy</option>
          <option>light</option>
          <option>lively</option>
          <option>lonely</option>
          <option>long</option>
          <option>lovely</option>
          <option>lucky</option>
          <option>magnificent</option>
          <option>misty</option>
          <option>modern</option>
          <option>motionless</option>
          <option>muddy</option>
          <option>mushy</option>
          <option>mysterious</option>
          <option>nasty</option>
          <option>naughty</option>
          <option>nervous</option>
          <option>nice</option>
          <option>nutty</option>
          <option>obedient</option>
          <option>obnoxious</option>
          <option>odd</option>
          <option>old-fashioned</option>
          <option>open</option>
          <option>outrageous</option>
          <option>outstanding</option>
          <option>panicky</option>
          <option>perfect</option>
          <option>plain</option>
          <option>pleasant</option>
          <option>poised</option>
          <option>poor</option>
          <option>powerful</option>
          <option>precious</option>
          <option>prickly</option>
          <option>proud</option>
          <option>putrid</option>
          <option>puzzled</option>
          <option>quaint</option>
          <option>real</option>
          <option>relieved</option>
          <option>repulsive</option>
          <option>rich</option>
          <option>scary</option>
          <option>selfish</option>
          <option>shiny</option>
          <option>shy</option>
          <option>silly</option>
          <option>sleepy</option>
          <option>smiling</option>
          <option>smoggy</option>
          <option>sore</option>
          <option>sparkling</option>
          <option>splendid</option>
          <option>spotless</option>
          <option>stormy</option>
          <option>strange</option>
          <option>stupid</option>
          <option>successful</option>
          <option>super</option>
          <option>talented</option>
          <option>tame</option>
          <option>tasty</option>
          <option>tender</option>
          <option>tense</option>
          <option>terrible</option>
          <option>thankful</option>
          <option>thoughtful</option>
          <option>thoughtless</option>
          <option>tired</option>
          <option>tough</option>
          <option>troubled</option>
          <option>ugliest</option>
          <option>ugly</option>
          <option>uninterested</option>
          <option>unsightly</option>
          <option>unusual</option>
          <option>upset</option>
          <option>uptight</option>
          <option>vast</option>
          <option>victorious</option>
          <option>vivacious</option>
          <option>wandering</option>
          <option>weary</option>
          <option>wicked</option>
          <option>wide-eyed</option>
          <option>wild</option>
          <option>witty</option>
          <option>worried</option>
          <option>worrisome</option>
          <option>wrong</option>
          <option>zany</option>
          <option>zealous</option>
        </select>
      )
    }
    <span className="">{" "}<u>{prompt.subject}</u></span>
    {
      showExtras.name && <><span> named </span>
      <input 
        placeholder = "- Name -" className="border text-center"
        value={prompt.extras.name}
        onChange={(evt)=>handleExtraChange("name",evt.target.value)}  
      /></>

    }
    </div>
    
  </>

    const toggleShowExtra = (key  : string) =>{
        // @ts-ignore 
        setShowExtras((prev)=> {
          return {
            ...prev,
            // @ts-ignore 
            [key]: !prev[key]
          }
      })
    }

  return (
    <ProtectedPage>
      <div className="container gx-3 py-5 h-100 d-flex flex-column">
        <BackArrow />
        <ToastContainer />

        <>
          <h1 className="text-center">Let's Create a New Story</h1>

          <hr />

          <h2>
            A. Pick a Category
          </h2>
          
          <div
            className="btn-group btn-group-lg mt-3"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className={"btn btn-primary border border-3 "+(category === "Animals"?"border-dark fw-bold":"border-end-0")}
              onClick={() => handleCategoryChange("Animals")}
            >
              Animals
              {/* <AnimalSelect
                containerClassName = "btn btn-success"
                handleSubjectChange={(val:string)=>handlePromptChange('subject',val)} 
              />
              <PeopleSelect
                containerClassName = "btn btn-success"
                handleSubjectChange={(val:string)=>handlePromptChange('subject',val)} 
              />
              <ThingsSelect
                containerClassName = "btn btn-success"
                handleSubjectChange={(val:string)=>handlePromptChange('subject',val)} 
              /> */}
            </button>
            <button
              type="button"
              className={"btn btn-warning border border-3 "+(category === "People"?"border-dark fw-bold":"border-end-0")}
              onClick={() => handleCategoryChange("People")}
            >
              Characters
            </button>
            <button
              type="button"
              className={"btn btn-success border border-3 "+(category === "Things"?"border-dark fw-bold":"border-end-0")}
              onClick={() => handleCategoryChange("Things")}
            >
              Things
            </button>
            <button
              type="button"
              className={"btn btn-info border border-3 flex-grow-0 d-flex align-items-center"}
              onClick={() => handleCategoryChange("")}
            >
              <X/>
            </button>
            
          </div>

          { category && (
            <div >
              <hr className="my-3"/>
              <h2>B. Pick a Subject</h2>
              <div className="col-sm-10 col-md-8 col-lg-6  mx-auto">
                {
                  category === "Animals" &&
                  <AnimalSelect
                    setSubject = {handleSubjectChange}
                  />
                }
                {
                  category === "People" &&
                  <PeopleSelect
                    setSubject = {handleSubjectChange}
                  />
                }
                {
                  category === "Things" &&
                  <ThingsSelect
                  setSubject = {handleSubjectChange}
                  />
                }
              </div>
            

            </div>
          )}


          { prompt.subject && (
            <div className="pb-3 d-flex flex-column justify-content-center">
              <hr/>
              <h2>C. Add Extras</h2>

              <div className="text-center border p-2 rounded-5 bg-light">

              { visualPrompt }

              <hr className="mx-5 my-3"/>

              <div className="d-flex justify-content-center">
                  { ! showExtrasOptions ?
                    <button 
                      className="mb-2 btn btn-outline-secondary d-flex align-items-center" 
                      type="button" 
                      id="dropdownMenu2"
                      
                      aria-expanded="false"
                      onClick={()=>setExtrasOptions(true)}
                    >
                      Add Extras <Plus/>
                    </button>
                    :
                    <ul className="mb-2 dropdown-menu d-flex flex-column position-relative" >
                      <li>
                        <button 
                          className="dropdown-item text-end position-absolute end-0 pt-0 w-auto" 
                          onClick={()=>setExtrasOptions(false)}
                        >
                          <X/>
                        </button></li>
                        <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.name}
                            onClick = {()=>toggleShowExtra("name")}
                          />
                          <label className="form-check-label" >
                            Name
                          </label>
                        </div>
                      
                      <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.adjective}
                            onClick = {()=>toggleShowExtra("adjective")}
                          />
                          <label className="form-check-label" >
                            Adjective
                          </label>
                        </div>
                      
                      <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.style}
                            onClick = {()=>toggleShowExtra("style")}
                          />
                          <label className="form-check-label" >
                            Style
                          </label>
                        </div>
                      
                      <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.mood}
                            onClick = {()=>toggleShowExtra("mood")}
                          />
                          <label className="form-check-label" >
                            Mood
                          </label>
                        </div>
                      
                      {/* <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.moral}
                            onClick = {()=>toggleShowExtra("moral")}
                          />
                          <label className="form-check-label" >
                            Moral
                          </label>
                        </div> */}
                      
                      <div className="form-check ms-2">
                          <input 
                            type="checkbox" 
                            className="form-check-input" 
                            checked = {showExtras.storyLength}
                            onClick = {()=>toggleShowExtra("storyLength")}
                          />
                          <label className="form-check-label" >
                            Length
                          </label>
                        </div>
                      
                    </ul>
                  }                  
                </div>
              </div>
              
              
                
              
                
              {/* {
                extras.map((extra)=>{
                  return <div key = {extra+"-input"}>
                          {extrasInputMap(extra)}
                        </div>
                })
              }    */}
              <div className="d-flex justify-content-center">
                <button 
                  className="col-lg-6  justify-content-center bg-info text-dark fw-bold mt-3 btn btn-outline-secondary d-flex align-items-center" 
                  type="button" 
                  onClick={()=>generateStory()}
                >
                  Create Story
                </button>
              </div>
             
            </div>
          )}
         
        </>

      </div>
    </ProtectedPage>
  );
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
