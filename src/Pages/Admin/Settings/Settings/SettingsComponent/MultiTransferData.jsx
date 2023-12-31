import axios from "axios";
import React, { useEffect, useState } from "react";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const MultiTransferData = ({ name1, name2 }) => {
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
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">{name1}</h1>

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
              ))}
          </select>
        </div>
        <div className=" flex flex-col items-center justify-center gap-2 my-4">
          <button // onClick={handleAddItems}
            onClick={() => setSelectedKeys(arr1)}
            className="pms-button w-24"
          >
            <div className="flex item-center justify-center">
              ADD
              <HiOutlineArrowRight className="ml-2 text-base" />
            </div>
          </button>
          <button className="pms-close-button w-24">
            <div className="flex item-center justify-center">
              <HiOutlineArrowLeft className="mr-2 text-base" />
              REMOVE
            </div>
          </button>
        </div>
        <div>
          <h1 className="text-sm text-gray-700 my-2">{name2}</h1>
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
        </div>
      </div>
    </div>
  );
};

export default MultiTransferData;
