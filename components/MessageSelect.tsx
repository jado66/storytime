import React from "react";

import Select from "react-select";
import { StateOption, stateOptions } from "./docs/data";

export default function MessageSelect(props:any) {
  return (
    <Select<StateOption, false>
        className={props.className}
        placeholder = {"Select a message..."}
        // defaultValue={stateOptions[1]}
        options={stateOptions}
        onChange={(opt: StateOption | null) => {
            props.setMessage(opt?.value);
        }}
    />
  );
}
