import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { Table } from "antd";

const LastMonthsStatements = () => {
  const [LastFiveMonthdata, SetLastFiveMonthData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fake api call
  useEffect(() => {
    axios("../../All_Fake_Api/LastFiveStatement.json")
      .then((response) => {
        SetLastFiveMonthData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(LastFiveMonthdata);

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
      title: "Deposite date",
      dataIndex: "depositDate",
      key: "depositDate",
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
      filteredValue: filteredInfo.depositDate || null,
      onFilter: (value, record) => record.depositDate.includes(value),
      sorter: (a, b) => {
        return a.depositDate > b.depositDate ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "depositDate" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { depositDate, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{depositDate}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Check No",
      dataIndex: "checkNo",
      key: "checkNo",
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
      filteredValue: filteredInfo.checkNo || null,
      onFilter: (value, record) => record.checkNo.includes(value),
      sorter: (a, b) => {
        return a.checkNo > b.checkNo ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "checkNo" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { checkNo, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{checkNo}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "checkDate",
      key: "checkDate",
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
      filteredValue: filteredInfo.checkDate || null,
      onFilter: (value, record) => record.checkDate.includes(value),
      sorter: (a, b) => {
        return a.checkDate > b.checkDate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "checkDate" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { checkDate, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{checkDate}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Payee Name",
      dataIndex: "payeeName",
      key: "payeeName",
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
      filteredValue: filteredInfo.payeeName || null,
      onFilter: (value, record) => record.payeeName.includes(value),
      sorter: (a, b) => {
        return a.payeeName > b.payeeName ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "payeeName" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { payeeName, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{payeeName}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Allocated Check Amit.",
      dataIndex: "allocatedCheck",
      key: "allocatedCheck",
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
      filteredValue: filteredInfo.allocatedCheck || null,
      onFilter: (value, record) => record.allocatedCheck.includes(value),
      sorter: (a, b) => {
        return a.allocatedCheck > b.allocatedCheck ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "allocatedCheck" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { allocatedCheck, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{allocatedCheck}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Unallocated",
      dataIndex: "unallocated",
      key: "unallocated",
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
      filteredValue: filteredInfo.unallocated || null,
      onFilter: (value, record) => record.unallocated.includes(value),
      sorter: (a, b) => {
        return a.unallocated > b.unallocated ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "unallocated" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { unallocated, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{unallocated}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Pay Type",
      dataIndex: "payType",
      key: "payType",
      width: 60,
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
      filteredValue: filteredInfo.payType || null,
      onFilter: (value, record) => record.payType.includes(value),
      sorter: (a, b) => {
        return a.payType > b.payType ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "payType" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { payType, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{payType}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { description, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{description}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
      width: 120,
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
      filteredValue: filteredInfo.file || null,
      onFilter: (value, record) => record.file.includes(value),
      sorter: (a, b) => {
        return a.file > b.file ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "file" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { file, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{file}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Last Five Statements</h1>
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
            dataSource={LastFiveMonthdata} //Which data chunk you want to show in table
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LastMonthsStatements;
