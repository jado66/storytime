import { useState } from "react";
import FlipBook from "../components/test-books/FlipBook";
import BackArrow from "../components/util/BackArrow";
import ProtectedPage from "../components/util/ProtectedPage";

export default function MyStore(){

    const [flip, setFlip] = useState(false)

    return(
        <ProtectedPage>
            <div className="container py-5 d-flex flex-column ">
                <BackArrow/>
                <h1 className="text-center">Earn By Reading</h1>

                <button className="btn btn-primary" onClick={()=>setFlip(p=>!p)}>{(flip?"Stop":"Flip")}</button>

                <div className="text-center pt-5 position-relative">
                    <FlipBook flip = {flip}/>

                </div>
                <div>
                    <h3>Earn</h3>
                </div>
            </div>
        </ProtectedPage>
    )
}

const FriendRow = (props:any) =>{
    return(
        <div className="d-flex flex-row my-3 border">
            <div className="col-2">
                <ImageCircle/>
                
            </div>
            {props.name}
            <div>{props.bookCount} books</div>
        </div>
    )
}

const ImageCircle = () =>{
    return(
        <div className="rounded-circle bg-info">
            J
        </div>
    )
}