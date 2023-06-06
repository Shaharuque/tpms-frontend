import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { FiDownload } from "react-icons/fi";
import { DetailTableColumn, DetailTableData } from "../BillingTableData";
import UseTable from "../../../../../../Utilities/UseTable";
import { Table } from "antd";

const DetailTable = () => {
  const [DetailTableData, SetDetailTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Detail Table",
      dataIndex: "checkNo",
      key: "checkNo",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.checkNo || null,
      onFilter: (value, record) => record.checkNo.includes(value),
      sorter: (a, b) => {
        return a.checkNo > b.checkNo ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "checkNo" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { checkNo, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{checkNo}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Detail Name",
      dataIndex: "checkNo",
      key: "checkNo",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.checkNo || null,
      onFilter: (value, record) => record.checkNo.includes(value),
      sorter: (a, b) => {
        return a.checkNo > b.checkNo ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "checkNo" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { checkNo, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{checkNo}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div className="">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Details Table</h1>
        <div className="">
          <FiDownload className="text-secondary font-medium" />
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-end items-center mr-2">
          <button
            onClick={clearFilters}
            className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <div className=" overflow-scroll pt-3">
          <Table
            rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={DetailTableData} //Which data chunk you want to show in table
            // For fixed header table at top
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailTable;
