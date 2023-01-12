import React from "react";

import Select from "react-select";
import {
  ThingsOption,
  thingsOptions,
} from "../docs/data";
import { sharedStyles } from "./sharedStyles";


const reactSelectStyles = {
    
    ... sharedStyles,
    container: (provided: any, state:any) => ({
        ...provided,
        display:"flex",
        flex: 1,
        backgroundColor: '#198754',
        paddingY: "0.5rem",
        paddingX: "1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem"
    }),
    placeholder: (provided: any, state:any) => ({
        ...provided,
        color: "white",
        fontWeight: "bold"
    }),
    
};

export default function ThingsSelect(props: any) {
  return (
    <Select<ThingsOption, false>
        styles={reactSelectStyles}
        placeholder = {"Things"}
        isClearable = {true}
        options={thingsOptions}
        onChange={(opt: ThingsOption | null) => {
            props.setSubject(opt?.value);
        }}
    />
  );
}
