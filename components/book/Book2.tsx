// import "./styles.css";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";
import useWindowWide from "./usewidth";

export default function Book2(props:any) {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const widthScreen = useWindowWide();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const book = useRef<any>();

  useEffect(() => {
    if (widthScreen < 600) {
      setWidth(400);
      setHeight(300);
    } else {
      setWidth(Math.ceil((0.9 * widthScreen) / 2));
      setHeight(Math.ceil((0.6 * widthScreen) / 2));
    }
  }, [widthScreen]);

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }:any) => setPage(data );

  return (
    <div className="bg-info flex-grow-1 d-flex" >
      <div className="flex flex-grow-1">
        <HTMLFlipBook
            onFlip={updatePage}
            width={width}
            height={height}
            ref={book} 
            className={"h-100 position-relative"} 
            style={{}}  
            startPage={0}
            size={"fixed"} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={true} flippingTime={3000} usePortrait={false} startZIndex={0} autoSize={true} maxShadowOpacity={.5} showCover={false} mobileScrollSupport={false} clickEventForward={false} useMouseEvents={true} swipeDistance={0} showPageCorners={true} disableFlipByClick={false}      >
            <div className="page">
                {
                    props.images[0] ?
                    <div className=" d-flex my-4 justify-content-center" style={{minHeight:200}}>
                    <img className = "bg-info border border-dark rounded-3" src={props.images[0] }/>
                    </div>
                    :
                    <div className=" bg-info border border-dark rounded-3 my-4" style={{minHeight:200}}></div>
                }
            </div>

            
            {
                props.story.map((ele:any, index:any)=>{
                return (
                    <div key={'p-'+index} className="page text-center">
                        <h1>Page {index}</h1>
                        <p className="double-space text-start fs-2" >{ele}</p>
                    </div>
                    )
                })
            }
            

         
        </HTMLFlipBook>
        <span
            onClick={() => book.current.pageFlip().flipPrev()}
            className={"previous button"}
        >
            Prev
        </span>
        <span
            onClick={() => book.current.pageFlip().flipNext()}
            className={"next button"}
        >
            Next
        </span>
        <span className="info-page">
            {page} - {total}
        </span>
      </div>
      
    </div>
  );
}
