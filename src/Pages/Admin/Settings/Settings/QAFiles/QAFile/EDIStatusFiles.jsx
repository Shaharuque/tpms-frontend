import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import EraManagerAction from "./EraManagerAction";
import { DateRangePicker } from "react-date-range";
import { motion } from "framer-motion";

const EDIStatusFiles = () => {
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

  //Date Range Picker
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpen(false);
    }
  };
  //end outside click
  // console.log("endDate = ", endDate);
  const [openTable, setOpenTable] = useState(false);
  const handleTable = () => {
    if (endDate) {
      setOpenTable(true);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6  mr-2 gap-6">
            <div className="ml-1 mt-[6px] text-[14px]">
              <div className="flex flex-wrap justify-between  items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                <input
                  value={
                    startDate
                      ? `${startMonth} ${startDay}, ${startYear}`
                      : "Start Date"
                  }
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                />
                <BsArrowRight
                  onClick={() => setOpen((open) => !open)}
                  className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                ></BsArrowRight>
                <input
                  value={
                    endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                  }
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                />
              </div>
            </div>
            <button onClick={handleTable} className="pms-input-button w-[50px]">
              Go
            </button>
          </div>
          <div ref={refClose} className="absolute z-10  2xl:ml-[20] shadow-xl">
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <DateRangePicker
                    onChange={(item) => setRange([item.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    months={2}
                    direction="horizontal"
                    className="border-2 border-gray-100"
                  />
                </div>

                <div className="text-right bg-[#26818F] border-r-2 rounded-b-lg range-date-ok py-0">
                  <button
                    className="px-4 m-2 text-white border border-white rounded hover:border-red-700 hover:bg-red-700"
                    type="submit"
                    onClick={handleCancelDate}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 m-2 text-secondary border border-white bg-white rounded"
                    type="submit"
                    onClick={() => setOpen(false)}
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        {openTable && (
          <>
            {" "}
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
              // scroll={{
              //   y: 650,
              // }}
              onChange={handleChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EDIStatusFiles;
