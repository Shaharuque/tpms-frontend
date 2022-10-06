import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsPlus, BsThreeDots } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Dropdown, Space, Switch, Table } from "antd";
import MPostingAction from "./MPosting/MPostingAction";
import DepositDetailsTable from "./MPosting/DepositDetailsTable";
import { DateRangePicker } from "react-date-range";
import { motion } from "framer-motion";
// import MDepositDetailsTable from "./MPosting/MDepositDetailsTable";

const MPosting = () => {
  // For showing deposit details
  const [depositOpen, setDepositOpen] = useState(false);
  const [value, setValue] = useState(false);
  const depositDetailsHandler = (id) => {
    setDepositOpen(!depositOpen);
  };
  console.log(depositOpen);

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    reset();
  };

  // const data = useMemo(() => MPostingColumnsData, []);
  // // const columns = useMemo(() => [...MPostingColumnsColumn], []);
  // const [editableRow, setEditableRow] = React.useState(null);

  const [depositData, setDepositData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/MPosting.json")
      .then((response) => {
        console.log("calling");
        setDepositData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(depositData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
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

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Deposit Date",
      dataIndex: "deposit_date",
      key: "deposit_date",
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
      render: (_, { deposit_date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{deposit_date}</div>;
      },
      filteredValue: filteredInfo.deposit_date || null,
      onFilter: (value, record) => record.deposit_date.includes(value),
      sorter: (a, b) => {
        return a.deposit_date > b.deposit_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "deposit_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check No",
      dataIndex: "check_no",
      key: "check_no",
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
      filteredValue: filteredInfo.check_no || null,
      onFilter: (value, record) => record.check_no.includes(value),
      sorter: (a, b) => {
        return a.check_no > b.check_no ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "check_no" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "check_date",
      key: "check_date",
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
      filteredValue: filteredInfo.check_date || null,
      onFilter: (value, record) => record.check_date.includes(value),
      sorter: (a, b) => {
        return a.check_date > b.check_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "check_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Payee Name",
      dataIndex: "payee_name",
      key: "payee_name",
      width: 150,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.payee_name || null,
      onFilter: (value, record) => record.payee_name.includes(value),
      sorter: (a, b) => {
        return a.payee_name > b.payee_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "payee_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Payee Type",
      dataIndex: "payee_type",
      key: "payee_type",
      width: 150,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.payee_type || null,
      onFilter: (value, record) => record.payee_type.includes(value),
      sorter: (a, b) => {
        return a.payee_type > b.payee_type ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "payee_type" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Allocated Amt.",
      dataIndex: "allocate_check",
      key: "allocate_check",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.allocate_check || null,
      onFilter: (value, record) => record.allocate_check.includes(value),
      sorter: (a, b) => {
        return a.allocate_check > b.allocate_check ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "allocate_check" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Unallocated",
      dataIndex: "unallocate_check",
      key: "unallocate_check",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.unallocate_check || null,
      onFilter: (value, record) => record.unallocate_check.includes(value),
      sorter: (a, b) => {
        return a.unallocate_check > b.unallocate_check ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "unallocate_check" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pay Type",
      dataIndex: "pay_type",
      key: "pay_type",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.pay_type || null,
      onFilter: (value, record) => record.pay_type.includes(value),
      sorter: (a, b) => {
        return a.pay_type > b.pay_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pay_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Notes",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-rose-500   flex justify-center">
            <AiOutlineEye />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (_, { id }) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={
              <MPostingAction
                id={id}
                depositDetailsHandler={depositDetailsHandler}
              ></MPostingAction>
            }
            trigger={["click"]}
            overlayStyle={{ zIndex: "100" }}
          >
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <BsThreeDots />
              </Space>
            </button>
          </Dropdown>
        </div>
      ),
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
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

  // console.log(sdate);
  return (
    // using conditional styling here
    <div className={depositOpen ? "" : "h-[100vh]"}>
      <div className="flex items-center flex-wrap justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          M-Posting
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={clearFilters}
            className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
          >
            Clear filters
          </button>
          <Link to={"/admin/billing/deposit-add"}>
            <button className="px-2 py-2 text-xs  flex items-center  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
              <BsPlus className="text-lg" />
              Add Deposit
            </button>
          </Link>
        </div>
      </div>
      <div>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6  mr-2 gap-6">
            <div>
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Selected date
                  </span>
                </label>
                <div className="ml-1 text-[14px]">
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
                        endDate
                          ? `${endMonth} ${endDay}, ${endYear}`
                          : "End Date"
                      }
                      readOnly
                      onClick={() => setOpen((open) => !open)}
                      className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  ref={refClose}
                  className="absolute z-10  2xl:ml-[20] shadow-xl"
                >
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
            </div>
            <div>
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Selected date
                  </span>
                </label>
                <div className="ml-1 text-[14px]">
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
                        endDate
                          ? `${endMonth} ${endDay}, ${endYear}`
                          : "End Date"
                      }
                      readOnly
                      onClick={() => setOpen((open) => !open)}
                      className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  ref={refClose}
                  className="absolute z-10  2xl:ml-[20] shadow-xl"
                >
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
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Payee type
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("Pay_type")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Payee Name
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("payee_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Check No.
                </span>
              </label>
              <input
                type="number"
                name="check_no"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("check_no")}
              />
            </div>
            <div className=" flex items-end justify-start gap-2 mt-8">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
              >
                Cancel
              </button>
              <div className="flex items-center ">
                <Switch
                  size="small"
                  checked={value ? true : false}
                  onClick={() => setValue(!value)}
                />
                <span className="text-[14px] font-medium text-gray-500 mx-3">
                  {value ? <>Unallocated</> : <>all</>}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="flex justify-between font-semibold">
          <h1 className="mb-3 text-[16px]">Deposit List</h1>
          <div>
            <AiOutlineDownload className="text-xl text-[#34A7B8] cursor-pointer" />
          </div>
        </div>
      </div>
      <Table
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
        size="small"
        bordered
        className=" text-xs font-normal"
        columns={columns}
        dataSource={depositData}
        rowSelection={{
          ...rowSelection,
        }}
        scroll={{
          y: 650,
        }}
        onChange={handleChange}
      />

      {/* Deposit Details table */}
      {depositOpen && <DepositDetailsTable />}

      {/* <div>
        <MDepositDetailsTable></MDepositDetailsTable>
      </div> */}
    </div>
  );
};

export default MPosting;
