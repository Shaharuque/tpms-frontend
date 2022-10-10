import { CssBaseline } from "@mui/material";
import { Switch, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateServiceComponent from "./CreateServiceRules/CreateServiceComponent";

const CreateServiceRules = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/CreateService.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Rule",
      dataIndex: "rule",
      key: "rule",
      width: 120,
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
      render: (_, { rule }) => {
        // console.log("tags : ", lock);
        return <div className=" text-secondary">{rule}</div>;
      },
      filteredValue: filteredInfo.rule || null,
      onFilter: (value, record) => record.rule.includes(value),
      sorter: (a, b) => {
        return a.rule > b.rule ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rule" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 170,
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rule",
      dataIndex: "rules",
      key: "rules",
      width: 80,
      render: (_, rules) => {
        // console.log("tags : ", rules.rules);
        return (
          <div className="">
            <CreateServiceComponent rule={rules.rules}></CreateServiceComponent>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.rules > b.rules ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rules" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Prevent Session Creation",
      dataIndex: "rules",
      key: "rules",
      width: 80,
      render: (_, rules) => {
        // console.log("tags : ", lock);
        return (
          <div className="">
            <CreateServiceComponent rule={rules.rules}></CreateServiceComponent>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.rules > b.rules ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rules" ? sortedInfo.order : null,
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
    <div>
      <h1 className="text-lg my-2 text-orange-400">Service Rules</h1>
      <CssBaseline />
      <div className="">
        <div>
          <div className="flex justify-end items-end my-2">
            <button
              onClick={clearFilters}
              className="px-2  py-2 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
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
      <button className="px-5 my-5 mb-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md ">
        Save
      </button>
    </div>
  );
};

export default CreateServiceRules;
