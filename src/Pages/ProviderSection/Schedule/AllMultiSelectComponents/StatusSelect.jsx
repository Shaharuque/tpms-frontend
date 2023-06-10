import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./MultiSelect.css";

const StatusSelect = ({ status, setStatusVal }) => {
  const [selected, setSelected] = useState([]);
  //console.log("selected", status);

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;
      return selected.map(({ label }) => label + "," + " ");
    }
    return "None selected";
  };

  // const getId = selected.map((item) => item.id);
  // console.log("selected clients", getId);

  useEffect(() => {
    const getClientsId = async () => {
      const getId = selected.map((item) => item.value);
      setStatusVal(getId);
    };
    getClientsId();
  }, [selected, setStatusVal]);

  //console.log(selected);

  return <MultiSelect className="Global" options={status} value={selected} onChange={setSelected} labelledBy="Select" valueRenderer={customValueRenderer} />;
};

export default StatusSelect;
