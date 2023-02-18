import React, { memo, useEffect, useState, useRef } from "react";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import CardsView from "./CardView/CardsView";
import { Dropdown, Space, Table } from "antd";
import { AiFillLock, AiFillUnlock, AiOutlineDown } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import ManageTableAction from "./ListView/ManageTableAction";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import CustomDateRange from "../../../Shared/CustomDateRange/CustomDateRange";
import ShimmerTableTet from "../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import Clients from "./MultiSelectComponents/Clients";
import Providers from "./MultiSelectComponents/Providers";
import useToken from "../../../../CustomHooks/useToken";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { useManageSessionStatusChangeMutation } from "../../../../features/Appointment_redux/ListView/manageSessionApi";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { useGetAppointmentPOSQuery } from "../../../../features/Appointment_redux/appointmentApi";
import { toast } from "react-toastify";
import { timeConverter } from "../../../Shared/TimeConverter/TimeConverter";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

// To Convert Date YY/MM/DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  //console.log(afterSplit);
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};

const ListView = () => {
  const { token } = useToken();
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [TData, setTData] = useState([]);
  const [listView, setListView] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [patients, setPatients] = useState();
  const [stuffs, setStuffs] = useState();
  const [patientId, setPatientId] = useState();
  const [stuffsId, setStuffsId] = useState([]);
  const [formData, setFromData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [responseError, setResponseError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [statusName, setStatusName] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [items, setItems] = useState([]);
  const [check, setCheck] = useState(false);
  const [sessionlist, setSessionlist] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  const [paginateActive, setPaginateActive] = useState(false);

  //Manage Session Get Session List From API
  useEffect(() => {
    const getManageSession = async () => {
      setListLoading(true);
      const res = await axios({
        method: "POST",
        url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/appointments?page=${page}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
        data: formData,
      });
      const data = res?.data?.appointments;
      setItems(data?.data);
      setTotalPage(data?.last_page);
      setListLoading(false);
    };
    getManageSession();
  }, [token, page, formData]);

  useEffect(() => {
    if (items?.length > 0) {
      setTable(true);
    }
  }, [items]);

  //Manage Session Appointment Status Change API
  const [
    manageSessionStatusChange,
    { data: statusChangeData, isSuccess: actionSuccess },
  ] = useManageSessionStatusChangeMutation();
  console.log("after status change", actionSuccess);

  useEffect(() => {
    if (statusChangeData?.status === "success" && actionType !== "delete") {
      setSelectedRowKeys([]);
      toast.success("Successfully Session Update", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      //Session List refetch based on the selected page number
      const getManageSession = async () => {
        const res = await axios({
          method: "POST",
          url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/appointments?page=${page}`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: formData,
        });
        const data = res?.data?.appointments;
        setItems(data?.data);
      };
      getManageSession();
    }
    if (statusChangeData?.status === "success" && actionType === "delete") {
      setSelectedRowKeys([]);
      toast.success("Selected Session Deleted", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      //Session List refetch based on the selected page number
      const getManageSession = async () => {
        const res = await axios({
          method: "POST",
          url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/appointments?page=${page}`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: formData,
        });
        const data = res?.data?.appointments;
        setItems(data?.data);
      };
      getManageSession();
    }
  }, [statusChangeData?.status]);

  //Appointment Pos get API
  const { data: posData, isLoading: posDataLoading } =
    useGetAppointmentPOSQuery(token);

  //Clients multi select data from server(Client=>Patient)
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "POST",
        url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/client`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
      });
      const data = res?.data?.claims;
      // console.log(data);
      setPatients(data);
    };
    getPatientsData();
  }, [token]);
  //console.log("selected clients", patientId);

  //Provider multi select data from server(Provider=>Staff)
  useEffect(() => {
    const getProviderData = async () => {
      const res = await axios({
        method: "POST",
        url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/provider`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
      });
      const data = res?.data?.claims;
      setStuffs(data);
    };
    getProviderData();
  }, [token]);
  //console.log("selected stuffs", stuffsId);

  //-----------Dynamic column multi value filtering--------------//
  //For getting unique value
  function getUnique(array) {
    let uniqueArray = [];

    // Loop through array values
    for (let value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }
  //this funtion to get dynamic filter value-text
  const patientSearch = () => {
    let patientArray = items?.map((d) => d?.app_client?.client_full_name);
    const resultArray = getUnique(patientArray);
    //return filterData;
    let newArray = [];
    for (let x of resultArray) {
      newArray.push({ text: x, value: x });
    }
    return newArray;
  };
  // if (items?.length > 0) {
  //   console.log(patientSearch());
  // }

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

  //Handle Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
    setFilteredInfo({});
  };

  // Table Data Columns Defined Here //
  const columns = [
    {
      title: <h1 className="text-center">Lock</h1>,
      key: "is_locked",
      dataIndex: "is_locked",
      width: 80,
      // render contains what we want to reflect as our data
      render: (_, { is_locked }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {is_locked === 0 && (
              <button title="Billed">
                <AiFillUnlock className=" text-lg font-medium text-[#309BAB]" />
              </button>
            )}
            {is_locked === 1 && (
              <button title="Lock In">
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
      filters: items?.length > 0 && patientSearch(),
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
      dataIndex: "activity_name",
      key: "activity_name",
      width: 250,
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
      width: 200,
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
      key: "location",
      dataIndex: "location",
      width: 120,
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
      render: (_, { location }) => {
        //console.log("pos : ", pos);
        return (
          <>
            {location === "02" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>
                {
                  posData?.pos?.find((each) => each?.pos_code === location)
                    ?.pos_name
                }
              </div>
            )}
          </>
        );
      },
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
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
          <div className=" text-black text-center">
            {dateConverter(record?.schedule_date)}
          </div>
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
      width: 200,
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
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-gray-600 text-center ">
            {timeConverter(record?.from_time?.split(" ")[1])} to{" "}
            {timeConverter(record?.to_time?.split(" ")[1])}
          </div>
        );
      },
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
      render: (_, record) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={
              <ManageTableAction appointmentId={record?.id}></ManageTableAction>
            }
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

  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     setAppointmentIds({ selectedRowKeys });
  //   },
  //   onSelect: (record, selected, selectedRows) => {
  //     console.log("selected row", selectedRows);
  //     setTestingSelect(selectedRows);
  //   },
  //   onSelectAll: (selected, selectedRows, changeRows) => {
  //     console.log(selected, selectedRows, changeRows);
  //   },
  //   getCheckboxProps: (record) => {
  //     const rowIndex = record?.is_locked;
  //     return {
  //       disabled: rowIndex === 1,
  //     };
  //   },
  // };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  console.log("----", filteredInfo);

  const clearFilters = (e) => {
    e.preventDefault();
    setFilteredInfo({});
  };

  //Individual filtering [tagging feature]
  const deletePatientsName = (tag) => {
    console.log(tag);
    const client_full_name_array = filteredInfo?.client_full_name?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      client_full_name: client_full_name_array,
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
    setCheck(true);
    setFilteredInfo({}); //When Go btn is pressed
    console.log("form-data", data);
    const from_date = convert(data?.start_date);
    const to_date = convert(data?.end_date);
    const payLoad = {
      client_id: patientId,
      provider_id: stuffsId?.length > 0 ? stuffsId : "",
      ses_status: data?.status,
      ses_pos: location,
      ses_app_type: 1,
      from_date: from_date,
      to_date: to_date,
    };
    if (payLoad?.to_date === "NaN-aN-aN") {
      toast.error("Select Valid Date Range", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else {
      setFromData(payLoad);
      setPage(1);
    }
    handlePageClick({ selected: 0 });
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

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selected row-keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,

    //Billing is_locked===true then you can't chose that checkbox
    getCheckboxProps: (record) => {
      //console.log("record", record);
      const rowIndex = record?.is_locked;
      return {
        disabled: rowIndex === 1,
      };
    },
  };

  //Status change handler Function
  const statusChange = (e) => {
    if (e.target.value === "Bulk Delete") {
      //console.log(e.target.value);
      setStatusName("");
      setActionType("delete");
    } else {
      //console.log(e.target.value);
      setStatusName(e.target.value);
      setActionType("update_status");
    }
  };
  // console.log("changing status and action", statusName, actionType);

  //Action Handler Function
  const handleAction = () => {
    if (selectedRowKeys?.length > 0) {
      const payload = {
        action_type: actionType,
        status_name: statusName,
        appointment_ids: selectedRowKeys,
      };
      manageSessionStatusChange({
        token,
        payload,
      });
      console.log("payload for the action handler api", payload);
    } else {
      toast.warning("Select ID Before Submit Action", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  return (
    // For responsive view point
    <div className={!table ? "h-[100vh]" : ""}>
      <div>
        <div className="cursor-pointer">
          <div className="bg-gradient-to-r from-secondary to-cyan-600 rounded-lg px-4 py-2">
            <div
              onClick={clickHandler}
              className="flex items-center justify-between "
            >
              {!clicked && (
                <>
                  <div className="text-[16px]  text-white font-semibold ">
                    Manage Sessions
                  </div>
                  <lord-icon
                    src="https://cdn.lordicon.com/rxufjlal.json"
                    trigger="loop"
                    style={{ height: "25px" }}
                    colors="primary:#fff"
                    state="hover-1"
                    // style="width:250px;height:250px"
                  ></lord-icon>
                </>
              )}
            </div>
            {/* Upper div */}
            {clicked && (
              <div>
                <div className="flex justify-between items-center flex-wrap">
                  <h1 className="text-[20px] text-white font-semibold ">
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
                <div className="flex items-center sm:justify-end sm:my-0 my-2 flex-wrap gap-2">
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
                  <div className=" flex item-center  flex-wrap gap-3 ">
                    {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 2xl:grid-cols-8 gap-2 mb-2"> */}
                    {billable && (
                      <div>
                        <label className="label">
                          <span className="label-text mb-[2px] text-[16px] text-gray-100 text-left">
                            Clients
                          </span>
                        </label>

                        <Clients
                          patients={patients}
                          setPatientId={setPatientId}
                        ></Clients>
                      </div>
                    )}
                    <div className="">
                      <label className="label">
                        <span className="label-text mb-[2px] text-[16px] text-gray-100 text-left">
                          Provider
                        </span>
                      </label>

                      <Providers
                        stuffs={stuffs}
                        setStuffsId={setStuffsId}
                      ></Providers>
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
                              className=" bg-transparent border-b-[3px] border-[#ffffff] text-white py-[4px]  px-1  font-medium  text-[14px] w-full focus:outline-none"
                              {...register("pos")}
                              onChange={(e) => setLocation(e.target.value)}
                            >
                              <option value="" className="text-black">
                                Select
                              </option>
                              {posData?.pos?.map((p) => {
                                return (
                                  <option
                                    className="text-black"
                                    key={p?.id}
                                    value={p?.pos_code}
                                  >
                                    {p?.pos_name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="w-[220px]">
                          <label className="label">
                            <span className="label-text  text-[16px] text-gray-100 text-left">
                              Selected date
                            </span>
                          </label>
                          {/* Date Range calender will be set here */}
                          <div className="">
                            <div
                              onClick={() => setOpenCalendar(true)}
                              className="flex  justify-center items-center border-b-[3px] border-[#ffffff] px-1 py-[4px] text [14px] w-full"
                            >
                              <input
                                value={
                                  startDate
                                    ? `${startMonth} ${startDay}, ${startYear}`
                                    : "Start Date"
                                }
                                readOnly
                                className="focus:outline-none py-[1px] font-medium text-center bg-transparent text-white w-2/5 cursor-pointer"
                                {...register("start_date")}
                              />
                              <RiArrowLeftRightLine className="w-1/5 text-white"></RiArrowLeftRightLine>
                              <input
                                value={
                                  endDate
                                    ? `${endMonth} ${endDay}, ${endYear}`
                                    : "End Date"
                                }
                                readOnly
                                className="focus:outline-none font-medium text-center bg-transparent text-white w-2/5 cursor-pointer"
                                {...register("end_date")}
                              />
                            </div>
                          </div>
                          {/* Multi date picker component called */}
                          <div>
                            <div
                              ref={refClose}
                              // className="absolute z-10 2xl:ml-[0%] xl:ml-[0%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
                              className="absolute z-10 2xl:ml-[0%] xl:ml-[0%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] mr-[8%] mt-1 "
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
                                className="bg-transparent border-b-[3px] border-[#ffffff] px-1 py-[4px] font-medium text-white  text-[14px] w-full focus:outline-none"
                                {...register("status")}
                              >
                                <option value="" className="text-black">
                                  Select
                                </option>
                                <option
                                  value="Scheduled"
                                  className="text-black"
                                >
                                  Scheduled
                                </option>
                                <option className="text-black" value="No Show">
                                  No Show
                                </option>
                                <option className="text-black" value="Hold">
                                  Hold
                                </option>
                                <option
                                  className="text-black"
                                  value="Cancelled by Client"
                                >
                                  Cancelled by Client
                                </option>
                                <option
                                  className="text-black"
                                  value="CC more than 24 hrs"
                                >
                                  CC more than 24 hrs
                                </option>
                                <option
                                  className="text-black"
                                  value="CC less than 24 hrs"
                                >
                                  CC less than 24 hrs
                                </option>
                                <option
                                  className="text-black"
                                  value="Cancelled by Provider"
                                >
                                  Cancelled by Provider
                                </option>
                                <option className="text-black" value="Rendered">
                                  Rendered
                                </option>
                              </select>
                            </div>
                          </div>
                          <button
                            className=" mb-3 mt-[35px] sm:w-1/4 pms-white-button"
                            type="submit"
                          >
                            Go
                          </button>
                        </div>
                      </>
                    ) : (
                      <button
                        className=" mb-3 mt-[35px] pms-white-button"
                        type="submit"
                      >
                        Go
                      </button>
                    )}
                    {table && (
                      <>
                        {/* <button
                          onClick={clearFilters}
                          className="2xl:mb-2 xl:mb-0 lg:mb-0 md:mb-0 2xl:mt-[35px] xl:mt-[0px] py-2 px-1  bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                        >
                          Clear filters
                        </button> */}
                      </>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {table && (
          <>
            {/* Selected filters tag will be showed here */}
            {listView && (
              <div className="my-5">
                {filteredInfo?.client_full_name?.length > 0 ||
                filteredInfo?.Service_hrs?.length > 0 ||
                filteredInfo?.pos?.length > 0 ? (
                  <div className="my-5 flex flex-wrap items-center gap-2">
                    {filteredInfo?.client_full_name?.length > 0 && (
                      <div className="flex flex-wrap mb-2 gap-1">
                        {filteredInfo?.client_full_name?.map((tag, index) => (
                          <div
                            className="text-gray-700  shadow-sm font-medium   rounded-sm pl-1 bg-white flex items-center"
                            key={index}
                          >
                            <div className="border border-primary text-[13px] pt-[1px] pb-[2.3px] px-2">
                              <span className="text-secondary text-[13px] font-medium mr-1  ">
                                Patient:
                              </span>
                              {tag}
                            </div>
                            <div>
                              <div
                                className="cursor-pointer text-[12px] text-white bg-primary py-[3px] px-2 rounded-sm"
                                onClick={() => deletePatientsName(tag)}
                              >
                                X
                              </div>
                            </div>
                          </div>
                        ))}
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
                {items?.length > 0 && (
                  <div>
                    <div className=" overflow-scroll">
                      {!listLoading ? (
                        <>
                          <Table
                            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                            size="small"
                            bordered
                            className=" text-xs font-normal"
                            columns={columns}
                            // dataSource={sessionlist}
                            dataSource={items}
                            rowSelection={rowSelection}
                            scroll={{
                              y: 750,
                            }}
                            onChange={handleChange}
                          />
                          <div className="flex items-center justify-end">
                            {totalPage > 1 && (
                              <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={Number(totalPage)}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageClick}
                                forcePage={page - 1}
                                containerClassName={"pagination"}
                                previousLinkClassName={"pagination_Link"}
                                nextLinkClassName={"pagination_Link"}
                                activeClassName={"pagination_Link-active"}
                                disabledClassName={"pagination_Link-disabled"}
                              ></ReactPaginate>
                            )}
                          </div>
                        </>
                      ) : (
                        <ShimmerTableTet></ShimmerTableTet>
                      )}
                    </div>
                  </div>
                )}
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
                <div className="flex items-center gap-2 flex-wrap">
                  <select
                    className="modal-input-field ml-1"
                    onChange={(e) => statusChange(e)}
                  >
                    <option value="" className="text-black">
                      Select
                    </option>
                    <option value="Scheduled" className="text-black">
                      Scheduled
                    </option>
                    <option value="No Show" className="text-black">
                      No Show
                    </option>
                    <option value="Hold" className="text-black">
                      Hold
                    </option>
                    <option>Cancelled by Client</option>
                    <option>Cancelled by Provider</option>
                    <option value="Bulk Delete" className="text-black">
                      Bulk Delete
                    </option>
                    <option value="Rendered" className="text-black">
                      Rendered
                    </option>
                  </select>
                  <button onClick={handleAction} className="pms-button">
                    Go
                  </button>
                </div>
              </div>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ListView);
