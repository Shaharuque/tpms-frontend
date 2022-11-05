import React, { memo, useEffect, useState, useRef } from "react";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
// import { Fade } from "react-reveal";
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
import { headers } from "../../../../Misc/BaseClient";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../../Pages/Settings/SettingComponents/ShimmerTableTet";

const ListView = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [TData, setTData] = useState([]);
  const [listView, setListView] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [patients, setPatients] = useState();
  const [stuffs, setStuffs] = useState();
  const [patientId, setPatientId] = useState();
  const [stuffsId, setStuffsId] = useState();
  const [formData, setFromData] = useState();
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);

  //Clients multi select data from server
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "GET",
        url: `https://app.therapypms.com/api/v1/admin/ac/patient/names`,
        headers: headers,
      });
      const data = res?.data?.clients;
      // console.log(data);
      setPatients(data);
    };
    getPatientsData();
  }, []);
  //Provider multi select data from server
  useEffect(() => {
    const getProviderData = async () => {
      const res = await axios({
        method: "GET",
        url: `https://app.therapypms.com/api/v1/admin/ac/staff/names`,
        headers: headers,
      });
      const data = res?.data?.staff_names;
      setStuffs(data);
    };
    getProviderData();
  }, []);
  console.log("stuffs", stuffs);

  const receivedData = (data) => {
    console.log(data);
  };
  //console.log(patientId);

  //provider names API

  //Date converter function [yy-mm-dd]
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
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

  useEffect(() => {
    fetch("../All_Fake_Api/Fakedb.json")
      .then((res) => res.json())
      .then((data) => setTData(data));
  }, []);

  //console.log(items);

  //By Infinite scrolling new page called and data will be load
  //get data from API + data fetch from api while scrolling[Important]
  const fetchPatients = async () => {
    let manageSessionData = [];
    await axios({
      url: `https://app.therapypms.com/api/v1/admin/ac/get-appoinments?page=${page}`,
      method: "POST",
      headers: headers,
      data: formData,
    }).then((response) => {
      manageSessionData = response?.data?.appointments?.data;
    });
    console.log(manageSessionData);
    return manageSessionData;
  };

  const fetchData = async () => {
    const patientsFromServer = await fetchPatients();
    console.log(patientsFromServer);
    setItems([...items, ...patientsFromServer]);
    if (patientsFromServer?.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  console.log(items);

  // -----------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Lock",
      key: "is_locked",
      dataIndex: "is_locked",
      width: 40,
      // render contains what we want to reflect as our data
      render: (_, { is_locked }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {is_locked === 0 && (
              <button>
                <AiFillUnlock className=" text-lg font-medium text-[#309BAB]" />
              </button>
            )}
            {is_locked === 1 && (
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
      dataIndex: "client_full_name",
      key: "client_full_name",
      width: 150,
      filters: [
        {
          text: `Aasiya Baig`,
          value: "Aasiya  Baig",
        },
        {
          text: `Aileen Newman`,
          value: "Aasiya  Farha",
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
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary">
            {record?.app_client?.client_full_name}
          </div>
        );
      },
      filteredValue: filteredInfo.client_full_name || null,
      onFilter: (value, record) =>
        record?.app_client?.client_full_name?.includes(value),
      sorter: (a, b) => {
        return a.app_client?.client_full_name > b.app_client?.client_full_name
          ? -1
          : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "client_full_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      width: 150,
      filters: [
        {
          text: `assisment BCaBA`,
          value: "assisment BCaBA",
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
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary">
            {record?.app_client_auth_act?.activity_name}
          </div>
        );
      },
      filteredValue: filteredInfo.activity_name || null,
      onFilter: (value, record) =>
        record?.app_client_auth_act?.activity_name?.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.app_client_auth_act?.activity_name >
          b.app_client_auth_act?.activity_name
          ? -1
          : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Service_hrs" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Provider",
      dataIndex: "provider_full_name",
      key: "provider_full_name",
      width: 150,
      filters: [
        {
          text: `Andrew  Flintoff`,
          value: "Andrew  Flintoff",
        },
        {
          text: `Aileen Newman`,
          value: "Aasiya  Farha",
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
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary">
            {record?.app_provider?.full_name}
          </div>
        );
      },
      filteredValue: filteredInfo.provider_full_name || null,
      onFilter: (value, record) =>
        record?.app_provider?.full_name?.includes(value),
      sorter: (a, b) => {
        return a.app_provider?.full_name > b.app_provider?.full_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "provider_full_name" ? sortedInfo.order : null,
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
      dataIndex: "schedule_date",
      key: "schedule_date",
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
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-black text-center">{record?.schedule_date}</div>
        );
      },
      filteredValue: filteredInfo.schedule_date || null,
      onFilter: (value, record) => record.schedule_date.includes(value),
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1;
        // a.schedule_date - b.schedule_date
      },
      sortOrder:
        sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
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
      key: "status",
      dataIndex: "status",
      width: 100,
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
        // a.status - b.status,
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { status }) => {
        //console.log("status : ", status);
        return (
          <div className="flex justify-center">
            {status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Hold" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "No Show" && (
              <button className="bg-blue-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Cancelled by Client" && (
              <button className="bg-black text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Cancelled by Provider" && (
              <button className="bg-yellow-700 text-white text-[10px] py-[2px]  rounded w-28">
                {status}
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
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
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
        each?.schedule_date?.toLowerCase().includes(value.toLowerCase()) ||
        each?.status?.toLowerCase().includes(value)
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
      status: filteredInfo?.status,
      pos: filteredInfo?.pos,
      schedule_date: filteredInfo?.schedule_date,
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
      status: filteredInfo?.status,
      pos: filteredInfo?.pos,
      schedule_date: filteredInfo?.schedule_date,
    });
  };

  const deletestatusTag = (tag) => {
    console.log(tag);
    const status_array = filteredInfo?.status?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      status: status_array,
      pos: filteredInfo?.pos,
      schedule_date: filteredInfo?.schedule_date,
    });
  };

  const deletePosTag = (tag) => {
    console.log(tag);
    const pos_array = filteredInfo?.pos?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      status: filteredInfo?.status,
      pos: pos_array,
      schedule_date: filteredInfo?.schedule_date,
    });
  };

  const deleteScheduleTag = (tag) => {
    console.log(tag);
    const schedule_array = filteredInfo?.schedule_date?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      status: filteredInfo?.status,
      pos: filteredInfo?.pos,
      schedule_date: schedule_array,
    });
  };

  // -----------------------------------------------Form-------------------------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = async (data) => {
    const from_date = convert(data?.start_date);
    const to_date = convert(data?.end_date);
    //console.log(from_date, to_date);
    const payLoad = {
      client_id: patientId,
      provider_id: "",
      pos: "",
      status: "",
      from_date: from_date,
      to_date: to_date,
    };
    setFromData(payLoad);
    if (payLoad) {
      const fetchManageSessions = {
        url: "https://app.therapypms.com/api/v1/admin/ac/get-appoinments",
        method: "POST",
        headers: headers,
        data: payLoad,
      };

      axios(fetchManageSessions).then((response) => {
        console.log("list data", response?.data?.appointments);
        const manageSessionData = response?.data?.appointments?.data;
        setItems(manageSessionData);
      });
    }
    setTable(true);
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: startDate ? `${startMonth} ${startDay}, ${startYear}` : "",
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : "",
      });
    }, 0);
  }, [
    startDate,
    startMonth,
    startDay,
    startYear,
    endDate,
    endMonth,
    endDay,
    endYear,
    reset,
  ]);

  // ----------------------------------------Multi-Select---------------------------------
  // *************

  const opt = [
    { label: "tera ", value: "grapes", id: 3 },
    { label: "tpms ", value: "mafgngo", id: 1 },
    { label: "code ", value: "grfgapes", id: 4 },
    { label: "Mango ", value: "mango", id: 8 },
    { label: "dfa ", value: "strawberry", id: 9 },
  ];

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
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 gap-2 mb-2">
                    {billable && (
                      <div>
                        <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                          Clients
                        </h1>
                        <CustomMultiSelection
                          patients={patients}
                          setPatientId={setPatientId}
                          receivedData={receivedData}
                        ></CustomMultiSelection>
                      </div>
                    )}
                    <div className="w-full">
                      <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                        Provider
                      </h1>
                      <CustomMultiSelection
                        stuffs={stuffs}
                        setStuffsId={setStuffsId}
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
                              <option value="follow up" className="text-black">
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
                                status
                              </span>
                            </label>
                            <div>
                              <select
                                className="bg-transparent border-b-[3px] border-[#ffffff] rounded-sm px-1 py-[4px] font-normal text-white mx-1 text-[14px] w-full focus:outline-none"
                                {...register("status")}
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
                    {table && (
                      <>
                        <div className="  ">
                          <div className="px-2 py-2 w-full mr-2 mt-[35px] bg-white from-primary text-sm  hover:to-secondary text-secondary border border-secondary rounded-sm flex justify-between items-center ">
                            <input
                              placeholder="Search here..."
                              onChange={(e) => globalFilter(e.target.value)}
                              className="focus:outline-none"
                            />
                            <label>
                              <BiSearchAlt />
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={clearFilters}
                          className="px-2 w-1/2 py-2 mt-8 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                        >
                          Clear filters
                        </button>
                      </>
                    )}
                  </div>
                </form>
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
                {filteredInfo?.Patients?.length > 0 ||
                filteredInfo?.Service_hrs?.length > 0 ||
                filteredInfo?.pos?.length > 0 ||
                filteredInfo?.status?.length > 0 ||
                filteredInfo?.schedule_date?.length > 0 ? (
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

                    {filteredInfo?.status?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.status?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                status:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-sm text-white bg-primary py-[3px] px-2"
                                onClick={() => deletestatusTag(tag)}
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

                    {filteredInfo?.schedule_date?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.schedule_date?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-sm pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[15px] font-medium mr-1  ">
                                schedule_date:
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
                <InfiniteScroll
                  dataLength={items.length} //items is basically all data here
                  next={fetchData}
                  hasMore={hasMore}
                  loader={<ShimmerTableTet></ShimmerTableTet>}
                >
                  <Table
                    pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                    rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                    size="small"
                    bordered
                    className=" text-xs font-normal"
                    columns={columns}
                    dataSource={items}
                    rowSelection={{
                      ...rowSelection,
                    }}
                    scroll={{
                      y: 650,
                    }}
                    onChange={handleChange}
                  />
                </InfiniteScroll>
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
