import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill, BsPlus, BsThreeDots } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { usePagination, useSortBy, useTable } from "react-table";
import {
  MPostingColumnsColumn,
  MPostingColumnsData,
} from "./MPosting/MPostingColumns";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import {
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineEye,
} from "react-icons/ai";
import { BsFileEarmark, BsPrinter } from "react-icons/bs";
import { DateRangePicker } from "rsuite";
import axios from "axios";
import { Dropdown, Space, Table } from "antd";
import ManageTableAction from "../Admin/Appointment/ListView/ListView/ManageTableAction";
import MPostingAction from "./MPosting/MPostingAction";
import DepositDetailsTable from "./MPosting/DepositDetailsTable";
// import MDepositDetailsTable from "./MPosting/MDepositDetailsTable";

const MPosting = () => {
  // date range
  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);
  const [Cdates, setCdates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);
  const [sdate, setSdate] = React.useState();
  // setSdate(dates[1].format());

  // For showing deposit details
  const [depositOpen, setDepositOpen] = useState(false);

  const depositDetailsHandler = (id) => {
    setDepositOpen(!depositOpen);
  };
  console.log(depositOpen);

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setSdate(dates[1].format());
    reset();
  };

  // const data = useMemo(() => MPostingColumnsData, []);
  // // const columns = useMemo(() => [...MPostingColumnsColumn], []);
  // const [editableRow, setEditableRow] = React.useState(null);

  const [depositData, setDepositData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // console.log("editableRow", editableRow);
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   page,

  //   state,
  //   // page,
  //   prepareRow,
  // } = useTable(
  //   { columns, data, editableRow, setEditableRow },
  //   useSortBy,
  //   usePagination,
  //   (hooks) => {
  //     hooks.allColumns.push((columns) => [
  //       // other hooks such as selection hook
  //       ...columns,
  //       // edit hook
  //       {
  //         accessor: "action",
  //         id: "action",
  //         Header: "Action",
  //         Cell: ({ row, setEditableRow, editableRow }) => (
  //           <>
  //             <div>
  //               <div className="flex justify-center gap-1 text-primary">
  //                 <Link to={`/admin/billing/deposit-apply/${row.original.id}`}>
  //                   <MdOutlineDashboard title="Deposit" />
  //                 </Link>

  //                 <Link to={`/admin/billing/deposit-add/${row.original.id}`}>
  //                   <FiEdit3 title="Edit" />
  //                 </Link>

  //                 <Link to={"/"}>
  //                   <AiOutlineDelete title="Delete" />
  //                 </Link>

  //                 <BsFileEarmark
  //                   title="Details"
  //                   onClick={() => {
  //                     const currentIndex = row.index;
  //                     if (editableRow !== currentIndex) {
  //                       // row requested for edit access
  //                       setEditableRow(row);
  //                     } else {
  //                       // request for saving the updated row
  //                       setEditableRow(null); // keep the row closed for edit after we finish updating it
  //                       const updatedRow = row.values;
  //                       // console.log("updated row values:");
  //                       // console.log(updatedRow);
  //                       // call your updateRow API
  //                     }
  //                   }}
  //                 />

  //                 <Link to={"/"}>
  //                   <BsPrinter title="Print" />
  //                 </Link>
  //               </div>
  //             </div>
  //           </>
  //         ),
  //       },
  //     ]);
  //   }
  // );

  // const { pageIndex, pageSize } = state;

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
          <div className=" text-secondary flex justify-center">
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

  // console.log(sdate);
  return (
    // using conditional styling here
    <div className={depositOpen ? "" : "h-[100vh]"}>
      <div className="md:flex mb-2 flex-wrap  items-center justify-between">
        <h1 className="text-lg text-orange-400">M-Posting</h1>
        <Link to={"/admin/billing/deposit-add"}>
          <button className="p-2 bg-gradient-to-r from-secondary to-primary hover:to-secondary text-white rounded-md flex items-center">
            <BsPlus className="text-lg" />
            Add Deposit
          </button>
        </Link>
      </div>
      <div>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-6  mr-2 gap-2">
            <div>
              <div className="mt-2 ml-2">
                <h1 className="text-xs mb-2 ml-1 ">Deposit Date Range</h1>
                <div>
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 ml-2">
                <h1 className="text-xs mb-2 ml-1 ">Check Date Range</h1>
                <div>
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xs mb-2 ml-1 ">Payee type</h1>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("Pay_type")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Payee Name</h1>
              <select
                className=" border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("payee_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Check No.</h1>

              <input
                type="number"
                name="check_no"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("check_no")}
              />
            </div>
            <div className="flex ">
              <button
                className=" py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Go
              </button>
              <button className="font-normal  py-2 mt-7 px-3 text-xs ml-3 bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="flex justify-between font-bold">
          <h1 className="mb-3 text-[18px]">Deposit List</h1>
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
