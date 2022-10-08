import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./AppointmentMultiselection.css";

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

  const customValueRenderer = (selected, _options) => {
    // console.log("hi")
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;
      return selected.map(({ label }) => label);
    }

    return "None selected";
  };

  const varselected = `All Selected ${options.length}`;
  const handleNewField = (hasSelectAll, value) => {
    setSelected(options);
    console.log("selected", selected);
  };

  console.log("Appoinment Multi select data", selected);

  return (
    <>
      <div className="parentSelection">
        <div>
          <MultiSelect
            className="AppoinmentGlobal"
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            valueRenderer={customValueRenderer}
          />
        </div>
        <div>
          <div className="btnCustom">
            <Button type="primary" onClick={() => handleNewField()}>
              Seelct All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppoinmentMultiSelection;
