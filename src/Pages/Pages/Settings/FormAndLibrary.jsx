import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useRef, useState } from "react";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const FormAndLibrary = () => {
  // add table
  const [optionNames, setOptionNames] = useState(names);
  // console.log("option name :", optionNames);
  const [selectedNames, setSelectedNames] = useState([]);
  const [newAdded, setNewAdded] = useState([]);
  console.log(selectedNames);

  const handleAddItems = () => {
    const value = [];
    const option_length = selectedNames.length;
    for (let i = 0; i < option_length; i += 1) {
      value.push(selectedNames[i]);
    }
    setOptionNames(optionNames.filter((e) => !selectedNames.includes(e)));
    setNewAdded([...newAdded, ...value]);
  };
  const handleRemoveItems = () => {
    const value = [];
    const option_length = selectedNames.length;
    for (let i = 0; i < option_length; i += 1) {
      value.push(selectedNames[i]);
    }
    setNewAdded(newAdded.filter((e) => !selectedNames.includes(e)));
    setOptionNames([...optionNames, ...value]);
  };

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

  return (
    <div className="flex flex-wrap gap-5 p-0 sm:p-5 items-center">
      <div>
        <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>
        <FormControl className="sm:w-[550px] md:w-[350] w-[260px] m-0 sm:m-2 bg-white ">
          <InputLabel shrink htmlFor="select-multiple-native">
            -----------
          </InputLabel>
          <Select
            multiple
            native
            className=""
            value={selectedNames}
            onChange={handleChangeMultiple}
            label="Native"
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {optionNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <button className="px-5 my-5 mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          View Details
        </button>
      </div>
      <div>
        {" "}
        <button
          onClick={handleAddItems}
          className="px-5 mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          Add
        </button>
        <button
          onClick={handleRemoveItems}
          className="px-5 mr-5 text-sm py-1 bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
        >
          REMOVE
        </button>
      </div>
      <div>
        <h1 className="text-sm text-gray-700 my-2">
          Facility Selected Insurance
        </h1>
        <FormControl className="sm:w-[550px] md:w-[350] w-[260px]  bg-white ">
          <InputLabel shrink htmlFor="select-multiple-native">
            -----------
          </InputLabel>
          <Select
            multiple
            native
            value={selectedNames}
            // @ts-ignore Typings are not considering `native`
            onChange={handleChangeMultiple}
            label="Native"
            inputProps={{
              id: "select-multiple-native",
            }}
          >
            {newAdded.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <br />
        <button className="px-5 my-5 mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FormAndLibrary;
