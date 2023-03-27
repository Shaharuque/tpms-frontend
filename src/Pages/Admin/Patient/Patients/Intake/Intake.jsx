import { Switch, Table } from "antd";
import React from "react";
import { useState } from "react";
import { MdDoNotDisturbOn } from "react-icons/md";
import ReviewStatus from "./ReviewStatus";
import { AiOutlineEye } from "react-icons/ai";

const Intake = () => {
  const [allData, setAllData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [assign, setAssign] = useState(false);

  //   fetch data
  React.useEffect(() => {
    fetch("../../../All_Fake_Api/patientLeadger.json")
      .then((res) => res.json())
      .then((d) => {
        setAllData(d);
        // setLoading2(false);
      });
  }, []);

  console.log(allData);

  const column = [
    {
      title: "From Name",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return (
          <>
            <div className="flex justify-center">
              <button className="text-secondary">
                2469299116740435801_119.pdf
              </button>
            </div>
          </>
        );
      },
    },
    {
      title: "Assign",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return (
          <div className="flex justify-center">
            <Switch
              color="default"
              defaultChecked
              size="small"
              onClick={() => setAssign(!assign)}
            />
          </div>
        );
      },
    },
    {
      title: "Submitted",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return (
          <div className="flex justify-center">
            <MdDoNotDisturbOn className="text-rose-500 text-lg" />
          </div>
        );
      },
    },
    {
      title: "Review Status",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return <ReviewStatus></ReviewStatus>;
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return (
          <div className="flex items-center justify-center">
            <AiOutlineEye />
          </div>
        );
      },
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };
  return (
    <div>
      <div className="h-[100vh]">
        <h1 className="text-lg mt-2 text-orange-500">Intake Form Uploads</h1>
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button onClick={clearFilters} className="pms-clear-button">
              Clear filters
            </button>
          </div>

          <div className=" overflow-scroll py-3">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={column}
              dataSource={allData}
              // scroll={{
              //   y: 700,
              // }}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intake;
