import Link from "next/link";
import { useSession } from "next-auth/react"

export default function UserLink(){
    const { data: session, status } = useSession()

    return(
        <div className="position-absolute top-0 end-0 px-5 pt-3">
            <Link href = "/my-account" className="btn-light btn-outline-dark fs-1 text-dark text-uppercase">
                {session?.user?.name?.slice(0,1)}
            </Link>            
        </div>
    )
}