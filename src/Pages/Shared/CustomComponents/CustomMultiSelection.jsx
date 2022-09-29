import React, {useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import  "./CustomMultiSelect.css"

const CustomMultiSelection = () => {
  const options = [
    { label: "Grapes ", value: "grapes" },
    { label: "Masfgngo ", value: "mafgngo" },
    { label: "Gradfgpdes ", value: "grfgapes" },
    { label: "Mango ", value: "mango" },
    { label: "Strawberry ", value: "strawberry" },
  ];
  const [selected, setSelected] = useState([]);
  return (

    <div>
    {/* <h1>Select Fruits</h1>
    <pre>{JSON.stringify(selected)}</pre> */}
    <MultiSelect
      className="Global"
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
    />
  </div>
  );
};

export default CustomMultiSelection;