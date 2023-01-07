import React from "react";

const Page = React.forwardRef((props: any, ref: any) => {
  
  console.log("render")
  return (
    <div className="page" ref={ref} >
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

export default Page