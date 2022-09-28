import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { RecurringSessionColumn } from "./RecurringSession/RecurringSessionColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import SettingTableBox from "../../../Pages/Settings/SettingComponents/SettingTableBox";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { Fade } from "react-reveal";
import { MdOutlineCancel } from "react-icons/md";
import { Table } from "antd";

const RecurringSession = () => {
  const [table, setTable] = useState(false);
  const [select, setSelect] = useState("");
  const [SessionData, SetSessionData] = useState([]);
  // For Antd table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // calling recurring session fakedb
  useEffect(() => {
    axios("../All_Fake_Api/recurringSession.json")
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
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        { text: "Harding Matthews", value: "Harding Matthews" },
        { text: "Tyrone Dorsey", value: "Tyrone Dorsey" },
        { text: `Griffith Byrd`, value: "Griffith Byrd" },
      ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // client_first_name, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-start px-2">
            <button className="text-secondary">{patient}</button>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
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
      filteredValue: filteredInfo.service || null,
      onFilter: (value, record) => record.service.includes(value),
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      render: (_, { service }) => {
        return (
          <div className="flex justify-start px-2">
            <h1 className="text-orange-700">{service ? service : "No Data"}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
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
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 100,
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
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.date > b.date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
      width: 100,
      filters: [
        {
          text: 1,
          value: "1",
        },
        {
          text: 2,
          value: "2",
        },
        {
          text: 6,
          value: "6",
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
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      width: 80,
      filters: [
        {
          text: "4:25 PM",
          value: "4:25 PM",
        },
        {
          text: "9:22 PM",
          value: "9:22 PM",
        },
        {
          text: "4:28 PM",
          value: "4:28 PM",
        },
      ],
      filteredValue: filteredInfo.hours || null,
      onFilter: (value, record) => record.hours.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.hours > b.hours ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours" ? sortedInfo.order : null,
      // render contains what we want to reflect as our data
      render: (_, { hours }) => {
        return (
          <div className="flex justify-end px-2">
            <h1 className="font-bold text-red-500">
              {hours ? hours : "No Data"}
            </h1>
          </div>
        );
      },
      ellipsis: true,
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
  const patientData = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));

  const providerData = ["demo", "pos", "minda"].map((item) => ({
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
                          Place of Services
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
                        <option value="patient" className="text-black">
                          Patient
                        </option>
                        <option value="provider" className="text-black">
                          Provider
                        </option>
                      </select>
                    </div>

                    {select === "patient" ? (
                      <div>
                        <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                          Patients
                        </h1>
                        <CustomMultiSelection
                          data={patientData}
                          value={value}
                          setValue={setValue}
                        ></CustomMultiSelection>
                      </div>
                    ) : select === "provider" ? (
                      <div className="w-full">
                        <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                          Provider
                        </h1>
                        <CustomMultiSelection
                          data={providerData}
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
