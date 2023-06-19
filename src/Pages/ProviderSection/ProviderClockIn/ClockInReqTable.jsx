import { Table } from "antd";
import React, { useState } from "react";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import { FcAddRow } from "react-icons/fc";
import moment from "moment";

const ClockInReqTable = ({ tableData }) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, sorter) => {
    console.log("Various parameters", pagination, sorter);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "punch_date",
      key: "punch_date",
      width: 80,
      render: (_, { punch_date }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{dateConverter(punch_date)}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.punch_date > b.punch_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "punch_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Clock In",
      dataIndex: "time_in",
      key: "time_in",
      render: (_, { time_in }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{time_in ? moment.utc(time_in).format("HH:mm:ss A") : "N/A"}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.time_in > b.time_in ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "time_in" ? sortedInfo.order : null,
      width: 100,
      ellipsis: false,
    },
    {
      title: "Clock Out",
      dataIndex: "clockOut",
      key: "clockOut",
      width: 100,
      render: (_, { time_out }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{time_out ? moment.utc(time_out).format("HH:mm:ss A") : "N/A"}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.time_out > b.time_out ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "time_out" ? sortedInfo.order : null,

      ellipsis: false,
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
      width: 120,
      ellipsis: false,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      ellipsis: false,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 60,
      render: (_, { status }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="">
            <FcAddRow className="text-[15px] mx-auto" />
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div>
      <div className=" overflow-scroll py-3 ">
        <Table
          rowKey={(record) => record.id}
          pagination={false}
          size="small"
          className=" text-xs font-normal"
          columns={columns}
          bordered
          dataSource={tableData}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ClockInReqTable;
