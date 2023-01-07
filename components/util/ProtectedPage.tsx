import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function ProtectedPage(props:any) {
    const router = useRouter()

    const { data: session, status } = useSession()

    useEffect(()=>{
        if(status !== "loading"){
            if (!session) {
                console.log("No session")
                // maybe go to login page
                router.push('/login')
            }  
        }
    },[router,session])
  

  if (session) {
    return (
      <>
        {props.children}
      </>
    )
  }
  
  if(status === "loading"){
    return(
        null
    )
  }
  return <p>Access Denied</p>
}

