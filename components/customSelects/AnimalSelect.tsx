import React from "react";

import Select from "react-select";
import {
  AnimalOption,
  animalOptions,
} from "../docs/data";
import { sharedStyles } from "./sharedStyles";


const reactSelectStyles = {
    ... sharedStyles,
    container: (provided: any, state:any) => ({
        ...provided,
        display:"flex",
        flex: 1,
        backgroundColor: '#0d6efd',
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

export default function AnimalSelect(props: any) {
  return (
    <Select<AnimalOption, false>
        styles={reactSelectStyles}
        placeholder = {"Animals"}
        isClearable = {true}
        options={animalOptions}
        onChange={(opt: AnimalOption | null) => {
            props.setSubject(opt?.value);
        }}
    />
  );
}
