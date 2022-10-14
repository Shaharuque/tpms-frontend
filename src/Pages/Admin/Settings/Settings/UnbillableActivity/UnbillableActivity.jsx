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

  const columns = [
    {
      title: "Patients",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        {
          text: "Duck Duci",
          value: "Duck Duci",
        },
        {
          text: `Antum llc`,
          value: "Antum llc",
        },
      ],
      render: (_, { patient }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{patient}</div>;
      },
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
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
      filters: [
        {
          text: "Malesuada Corporation",
          value: "Malesuada Corporation",
        },
        {
          text: `17/01/2018`,
          value: "17/01/2018",
        },
      ],
      filteredValue: filteredInfo.dos || null,
      onFilter: (value, record) => record.dos.includes(value),
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
      filters: [
        {
          text: "Malesuada Corporation",
          value: "Malesuada Corporation",
        },
        {
          text: `17/01/2018`,
          value: "17/01/2018",
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
      title: "Service & Hrs.",
      dataIndex: "service",
      key: "service",
      width: 100,
      filters: [
        {
          text: "Malesuada Corporation",
          value: "Malesuada Corporation",
        },
        {
          text: `Eget Magna Corp`,
          value: "Eget Magna Corp",
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
      title: "Cpt",
      dataIndex: "cpt",
      key: "cpt",
      width: 60,
      filters: [
        {
          text: "Malesuada Corporation",
          value: "Malesuada Corporation",
        },
        {
          text: `Eget Magna Corp`,
          value: "Eget Magna Corp",
        },
      ],
      filteredValue: filteredInfo.cpt || null,
      onFilter: (value, record) => record.cpt.includes(value),
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
      filters: [],
      filteredValue: filteredInfo.pos || null,
      onFilter: (value, record) => record.pos.includes(value),
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
      filters: [
        {
          text: "Duck Duci",
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
        {
          text: `Health Net`,
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
      ],
      filteredValue: filteredInfo.created || null,
      onFilter: (value, record) => record.created.includes(value),
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
    <div>
      <h1 className="text-lg my-2 text-orange-400">Non-Billable Service(s)</h1>
      <Table
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
        size="small"
        bordered
        className=" text-xs font-normal"
        columns={columns}
        dataSource={data}
        scroll={{
          y: 650,
        }}
        onChange={handleChange}
      />
      <div className="flex items-center">
        <select
          // onChange={(e) => setService(e.target.value)}
          name="type"
          className="input-border text-gray-600 rounded-sm mt-8 text-[14px] font-medium ml-1 py-[1px] w-1/2 md:w-[15%] focus:outline-none"
        >
          <option value="process era">Process ERA</option>
          <option value="reviewed">Reviewed</option>
          <option value="unreviewed">Unreviewed</option>
        </select>

        <button
          // onClick={submitHandle}
          className="px-3 mt-7 ml-4 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UnbillableActivity;
