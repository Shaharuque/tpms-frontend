import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoAlert } from "react-icons/go";

const ServiceSubTypeExclusions = () => {
  const [tableData, setTableData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [display, setDisplay] = useState(true);
  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/PatientDocuments.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        console.log(tableData, "tableData");
        // setLoading2(false);
      });
  }, []);

  const column = [
    {
      title: "Description",
      dataIndex: "Document",
      key: "Document",
      width: 120,
      sorter: (a, b) => {
        return a.Document > b.Document ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Document" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "id",
      dataIndex: "id",
      width: 100,
      render: (_, { id, File_name }) => {
        return <div className="mx-auto font-bold text-red-500">X </div>;
      },
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  return (
    <div className="h-[100vh]">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-2  gap-y-1">
        <div></div>
        <div className="flex justify-center items-center">
          <button
            className=" py-[5px] font-normal px-3 my-auto  text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
            type="submit"
          >
            Exclude Selected Service Sub-Type
          </button>
        </div>
        <div>
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
          <div className="overflow-scroll">
            <Table
              pagination={false}
              size="small"
              className=" text-xs font-normal mt-5"
              columns={column}
              bordered
              rowKey={(record) => record.id}
              dataSource={tableData}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSubTypeExclusions;
