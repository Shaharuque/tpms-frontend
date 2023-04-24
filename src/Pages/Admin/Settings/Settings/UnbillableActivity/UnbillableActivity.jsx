import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const options = ["Select Any", "Retract"];
const UnbillableActivity = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [data, setData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  console.log("value :", value);
  console.log("inputValue :", inputValue);

  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/UnavailableActivity.json")
      .then((response) => {
        console.log("calling");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  //get rows to be deleted
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const columns = [
    {
      title: "Patients",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      render: (_, { patient }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{patient}</div>;
      },
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Dos",
      dataIndex: "dos",
      key: "dos",
      width: 100,
      sorter: (a, b) => {
        return a.dos > b.dos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "dos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Tx. Provider",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs.",
      dataIndex: "service",
      key: "service",
      width: 100,
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cpt",
      dataIndex: "cpt",
      key: "cpt",
      width: 60,
      sorter: (a, b) => {
        return a.cpt > b.cpt ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
      width: 60,
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M1",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M2",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M3",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M4",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Units",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rate",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log(tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-2  focus:outline-none"
              // onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created Date",
      dataIndex: "created",
      key: "created",
      width: 100,
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 80,
      render: (_, { status }) => {
        //console.log("Status : ", Status);
        return (
          <div className="flex justify-center">
            {status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "rendered" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "hold" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
          </div>
        );
      },
      ellipsis: true,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  return (
    <div className="p-2">
      <h1 className="text-lg my-2 text-orange-400">Non-Billable Service(s)</h1>
      <Table
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
        size="small"
        bordered
        className=" text-xs font-normal"
        columns={columns}
        dataSource={data}
        rowSelection={{
          ...rowSelection,
        }}
        scroll={{
          y: 650,
        }}
        onChange={handleChange}
      />

      <div className="flex my-10">
        <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] mx-1 text-[14px] w-32 focus:outline-none z-0">
          <option value="select" className="text-black">
            Select
          </option>
          <option value="process era">Process ERA</option>
          <option value="reviewed">Reviewed</option>
          <option value="unreviewed">Unreviewed</option>
        </select>
        <button className="pms-input-button">Save</button>
      </div>
    </div>
  );
};

export default UnbillableActivity;
