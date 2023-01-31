import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useBulkDeletePayperiodMutation,
  useDeletePayperiodMutation,
  usePayperiodsQuery,
} from "../../../../../features/Settings_redux/payperiod/payperiodApi";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import PayPeriodAdd from "./PayPeriod/PayPeriodAdd";
import PayPeriodEnitModal from "./PayPeriod/PayPeriodEnitModal";

const PayPeriod = () => {
  const [editRecord, setEditRecord] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [bulkChecking, setBulkChecking] = useState(null);
  const [payPeriodsId, setPayPeriodsId] = useState([]);
  const [page, setPage] = useState(1);
  const { token } = useToken();

  // all payperiods data api
  const {
    data: payperiods,
    isSuccess,
    isLoading,
  } = usePayperiodsQuery({ token: token, page: page });
  console.log(isSuccess, payperiods);

  //bulk delete api
  const [
    bulkDeletePayperiod,
    { isSuccess: bulkDeleteSuccess, isError: bulkDeleteError },
  ] = useBulkDeletePayperiodMutation();

  //delete payperiod api
  const [
    deletePayperiod,
    { data: deleteResponse, isSuccess: deleteSuccess, isError: deleteError },
  ] = useDeletePayperiodMutation();

  let totalPage = payperiods?.pos_data?.last_page
    ? payperiods?.pos_data?.last_page
    : 0;

  console.log(totalPage);

  //Date converter function
  const sampleFunction = (date) => {
    const [year, month, day] = date.split("-");
    const result = [month, day, year].join("/");
    return result;
  };

  const handleClickOpen = (record) => {
    setEditRecord(record);
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

  //handle page
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };

  //get rows to be deleted
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setPayPeriodsId(selectedRowKeys);
    },
  };

  const handleDelete = (id) => {
    if (id) {
      deletePayperiod({
        token,
        data: {
          id: id,
        },
      });
    }
  };
  console.log(deleteResponse, deleteSuccess);
  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Deleted Successfully", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (deleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [deleteSuccess, deleteError]);

  const handleBulkDelete = () => {
    if (payPeriodsId?.length !== 0 && bulkChecking === "Bulk Delete") {
      bulkDeletePayperiod({
        token: token,
        data: {
          ids: payPeriodsId,
        },
      });
    } else {
      toast.error("Please Select Valid Option", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (bulkDeleteSuccess) {
      toast.success("Deleted Successfully", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (bulkDeleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [bulkDeleteSuccess, bulkDeleteError]);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "From date",
      dataIndex: "start_date",
      key: "start_date",
      width: 80,
      filters: [
        {
          text: "01/03/2022",
          value: "2022-01-03",
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
      render: (_, { start_date }) => {
        //console.log("tags : ", lock);
        let convertedDate = sampleFunction(start_date);
        return <div className=" text-secondary">{convertedDate}</div>;
      },
      filteredValue: filteredInfo.start_date || null,
      onFilter: (value, record) => record.start_date.includes(value),
      sorter: (a, b) => {
        return a.start_date > b.start_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "start_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "To Data",
      dataIndex: "show_end_date",
      key: "show_end_date",
      width: 100,
      filters: [
        {
          text: `01/31/2022`,
          value: "01/31/2022",
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
      filteredValue: filteredInfo.show_end_date || null,
      onFilter: (value, record) => record.show_end_date.includes(value),
      sorter: (a, b) => {
        return a.show_end_date > b.show_end_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "show_end_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Last Date To Submit Timesheets ",
      dataIndex: "time_sheet_date",
      key: "time_sheet_date",
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
      render: (_, { time_sheet_date }) => {
        //console.log("tags : ", lock);
        let convertedDate = sampleFunction(time_sheet_date);
        return <div className=" text-black">{convertedDate}</div>;
      },
      filteredValue: filteredInfo.time_sheet_date || null,
      onFilter: (value, record) => record.time_sheet_date.includes(value),
      sorter: (a, b) => {
        return a.time_sheet_date > b.time_sheet_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "time_sheet_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "check_date",
      key: "check_date",
      width: 70,
      render: (_, { check_date }) => {
        //console.log("tags : ", lock);
        let convertedDate = sampleFunction(check_date);
        return <div className=" text-black">{convertedDate}</div>;
      },
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
      title: "Week Date",
      dataIndex: "week_day_name",
      key: "week_day_name",
      width: 70,
      filteredValue: filteredInfo.week_day_name || null,
      onFilter: (value, record) => record.week_day_name.includes(value),
      sorter: (a, b) => {
        return a.week_day_name > b.week_day_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "week_day_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <button
              onClick={() => handleClickOpen(record)}
              className="text-secondary "
            >
              <FiEdit />
            </button>
            <button onClick={() => handleDelete(record.id)} className="ml-3">
              <MdDeleteOutline className="text-red-700 text-[15px]" />
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
        <div className=" overflow-scroll">
          {!isLoading ? (
            <Table
              pagination={false}
              rowKey={(record) => record.id}
              size="small"
              bordered
              className="table-striped-rows text-xs font-normal"
              columns={columns}
              dataSource={payperiods?.pos_data?.data}
              rowSelection={{
                ...rowSelection,
              }}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          ) : (
            <ShimmerTableTet></ShimmerTableTet>
          )}
        </div>

        {totalPage > 0 && (
          <div className="flex flex-row-reverse justify-between">
            <div className="flex items-center justify-start">
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                // previousLabel={"🡰"}
                // nextLabel={"🡲"}
                pageCount={Number(totalPage)}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination_Link"}
                nextLinkClassName={"pagination_Link"}
                activeClassName={"pagination_Link-active"}
                disabledClassName={"pagination_Link-disabled"}
              ></ReactPaginate>
            </div>
            <div className="flex my-5">
              <select
                onChange={(e) => setBulkChecking(e.target.value)}
                className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] mx-1 text-[14px] w-32 focus:outline-none z-0 font-bold"
              >
                <option value="select" className="text-black">
                  Select
                </option>
                <option value="Bulk Delete" className="text-black">
                  Bulk Delete
                </option>
              </select>
              <button onClick={handleBulkDelete} className="pms-input-button">
                Go
              </button>
            </div>
          </div>
        )}
      </div>

      {openEditModal && (
        <PayPeriodEnitModal
          handleClose={handleClose}
          open={openEditModal}
          editRecord={editRecord}
          token={token}
        ></PayPeriodEnitModal>
      )}
      {openAddModal && (
        <PayPeriodAdd
          handleClose={handleClose2}
          open={openAddModal}
          token={token}
        ></PayPeriodAdd>
      )}
    </div>
  );
};

export default PayPeriod;
