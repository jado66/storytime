import Link from "next/link";
import { useSession } from "next-auth/react"

export default function UserLink(){
    const { data: session, status } = useSession()

    return(
        <Link href = "/my-account" className="border border-dark d-block position-absolute me-5 mt-5 top-0 end-0 rounded-circle bg-info text-center" style={{width:75, height:75}}>
            <div className="mx-auto my-auto d-flex justify-content-center align-items-center h-100">
                <span className=" fs-1 text-dark text-uppercase">
                    {session?.user?.name?.slice(0,1)}
                </span>  
            </div>
                      
        </Link> 
        
        
    )
}

{/* <Link href="#" className="position-absolute top-0 end-0 px-5 pt-3 align-items-center link-dark text-decoration-none " id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <div style={{width:50, height:50}} className="rounded-circle me-2 bg-info fs-1 text-dark text-uppercase">
            {session?.user?.name?.slice(0,1)}
            </div>
        </Link> */}
{/* <div className="position-absolute top-0 end-0 px-5 pt-3">
            <Link href = "/my-account" className="btn-light btn-outline-dark fs-1 text-dark text-uppercase">
                {session?.user?.name?.slice(0,1)}
            </Link>            
        </div> */}