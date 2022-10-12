import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalMultiSelect from "../../../../Shared/CustomComponents/GlobalMultiSelect";

const Processing_Payroll = () => {
  const [select, setSelect] = useState("");
  const [tData, setTData] = useState([]);
  const [table, setTable] = useState(false);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/proceesing_payroll.json")
      .then((response) => {
        console.log("calling");
        setTData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(tData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const inputHandle = (e) => {
    console.log(e.target.value);
  };

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Time & date",
      dataIndex: "hrs_Accepted",
      key: "hrs_Accepted",
      width: 70,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      render: (_, { hrs_Accepted }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{hrs_Accepted}</div>;
      },
      filteredValue: filteredInfo.hrs_Accepted || null,
      onFilter: (value, record) => record.hrs_Accepted.includes(value),
      sorter: (a, b) => {
        return a.hrs_Accepted > b.hrs_Accepted ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "hrs_Accepted" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "provider",
      dataIndex: "provider",
      key: "provider",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Patient",
      dataIndex: "Patient",
      key: "Patient",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.Patient || null,
      onFilter: (value, record) => record.Patient.includes(value),
      sorter: (a, b) => {
        return a.Patient > b.Patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Srvc. Location",
      dataIndex: "srvc",
      key: "srvc",
      width: 120,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.srvc || null,
      onFilter: (value, record) => record.srvc.includes(value),
      sorter: (a, b) => {
        return a.srvc > b.srvc ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "srvc" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: 110,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.service || null,
      onFilter: (value, record) => record.service.includes(value),
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Tx. hrs",
      dataIndex: "tx_hrs",
      key: "tx_hrs",
      width: 80,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.tx_hrs || null,
      onFilter: (value, record) => record.tx_hrs.includes(value),
      sorter: (a, b) => {
        return a.tx_hrs > b.tx_hrs ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "tx_hrs" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Submission Hrs.",
      dataIndex: "submission_hrs",
      key: "submission_hrs",
      width: 80,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.submission_hrs || null,
      onFilter: (value, record) => record.submission_hrs.includes(value),
      sorter: (a, b) => {
        return a.submission_hrs > b.submission_hrs ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "submission_hrs" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hrs.Accepted",
      dataIndex: "hrs_Accepted",
      key: "hrs_Accepted",
      width: 100,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.hrs_Accepted > b.hrs_Accepted ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "hrs_Accepted" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Mileage",
      dataIndex: "mileage",
      key: "mileage",
      width: 60,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.mileage || null,
      onFilter: (value, record) => record.mileage.includes(value),
      sorter: (a, b) => {
        return a.mileage > b.mileage ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "mileage" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Mileage Approve",
      dataIndex: "mileage_Approve",
      key: "mileage_Approve",
      width: 100,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.mileage_Approve > b.mileage_Approve ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "mileage_Approve" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <div className="my-5">
        <div className=" grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6  mr-2 gap-6">
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Choose Payroll Submission Period
              </span>
            </label>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="post"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
            >
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
              <option value="01-12-2021">01/12/2021-07/12/2021</option>
            </select>
          </div>
          <div className="lg:mt-4 2xl:mt-0">
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Choose Staff to process
              </span>
            </label>
            <>
              <GlobalMultiSelect />
            </>
          </div>
          <button
            className=" py-[5px] w-1/4 font-normal mt-10 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
            type="submit"
            onClick={() => setTable(true)}
          >
            View
          </button>
        </div>
        {table && (
          <div className="my-3">
            <div className="flex justify-end items-end my-2">
              <button
                onClick={clearFilters}
                className="px-2  py-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </div>
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={tData}
              rowSelection={{
                ...rowSelection,
              }}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
            <div className="my-5">
              <div className="flex">
                <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
                  <option value="" className="text-black">
                    Select
                  </option>
                  <option value="Today" className="text-black">
                    Scheduled
                  </option>
                  <option value="UK" className="text-black">
                    No Show
                  </option>
                  <option value="15" className="text-black">
                    Bulk Delete
                  </option>
                  <option value="15" className="text-black">
                    Lost 30 days
                  </option>
                  <option value="15" className="text-black">
                    30 days & over
                  </option>
                </select>
                <button className="bg-[#34A7B8] px-2 text-white rounded">
                  Go
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Processing_Payroll;
