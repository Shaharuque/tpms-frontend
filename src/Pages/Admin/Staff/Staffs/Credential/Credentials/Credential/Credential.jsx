import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../../../../Style/staff.css";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddCredential from "./AddCredentialModal/AddCredential";
import EditCredential from "./EditCredentialModal/EditCredential";

const Credential = ({ handleCredential, credentialOpen, credentials }) => {
  const [display, setDisplay] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [credentialRecord, setCredentialRecord] = useState();

  //Handle credentialEdit Modal
  const handleEditModal = (record) => {
    setCredentialRecord(record);
    setEditModal(!editModal);
  };
  const column = [
    {
      title: "Credential",
      dataIndex: "credential_name",
      key: "credential_name",
      width: 120,
      filters: [
        {
          text: "behaviour",
          value: "behaviour",
        },
        {
          text: "tpms",
          value: "tpms",
        },
      ],
      filteredValue: filteredInfo.credential_name || null,
      onFilter: (value, record) => record.credential_name.includes(value),
      sorter: (a, b) => {
        return a.credential_name > b.credential_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "credential_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Credential Type",
      key: "credential_applicable",
      dataIndex: "credential_applicable",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.credential_applicable || null,
      onFilter: (value, record) => record.credential_applicable.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_applicable > b.credential_applicable ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "credential_type" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Date issue",
      key: "credential_date_expired",
      dataIndex: "credential_date_expired",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.credential_date_expired || null,
      onFilter: (value, record) =>
        record.credential_date_expired.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_date_expired > b.credential_date_expired ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "credential_date_expired"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "credential_date_issue",
      dataIndex: "credential_date_issue",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.credential_date_issue || null,
      onFilter: (value, record) => record.credential_date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_date_issue > b.credential_date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "credential_date_issue"
          ? sortedInfo.order
          : null,
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
            onClick={() => handleEditModal(record)}
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

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <h2
        onClick={handleCredential}
        className=" mt-4 text-xs font-normal  px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Credential
      </h2>
      {credentialOpen && (
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
                <p>No Credential Records</p>
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
                  className=" text-xs font-normal mt-5"
                  columns={column}
                  bordered
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                  dataSource={credentials?.credentials_list?.data}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-4 sm:ml-2">
              <button
                className="pms-button mr-2 mt-2"
                onClick={handleClickOpen}
              >
                Add Credential
              </button>

              <button onClick={clearFilters} className="pms-clear-button mt-2">
                Clear filters
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && (
        <AddCredential
          handleClose={handleClose}
          open={openEditModal}
        ></AddCredential>
      )}
      {editModal && (
        <EditCredential
          open={editModal}
          credentialInfo={credentialRecord}
          handleClose={handleEditModal}
        ></EditCredential>
      )}
    </div>
  );
};

export default Credential;
