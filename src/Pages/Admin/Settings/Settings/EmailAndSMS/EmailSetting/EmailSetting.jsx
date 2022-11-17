import { Switch, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import EmailSettingModal from "./EmailSettingModal";

const EmailSetting = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEdit, setOpenEdit] = useState(false);

  const handleClose = () => {
    setOpenEdit(false);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/email.json")
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
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
      width: 100,
      filters: [],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="">
              <h1 className="text-[14px] font-semibold  mx-3">
                {record.patient_name}
              </h1>

              <h3 className="text-[13px] font-normal my-[1px]">
                {record.email}
              </h3>
            </div>
          </div>
        );
      },
      filteredValue: filteredInfo.patient_name || null,
      onFilter: (value, record) => record.patient_name.includes(value),
      sorter: (a, b) => {
        return a.patient_name > b.patient_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "patient_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
      sorter: (a, b) => {
        return a.date > b.date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
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
      filteredValue: filteredInfo.time || null,
      onFilter: (value, record) => record.time.includes(value),
      sorter: (a, b) => {
        return a.time > b.time ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
    },

    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      width: 180,
      ellipsis: false,
      filters: [],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex  items-center justify-between flex-wrap">
            <div className="flex text-left gap-2 flex-wrap items-start justify-start">
              {record.content}
              <AiFillEye
                onClick={() => {
                  setOpenEdit(true);
                }}
                className=" text-base text-secondary"
              />
            </div>
          </div>
        );
      },
      filteredValue: filteredInfo.content || null,
      onFilter: (value, record) => record.content.includes(value),
      sorter: (a, b) => {
        return a.content > b.content ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "content" ? sortedInfo.order : null,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 60,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex items-center ">
              <Switch
                size="small"
                // checked={value ? true : false}
                // onClick={() => setValue(!value)}
              />
              <span className="text-[14px] font-medium text-gray-500 mx-3">
                Active
              </span>
            </div>
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

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };
  return (
    <div className=" overflow-scroll">
      <div>
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className=" text-xs font-normal"
          columns={columns}
          dataSource={table}
          //   scroll={{
          //     y: 650,
          //   }}
          onChange={handleChange}
        />
      </div>
      {openEdit && (
        <>
          <EmailSettingModal
            handleClose={handleClose}
            open={openEdit}
          ></EmailSettingModal>
        </>
      )}
    </div>
  );
};

export default EmailSetting;
