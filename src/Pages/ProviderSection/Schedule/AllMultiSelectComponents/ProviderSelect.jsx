import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./MultiSelect.css";

const ProviderSelect = ({ providers, setProvidersId }) => {
  const [selected, setSelected] = useState([]);

  const patientDataProcess = () => {
    let processedData = [];
    if (providers) {
      for (let x of providers) {
        processedData.push({
          label: x?.full_name,
          value: x?.full_name,
          id: x?.id,
        });
      }
    }
    return processedData;
  };

  const dataoptions = patientDataProcess();

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
      const getId = selected.map((item) => item.id);
      setProvidersId(getId);
    };
    getClientsId();
  }, [selected, setProvidersId]);

  //console.log(selected);

  return (
    <MultiSelect className="Global" options={dataoptions} value={selected} onChange={setSelected} labelledBy="Select" valueRenderer={customValueRenderer} />
  );
};

export default ProviderSelect;
