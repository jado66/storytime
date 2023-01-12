import React from "react";

import Select from "react-select";
import {
  PeopleOption,
  peopleOptions,
} from "../docs/data";
import { sharedStyles } from "./sharedStyles";


const reactSelectStyles = {
    ... sharedStyles,
    container: (provided: any, state:any) => ({
        ...provided,
        display:"flex",
        flex: 1,
        backgroundColor: '#ffc107',
        paddingY: "0.5rem",
        paddingX: "1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem"
    }),
    indicatorSeparator: (provided: any, state:any) => ({
        ...provided,
        backgroundColor: "black"
    }),
    dropdownIndicator: (provided: any, state:any) => ({
        ...provided,
        color: "black !important"
    }),
    placeholder: (provided: any, state:any) => ({
        ...provided,
        color: "black",
        fontWeight: "bold"
    }),
    
};

export default function PeopleSelect(props: any) {
  return (
    <Select<PeopleOption, false>
        styles={reactSelectStyles}
        isClearable = {true}
        placeholder = {"Character"}
        options={peopleOptions}
        onChange={(opt: PeopleOption | null) => {
            props.setSubject(opt?.value);
        }}
    />
  );
}
