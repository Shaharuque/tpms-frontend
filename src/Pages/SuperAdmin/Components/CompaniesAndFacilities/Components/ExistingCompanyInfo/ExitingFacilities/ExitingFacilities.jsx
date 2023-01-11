import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Table } from "antd";

const ExitingFacilities = ({ exitingFacilities, handleExitingFacilities }) => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
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
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => {
        return a.name > b.name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Main Contact Person",
      dataIndex: "main_contact_number",
      key: "main_contact_number",
      width: 100,
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
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
      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => {
        return a.email > b.email ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 80,
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
      filteredValue: filteredInfo.phone || null,
      onFilter: (value, record) => record.phone.includes(value),
      sorter: (a, b) => {
        return a.phone > b.phone ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "phone" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "planOther",
      key: "planOther",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div div className=" text-secondary">
            details
          </div>
        );
      },
      sorter: (a, b) => {
        return a.planOther > b.planOther ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "planOther" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className="h-[100vh]">
      <h2
        onClick={() => {
          handleExitingFacilities();
          console.log(exitingFacilities);
        }}
        className=" mt-4 text-sm font-medium px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Exiting Facilities
      </h2>
      {exitingFacilities && (
        <div className="border">
          <motion.div
            initial={{ opaphone: 0, y: 15 }}
            animate={{ opaphone: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-3"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            <div>
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className="table-striped-rows text-xs font-normal"
                columns={columns}
                dataSource={table}
                scroll={{
                  y: 650,
                }}
                onChange={handleChange}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExitingFacilities;
