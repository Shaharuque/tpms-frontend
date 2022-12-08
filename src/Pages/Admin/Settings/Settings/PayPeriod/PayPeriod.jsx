import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import PayPeriodAdd from "./PayPeriod/PayPeriodAdd";
import PayPeriodEnitModal from "./PayPeriod/PayPeriodEnitModal";

const PayPeriod = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen2 = () => {
    setOpenAddModal(true);
  };

  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    //console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  console.log(filteredInfo);

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/PayPeriod.json")
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
      title: "From date",
      dataIndex: "from_date",
      key: "from_date",
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
      render: (_, { from_date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{from_date}</div>;
      },
      filteredValue: filteredInfo.from_date || null,
      onFilter: (value, record) => record.from_date.includes(value),
      sorter: (a, b) => {
        return a.from_date > b.from_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "from_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "To Data",
      dataIndex: "to_date",
      key: "to_date",
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
      filteredValue: filteredInfo.to_date || null,
      onFilter: (value, record) => record.to_date.includes(value),
      sorter: (a, b) => {
        return a.to_date > b.to_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "to_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Date",
      dataIndex: "last_date",
      key: "last_date",
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
      filteredValue: filteredInfo.last_date || null,
      onFilter: (value, record) => record.last_date.includes(value),
      sorter: (a, b) => {
        return a.last_date > b.last_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "week_day",
      key: "week_day",
      width: 70,
      filteredValue: filteredInfo.week_day || null,
      onFilter: (value, record) => record.week_day.includes(value),
      sorter: (a, b) => {
        return a.week_day > b.week_day ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "week_day" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Week Date",
      dataIndex: "week_day",
      key: "week_day",
      width: 70,
      filteredValue: filteredInfo.week_day || null,
      onFilter: (value, record) => record.week_day.includes(value),
      sorter: (a, b) => {
        return a.week_day > b.week_day ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "week_day" ? sortedInfo.order : null,
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
          <div className=" flex justify-center items-center">
            <button onClick={handleClickOpen} className="text-secondary ">
              <FiEdit />
            </button>
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
    <div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Pay Period</h1>
        <div className="md:flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <h1 onClick={handleClickOpen2} className="pms-button mr-2">
                Create Pay Period
              </h1>
            </label>
          </div>

          <div>
            {/* <!-- The button to open calender view --> */}
            <label htmlFor="pay-box" className="">
              <h1 onClick={handleClickOpen2} className="pms-close-button">
                Calender View
              </h1>
            </label>
          </div>
          {/* Conditional rendering of clear filter button */}
          {filteredInfo?.from_date?.length > 0 ? (
            <div className="flex justify-end items-end my-2">
              <button
                onClick={clearFilters}
                className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div>
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
      <div>
        <div className="flex my-5">
          <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
            <option value="" className="text-black">
              Select
            </option>
            <option value="Today" className="text-black">
              bulk delete
            </option>
          </select>
          <button className="pms-input-button">Go</button>
        </div>
      </div>
      {openEditModal && (
        <PayPeriodEnitModal
          handleClose={handleClose}
          open={openEditModal}
        ></PayPeriodEnitModal>
      )}
      {openAddModal && (
        <PayPeriodAdd
          handleClose={handleClose2}
          open={openAddModal}
        ></PayPeriodAdd>
      )}
    </div>
  );
};

export default PayPeriod;
