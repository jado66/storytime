import BackArrow from "../components/util/BackArrow";
import { useSession } from "next-auth/react"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./_app";
import { signOut } from "next-auth/react";
import ProtectedPage from "../components/util/ProtectedPage";

export default function(){

    const {user} = useContext(UserContext)
    const [created, setCreated] = useState<null|string>(null)

    useEffect(()=>{

        if (user?.subscription){
            const date = new Date(user.subscription.created* 1000)
            setCreated((date.getMonth() + 1) + "/" + date.getDate()+ "/"+date.getFullYear())
        }
    },[user])

    return(
        <ProtectedPage>
            <div className="container py-5 d-flex flex-column ">
                <BackArrow/>
                <h1 className="text-center">My Account</h1>

                
                <div className="col-lg-6">
                    <Accordion className = 'mb-3' uniqueId = "AccDetails" header = "Account Details">
                        <span>Username: {user?.name}</span>
                        <span>Email: {user?.email}</span>
                        <span>Number of Stories Created: {user?.tokens}</span>
                        <span>Number of friends: {user?.friends?.length}</span>

                        
                        {/* <span>{JSON.stringify(account, null, 4)}</span> */}

                    </Accordion>
                    
                    <Accordion className = 'mb-3' uniqueId = "SubDetails" header = "Subscription Details">
                        
                        
                        {user?.subscription?.type === "base" &&
                            <>
                                <span>ID: {user.subscription.id}</span>
                                <span>Created : {created}</span>
                                <span>Subscription Type : {user.subscription.type}</span>

                                <a href="/subscribe" className="btn btn-outline-dark mx-auto mb-3">
                                    Upgrade to paid Subscription
                                </a>
                                <button className="btn btn-outline-dark mx-auto">
                                    Cancel Subscription
                                </button>
                            </>
                        }
                        {user?.subscription?.type === "pro" &&
                            <>
                                <span>ID: {user.subscription.id}</span>
                                <span>Created : {created}</span>
                                <span>Subscription Type : {user.subscription.type}</span>
                                <button className="btn btn-outline-dark mx-auto">
                                    Cancel Subscription
                                </button>
                            </>
                        }
                        {!user?.subscription || user?.subscription?.type === "none" &&
                            <>
                                <a href="/subscribe" className="btn btn-outline-dark mx-auto">
                                    Upgrade to paid Subscription
                                </a>
                            </>
                        }
                        
                    
                    </Accordion>
                    
                    <button className="btn btn-outline-dark mx-auto" onClick={()=>signOut()}>
                        Log Out
                    </button>
                </div>
                

                <div>
                    
                </div>
            </div>
        </ProtectedPage>
       
    )
}


const Accordion = (props:any) =>{
    return(
        <div className={"accordion "+props.className}>
            <div className="accordion-item ">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#acc"+props.uniqueId}>
                    {props.header}
                </button>
                </h2>
                <div id={"acc"+props.uniqueId} className="accordion-collapse collapse">
                    <div className="accordion-body d-flex flex-column">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
            
    )
}