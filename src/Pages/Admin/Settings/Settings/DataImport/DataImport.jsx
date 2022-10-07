import { CssBaseline } from "@mui/material";
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataImport = () => {
  const [data, setData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/DataImport.json")
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(data);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
      width: 100,
      filters: [
        {
          text: "January 6,2021 1.27PM",
          value: "January 6,2021 1.27PM",
        },
        {
          text: "January 9, 2020 2.30PM",
          value: "January 9, 2020 2.30PM",
        },
      ],
      render: (_, { created }) => {
        //console.log("tags : ", lock);
        return (
          <div className=" font-medium">
            {created} <span className="font-thin text-gray-700">1:27 PM</span>
          </div>
        );
      },
      filteredValue: filteredInfo.created || null,
      onFilter: (value, record) => record.created.includes(value),
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "File Name",
      dataIndex: "filename",
      key: "filename",
      width: 100,
      filters: [
        {
          text: "January 6, 2021 ",
          value: "January 6, 2021 ",
        },
        {
          text: "January 9, 2020 ",
          value: "January 9, 2020 ",
        },
      ],
      filteredValue: filteredInfo.filename || null,
      onFilter: (value, record) => record.filename.includes(value),
      sorter: (a, b) => {
        return a.filename > b.filename ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "filename" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      width: 80,
      render: (_, { password }) => {
        //console.log("tags : ", lock);
        return <div className=" font-medium text-red-600">{password}</div>;
      },
      sorter: (a, b) => {
        return a.password > b.password ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "password" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 80,
      render: (_, { status }) => {
        //console.log("tags : ", lock);
        return (
          <div className="font-semibold flex justify-center">
            {status === "download" && (
              <Link to={"#"} className="text-secondary font-normal">
                Ready To Download
              </Link>
            )}
          </div>
        );
      },
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-sm my-2">Recent Exports</h1>
      <CssBaseline />
      <div className="pb-3 overflow-y-hidden">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className=" text-xs font-normal"
          columns={columns}
          dataSource={data}
          scroll={{
            y: 650,
          }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DataImport;
