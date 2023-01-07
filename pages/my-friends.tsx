import BackArrow from "../components/util/backArrow";
import ProtectedPage from "../components/util/ProtectedPage";

export default function MyFriends(){
    
    const friendsList = [
        {
            name:"John",
            bookCount:"8",
            id: 1231213
        },
        {
            name:"Sarah",
            bookCount:"4",
            id: 1231214
        },
        {
            name:"Catie",
            bookCount:"3",
            id: 1231215
        },
        {
            name:"Molly",
            bookCount:"0",
            id: 1231216
        }

    ]
    
    return(
        <ProtectedPage>
            <div className="container py-5 d-flex flex-column ">
                <BackArrow/>
                <h1 className="text-center">My Friends</h1>

                <div className="flex-column d-flex">

                    {friendsList.map(el=>{
                        return(
                            <FriendRow key = {el.id+"-fr"} {...el}/> 
                        )
                    })}
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