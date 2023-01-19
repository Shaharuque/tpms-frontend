import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FacilityManage = () => {
  const [insuranceApiData, setinsuranceApiData] = useState(null);
  const [sortedInfo, setSortedInfo] = useState({});
  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/ExitingFacilities.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  const column = [
    {
      title: "Remove",
      key: "id",
      dataIndex: "id",
      width: 60,
      render: (_, { id, File_name }) => {
        return (
          <div className="flex items-center justify-center">
            <input type="checkbox"></input>
          </div>
        );
      },
    },

    {
      title: "Permission",
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
      title: "Change",
      key: "id",
      dataIndex: "id",
      width: 60,
      render: (_, { id, File_name }) => {
        return (
          <div className="flex items-center justify-center">
            <input type="checkbox"></input>
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
        setinsuranceApiData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2x:grid-cols-4 my-2  gap-y-1">
        <div className="w-full">
          <h1 className=" text-sm mb-3 font-medium"> Available Page(s)</h1>
          <select
            multiple={true}
            id="countries_multiple"
            // onChange={(e) => {
            //   handleAdding(e);
            // }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {insuranceApiData?.data?.all_insurance.length > 0 &&
              insuranceApiData?.data?.all_insurance.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.payor_name}{" "}
                </option>
              ))}{" "}
          </select>
        </div>

        <div className="flex justify-center items-center">
          <button
            // onClick={() => setSelectedKeys(arr1)}
            // className=" py-[5px] font-normal px-3 my-auto  text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
            className="pms-button my-2"
            type="submit"
          >
            Add
          </button>
        </div>
        <div>
          <h1 className=" text-sm mb-3 font-medium"> Allocated Page(s)</h1>

          <div className="overflow-scroll">
            <Table
              pagination={false}
              size="small"
              className="table-striped-rows text-xs font-normal"
              columns={column}
              bordered
              rowKey={(record) => record.id}
              dataSource={table}
              onChange={handleChange}
            />
          </div>
          <button className="pms-button my-2">Save Permission</button>
        </div>
      </div>
    </div>
  );
};

export default FacilityManage;
