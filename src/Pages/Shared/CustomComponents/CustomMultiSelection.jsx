import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./ListviewMultiselect.css";

const CustomMultiSelection = ({ patients, setPatientId, receivedData }) => {
  const [selected, setSelected] = useState([]);

  const optionDataProcess = () => {
    let processedData = [];
    if (patients) {
      for (let x of patients) {
        processedData.push({
          label: x?.client_full_name,
          value: x?.client_full_name,
          id: x?.id,
        });
      }
    }
    return processedData;
  };

  const dataoptions = optionDataProcess();

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;
      return selected.map(({ label }) => label);
    }
    return "None selected";
  };

  // const getId = selected.map((item) => item.id);
  // console.log("selected clients", getId);

  useEffect(() => {
    const getClientsId = async () => {
      const getId = selected.map((item) => item.id);
      setPatientId(getId);
    };
    getClientsId();
  }, [selected, setPatientId]);

  // useEffect(() => {
  //   const getClientsId = async () => {
  //     const getId = selected.map((item) => item.id);
  //     if (getId) {
  //       receivedData(getId);
  //     }
  //   };
  //   getClientsId();
  // }, [selected, receivedData]);

  return (
    <MultiSelect
      className="listview"
      options={dataoptions}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      valueRenderer={customValueRenderer}
    />
  );
};

export default CustomMultiSelection;
