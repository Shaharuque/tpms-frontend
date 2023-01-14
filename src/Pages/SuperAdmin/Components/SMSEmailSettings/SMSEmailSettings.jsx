import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SMSEmailSettings = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/ExitingFacilities.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);
  const columns = [
    {
      title: "Sr #",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Facility Id",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 50,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Facility Name",
      dataIndex: "main_contact_number",
      key: "main_contact_number",
      width: 180,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.main_contact_number || null,
      onFilter: (value, record) => record.main_contact_number.includes(value),
      sorter: (a, b) => {
        return a.main_contact_number > b.main_contact_number ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "main_contact_number"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "SMS Enable/Disable",
      dataIndex: "action",
      key: "action",
      width: 80,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email Enable/Disable",
      dataIndex: "action",
      key: "action",
      width: 80,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className="h-[100vh]">
      <div className="label-text text-[16px] font-medium my-3 text-left">
        SMS Email Enable/Disable
      </div>
      <div className=" overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className="table-striped-rows text-xs font-normal"
          columns={columns}
          dataSource={table}
          // scroll={{
          //   y: 650,
          // }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SMSEmailSettings;
