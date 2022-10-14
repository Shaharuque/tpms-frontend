import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { Table } from "antd";
import { useForm } from "react-hook-form";

const ExpiringAuthorization = () => {
  const [expireAuthData, SetExpireAuthData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fake Api call

  useEffect(() => {
    axios("../../All_Fake_Api/ExpiringAuthorization.json")
      .then((response) => {
        SetExpireAuthData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(expireAuthData);

  const { register, handleSubmit, reset } = useForm();
  const [tableOpen, setTableOpen] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setTableOpen(true);
    reset();
  };

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
      title: "Patient Last Name",
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
      title: "Patient First Name",
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
      title: "Supervisor",
      dataIndex: "Dos",
      key: "Dos",
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
      title: "Insurance",
      dataIndex: "CPT",
      key: "CPT",
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
      filteredValue: filteredInfo.CPT || null,
      onFilter: (value, record) => record.CPT.includes(value),
      sorter: (a, b) => {
        return a.CPT > b.CPT ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "CPT" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // CPT, id, key=>each row data(object) property value can be accessed.
      render: (_, { CPT, id, key }) => {
        //console.log("tags : ", CPT, id, key);
        return (
          <div>
            <h1>{CPT}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Authorization Number",
      dataIndex: "date_billed",
      key: "date_billed",
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
      filteredValue: filteredInfo.date_billed || null,
      onFilter: (value, record) => record.date_billed.includes(value),
      sorter: (a, b) => {
        return a.date_billed > b.date_billed ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // date_billed, id, key=>each row data(object) property value can be accessed.
      render: (_, { date_billed, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{date_billed}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Date Authorization Expires",
      dataIndex: "allwd",
      key: "allwd",
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
      filteredValue: filteredInfo.allwd || null,
      onFilter: (value, record) => record.allwd.includes(value),
      sorter: (a, b) => {
        return a.allwd > b.allwd ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "allwd" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // allwd, id, key=>each row data(object) property value can be accessed.
      render: (_, { allwd, id, key }) => {
        //console.log("tags : ", allwd, id, key);
        return (
          <div>
            <h1>{allwd}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div className={tableOpen ? "" : "h-[100vh]"}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">
          Expiring Authorizations
        </h1>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-7 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-500 text-left">
                Select Interval
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("interval")}
            >
              <option value="name"> 30 Days </option>
              <option value="name"> 60 Days </option>
              <option value="name"> 90 Days </option>
              <option value="name"> 120 Days </option>
            </select>
          </div>

          <button
            className="w-1/4 mt-7 ml-3 text-base font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>

      {tableOpen && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
          <div className=" overflow-scroll py-3">
            <Table
              rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              dataSource={expireAuthData} //Which data chunk you want to show in table
              // For fixed header table at top
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpiringAuthorization;
