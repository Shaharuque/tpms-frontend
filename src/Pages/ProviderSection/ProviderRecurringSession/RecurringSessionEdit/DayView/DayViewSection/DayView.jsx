import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";

import { useState } from "react";
import { AiOutlineDownload, AiOutlineEye, AiOutlineHistory } from "react-icons/ai";
import { TbEditCircle } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { providerIp } from "../../../../../../Misc/BaseClient";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import { minsToHours, timeConverter2 } from "../../../../../Shared/TimeConverter/TimeConverter";

const DayView = () => {
  const { id } = useParams();
  const { token } = useToken();
  const [listLoading, setListLoading] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [dayViewData, setDayViewData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);



  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "SaturDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "SunDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "MonDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "TuesDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "WednesDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "ThursDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "FriDay",
      dataIndex: "Saturday",
      key: "patient",
      width: 120,
     
      sorter: (a, b) => a.patient - b.patient,
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
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
           
            rowSelection={rowSelection}
            scroll={{
              y: 550,
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

export default DayView;
