import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useState } from "react";

const names = [
  "AVIVA Life Ins. Co. India Pvt. Ltd. ",
  "AVIVA Life Ins. rCo India Pvt. Ltd.  ",
  "BhartiAXA Life Insurance Co Ltd.  ",
  "Binla Sun Life Insurance Co Ltd.  ",
  "Binla Sun moon Life Insurance Co Ltd.  ",
  "Binla Sun Life sdInsurance dfd Co Ltd.  ",
  "anara HSBC Oriental Bank of Commerce Life Insurance ompany Ltd.  ",
  "DHFL Pramerica Life Insurance Co Ltd  ",
  "Edelweiss fg Tokio Life Insurance Co. Ltd  ",
  "Edelweiss Tokio Life Insurance Co. Ltd  ",
  "HDFC Standard Life Insurance Co. Ltd.  ",
  "CICI dfd Prudential Life Insurance Co Ltd.  ",
  "CICIer Prudential Life Insurance Co Ltd.  ",
  "DBIdfd Federal Life Insurance Co Ltd.  ",
  "DBI Federal Life Insurance Co Ltd  ",
  "Kotak Mahindra OM Life Insurance Ltd.  ",
  "PNB MetLife India Insurance Co Ltd.  ",
  "Sahara India Life Insurance Co. Ltd.",
  "SBI fd reLife Insurance Co Ltd.  ",
  "SBI d Life Insurance Co Ltd.  ",
  "SBI eLife Insurance Co Ltd.  ",
  "Shriram Life Insurance Co Ltd.  ",
  "TATA AIA Life Insurance Co Ltd.  ",
  "ife Insurance rer Corporation of India  ",
  "ife Insurance Corporation of India  ",
];

const StaffMultiSelection = ({ selectBox, addBox }) => {
  const [selectedNames, setSelectedNames] = useState([]);
  const [optionNames, setOptionNames] = useState(names);
  const [newAdded, setNewAdded] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedNames(value);
  };
  const handleAddItems = () => {
    const value = [];
    const option_length = selectedNames.length;
    for (let i = 0; i < option_length; i += 1) {
      value.push(selectedNames[i]);
    }
    setOptionNames(optionNames.filter((e) => !selectedNames.includes(e)));
    setNewAdded([...newAdded, ...value]);
  };
  return (
    <div>
      <FormControl className="sm:w-[550px] md:w-[350] w-[260px] m-0 sm:m-2 bg-white ">
        <InputLabel shrink htmlFor="select-multiple-native">
          -----------
        </InputLabel>
        <Select
          multiple
          native
          value={selectedNames}
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: "select-multiple-native",
          }}
        >
          {optionNames.map((name) => (
            <option key={name} value={name} className="text-sm font-normal">
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
      <button
        onClick={handleAddItems}
        className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default StaffMultiSelection;
