import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { Fade } from "react-reveal";
import { MdOutlineCancel } from "react-icons/md";
import { Dropdown, Space, Table } from "antd";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import RecurringSessionEdit from "./RecurringSession/RecurringSessionEdit";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

const RecurringSession = () => {
  const [table, setTable] = useState(false);
  const [select, setSelect] = useState("");
  const [SessionData, SetSessionData] = useState([]);
  // For Antd table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // calling recurring session fakedb
  useEffect(() => {
    axios("../All_Fake_Api/Fakedb.json")
      .then((response) => {
        SetSessionData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(SessionData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  // Table columns
  const columns = [
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      width: 100,
      filters: [
        {
          text: `Vernon`,
          value: "Vernon",
        },
        {
          text: `Aileen Newman`,
          value: "Aileen Newman",
        },
        {
          text: "Donovan",
          value: "Donovan",
        },
        {
          text: "Burke Beard",
          value: "Burke Beard",
        },
        {
          text: "Hector Moses",
          value: "Hector Moses",
        },
      ],
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // client_first_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { Patients, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-start px-2">
            <button className="text-secondary">{Patients}</button>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Service & Hrs.",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      width: 100,
      filters: [
        { text: "Milissent", value: "Milissent" },
        { text: "Timmy", value: "Timmy" },
        {
          text: `Jamey`,
          value: "Jamey",
        },
        {
          text: `Minnie`,
          value: "Minnie",
        },
      ],
      filteredValue: filteredInfo.Service_hrs || null,
      onFilter: (value, record) => record.Service_hrs.includes(value),
      sorter: (a, b) => {
        return a.Service_hrs > b.Service_hrs ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "Service_hrs" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      render: (_, { Service_hrs }) => {
        return (
          <div className="flex justify-start px-2">
            <h1 className="text-orange-700">
              {Service_hrs ? Service_hrs : "No Data"}
            </h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider",
      dataIndex: "Provider",
      key: "Provider",
      width: 100,
      filters: [
        {
          text: `1986-08-28`,
          value: "1986-08-28",
        },
        {
          text: "2021-04-06",
          value: "2021-04-06",
        },
      ],
      filteredValue: filteredInfo.Provider || null,
      onFilter: (value, record) => record.Provider.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Provider > b.Provider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "pos",
      dataIndex: "pos",
      width: 80,
      render: (_, { pos }) => {
        //console.log("pos : ", pos);
        return (
          <>
            {pos === "telehealth" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>{pos}</div>
            )}
          </>
        );
      },
      filters: [
        {
          text: "telehealth",
          value: "telehealth",
        },
        {
          text: "School",
          value: "School",
        },
        {
          text: "Office",
          value: "office",
        },
      ],
      filteredValue: filteredInfo.pos || null,
      onFilter: (value, record) => record.pos.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Start Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      width: 80,
      filters: [
        {
          text: "Jan 15, 2022",
          value: "Jan 15, 2022",
        },
        {
          text: "May 9, 2023",
          value: "May 9, 2023",
        },
      ],
      filteredValue: filteredInfo.Scheduled_Date || null,
      onFilter: (value, record) => record.Scheduled_Date.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Scheduled_Date > b.Scheduled_Date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hours",
      dataIndex: "Hours",
      key: "Hours",
      width: 100,
      filters: [
        {
          text: `9:57 PM`,
          value: "9:57 PM",
        },
        {
          text: "3:01 PM",
          value: "3:01 PM",
        },
      ],
      filteredValue: filteredInfo.Hours || null,
      onFilter: (value, record) => {
        return record.Hours.includes(value);
      },
      sorter: (a, b) => {
        return a.Hours > b.Hours ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "Hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      width: 80,
      filters: [
        {
          text: "hold",
          value: "hold",
        },
        {
          text: "Rendered",
          value: "Rendered",
        },
        {
          text: "Scheduled",
          value: "Scheduled",
        },
      ],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Status > b.Status ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Status" ? sortedInfo.order : null,
      // render contains what we want to reflect as our data
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <div>
            {Status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded w-14">
                {Status}
              </button>
            )}
            {Status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[9px] py-[2px] px-2 rounded w-14">
                {Status}
              </button>
            )}
            {Status === "hold" && (
              <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded w-14">
                {Status}
              </button>
            )}
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
          <Link to={`/admin/recurring-session-edit/${id}`}>
            <BiEdit className="text-[#34A6B7] text-lg" />
          </Link>
        </div>
      ),
    },
  ];
  // -----------------------------------------------form-------------------------------
  const { handleSubmit } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setTable(true);
  };

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
  };

  // -----------------------------------------------Table-------------------------------
  const data = useMemo(() => SessionData, [SessionData]);

  // console.log(selectedFlatRows);

  // -----------------------------------------------Multi-Select-------------------------------
  const [value, setValue] = useState([]);
  const PatientsData = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));

  const ProviderData = ["demo", "pos", "minda"].map((item) => ({
    label: item,
    value: item,
  }));

  console.log(value);

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <div className="cursor-pointer">
        <div className="bg-gradient-to-r from-secondary to-cyan-900 rounded-lg px-4 py-2">
          <div onClick={clickHandler} className="  flex items-center ">
            {!clicked && (
              <h1 className="text-[16px]  text-white font-normal ">
                Recurring Session
              </h1>
            )}
          </div>
          {/* Upper div */}
          {clicked && (
            <div>
              <Fade>
                <div className="flex justify-between items-center">
                  <h1 className="text-[16px]  text-white font-normal ">
                    Recurring Session
                  </h1>
                  <div className="  flex justify-end gap-3">
                    <div>
                      <button
                        onClick={handleClose}
                        className="text-white text-2xl font-light"
                      >
                        <MdOutlineCancel />
                      </button>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 my-5 mr-2 gap-x-3">
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-100 text-left">
                          Place of Service_hrss
                        </span>
                      </label>
                      <select
                        className=" bg-transparent border-b-[3px] border-[#e5e5e5] text-white  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-full focus:outline-none"
                        onChange={(e) => setSelect(e.target.value)}
                        name="type"
                      >
                        <option value="all" className="text-black">
                          All
                        </option>
                        <option value="Patients" className="text-black">
                          Patients
                        </option>
                        <option value="Provider" className="text-black">
                          Provider
                        </option>
                      </select>
                    </div>

                    {select === "Patients" ? (
                      <div>
                        <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                          Patientss
                        </h1>
                        <CustomMultiSelection
                          data={PatientsData}
                          value={value}
                          setValue={setValue}
                        ></CustomMultiSelection>
                      </div>
                    ) : select === "Provider" ? (
                      <div className="w-full">
                        <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                          Provider
                        </h1>
                        <CustomMultiSelection
                          data={ProviderData}
                          value={value}
                          setValue={setValue}
                        ></CustomMultiSelection>
                      </div>
                    ) : (
                      <></>
                    )}
                    <button
                      className="font-regular mt-[33px] sm:w-1/4  text-sm font-normal bg-secondary  hover:to-secondary text-white rounded-md"
                      type="submit"
                    >
                      Go
                    </button>
                  </div>
                </form>
              </Fade>
            </div>
          )}
        </div>
      </div>

      {/* table  */}
      {table && (
        <div className="my-5">
          <div className=" overflow-scroll">
            <Table
              rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              dataSource={SessionData} //Which data chunk you want to show in table
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurringSession;
