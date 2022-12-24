import React, { CSSProperties } from "react";

import Select from "react-select";
import {
  AnimalOption,
  animalOptions,
  PeopleOption,
  GroupedOption,
  groupedOptions
} from "./docs/data";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function SubjectSelect(props: any) {
  return (
    <Select<AnimalOption | PeopleOption, false, GroupedOption>
        className={props.className}
        // defaultValue={animalOptions[1]}
        placeholder = {"Select the subject of the story..."}
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        onChange={(opt: AnimalOption | PeopleOption | null) => {
            props.setSubject(opt?.value);
        }}
    />
  );
}
