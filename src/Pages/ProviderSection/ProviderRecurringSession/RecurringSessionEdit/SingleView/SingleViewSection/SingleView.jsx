import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";

import { useState } from "react";
import { AiOutlineDownload, AiOutlineEye, AiOutlineHistory,AiOutlineDelete } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { providerIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import { minsToHours, timeConverter2 } from "../../../../../Shared/TimeConverter/TimeConverter";

const SingleView = () => {
  const { id } = useParams();
  const { token } = useToken();
  const [listLoading, setListLoading] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [dayViewData, setDayViewData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  //Api call
  useEffect(() => {
    const getDayView = async () => {
      setListLoading(true);
      const res = await axios({
        method: "GET",
        url: `${providerIp}/recurring-session/single/data/${id}`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      console.log("From day view", data);
      setDayViewData(data);
      setListLoading(false);
    };
    getDayView();
  }, [token, id]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 120,
      render: (_, record) => {
        console.log("record", record);
        return <div>{dayViewData?.recurringSession?.client_id === Number(record?.client_id) ? dayViewData?.recurringSession?.client_name : "No Data"}</div>;
      },
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service&Hrs",
      dataIndex: "service",
      key: "service",
      width: 300,
      render: (_, record) => {
        console.log("record", record);
        return (
          <div>
            {dayViewData?.patientActivity?.find((item) => item?.id === record?.authorization_activity_id)?.activity_name}({minsToHours(record?.time_duration)}
            Hr)
          </div>
        );
      },
      sorter: (a, b) => a.service - b.service,
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Provider",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      width: 120,
      render: (_, record) => {
        console.log("record", record);
        return <div>{dayViewData?.allProviders?.find((item) => item?.id === record?.provider_id)?.full_name}</div>;
      },
      sorter: (a, b) => a.Scheduled_Date - b.Scheduled_Date,
      sortOrder: sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
      width: 120,
      render: (_, record) => {
        console.log("record", record);
        return <div>{dayViewData?.allLocations?.find((item) => item?.pos_code === record?.location)?.pos_name}</div>;
      },
      sorter: (a, b) => a.Scheduled_Date - b.Scheduled_Date,
      sortOrder: sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Start Date",
      dataIndex: "schedule_date",
      key: "schedule_date",
      width: 120,
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hour",
      dataIndex: "address",
      key: "address",
      width: 220,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-gray-600 text-center ">
            {timeConverter2(record?.from_time)} to {timeConverter2(record?.to_time)}
          </div>
        );
      },
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "address",
      key: "address",
      width: 120,
      render: (_, { client_first_name, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center">
            <button  className="text-red-500">
              <AiOutlineDelete />
            </button>
          </div>
        );
      },
      ellipsis: true,
    },
  ];

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

  return (
    <div className="">
      <div>
        <div className="my-5 overflow-scroll">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
            size="small"
            bordered
            className=" text-xs font-normal"
            columns={columns}
            // dataSource={sessionlist}
            dataSource={dayViewData?.sessionScheduled}
            rowSelection={rowSelection}
            scroll={{
              y: 450,
            }}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
            <option value="" className="text-black">
              Select
            </option>
            <option value="Today" className="text-black">
              Bulk Delete
            </option>
          </select>
          <button className="pms-input-button mr-2">Go</button>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
