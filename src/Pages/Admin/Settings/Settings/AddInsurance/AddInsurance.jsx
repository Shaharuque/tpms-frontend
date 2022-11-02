import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../../../Loading/Loading";
import { headers } from "../../../../../Misc/BaseClient";
import fetchData from "../../../../../Misc/Helper";
import InsuranceDetails from "./InsuranceDetails";

const AddInsurance = () => {
  const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  // const [chk, setchk] = useState(false);
  // const [multi, setmulti] = useState([]);
  // const [newdata, setnewdata] = useState({ value: "coconut" });

  //Getting All Insurance using react query get request
  const ip = "admin/ac/setting/get/all/insurance";
  const {
    isLoading,
    isError,
    error,
    data: insurance,
    refetch,
  } = useQuery(["allInsurance"], () => {
    fetchData(ip);
  });

  console.log(insurance);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  // testing space............
  // useEffect(() => {
  //   axios("../../../All_Fake_Api/Transfer.json")
  //     .then((response) => {
  //       // console.log("chkd ata", response?.data)
  //       setTransferData(response?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // const arr1 = [];
  // console.log(arr1);

  // -------------------------

  const handleAdding = (e) => {
    let target = e.target;
    // let name = target.name;
    let value = Array.from(
      target.selectedOptions,
      (option) => option.value * 1
    );
    // console.log("data value", value)
    setSelectedKeys(value);
    // setchk(false)
    // setmulti({
    //   [name]: value,
    // });
  };

  const handleRemoving = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    setSelectedKeys(value);
  };

  const handleSelectedValue = () => {
    console.log("add button click get data", selectedKeys);
  };

  const handleRemoveValue = (e) => {
    console.log("Remove  button click get data", selectedKeys);
  };

  const InsuranceView = () => {
    if (selectedKeys.length > 1) {
      alert("select just one value");
      return setSelectedKeys([0]);
    }
    console.log(" insurance  click get data", selectedKeys);
  };

  const FacilityInsurance = () => {
    if (selectedKeys.length > 1) {
      alert("select just one value");
      return setSelectedKeys([0]);
    }
    console.log(" FacilityInsurance  get data", selectedKeys);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

          {/* new code added */}
          <select
            multiple={true}
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleAdding(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {TransferData.length > 0 &&
              TransferData.map((item, index) => (
                // <option
                //   className="px-2 text-sm"
                //   onClick={(e) => arr1.push(item)}
                //   // onClick={(e) => console.log(e.target.title)}
                //   value={item.id}
                // >
                //   {item.key}
                //   {item.title}
                // </option>
                <option
                  key={item.id}
                  className="px-2 text-sm"
                  //   onClick={(e) => arr1.push(item)}
                  // onClick={(e) => console.log(e.target.title)}
                  value={item.id}
                >
                  {item.id}
                  {item.title}
                </option>
              ))}
          </select>
          <br />
          <button
            onClick={() => {
              InsuranceView();
            }}
            className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            View Details
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center my-4">
          <button
            onClick={() => handleSelectedValue()}
            className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md mb-2 flex"
          >
            Add
            <DoubleRightOutlined className="ml-2" />
          </button>
          <button
            onClick={(e) => {
              handleRemoveValue(e);
            }}
            className="px-2 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md flex"
          >
            <DoubleLeftOutlined className="mr-2" />
            Remove
          </button>
        </div>
        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Insurance
          </h1>
          <select
            multiple
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleRemoving(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {/* calling same api  */}
            {TransferData.length > 0 &&
              TransferData.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.id}
                  {item.title}
                </option>
              ))}
          </select>
          {/* </FormControl> */}
          <br />
          <button
            onClick={() => {
              FacilityInsurance();
            }}
            className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
      <InsuranceDetails></InsuranceDetails>
    </div>
  );
};

export default AddInsurance;
