import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddInsurance = () => {
  const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState("");

  // testing space............
  useEffect(() => {
    axios("../../../All_Fake_Api/Transfer.json")
      .then((response) => {
        // console.log("chkd ata", response?.data)
        setTransferData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const arr1 = [];
  console.log(arr1);

  // -------------------------

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

          {/* new code added */}
          <select
            multiple
            id="countries_multiple"
            // className="h-40"
            className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {TransferData.length > 0 &&
              TransferData.map((item, index) => (
                <option
                  className="px-2 text-sm"
                  onClick={(e) => arr1.push(item)}
                  // onClick={(e) => console.log(e.target.title)}
                  value={item.id}
                >
                  {item.key}
                  {item.title}
                </option>
              ))}{" "}
          </select>
          <br />
          <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            View Details
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center my-4">
          <button // onClick={handleAddItems}
            onClick={() => setSelectedKeys(arr1)}
            className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md mb-2 flex"
          >
            Add
            <DoubleRightOutlined className="ml-2" />
          </button>
          <button className="px-2 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md flex">
            <DoubleLeftOutlined className="mr-2" />
            Remove
          </button>
        </div>
        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Insurance
          </h1>
          {/* ------ */}
          <select
            multiple
            id="countries_multiple"
            // className="h-40"
            className="text-black border h-48 border-gray-300  rounded-md focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {selectedKeys.length > 0 &&
              selectedKeys.map((item, index) => (
                <option className="px-2 text-sm">{item.title}</option>
              ))}
          </select>
          {/* </FormControl> */}
          <br />
          <button className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            View Details
          </button>
        </div>
      </div>
      <div className="border p-5">
        <h1 className="text-lg text-orange-500 my-1">Insurance Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-2">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("name")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Address
                </span>
              </label>
              <input
                type="text"
                name="Address"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("Address")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  City
                </span>
              </label>
              <input
                type="text"
                name="city"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("city")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  State
                </span>
              </label>
              <div>
                <select
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
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
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Zip
                </span>
              </label>
              <input
                type="text"
                name="zip"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("zip")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Contract1
                </span>
              </label>
              <input
                type="text"
                name="contract1"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("contract1")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Contract2
                </span>
              </label>
              <input
                type="text"
                name="contract2"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("contract2")}
              />
            </div>
            {/* Address  */}
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Phone1
                </span>
              </label>
              <input
                type="text"
                name="phone1"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("phone1")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Phone2
                </span>
              </label>
              <input
                type="text"
                name="phone2"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("phone2")}
              />
            </div>
            <div className="flex justify-start items-end my-2 md:my-0">
              <div className="flex justify-center ml-1 items-center">
                <input
                  type="checkbox"
                  // checked={value ? true : false}
                  name="patient"
                  // onClick={() => {
                  //   setValue(!value);
                  // }}
                />
                <span className="font-medium ml-1 text-gray-600 text-[14px]">
                  Regional Center
                </span>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Billing abreviation(3 char)
                </span>
              </label>
              <input
                type="text"
                name="billing observation"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("billing_observation")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">
                  Electronic Insurance ID
                </span>
              </label>
              <input
                type="text"
                name="Electronic_"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("phone2")}
              />
            </div>
          </div>
          <button
            className=" py-[5px] mt-7 px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
          <button className="py-[5px] mt-7 ml-2 px-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInsurance;
