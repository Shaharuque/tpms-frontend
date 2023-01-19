import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./CustomMultiSelect.css";

const GlobalMultiSelect = () => {
  const options = [
    {
      label: "Grapes Grapes Grapes",
      value: "grapes Grapes Grapes",
    },
    {
      label: "Masfgngo ",
      value: "mafgngo",
    },
    {
      label: "Gradfgpdes",
      value: "grfgapes",
    },
    {
      label: "Mango ",
      value: "mango",
    },
    {
      label: "Strawberry ",
      value: "strawberry",
    },
  ];

  const [selected, setSelected] = useState([]);

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;

      return selected.map(({ label }) => label);
    }
    return "None selected";
  };
  console.log("Multi Select data", selected);

  return (
    <>
      <MultiSelect
        className="Global"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        valueRenderer={customValueRenderer}
      />
    </>
  );
};

export default GlobalMultiSelect;
