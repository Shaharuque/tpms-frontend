import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { Dropdown, Space, Table } from "antd";
import VacationAction from "./VacationAction/VacationAction";
import PendingStatus from "./VacationAction/PendingStatus";
import { BsThreeDots } from "react-icons/bs";

const VacationPendingApproval = () => {
  const [VacationData, SetVacationData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fakedb call
  useEffect(() => {
    axios("../../All_Fake_Api/VacationPending.json")
      .then((response) => {
        SetVacationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(VacationData);

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Staff Last Name",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Staff First Name",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{provider}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Holiday Date",
      dataIndex: "Dos",
      key: "Dos",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.Dos || null,
      onFilter: (value, record) => record.Dos.includes(value),
      sorter: (a, b) => {
        return a.Dos > b.Dos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // Dos, id, key=>each row data(object) property value can be accessed.
      render: (_, { Dos, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{Dos}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "supervisor",
      key: "supervisor",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.supervisor || null,
      onFilter: (value, record) => record.supervisor.includes(value),
      sorter: (a, b) => {
        return a.supervisor > b.supervisor ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "supervisor" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { supervisor, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{supervisor}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 60,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { status, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="text-center">
            <PendingStatus></PendingStatus>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (_, { id }) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={<VacationAction></VacationAction>}
            trigger={["click"]}
            overlayStyle={{ zIndex: "100" }}
          >
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <BsThreeDots />
              </Space>
            </button>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <div className={!VacationData ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Vacation Pending</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-end items-center mr-2">
          <button
            onClick={clearFilters}
            className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <div className=" overflow-scroll pt-3">
          <Table
            rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={VacationData} //Which data chunk you want to show in table
            // For fixed header table at top
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VacationPendingApproval;
