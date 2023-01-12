import { useContext, useEffect, useState } from "react"
import LoadingComponent from "../components/util/Loading"
import { UserContext } from "./_app"
import Link from "next/link"
export default function Subcribe (){
    
    const [isMonthly, setIsMonthly] = useState(true)
    const {user} = useContext(UserContext)    // eslint-disable-line
    
    if (!user){
        return (<div className="w-100 h-100 d-flex justify-content-center">
                    <LoadingComponent/>
                </div>)

    }

    return(
        <div className="container m-5 d-flex flex-column ">
            

                {/* {JSON.stringify(user)} */}

            
                <div className="btn-group mx-auto mb-3" aria-label="Basic radio toggle button group">
                    <button className={"btn btn-outline-primary " +(isMonthly?"btn-primary text-light":"")} onClick = {()=>setIsMonthly(true)}>Monthly</button>
                    <button className={"btn btn-outline-primary " +(!isMonthly?"btn-primary text-light":"")} onClick = {()=>setIsMonthly(false)}>Yearly</button>
                </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                
                {
                    (!user?.name || user?.subscription.type === "none") &&
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Starter Account</h4>
                            </div>
                            <div className="card-body">
                            <h1 className="card-title pricing-card-title mb-1 ">Free Signup</h1>
                                <span className="m-1"></span>
                                <ul className="list-unstyled mt-1 mb-4">
                                <li>No Purchase Needed</li>
                                <li>Create and share unique stories</li>
                                <li>Limited Story Generation</li>
                                <li>You Can Upgrade Later</li>
                                </ul>
                                <Link 
                                    href={"/"} 
                                    className="w-100 btn btn-lg btn-outline-dark"
                                >
                                    Go To My Account
                                </Link>
                            </div>
                        </div>
                    </div>
                }
                
                {
                    ! (user?.subscription?.type === "base") &&
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Basic Account</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title mb-1 ">${isMonthly?"4.50":"40"}<small className="text-muted fw-light">/{isMonthly?"mo":"yr"}</small></h1>
                                    <span className="m-1 fw-bold">{!isMonthly?"Save $14":""}</span>
                                    <ul className="list-unstyled mt-1 mb-4">
                                    <li>Unlimited Story Generation</li>
                                    <li>Save and Share Stories</li>
                                    <li>Cancel Whenever</li>
                                    <li>Earn Bonuses Through Reading</li>
                                    </ul>
                                    <Link 
                                        href={
                                            isMonthly
                                            ?
                                            "https://buy.stripe.com/test_5kA5nu7pz6Sd8AofYY"
                                            :
                                            "https://buy.stripe.com/test_9AQaHOcJTdgB6sg4gh"
                                        } 
                                        className="w-100 btn btn-lg btn-primary"
                                    >
                                        Sign Up Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    
                }
                
                {
                    ! (user?.subscription?.type === "pro") &&
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Pro Account</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title mb-1">${isMonthly?"9.50":"75"}<small className="text-muted fw-light">/{isMonthly?"mo":"yr"}</small></h1>
                                <span className="m-1 fw-bold">{!isMonthly?"Save $39":""}</span>

                                <ul className="list-unstyled mt-1 mb-4">
                                <li>Unlimited Story Generation</li>
                                <li>Save and Share Stories</li>
                                <li>All Store Items Unlocked</li>
                                <li>Custom Story Prompts Enabled</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Sign Up Now</button>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
            
            
        </div>
    )
}