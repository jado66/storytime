import React from "react";

export default function NameInput(props:any) {
  return (
    <input
        className={props.className}
        value={props.name}
        placeholder = {"Enter a name..."}
        required
        onChange={(evt) => props.setName(evt.target.value)}
    />
  );
}
