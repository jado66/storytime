import Link from "next/link";
import { ArrowLeftCircle } from "react-bootstrap-icons";

export default function BackArrow(props:any){
    return(
        <div className="position-absolute top-0 start-0 px-5 pt-3">
                <Link href = {props.href?props.href:"/"}className="btn-light btn-outline-dark fs-1 text-dark">
                    <ArrowLeftCircle/>
                </Link>            
        </div>
    )
}