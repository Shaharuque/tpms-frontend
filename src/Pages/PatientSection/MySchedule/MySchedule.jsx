import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { patientIp } from "../../../Misc/BaseClient";
import useToken from "../../../CustomHooks/useToken";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import { utcToConvert } from "../../Shared/TimeConverter/TimeConverter";
import ShimmerTableTet from "../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { Dropdown, Menu, Space, Table } from "antd";
import { BsThreeDots } from "react-icons/bs";
import MyDropdown from "./DropDown";

const MySchedule = () => {
  const [table, setTable] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useToken();
  const navigation = useNavigate();

  const calenderClicked = () => {
    navigation("/patient/calender");
  };

  const column = [
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
              <button title="Un-Lock">
                <AiFillUnlock className=" text-lg font-medium text-[#309BAB]" />
              </button>
            )}
            {is_locked === 1 && (
              <button title="Billed">
                <AiFillLock className="text-lg font-medium  text-red-600" />
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { patient }) => {
        return (
          <div>
            <Link className="font-normal text-secondary" to={"/admin/patient-List"}>
              {patient}
            </Link>
          </div>
        );
      },
    },
    {
      title: "Service&Hrs.",
      dataIndex: "service",
      key: "service",
      width: 100,
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "POS",
      key: "location",
      dataIndex: "dolocations",
      width: 80,
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Scheduled Date",
      key: "schedule_date",
      dataIndex: "schedule_date",
      width: 80,
      render: (_, { schedule_date }) => {
        return (
          <div>
            <p className="text-xs text-gray-500">{dateConverter(schedule_date)}</p>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Hours",
      key: "hours",
      dataIndex: "hours",
      width: 120,
      render: (_, { from_time, to_time }) => {
        return (
          <div>
            <p className="text-xs text-gray-500">
              {utcToConvert(to_time)} to {utcToConvert(from_time)}
            </p>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.hours > b.hours ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 110,
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
        // a.status - b.status,
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { status }) => {
        return (
          <div className="flex justify-center">
            {status === "Scheduled" && <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Rendered" && <button className="bg-green-700 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Hold" && <button className="bg-gray-100 text-black text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "No Show" && <button className="bg-rose-700 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Cancelled by Client" && <button className="bg-secondary text-white text-[10px] py-[2px]  rounded w-24">{status}</button>}
            {status === "Cancelled by Provider" && <button className="bg-[#39B4C7] text-white text-[10px] p-[3px]  rounded w-32">{status}</button>}
            {status === "CC less than 24 hrs" && <button className="bg-[#39c755] text-white text-[10px] p-[2px]  rounded w-28">{status}</button>}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, record) => {
        return <MyDropdown></MyDropdown>;
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
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

  const clearFilters = () => {
    setFilteredInfo({});
  };

  //My Schedule Data Show
  const getScheduledData = async (payload) => {
    setLoading(true);
    const res = await axios({
      method: "POST",
      url: `${patientIp}/get/my/sessions`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token || null,
      },
      data: payload,
    });
    console.log("Scheduled Data", res?.data);
    const data = res?.data?.scheduledData;
    setItems(data);
    // setTotalPage(data?.lastPage);
    setLoading(false);
    // setTable(true);
  };

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      search_by: parseInt(data.search_by),
      reportrange: "",
    };
    if (payload) {
      getScheduledData(payload);
    }
    setTable(true);
  };

  //Date converter function [yy-mm-dd]
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <div className={table ? "" : "h-[100vh]"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-6">
          <h1 className="text-[16px] mt-2 text-orange-500">Manage Sessions</h1>
          <button onClick={calenderClicked} className="pms-button flex">
            <SlCalender className="mr-2" />
            Calender View
          </button>
        </div>
        {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-5 mr-2 gap-4"> */}
        <div className=" flex flex-wrap items-center gap-3">
          <div>
            <label className="label">
              <span className="label-text text-[14px] font-medium text-[#9b9b9b] text-left">Search By</span>
            </label>
            <select className="input-border text-gray-600 rounded-sm text-[14px] font-medium ml-1 w-[150px] focus:outline-none" {...register("search_by")}>
              <option value=""></option>
              <option value="1">Today</option>
              <option value="2">Tomorrow</option>
              <option value="3">Yesterday</option>
              <option value="4">Next 7 days</option>
              <option value="5">Date Range</option>
              <option value="7">Last 15 days</option>
              <option value="8">Next 15 days</option>
              <option value="9">Last 30 days</option>
              <option value="10">Next 30 days</option>
            </select>
          </div>

          <div className="mt-[26px] flex items-center sm:col-span-2">
            <div>
              {/* submit  */}
              <button type="submit" className="pms-button">
                Go
              </button>
            </div>
          </div>
        </div>
      </form>
      {table && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>

          {loading ? (
            <ShimmerTableTet />
          ) : (
            <div className=" overflow-scroll py-3">
              <Table
                rowKey={(record) => record.id}
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                bordered
                className=" text-xs font-normal "
                columns={column}
                dataSource={items}
                rowSelection={{
                  ...rowSelection,
                }}
                scroll={{
                  y: 700,
                }}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MySchedule;
