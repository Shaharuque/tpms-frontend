import React, { useEffect, useState } from "react";
import PayrollSetupModal from "./PayrollSetup/PayrollSetupModal";
import { BsArrow90DegRight } from "react-icons/bs";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const PayrollSetup = () => {
  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/Payroll.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        console.log(tableData, "tableData");
        // setLoading2(false);
      });
  }, []);

  const [select, setSelect] = useState("");

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const column = [
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.service || null,
      onFilter: (value, record) => record.service.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.hourly_rate || null,
      onFilter: (value, record) => record.hourly_rate.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.milage_rate || null,
      onFilter: (value, record) => record.milage_rate.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.billable || null,
      onFilter: (value, record) => record.billable.includes(value),
      //   sorter is for sorting asc or dsc purhourly_rate
      sorter: (a, b) => {
        return a.billable > b.billable ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "billable" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { id, billable }) => {
        console.log(billable);
        return <div>{billable ? "Yes" : "No"}</div>;
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: () => (
        <div className="flex justify-center gap-1 text-primary">
          <FiEdit
            onClick={handleClickOpen}
            className="text-xs mx-2  text-lime-700"
            title="Edit"
          />

          <span>|</span>

          <AiOutlineDelete
            className="text-xs text-red-500 mx-2"
            title="Delete"
          />
        </div>
      ),
    },
  ];

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
      <div className="flex items-center justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Payroll Setup
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={clearFilters}
            className="px-2  py-1 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
          >
            Clear filters
          </button>
          <button
            onClick={handleClickOpen}
            className="px-3 py-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
            type="submit"
          >
            + Add Payroll
          </button>
        </div>
      </div>

      <div className="mb-5 overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal mt-5"
          columns={column}
          bordered
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are
          dataSource={tableData}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center flex-wrap gap-3">
        <BsArrow90DegRight className=" font-bold text-secondary" />
        <button className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
          Select All
        </button>
        <button className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
          Unselect All
        </button>
        <div className=" ">
          <select
            onChange={(e) => setSelect(e.target.value)}
            name="post"
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-52 md:w-72"
          >
            <option value=""></option>
            <option value="claim_no">Claim No</option>
            <option value="patient">Patient</option>
          </select>
        </div>
      </div>
      {openEditModal && (
        <PayrollSetupModal
          handleClose={handleClose}
          open={openEditModal}
        ></PayrollSetupModal>
      )}
    </div>
  );
};

export default PayrollSetup;
