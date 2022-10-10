import React, { useEffect, useMemo, useState } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { FiDownload } from "react-icons/fi";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BilledTableColumn } from "./BillingTableData";
import { AiOutlineFileText } from "react-icons/ai";
import DetailTable from "./LastMonthBilledDetails/DetailTable";
import axios from "axios";
import { DateRangePicker } from "rsuite";
import UseTable from "../../../../../Utilities/UseTable";
import { Table } from "antd";
import { RiFileLine } from "react-icons/ri";

const LastMonthBilledDates = () => {
  const [sortBy, setSortBy] = useState("");
  const [active, setActive] = useState(false);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };
  const [LastMonthdata, SetLastMonthData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);

  // fake api call
  useEffect(() => {
    axios("../../All_Fake_Api/LastFiveStatement.json")
      .then((response) => {
        SetLastMonthData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(LastMonthdata);

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
      title: "Batch No",
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
      title: "Date",
      dataIndex: "checkDate",
      key: "checkDate",
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
      filteredValue: filteredInfo.checkDate || null,
      onFilter: (value, record) => record.checkDate.includes(value),
      sorter: (a, b) => {
        return a.checkDate > b.checkDate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "checkDate" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { checkDate, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{checkDate}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Total",
      dataIndex: "payType",
      key: "payType",
      width: 80,
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
      filteredValue: filteredInfo.payType || null,
      onFilter: (value, record) => record.payType.includes(value),
      sorter: (a, b) => {
        return a.payType > b.payType ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "payType" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { payType, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{payType}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 60,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.action || null,
      onFilter: (value, record) => record.action.includes(value),
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { action, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <button>
            <RiFileLine />
          </button>
        );
      },
      ellipsis: true,
    },
  ];

  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">
          Last Month Billed Dates
        </h1>
        <div className="">
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 items-end my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-500 text-left">
                Date Type
              </span>
            </label>
            <select
              onChange={handleSortBy}
              name="type"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
            >
              <option value=""></option>
              <option value="Specific_Date">Specific Date</option>
              <option value="Date_Range">Date Range</option>
            </select>
          </div>
          {active && (
            <>
              {sortBy === "Specific_Date" && (
                <div>
                  <label className="label">
                    <span className="label-text text-base text-gray-500 text-left">
                      Specific Date
                    </span>
                  </label>
                  <input
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
                    type="date"
                    {...register("date_range")}
                  />
                </div>
              )}
              {sortBy === "Date_Range" && (
                <div>
                  <label className="label">
                    <span className="label-text text-base text-gray-500 text-left">
                      Date Range
                    </span>
                  </label>
                  <div>
                    <DateRangePicker
                      className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
                      onChange={(date) => {
                        console.log(date);
                      }}
                      placeholder="Select Date"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <div>
            <button
              className="w-1/4 mx-1 py-1 px-2 text-base font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Go
            </button>
            <button className="w-2/4 py-1 px-2 text-base font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Export
            </button>
          </div>
        </div>
      </form>

      {/* table  */}
      <div>
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <h1 className="text-lg my-2 text-orange-500">Billed Table</h1>
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
              dataSource={LastMonthdata} //Which data chunk you want to show in table
              // For fixed header table at top
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Detail Table  */}
      <DetailTable></DetailTable>
    </div>
  );
};

export default LastMonthBilledDates;
