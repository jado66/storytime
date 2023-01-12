import Image from "next/image";
import Link from "next/link";
import ProtectedPageWithAlt from "../components/util/ProtectedPageWithAlt";
import UserLink from "../components/util/UserLink";
import { signIn, useSession } from "next-auth/react";

export default function Home(){
    
    const showStore = false;

    return(
        <ProtectedPageWithAlt
            alt = {
                <div className="container py-5 d-flex flex-column">

                    <h1>Welcome to Story Teller</h1>

                    <button onClick={()=>signIn("auth0")} >
                        Login
                    </button>
                </div>
            }
        >

            <div className="container py-5 d-flex flex-column">
                <UserLink/>

                <h1 className="text-center">Story Creator</h1>
                
                <div className="text-center flex-lg-row flex-column d-flex justify-content-around py-4 mt-5">
                    <Link className="" href = {"new-story"}>
                        <CircleImage
                            bg = "bg-danger"
                            src = "/book.png"
                            alt = 'New Story Image'
                        />
                        <h3 className="mt-lg-4 mt-2">New Story</h3>
                    </Link>
                    <Link className="" href = {"my-stories"}>
                        <CircleImage 
                            bg = "bg-success"
                            src = "/lib.png"
                            alt = 'My Library Image'
                        />
                        <h3 className="mt-lg-4 mt-2">My Stories</h3>
                    </Link>
                    {/* <Link className="" href = {"my-friends"}>
                        <CircleImage 
                            bg = "bg-info"
                            src = "/friends.png"
                            alt = 'My Friends Image'
                        />
                        <h3 className="mt-lg-4 mt-2">My Friends</h3>
                    </Link> */}

                    {
                        showStore && 
                        <Link className="" href = {"my-store"}>
                            <CircleImage 
                                bg = "bg-warning"
                                src = "/store.png"
                                alt = 'My Store Image'
                            />
                            <h3 className="mt-lg-4 mt-2">My Store</h3>
                        </Link>
                    }
                </div>
                

            </div>
        </ProtectedPageWithAlt>
        
    )
}

const CircleDiv = (props:any) => {
    return (
        <div className="circle bg-light border"  style = {{minHeight:"200px", minWidth:"200px"}}>
            {props.children}
        </div>
    )    
}

const CircleImage = (props:any) =>{
    return(
        <div 
            className={"mt-lg-0 mt-5 p-5 border border-dark rounded-circle mx-auto " + props.bg}
            style = {{
                maxHeight:"350px", 
                maxWidth:"350px",
            }}
        >
            <div className="position-relative h-100 w-100" 
                style = {{
                    minHeight:"225px", 
                    minWidth:"225px",
                }}
            >   
                <Image 
                    src={props.src} 
                    alt = {props.alt}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
           
        </div>
    )
}
