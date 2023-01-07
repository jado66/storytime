import styles from './FloatingBook.module.scss'

export default function FloatingBook(props:any){
  
    return(
        <div className={styles.bookContainer+" mx-sm-4 mx-0 my-lg-0 my-4 px-2 w-100"}>
            <div className={styles.book+" h-100"} style = {{minHeight:"400px"}}>
                <div className={styles.front+" h-100 w-100 "} >
            
                    <div className={styles.cover+" h-100 w-100  d-flex flex-column"} style={{background: `linear-gradient(45deg,  ${props.color} 0%, ${props.color} 100%)`}}>
                        <h3 className="text-center mt-4 text-capitalize">{props.title}</h3>
                    
                        {
                            props.img ?
                            <div className="w-100 d-flex my-3 justify-content-center" style={{minHeight:200}}>
                                <img className = "bg-info border border-dark rounded-3" src={"data:image/jpeg;base64,"+props.img}/>
                            </div>
                            
                            :
                            <div 
                                className="w-100 my-3" 
                                style={{}}    
                            >
                                <div 
                                    className="bg-info border border-dark " 
                                    style={{minHeight:200,marginLeft:"35px", marginRight:"25px"}}
                                    >
                                </div>
                            </div>

                        }
                        <div className='flex-grow-1 d-flex' >
                            <p className={styles.author + " mb-3 ms-5 mt-auto "}>Created {props.date}</p>

                        </div>

                    </div>

                    
                </div>
                <div className={styles.leftSide+" h-100 d-flex"}>
                    <h2 className=' mb-5 pb-5 mt-auto'>
                        {/* <span>George Orwell</span> */}
                        StoryCreator.AI
                    </h2>
                </div>
            </div>
        </div>
    )
}