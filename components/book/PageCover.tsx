import React from "react";

const PageCover = React.forwardRef((props: any, ref: any) => {
    return (
      <div
        className={"page page-cover page-cover-" + props.pos}
        ref={ref}
        data-density="hard"
      >
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

  export default PageCover