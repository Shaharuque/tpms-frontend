import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./PatientMultiSelectCSS/PatientMultiSelect.css";

const PatientMultiSelect = ({ allPatients, setClientIds, patientsLoading }) => {
  const [selected, setSelected] = useState([]);
  const patientDataProcess = () => {
    let processedData = [];
    if (allPatients) {
      for (let x of allPatients) {
        if (x?.ledger_patient?.client_full_name !== null) {
          processedData.push({
            label: x?.ledger_patient?.client_full_name,
            value: x?.ledger_patient?.client_full_name,
            id: x?.id,
          });
        }
      }
    }
    return processedData;
  };

  const patientSelectionOptions = patientDataProcess();

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected (${selected.length})`;
      return selected.map(({ label }) => label + "," + " ");
    }
    return <h1 className="text-[#4b5563]">None selected</h1>;
  };

  useEffect(() => {
    const getSelectedClients = async () => {
      const getId = selected.map((item) => item.id);
      setClientIds(getId);
      // setSortBy1("");
    };
    getSelectedClients();
  }, [selected, setClientIds]);

  return (
    <MultiSelect
      disabled={patientsLoading && true}
      className="Global"
      options={patientSelectionOptions}
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      valueRenderer={customValueRenderer}
    />
  );
};

export default PatientMultiSelect;
