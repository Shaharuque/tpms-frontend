import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoAlert } from "react-icons/go";
const PatientExclusion = () => {
  const [selectedKeys, setSelectedKeys] = useState("");
  const [TransferData, setTransferData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [display, setDisplay] = useState(true);
  const arr1 = [];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  const column = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
      width: 120,
      sorter: (a, b) => {
        return a.title > b.title ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "id",
      dataIndex: "id",
      width: 100,
      render: (_, { id, File_name }) => {
        return (
          <div className="flex items-center justify-center font-bold text-red-500">
            X
          </div>
        );
      },
    },
  ];

  // testing spaceee............
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

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-500 text-left font-semibold ">
        Patient Exclusion
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2  gap-y-2">
        <div className="w-full">
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
          >
            Insurance
          </label>
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
                  value={item.id}
                >
                  {item.key}
                  {item.title}
                </option>
              ))}{" "}
          </select>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => setSelectedKeys(arr1)}
            className="pms-button my-2"
            type="submit"
          >
            Exclude Selected Service Sub-Type
          </button>
        </div>
        <div>
          {selectedKeys ? (
            <div className="overflow-scroll">
              <Table
                pagination={false}
                size="small"
                className=" text-xs font-normal mt-5"
                columns={column}
                bordered
                rowKey={(record) => record.id}
                dataSource={selectedKeys}
                onChange={handleChange}
              />
            </div>
          ) : (
            <>
              {display && (
                <div className="text-red-500 red-box border border-gray-300 rounded-sm px-3 font-medium py-[10px]  text-xs w-full flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2">
                    <GoAlert className="text-red-500" /> No Current Association
                  </span>
                  <span
                    onClick={() => {
                      setDisplay(false);
                    }}
                  >
                    <FcCancel />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientExclusion;
