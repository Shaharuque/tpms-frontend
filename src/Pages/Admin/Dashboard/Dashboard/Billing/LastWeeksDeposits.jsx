import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { Table } from "antd";
import { BsThreeDots } from "react-icons/bs";

const LastWeeksDeposits = () => {
  const [LastDepoData, SetLastDepoData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fake api cal
  useEffect(() => {
    axios("../../All_Fake_Api/LastWeekDeposit.json")
      .then((response) => {
        SetLastDepoData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(LastDepoData);

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
      title: "Check No",
      dataIndex: "Act",
      key: "Act",
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
      filteredValue: filteredInfo.Act || null,
      onFilter: (value, record) => record.Act.includes(value),
      sorter: (a, b) => {
        return a.Act > b.Act ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Act" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { Act, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{Act}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Check date",
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
      title: "Payee Name",
      dataIndex: "DOS",
      key: "DOS",
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
      filteredValue: filteredInfo.DOS || null,
      onFilter: (value, record) => record.DOS.includes(value),
      sorter: (a, b) => {
        return a.DOS > b.DOS ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "DOS" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { DOS, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{DOS}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Payee Type",
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
      // patient, id, key=>each row data(object) property value can be accessed.
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
      title: "Allocated Check Amt.",
      dataIndex: "Act",
      key: "Act",
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
      filteredValue: filteredInfo.Act || null,
      onFilter: (value, record) => record.Act.includes(value),
      sorter: (a, b) => {
        return a.Act > b.Act ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Act" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { Act, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{Act}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Unallocated",
      dataIndex: "unallocated",
      key: "unallocated",
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
      dataIndex: "PT",
      key: "PT",
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
      filteredValue: filteredInfo.PT || null,
      onFilter: (value, record) => record.PT.includes(value),
      sorter: (a, b) => {
        return a.PT > b.PT ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "PT" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { PT, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{PT}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
          <div className="text-center">
            <BsThreeDots />
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
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
        <h1 className="text-lg my-2 text-orange-500">Last Five Deposits</h1>
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
            dataSource={LastDepoData} //Which data chunk you want to show in table
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LastWeeksDeposits;
