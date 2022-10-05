import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { Table } from "antd";

const ExpiringAuthorization = () => {
  const [expireAuthData, SetExpireAuthData] = useState([]);
  const [table, setTable] = useState(false);
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

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Patient Last Name",
      dataIndex: "patient",
      key: "patient",
      width: 100,
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
    <div className={table ? "" : "h-[100vh]"}>
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
      <div>
        <h1 className="label-text text-base font-medium text-[#9b9b9b] text-left">
          Select Interval
        </h1>
        <div className="flex item-center flex-wrap my-3">
          <div>
            <select
              name="type"
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium px-2 py-[6px] mx-1 text-xs focus:outline-none"
            >
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="90 Days">90 Days</option>
              <option value="120 Days">120 Days</option>
            </select>
          </div>
          <button
            onClick={() => setTable(true)}
            className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            Go
          </button>
        </div>
      </div>

      {table && (
        <div className="my-2">
          <div className=" overflow-scroll">
            <Table
              rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal text-center"
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
