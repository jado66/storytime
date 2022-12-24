import React from "react";

export default function LengthSlider(props:any) {
  return (
    <input 
        type="range" 
        className="form-range" 
        min="1" 
        max="30" 
        step="1" 
        value={props.length}
        onChange = {(evt)=>props.setLength(evt.target.value)}
    />
  );
}
