import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./PatientMultiSelectCSS/PatientMultiSelect.css";

const PayorMultiSelect = ({
  allInsurance,
  setInsuranceIds,
  insuranceLoading,
}) => {
  const [selected, setSelected] = useState([]);
  const insuranceDataProcess = () => {
    let processedData = [];
    if (allInsurance) {
      for (let x of allInsurance) {
        if (x?.payor_id !== null) {
          processedData.push({
            label: x?.payor_name,
            value: x?.payor_name,
            id: x?.payor_id,
          });
        }
      }
    }
    return processedData;
  };

  const patientSelectionOptions = insuranceDataProcess();

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected (${selected.length})`;
      return selected.map(({ label }) => label + "," + " ");
    }
    return <h1 className="text-black">None selected</h1>;
  };

  useEffect(() => {
    const getSelectedInsurance = async () => {
      const getId = selected.map((item) => item.id);
      setInsuranceIds(getId);
      // setSortBy1("");
    };
    getSelectedInsurance();
  }, [selected, setInsuranceIds]);

  return (
    <MultiSelect
      disabled={insuranceLoading && true}
      className="Global"
      options={patientSelectionOptions}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      valueRenderer={customValueRenderer}
    />
  );
};

export default PayorMultiSelect;
