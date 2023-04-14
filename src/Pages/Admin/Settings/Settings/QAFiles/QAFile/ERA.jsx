import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../../../../Loading/Loading";
import EraManagerAction from "./EraManagerAction";

const ERA = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/ERA.json")
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
      title: "File Name",
      dataIndex: "file_name",
      key: "file_name",
      width: 150,
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
      render: (_, { file_name }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{file_name}</div>;
      },
      filteredValue: filteredInfo.file_name || null,
      onFilter: (value, record) => record.file_name.includes(value),
      sorter: (a, b) => {
        return a.file_name > b.file_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "file_name" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Received Data",
      dataIndex: "received_data",
      key: "received_data",
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
      filteredValue: filteredInfo.received_data || null,
      onFilter: (value, record) => record.received_data.includes(value),
      sorter: (a, b) => {
        return a.received_data > b.received_data ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "received_data" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Processed Data",
      dataIndex: "processed_data",
      key: "processed_data",
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
      filteredValue: filteredInfo.processed_data || null,
      onFilter: (value, record) => record.processed_data.includes(value),
      sorter: (a, b) => {
        return a.processed_data > b.processed_data ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "processed_data" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <EraManagerAction></EraManagerAction>
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <div className="p-2">
      <h1 className="text-lg mt-4 mb-2 text-orange-400">ERA FILE</h1>
      <div>
        <div className="flex justify-end items-end my-2">
          <button
            onClick={clearFilters}
            className="px-2  py-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <div className=" overflow-scroll py-3">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
            size="small"
            bordered
            className=" text-xs font-normal"
            columns={columns}
            dataSource={table}
            rowSelection={{
              ...rowSelection,
            }}
            scroll={{
              y: 650,
            }}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ERA;
