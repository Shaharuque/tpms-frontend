import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateBillerLog from "./UpdateBillerLog";
import { RiEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

const BillerLogTable = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
    console.log("hihih");
  };
  const [existingPayor, setExistingPayor] = useState("");
  console.log(existingPayor);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/payor.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
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
      title: "Email",
      dataIndex: "Email",
      key: "Email",
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
      filteredValue: filteredInfo.Email || null,
      onFilter: (value, record) => record.Email.includes(value),
      sorter: (a, b) => {
        return a.Email > b.Email ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created Date",
      dataIndex: "Created_Date",
      key: "Created_Date",
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
      filteredValue: filteredInfo.Created_Date || null,
      onFilter: (value, record) => record.Created_Date.includes(value),
      sorter: (a, b) => {
        return a.Created_Date > b.Created_Date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "Created_Date" ? sortedInfo.order : null,
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
          <div className=" flex justify-center items-center gap-2">
            <RiEditLine onClick={handleClickOpen} className=" text-secondary" />

            <AiOutlineDelete className=" text-rose-500" />
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

  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <>
      <div className="my-5">
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
      {openEditModal && (
        <UpdateBillerLog
          handleClose={handleClose}
          open={openEditModal}
        ></UpdateBillerLog>
      )}
    </>
  );
};

export default BillerLogTable;
