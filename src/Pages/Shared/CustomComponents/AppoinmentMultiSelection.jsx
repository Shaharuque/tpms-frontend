import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './AppointmentMultiselection.css';


const options = [
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
  { label: "adf ", value: "grapes" },
  { label: "sdfgf ", value: "mango" },
];




const AppoinmentMultiSelection = () => {

  const [selected, setSelected] = useState([]);
  const varselected = `All Selected ${options.length}`
  const handleNewField = (hasSelectAll, value) => {
    // console.log("custom",hasSelectAll)
    // return hasSelectAll={true}
     console.log("function inner",varselected)
    console.log("fla", options.length)
    setSelected(options)
    console.log("selected", selected)
  };
  return (
    <div>

    {/* <h3>secound selector</h3>
    <h1>Select Fruits</h1>
    <pre>{JSON.stringify(selected)}</pre> */}

    <div className="parentSelection">
      <div>
      <MultiSelect
      className="AppoinmentGlobal"
      options={options}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
    /></div>
    <div>
    <div className="btnCustom"><Button type="primary" onClick={()=>((handleNewField())) } >Seelct All</Button></div>
    </div>
    </div>
    

  </div>
  );
};

export default AppoinmentMultiSelection;



