import { useSession } from "next-auth/react"

export default function ProtectedPageWithAlt(props:any) {

    const { data: session, status } = useSession()

  
    if(status === "loading"){
        return(
            null
        )
      }

    if (session) {
        return (
        <>
            {props.children}
        </>
        )
    }

    return props.alt
}

