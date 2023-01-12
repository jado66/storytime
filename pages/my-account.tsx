import BackArrow from "../components/util/BackArrow";
import { useSession } from "next-auth/react"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./_app";
import { signOut } from "next-auth/react";
import Link from "next/link";
import ProtectedPage from "../components/util/ProtectedPage";

export default function MyAccount(){

    const {user} = useContext(UserContext)// eslint-disable-line
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

                <hr/>
                <div className="col-lg-6">
                    <Accordion className = 'mb-3' uniqueId = "AccDetails" header = "Account Details">
                        <span className="mb-1">Username: {user?.name}</span>
                        <span className="mb-1">Email: {user?.email}</span>
                        <span className="mb-1">Number of Stories Created: {user?.tokens}</span>
                        <span className="mb-1">Number of friends: {user?.friends?.length}</span>

                        
                        {/* <span>{JSON.stringify(account, null, 4)}</span> */}

                    </Accordion>
                    
                    <Accordion className = 'mb-3' uniqueId = "SubDetails" header = "Subscription Details">
                        
                   
                        {user?.subscription?.type === "base" &&
                            <>
                                <span className="mb-1">ID: {user.subscription.id}</span>
                                <span className="mb-1">Created : {created}</span>
                                <span className="mb-1">Subscription Type : {user.subscription.type}</span>


                                <hr className="my-3"/>

                                <Link href="/subscribe" className="btn btn-outline-dark mx-auto mb-3 w-100">
                                    Upgrade to paid Subscription
                                </Link>
                                <button className="btn btn-outline-dark mx-auto w-100">
                                    Cancel Subscription
                                </button>
                            </>
                        }
                        {user?.subscription?.type === "pro" &&
                            <>
                                <span className="mb-1">ID: {user.subscription.id}</span>
                                <span className="mb-1">Created : {created}</span>
                                <span className="mb-1">Subscription Type : {user.subscription.type}</span>
                                <hr className="my-3"/>
                                <button className="btn btn-outline-dark mx-auto w-100">
                                    Cancel Subscription
                                </button>
                            </>
                        }
                        {(!user?.subscription || user?.subscription?.type === "none") &&
                            <>
                                {JSON.stringify(user?.subscription)}
                                <Link href="/subscribe" className="mt-3 btn btn-outline-dark mx-auto w-100">
                                    Upgrade to paid Subscription
                                </Link>
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