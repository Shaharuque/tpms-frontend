import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./PayrollMultiSelect.css";

const PyarollMultiSelect = ({ Alldata, setServiceId }) => {
  const [selected, setSelected] = useState([]);

  const PayrollDataProcess = () => {
    let processedData = [];
    if (Alldata) {
      for (let x of Alldata) {
        processedData.push({
          label: x?.description,
          value: x?.id,
          //id: x?.id,
        });
      }
    }
    return processedData;
  };

  const dataoptions = PayrollDataProcess();

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;

      return selected.map(({ label }) => label + "," + " ");
    }
    return "None selected";
  };
  // console.log("Multi Select data", selected);

  useEffect(() => {
    const getServicesId = async () => {
      const getId = selected.map((item) => item.value);
      setServiceId(getId);
    };
    getServicesId();
  }, [selected, setServiceId]);

  console.log(selected);
  return (
    <div>
      <MultiSelect
        className="Global"
        // main data source
        // options={options}
        options={dataoptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        valueRenderer={customValueRenderer}
      />
    </div>
  );
};

export default PyarollMultiSelect;
