import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const getAccount = async (email:string) => {
        
    // get the post
    let response = await fetch(`/api/stripe/get-customer/${email}`);
  
    // get the data
    let data = await response.json();
  
    if (data)
        return data.result.data[0]
    else{
        return null
    }
    
  };
  
  const determineSubscriptions = (subs:any) => {
    let plans = []
    
    for (var i = 0; i < subs.length; i++){
        if (subs[i].plan.product === "prod_N7cp86q4vhcjvY"){ // Test base product
            plans.push("base")
        } 
        else if (subs[i].plan.product === "prod_N7cp86q4vhcjvZ"){ // Test pro product
            plans.push("pro")
        } 
    }
  
    if (plans.length > 0){
        return plans
    } 
    else{
        return null
    }
  }
  
  const fetchSubscriptions = async (id: string) => {
    
    // get the post
    let response = await fetch(`/api/stripe/get-subscription/${id}`)
  
    // get the data
    let data = await response.json();
    
    if (data)
        return data.result.data
    else{
        return null
    }
    
  };

  interface Subscription{
    id: string,
    created: string,
    type: string,

  }

  interface User{
    name: string,
    email: string,
    subscription: null | Subscription,
    tokens: number,
    friends: string[]
  }

const useUser = (session) => {
  // destructuring asPath from next js useRouter hook to get the current path name
    const [user, setUser] = useState(null)

    useEffect(()=>{

        const fetchData = async (session:any) => {
            
            let subscription: null | Subscription = null
                
            const account = await getAccount(session.user.email).catch(console.error);

            if (account){
                const subsData = await fetchSubscriptions(account.id)

                const subs = determineSubscriptions(subsData)

                let type = "none"

                if (subs){
                    if (subs.length > 1){
                        alert("You have multiple subscriptions. Please email JadonDErwin@gmail.com to get this fixed!")
                        type = subs[1]
                    }
                    else{
                        type = subs[0]
                    } 
                }

                subscription = {
                    id: account.id,
                    created: account.created,
                    type: type
                }


                
            }
            
            setUser({
                name: session.user.name,
                email: session.user.email,
                subscription: subscription,
                tokens: 0, // Need to fetch
                friends: [] // Need to fetch
        
            })
            
        }

        if (session){

            fetchData(session).catch(console.error);
        }
        else{
            console.log("none")
          setUser({})
        }
      },[session])

  return user;
};

export default useUser;