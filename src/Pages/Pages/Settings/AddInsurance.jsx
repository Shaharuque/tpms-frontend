import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

const AddInsurance = () => {
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

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-5 p-0 sm:p-2 items-center">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>
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
          <br />
          <button className="px-5 my-5 mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            View Details
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={handleAddItems}
            className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            Add
          </button>
          <button
            onClick={handleRemoveItems}
            className="px-5 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md"
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
                <option key={name} value={name} className="text-sm font-normal">
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
      <div className="border p-5">
        <h1 className="text-lg text-orange-500 my-1">Insurance Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("name")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Address
                </span>
              </label>
              <input
                type="text"
                name="Address"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("Address")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  City
                </span>
              </label>
              <input
                type="text"
                name="city"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("city")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  State
                </span>
              </label>
              <div>
                <select
                  className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                  {...register("state")}
                >
                  <option value="Today">Today's follow up</option>
                  <option value="UK">Lost 7 days</option>
                  <option value="15">Lost 15 days</option>
                  <option value="15">Lost 30 days</option>
                  <option value="15">30 days & over</option>
                </select>
              </div>
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Zip
                </span>
              </label>
              <input
                type="text"
                name="zip"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("zip")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Contract1
                </span>
              </label>
              <input
                type="text"
                name="contract1"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("contract1")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Contract2
                </span>
              </label>
              <input
                type="text"
                name="contract2"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("contract2")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Phone1
                </span>
              </label>
              <input
                type="text"
                name="phone1"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("phone1")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Phone2
                </span>
              </label>
              <input
                type="text"
                name="phone2"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("phone2")}
              />
            </div>
            <div className="flex ml-1 mt-8 items-center">
              <input
                type="checkbox"
                // checked={value ? true : false}
                name="patient"
                // onClick={() => {
                //   setValue(!value);
                // }}
              />
              <span className="text-xs ml-1 text-gray-600 font-normal">
                Regional Center
              </span>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Billing abreviation(3 char)
                </span>
              </label>
              <input
                type="text"
                name="billing observation"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("billing_observation")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Electronic Insurance ID
                </span>
              </label>
              <input
                type="text"
                name="Electronic_"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("phone2")}
              />
            </div>
          </div>
          <button
            className=" py-[5px] mt-7  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
          <button className="py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInsurance;
