import React from "react";
import { Button, Space, Table } from "antd";

import { useState } from "react";

const data = [
  {
    key: 1,

    age: 32,
    address: "New York No. 1 Lake Park",
    lock: false,
    Patients: "Vernon Barlow",
    Service_hrs: "Eget Magna Corp.",
    Provider: "Travis Wagner",
    pos: "telehealth",
    Scheduled_Date: "Aug 6, 2023",
    Hours: "9:57 PM",
    Status: "hold",
  },
  {
    key: 2,

    age: 42,
    address: "London No. 1 Lake Park",
    lock: true,
    Patients: "Brett Campbell",
    Service_hrs: "Amet Ultricies PC",
    Provider: "Ryder Foster",
    pos: "School",
    Scheduled_Date: "Feb 20, 2023",
    Hours: "3:01 PM",
    Status: "Rendered",
  },
  {
    key: 3,

    age: 32,
    address: "Sidney No. 1 Lake Park",
    lock: true,
    Patients: "Coby Gonzalez",
    Service_hrs: "Malesuada Corporation",
    Provider: "Bianca Lowery",
    pos: "School",
    Scheduled_Date: "Apr 30, 2022",
    Hours: "10:14 PM",
    Status: "Rendered",
  },
  {
    key: 4,

    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
  {
    key: 5,

    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
  {
    key: 6,

    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
];

const FakeTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (filters, sorter) => {
    console.log("Various parameters", filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "Patients",
      key: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Scheduled Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",

      sorter: (a, b) => a.Scheduled_Date - b.Scheduled_Date,
      sortOrder: sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
        title: "Provider",
        dataIndex: "Provider",
        key: "Provider",
  
       
        ellipsis: true,
      },
      {
        title: "Scheduled Date",
        dataIndex: "Scheduled_Date",
        key: "Scheduled_Date",
  
        sorter: (a, b) => a.Scheduled_Date - b.Scheduled_Date,
        sortOrder: sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
        ellipsis: true,
      },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <>
      {/* <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space> */}

      <Table
        columns={columns}
        pagination={false}
        size={"small"}
        dataSource={data}
        onChange={handleChange}
        style={{ marginTop: 16 }}
      />
    </>
  );
};

export default FakeTable;
