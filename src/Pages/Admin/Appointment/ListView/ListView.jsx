import React, { memo, useEffect, useState, useRef } from "react";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";
import CardsView from "./CardView/CardsView";
import { Dropdown, Space, Table } from "antd";
import { AiFillLock, AiFillUnlock, AiOutlineDown } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import ManageTableAction from "./ListView/ManageTableAction";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import CustomDateRange from "../../../Shared/CustomDateRange/CustomDateRange";

const ListView = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [TData, setTData] = useState([]);
  const [listView, setListView] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [value, setValue] = useState([]);

  // Testing purpose->Implementing encrypt and decrypt formula for securing token
  let CryptoJS = require("crypto-js");
  let data = "0185543477";
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "my-secret-key@123"
  ).toString();
  console.log(ciphertext);
  localStorage.setItem("secret", ciphertext);
  const gatheredData = localStorage.getItem("secret");
  console.log(gatheredData);

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext, "my-secret-key@123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log("decrypted data:", decryptedData);

  //Date Range Picker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
    setTable(false);
  };

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click

  const handleBillable = (e) => {
    setBillable(!billable);
    setTable(false);
  };

  const handleListView = () => {
    setListView(!listView);
  };

  // calling fake db
  // useEffect(() => {
  //   axios("../All_Fake_Api/Fakedb.json")
  //     .then((response) => {
  //       setTData(response?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch("../All_Fake_Api/Fakedb.json")
      .then((res) => res.json())
      .then((data) => setTData(data));
  }, []);

  // -----------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Lock",
      key: "lock",
      dataIndex: "lock",
      width: 40,
      // render contains what we want to reflect as our data
      render: (_, { lock }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {lock === true && (
              <button>
                <AiFillUnlock className=" text-lg font-medium text-green-600" />
              </button>
            )}
            {lock === false && (
              <button>
                <AiFillLock className="text-lg font-medium  text-red-600" />
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      width: 150,
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
      render: (_, { Patients }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Patients}</div>;
      },
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      width: 150,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
        {
          text: "Nunc Ut LLC",
          value: "Nunc Ut LLC",
        },
      ],
      filteredValue: filteredInfo.Service_hrs || null,
      onFilter: (value, record) => record.Service_hrs.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Service_hrs > b.Service_hrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Service_hrs" ? sortedInfo.order : null,
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
              <div className="flex items-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>{pos}</div>
            )}
          </>
        );
      },
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
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
    },
    {
      title: "Scheduled Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      width: 100,
      filters: [
        {
          text: `Feb 20, 2023`,
          value: "Feb 20, 2023",
        },
        {
          text: "Dec 30, 2021",
          value: "Dec 30, 2021",
        },
      ],
      filteredValue: filteredInfo.Scheduled_Date || null,
      onFilter: (value, record) => record.Scheduled_Date.includes(value),
      sorter: (a, b) => {
        return a.Scheduled_Date > b.Scheduled_Date ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
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
      key: "Status",
      dataIndex: "Status",
      width: 100,
      sorter: (a, b) => {
        return a.Status > b.Status ? -1 : 1;
        // a.Status - b.Status,
      },
      sortOrder: sortedInfo.columnKey === "Status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <div className="flex justify-center">
            {Status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
            {Status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
            {Status === "hold" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
          </div>
        );
      },
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
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (_, { id }) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={<ManageTableAction></ManageTableAction>}
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

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const globalFilter = (value) => {
    //console.log(value);
    const filteredData = TData?.filter(
      (each) =>
        each?.Patients?.toLowerCase().includes(value.toLowerCase()) ||
        each?.Service_hrs?.toLowerCase().includes(value.toLowerCase()) ||
        each?.pos?.toLowerCase().includes(value.toLowerCase()) ||
        each?.Scheduled_Date?.toLowerCase().includes(value.toLowerCase()) ||
        each?.Status?.toLowerCase().includes(value)
    );
    setTData(filteredData);

    if (!value) {
      axios("../All_Fake_Api/Fakedb.json")
        .then((response) => {
          console.log("calling");
          setTData(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  //Individual filtering [tagging feature]
  const deletePatientTag = (tag) => {
    console.log(tag);
    const patients_array = filteredInfo?.Patients?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      Patients: patients_array,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: filteredInfo?.Status,
      pos: filteredInfo?.pos,
      Scheduled_Date: filteredInfo?.Scheduled_Date,
    });
  };

  const deleteServiceTag = (tag) => {
    console.log(tag);
    const Service_hrs_array = filteredInfo?.Service_hrs?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: Service_hrs_array,
      Status: filteredInfo?.Status,
      pos: filteredInfo?.pos,
      Scheduled_Date: filteredInfo?.Scheduled_Date,
    });
  };

  const deleteStatusTag = (tag) => {
    console.log(tag);
    const status_array = filteredInfo?.Status?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: status_array,
      pos: filteredInfo?.pos,
      Scheduled_Date: filteredInfo?.Scheduled_Date,
    });
  };

  const deletePosTag = (tag) => {
    console.log(tag);
    const pos_array = filteredInfo?.pos?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: filteredInfo?.Status,
      pos: pos_array,
      Scheduled_Date: filteredInfo?.Scheduled_Date,
    });
  };

  const deleteScheduleTag = (tag) => {
    console.log(tag);
    const schedule_array = filteredInfo?.Scheduled_Date?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: filteredInfo?.Status,
      pos: filteredInfo?.pos,
      Scheduled_Date: schedule_array,
    });
  };

  // -----------------------------------------------Form-------------------------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    console.log(data);
    setTable(true);
    reset();
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: startDate && `${startMonth} ${startDay}, ${startYear}`,
      });
    }, 0);
  }, [startDate, reset]);

  // ----------------------------------------Multi-Select---------------------------------
  // ***************
  const datat = ["Eugenia", "Bryan", "Linda"].map((item) => ({
    label: item,
    value: item,
  }));

  const datatf = ["demo", "pos", "minda"].map((item) => ({
    label: item,
    value: item,
  }));

  return (
    // For responsive view point
    <div className={!table ? "h-[100vh]" : ""}>
      <div>
        <div className="cursor-pointer">
          <div className="bg-gradient-to-r from-secondary to-cyan-600 rounded-lg px-4 py-2">
            <div
              onClick={clickHandler}
              className="  flex items-center justify-between"
            >
              {!clicked && (
                <>
                  <div className="text-[16px]  text-white font-semibold ">
                    Manage Sessions
                  </div>
                  <div className="arrow bounce">
                    <AiOutlineDown />
                  </div>
                </>
              )}
            </div>
            {/* Upper div */}
            {clicked && (
              <div>
                <Fade>
                  <div className="flex justify-between items-center flex-wrap">
                    <h1 className="text-[20px]  text-white font-semibold ">
                      Manage Sessions
                    </h1>
                    <div>
                      <button
                        onClick={handleClose}
                        className="text-white text-2xl font-light"
                      >
                        <MdOutlineCancel />
                      </button>
                    </div>
                  </div>
                  <div className="  flex items-center sm:justify-end sm:my-0 my-2 flex-wrap gap-2">
                    <div>
                      <Switch
                        color="default"
                        defaultChecked
                        size="small"
                        onClick={handleBillable}
                      />

                      <label
                        className="form-check-label inline-block ml-2 text-base text-gray-100"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {billable ? "Billable" : "Non-Billable"}
                      </label>
                    </div>
                    {/* List view or table view  */}

                    <div
                      className={
                        listView ? "flex justify-end " : "flex justify-end "
                      }
                    >
                      <div>
                        <Switch
                          color="default"
                          defaultChecked
                          size="small"
                          onClick={handleListView}
                        />

                        <label
                          className="form-check-label inline-block ml-2 text-base text-gray-100"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          {listView ? (
                            <span className="">List View</span>
                          ) : (
                            "Card View"
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="relative">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5 mb-2">
                      {billable && (
                        <div>
                          <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                            Clients
                          </h1>
                          <CustomMultiSelection
                            data={datat}
                            value={value}
                            setValue={setValue}
                          ></CustomMultiSelection>
                        </div>
                      )}
                      <div className="w-full">
                        <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                          Provider
                        </h1>
                        <CustomMultiSelection
                          data={datatf}
                          value={value}
                          setValue={setValue}
                        ></CustomMultiSelection>
                      </div>

                      {billable ? (
                        <>
                          <div>
                            <label className="label">
                              <span className="label-text text-[16px] text-gray-100 text-left">
                                Place of Services
                              </span>
                            </label>
                            <div>
                              <select
                                className=" bg-transparent border-b-[3px] border-[#ffffff] text-white  rounded-sm px-1 py-[4px] font-normal mx-1 text-[14px] w-full focus:outline-none"
                                {...register("place_of_service")}
                              >
                                <option value="" className="text-black">
                                  Select
                                </option>
                                <option
                                  value="follow up"
                                  className="text-black"
                                >
                                  Today's follow up
                                </option>
                                <option value="cat" className="text-black">
                                  Lost 7 days
                                </option>
                                <option value="15" className="text-black">
                                  Lost 15 days
                                </option>
                                <option value="15" className="text-black">
                                  Lost 30 days
                                </option>
                                <option value="15" className="text-black">
                                  30 days & over
                                </option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="label">
                              <span className="label-text text-[16px] text-gray-100 text-left">
                                Selected date
                              </span>
                            </label>
                            {/* Date Range calender will be set here */}
                            <div className="ml-1">
                              <div
                                onClick={() => setOpenCalendar(true)}
                                className="flex flex-wrap justify-center items-center border-b-[3px] border-[#ffffff] rounded-sm px-1 py-[4px] mx-1 text-[14px] w-full"
                              >
                                <input
                                  value={
                                    startDate
                                      ? `${startMonth} ${startDay}, ${startYear}`
                                      : "Start Date"
                                  }
                                  readOnly
                                  className="focus:outline-none py-[1px] font-normal text-center bg-transparent text-white w-1/3 cursor-pointer"
                                  {...register("start_date")}
                                />
                                <BsArrowRight className="w-1/3 text-white"></BsArrowRight>
                                <input
                                  value={
                                    endDate
                                      ? `${endMonth} ${endDay}, ${endYear}`
                                      : "End Date"
                                  }
                                  readOnly
                                  className="focus:outline-none font-normal text-center bg-transparent text-white w-1/3 cursor-pointer"
                                  {...register("end_date")}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-5">
                            <div>
                              <label className="label">
                                <span className="label-text text-[16px] text-gray-100 text-left">
                                  Status
                                </span>
                              </label>
                              <div>
                                <select
                                  className="bg-transparent border-b-[3px] border-[#ffffff] rounded-sm px-1 py-[4px] font-normal text-white mx-1 text-[14px] w-full focus:outline-none"
                                  {...register("Status")}
                                >
                                  <option value="" className="text-black">
                                    Select
                                  </option>
                                  <option value="Today" className="text-black">
                                    Today's follow up
                                  </option>
                                  <option className="text-black" value="UK">
                                    Lost 7 days
                                  </option>
                                  <option className="text-black" value="15">
                                    Lost 15 days
                                  </option>
                                  <option className="text-black" value="15">
                                    Lost 30 days
                                  </option>
                                  <option className="text-black" value="15">
                                    30 days & over
                                  </option>
                                </select>
                              </div>
                            </div>
                            <button
                              className="font-regular mt-[40px] sm:w-1/4 px-1 text-[16px] font-bold bg-white  hover:to-secondary text-primary rounded"
                              type="submit"
                            >
                              Go
                            </button>
                          </div>
                        </>
                      ) : (
                        <button
                          className="font-regular mt-[40px] sm:w-1/4 text-[16px] font-bold bg-white  hover:to-secondary text-primary rounded"
                          type="submit"
                        >
                          Go
                        </button>
                      )}
                    </div>
                  </form>
                </Fade>
              </div>
            )}
          </div>
          {/* Multi date picker component called */}
          <div
            ref={refClose}
            className="absolute z-10 md:ml-[5%] lg:ml-[10%] xl:ml-[27%] 2xl:ml-[35%]s"
          >
            {openCalendar && (
              <CustomDateRange
                range={range}
                setRange={setRange}
                handleCancelDate={handleCancelDate}
                setOpen={setOpenCalendar}
              ></CustomDateRange>
            )}
          </div>
        </div>

        {table && (
          <>
            {listView && (
              <div className="my-5">
                <div className=" lg:flex justify-end mb-3">
                  <div className="px-2 w-52 mr-2 bg-white from-primary text-sm  hover:to-secondary text-secondary border border-secondary rounded-sm flex justify-between items-center mt-2">
                    <input
                      placeholder="Search here..."
                      onChange={(e) => globalFilter(e.target.value)}
                      className="focus:outline-none"
                    />
                    <label>
                      <BiSearchAlt />
                    </label>
                  </div>

                  <button
                    onClick={clearFilters}
                    className="px-2 py-2 mt-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                  >
                    Clear filters
                  </button>
                </div>
                {filteredInfo?.Patients?.length > 0 ||
                filteredInfo?.Service_hrs?.length > 0 ||
                filteredInfo?.pos?.length > 0 ||
                filteredInfo?.Status?.length > 0 ||
                filteredInfo?.Scheduled_Date?.length > 0 ? (
                  <div className="my-5 flex flex-wrap items-center gap-2">
                    {filteredInfo?.Patients?.length > 0 && (
                      <div className=" ">
                        <div className="flex flex-wrap mb-2 gap-1">
                          {filteredInfo?.Patients?.map((tag, index) => (
                            <div
                              className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                              key={index}
                            >
                              <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                                <span className="text-secondary text-[15px] font-medium mr-1  ">
                                  Patient:
                                </span>
                                {tag}
                              </div>
                              <div>
                                <div
                                  className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                  onClick={() => deletePatientTag(tag)}
                                >
                                  X
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredInfo?.Service_hrs?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.Service_hrs?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                Service_hrs:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                onClick={() => deleteServiceTag(tag)}
                              >
                                X
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {filteredInfo?.Status?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.Status?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                Status:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                onClick={() => deleteStatusTag(tag)}
                              >
                                X
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {filteredInfo?.pos?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.pos?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                Pos:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                onClick={() => deletePosTag(tag)}
                              >
                                X
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {filteredInfo?.Scheduled_Date?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.Scheduled_Date?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                Scheduled_Date:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                onClick={() => deleteScheduleTag(tag)}
                              >
                                X
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}

                <div className="overflow-scroll">
                  <>
                    <Table
                      pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                      rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                      size="small"
                      bordered
                      className=" text-xs font-normal"
                      columns={columns}
                      dataSource={TData}
                      rowSelection={{
                        ...rowSelection,
                      }}
                      scroll={{
                        y: 650,
                      }}
                      onChange={handleChange}
                    />
                  </>
                </div>
              </div>
            )}
            {!listView && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="my-5"
              >
                <CardsView data={TData}></CardsView>
              </motion.div>
            )}
            {
              <div>
                <div className="flex">
                  <select
                    className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0"
                    {...register("pos")}
                  >
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
            }
          </>
          //
        )}
      </div>
    </div>
  );
};

export default memo(ListView);