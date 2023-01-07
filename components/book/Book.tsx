// import { useEffect, useRef, useState, useCallback } from "react";
// import Page from "./Page";
// import PageCover from "./PageCover";
// import HTMLFlipBook from "react-pageflip";

// export default function StoryBook(){

//     const [pages, setPages] = useState<any>(null)

//     useEffect(()=>{

  
  
//       const newPages = [
//         <PageCover key={0} pos="top">
          
//         </PageCover>
//       ];
  
//       let pageNum = 0;
//       for (let i = 0; i < 2; i++) {
//         pageNum++;
//         if (pageNum > 8) pageNum = 1;
//         newPages.push(
//           <Page key={i + 1} image={pageNum + ".jpg"} number={i + 1}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
//             mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
//             Aenean vitae pellentesque erat. Integer non tristique quam.
//             Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
//             metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
//             accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
//             sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
//             convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
//             Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin
//             mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
//           </Page>
//         );
//       }
  
//       newPages.push(
//         <PageCover key={101} pos="bottom">
//           THE END
//         </PageCover>
//       );

//       setPages(newPages)

//     },[])

//     const [page, setPage] = useState(0)
//     const [totalPage, setTotalPage] = useState(0)
//     const [orientation, setOrientation] = useState('landscape')
//     const [state, setState] = useState("read")
    
//     const flipBook = useRef<any>(null)
  
   
//     const nextButtonClick = useCallback(() => {
//         const pageFlipObj = flipBook.current.pageFlip();
        
//         pageFlipObj.flipNext();
        
        
        
//       }, [flipBook]);
  
//     const prevButtonClick = () => {
//         const pageFlipObj = flipBook.current.pageFlip();

//         pageFlipObj.flipPrev();
//     };
  
//     const onPage = (e:any) => {
//         setPage(e.data)
//     };
  
//     const onChangeOrientation = (e:any) => {
//         setOrientation(e.data)
//     };
  
//     const onChangeState = (e:any) => {
//       setState(e.data)
//     };
  
//     useEffect(()=>{
        
//         const pageFlipObj = flipBook.current.pageFlip();
//         if (pageFlipObj){
//             setTotalPage(pageFlipObj.getPageCount())

//         }
//     }, [pages])
    
   
  
//     return (
//         <>
//         <div className="h-100 d-flex" style={{ position: "relative" }}>
//             <HTMLFlipBook
//                 width={550}
//                 height={733}
//                 size="stretch"
//                 minWidth={115}
//                 maxWidth={2000}
//                 minHeight={100}
//                 maxHeight={2533}
//                 maxShadowOpacity={0.5}
//                 showCover={true}
//                 mobileScrollSupport={true}
//                 onFlip={onPage}
//                 onChangeOrientation={onChangeOrientation}
//                 onChangeState={onChangeState}
//                 className="flip-book html-book demo-book flex-grow-1"
//                 // style={{ backgroundImage: "url(images/background.jpg)" }}
//                 ref={flipBook} 
//                 startPage={0} 
//                 drawShadow={true} 
//                 flippingTime={3000} 
//                 usePortrait={false} 
//                 startZIndex={0} 
//                 autoSize={false} 
//                 clickEventForward={false} 
//                 useMouseEvents={false} 
//                 swipeDistance={0} 
//                 showPageCorners={true} 
//                 disableFlipByClick={false}            >
//               {pages}
//             </HTMLFlipBook>
//           </div>
  
//           <div className="container mt-3">
//             <div className="row">
//               <div className="col-md-6">
//                 <button
//                   type="button"
//                   className="btn btn-info btn-sm btn-prev"
//                   onClick={prevButtonClick}
//                 >
//                   Previous page
//                 </button>
//                 [<span>{page + 1}</span> of{" "}
//                 <span>{totalPage}</span>]
//                 <button
//                   type="button"
//                   className="btn btn-info btn-sm btn-next"
//                   onClick={nextButtonClick}
//                 >
//                   Next page
//                 </button>
//               </div>
//               <div className="col-md-6">
//                 State: <i>{state}</i>, orientation:{" "}
//                 <i>{orientation}</i>
//               </div>
//             </div>
//         </div>
//         </>
          
//       );
    
//   }
  