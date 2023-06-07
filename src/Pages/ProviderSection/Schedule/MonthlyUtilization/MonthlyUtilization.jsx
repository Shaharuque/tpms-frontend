import React, { useState } from "react";
import { Table, Typography } from "antd";
import { DatabaseDateConverter, dateConverter } from "../../../Shared/Dateconverter/DateConverter";

const MonthlyUtilization = ({ utilizationData }) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectOption, setSelectOption] = useState("");
  const { Text } = Typography;
  console.log(utilizationData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      render: (_, { app_patient }) => {
        return <h1>{app_patient?.client_full_name}</h1>;
      },
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: 200,
      render: (_, record) => {
        return (
          <h1>
            {record?.activity_type}
            {record?.degree_level}
          </h1>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Max By",
      dataIndex: "billed_type",
      key: "billed_type",
      width: 100,
      render: (_, { billed_type }) => {
        return <h1>{billed_type || "Unit"}</h1>;
      },
      sorter: (a, b) => {
        return a.billed_type > b.billed_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "max_by" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Frequency",
      dataIndex: "hours_max_per_one",
      key: "hours_max_per_one",
      width: 80,
      sorter: (a, b) => {
        return a.hours_max_per_one > b.hours_max_per_one ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours_max_per_one" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth",
      dataIndex: "hours_max_is_one",
      key: "hours_max_is_one",
      width: 50,
      sorter: (a, b) => {
        return a.hours_max_is_one > b.hours_max_is_one ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours_max_is_one" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Scheduled",
      dataIndex: "scheduled",
      key: "scheduled",
      width: 60,
      sorter: (a, b) => {
        return a.scheduled > b.scheduled ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "scheduled" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rendered",
      dataIndex: "Rendered",
      key: "Rendered",
      width: 50,
      sorter: (a, b) => {
        return a.Rendered > b.Rendered ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Rendered" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Remaining",
      dataIndex: "remaining",
      key: "remaining",
      width: 50,
      sorter: (a, b) => {
        return a.remaining > b.remaining ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "remaining" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Start Date",
      dataIndex: "from_time",
      key: "from_time",
      width: 100,
      render: (_, { from_time }) => {
        return <h1>{DatabaseDateConverter(from_time)}</h1>;
      },
      sorter: (a, b) => {
        return a.from_time > b.from_time ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "from_time" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "End Date",
      dataIndex: "to_time",
      key: "to_time",
      width: 100,
      render: (_, { to_time }) => {
        return <h1>{DatabaseDateConverter(to_time)}</h1>;
      },
      sorter: (a, b) => {
        return a.to_time > b.to_time ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "to_time" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <div className="my-5 overflow-scroll h-[100vh]">
      <Table
        rowKey={(record) => record.id}
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        size="small"
        bordered
        className=" text-xs font-normal "
        columns={columns}
        dataSource={utilizationData}
        onChange={handleChange}
      />
    </div>
  );
};

export default MonthlyUtilization;
