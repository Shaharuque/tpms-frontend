import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../../../../Style/staff.css";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddClearence from "./AddClearenceModal/AddClearence";
import EditClearence from "./EditClearenceModal/EditClearence";

const Clearance = ({ handleClearence, clearenceOpen, clearences }) => {
  console.log("clearences data", clearences);
  const [display, setDisplay] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [clearenceRecord, setClearenceRecord] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);

  //Handle clearence Modal
  const handleClearenceEdit = (record) => {
    setClearenceRecord(record);
    setEditModal(!editModal);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const column = [
    {
      title: "Name",
      dataIndex: "Test",
      key: "Test",
      width: 120,
      render: (_, {}) => {
        // console.log("tags : ", Name, id);
        return <h1>{clearences?.employee?.first_name}</h1>;
      },
      ellipsis: true,
    },
    {
      title: "Clearence Name",
      dataIndex: "clearance_name",
      key: "clearance_name",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.clearance_name || null,
      onFilter: (value, record) => record.clearance_name.includes(value),
      sorter: (a, b) => {
        return a.clearance_name > b.clearance_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "clearance_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Credential Type",
      key: "credential_type",
      dataIndex: "credential_type",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.credential_type || null,
      onFilter: (value, record) => record.credential_type.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_type > b.credential_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "credential_type" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Date issue",
      key: "clearance_date_issue",
      dataIndex: "clearance_date_issue",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.clearance_date_issue || null,
      onFilter: (value, record) => record.clearance_date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.clearance_date_issue > b.clearance_date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "clearance_date_issue"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "clearance_date_exp",
      dataIndex: "clearance_date_exp",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.clearance_date_exp || null,
      onFilter: (value, record) => record.clearance_date_exp.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.clearance_date_exp > b.clearance_date_exp ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "clearance_date_exp" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: (_, record) => (
        <div className="flex justify-center gap-1 text-primary">
          <FiEdit
            onClick={() => handleClearenceEdit(record)}
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
    <div>
      <h2
        onClick={handleClearence}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Clearance
      </h2>
      {clearenceOpen && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            {display && (
              <div className="px-4 py-3 mt-2 mb-1 mx-2 flex items-center justify-between rounded-md text-red-600 font-normal text-xs red-box">
                <p>No Clearance Records</p>
                <button
                  onClick={() => setDisplay(false)}
                  className="text-black"
                >
                  X
                </button>
              </div>
            )}

            <div>
              <div className=" overflow-scroll">
                <Table
                  pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                  size="small"
                  className="table-striped-rows text-xs font-normal"
                  columns={column}
                  bordered
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                  dataSource={clearences?.clearance_list?.data}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-4 ml-2">
              <button
                className="pms-button mr-2 mt-2"
                onClick={handleClickOpen}
              >
                Add Clearance
              </button>

              <button onClick={clearFilters} className="pms-clear-button  mt-2">
                Clear filters
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && (
        <AddClearence
          handleClose={handleClose}
          open={openEditModal}
        ></AddClearence>
      )}
      {editModal && (
        <EditClearence
          open={editModal}
          clearenceInfo={clearenceRecord}
          handleClose={handleClearenceEdit}
        ></EditClearence>
      )}
    </div>
  );
};

export default Clearance;
