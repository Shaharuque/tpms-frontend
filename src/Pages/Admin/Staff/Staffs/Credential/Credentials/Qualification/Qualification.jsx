import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../../../../Style/staff.css";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AddQualification from "./AddQualificationModal/AddQualification";
import EditQualification from "./EditQualificationModal/EditQualification";
import { useDeleteQualificationQuery } from "../../../../../../../features/Stuff_redux/credentials/qualificationApi";
const Qualification = ({
  name,
  qualification,
  handleQualification,
  qualificationOpen,
}) => {
  const [display, setDisplay] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [qualificationRecord, setQualificationRecord] = useState();

  console.log("qualification data", qualification);
  //Handle qualification Edit Modal
  const handleQualificationEdit = (record) => {
    setQualificationRecord(record);
    setEditModal(!editModal);
  };

  // const handleDelete = (record) => {
  //   console.log("delete id", record);
  //   const { data, isLoading } = useDeleteQualificationQuery({});
  // };

  const handleDelete = () => {
    //  delete
  };

  const column = [
    {
      title: "Credential",
      dataIndex: "qualification_name",
      key: "qualification_name",
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
      key: "qualification_date_exp",
      dataIndex: "qualification_date_exp",
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
        sortedInfo.columnKey === "qualification_date_exp"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "qualification_date_issue",
      dataIndex: "qualification_date_issue",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.credential_date_issue || null,
      onFilter: (value, record) => record.credential_date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_date_issue > b.credential_date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "qualification_date_issue"
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
            onClick={() => handleQualificationEdit(record?.id)}
            className="text-xs mx-2  text-lime-700"
            title="Edit"
          />

          <span>|</span>

          <AiOutlineDelete
            onClick={() => handleDelete(record?.id)}
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
        onClick={handleQualification}
        className=" mt-4 text-xs font-normal  px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Credential
      </h2>
      {qualificationOpen && (
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
                  dataSource={qualification?.qualification_list?.data}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-4 ml-2">
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
        <AddQualification
          handleClose={handleClose}
          open={openEditModal}
        ></AddQualification>
      )}
      {editModal && (
        <EditQualification
          open={editModal}
          qualificationInfo={qualificationRecord}
          handleClose={handleQualificationEdit}
        ></EditQualification>
      )}
    </div>
  );
};

export default Qualification;
