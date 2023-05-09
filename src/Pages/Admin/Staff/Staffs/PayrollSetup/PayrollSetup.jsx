import React, { useEffect, useState } from "react";
import PayrollSetupModal from "./PayrollSetup/PayrollSetupModal";
import { BsArrow90DegRight } from "react-icons/bs";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  useBulkDeletePayrollMutation,
  useDeletePayrollMutation,
  useGetPayrollsQuery,
} from "../../../../../features/Stuff_redux/payroleSetup/payrollSetupApi";
import useToken from "../../../../../CustomHooks/useToken";
import { useParams } from "react-router-dom";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import ReactPaginate from "react-paginate";
import PayrollEditModal from "./PayrollSetup/PayrollEditModal";
import { toast } from "react-toastify";

const PayrollSetup = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [select, setSelect] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [page, setPage] = useState(1);
  const [payrollId, setPayRollId] = useState();
  const [selectedPayrolls, setSelectedPayrolls] = useState([]);
  const { token } = useToken();
  const { id } = useParams();

  console.log("to update bulk", select);

  //Get Payroll api
  const {
    data: payrollData,
    isLoading,
    isError,
  } = useGetPayrollsQuery({
    token,
    id,
    page,
  });

  //Delete payroll api
  const [deletePayroll, { isSuccess: deleteSuccess, isError: deleteError }] =
    useDeletePayrollMutation();

  //Bulk-Delete payroll api
  const [
    bulkDeletePayroll,
    { isSuccess: bulkDeleteSuccess, isError: bulkDeleteError },
  ] = useBulkDeletePayrollMutation();

  // console.log("payroll data", payrollData);
  const { services } = payrollData || [];
  console.log("All services", services);
  const totalPage = payrollData?.payrolls?.last_page;

  //handle pagination function
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };
  //Edit Modal
  const handleEditModal = (id) => {
    setPayRollId(id);
    setEditModal(true);
  };
  //add Modal
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    setEditModal(false);
  };
  //delete payroll handler(id wise)
  const deletePayrollHandler = (record) => {
    console.log("delete record to be ", record);
    if (record?.id) {
      deletePayroll({
        token,
        payload: {
          id: record?.id,
        },
      });
    }
  };
  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Successfully Payroll Deleted", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      handleClose();
    } else if (deleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [deleteSuccess, deleteError]);

  const handleBulkDelete = () => {
    if (selectedPayrolls?.length !== 0 && select === "Bulk Delete") {
      bulkDeletePayroll({
        token,
        payload: {
          ids: selectedPayrolls,
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
      toast.success("Successfully Payrolls Deleted", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      handleClose();
    } else if (bulkDeleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [bulkDeleteSuccess, bulkDeleteError]);

  const column = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: 120,
      render: (_, record) => {
        let service = payrollData?.services?.find(
          (s) => s?.id === record?.service_id
        );
        return <h1>{service?.description}</h1>;
      },
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Hourly Rate",
      key: "hourly_rate",
      dataIndex: "hourly_rate",
      width: 100,
      render: (_, record) => {
        return <h1>{record?.hourly_rate}/hr</h1>;
      },
      //   sorter is for sorting asc or dsc purhourly_rate
      sorter: (a, b) => {
        return a.hourly_rate > b.hourly_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "hourly_rate" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Milage Rate",
      key: "milage_rate",
      dataIndex: "milage_rate",
      width: 100,
      render: (_, record) => {
        return <h1>{record?.milage_rate} cents/miles</h1>;
      },
      //   sorter is for sorting asc or dsc purhourly_rate
      sorter: (a, b) => {
        return a.milage_rate > b.milage_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "milage_rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "billable",
      key: "billable",
      dataIndex: "billable",
      width: 100,
      //   sorter is for sorting asc or dsc purhourly_rate
      sorter: (a, b) => {
        return a.billable > b.billable ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "billable" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { id, billable }) => {
        return <div>{billable ? "Yes" : "No"}</div>;
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: (_, record) => (
        <div className="flex justify-center gap-1 text-primary">
          <FiEdit
            onClick={() => handleEditModal(record)}
            className="text-xs mx-2  text-lime-700"
            title="Edit"
          />

          <span>|</span>

          <AiOutlineDelete
            onClick={() => deletePayrollHandler(record)}
            className="text-xs text-red-500 mx-2"
            title="Delete"
          />
        </div>
      ),
    },
  ];

  //get rows to be deleted
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedPayrolls(selectedRowKeys);
    },
  };
  console.log(selectedPayrolls);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap items-center justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Payroll Setup
        </h1>

        <div className="flex items-center gap-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>
          <button
            onClick={handleClickOpen}
            className="pms-button"
            type="submit"
          >
            + Add Payroll
          </button>
        </div>
      </div>

      <div className=" overflow-scroll">
        {!isLoading ? (
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className="table-striped-rows text-xs font-normal mt-5"
            columns={column}
            bordered
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are
            dataSource={payrollData?.payrolls?.data}
            onChange={handleChange}
            rowSelection={{
              ...rowSelection,
            }}
          />
        ) : (
          <ShimmerTableTet></ShimmerTableTet>
        )}
      </div>
      {totalPage > 1 && (
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
        </div>
      )}
      <div className="flex my-5">
        <select
          onChange={(e) => setSelect(e.target.value)}
          className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0 font-bold"
        >
          <option value="select" className="text-black"></option>
          <option value="hourly_and__mileage_Rate" className="text-black">
            Update Hourly and Mileage Rate
          </option>
          <option value="update_hourly_rate" className="text-black">
            Update Hourly Rate
          </option>
          <option value="update_mileage_rate" className="text-black">
            Update Milage Rate
          </option>
          <option value="Bulk Delete" className="text-black">
            Bulk Delete
          </option>
        </select>
        <button onClick={handleBulkDelete} className="pms-input-button">
          Update
        </button>
      </div>

      {openModal && (
        <PayrollSetupModal
          handleClose={handleClose}
          open={openModal}
          services={services}
        ></PayrollSetupModal>
      )}
      {editModal && (
        <PayrollEditModal
          payroll_id={payrollId}
          services={services}
          handleClose={handleClose}
          open={editModal}
        ></PayrollEditModal>
      )}
    </div>
  );
};

export default PayrollSetup;
