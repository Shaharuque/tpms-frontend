import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../../../../Style/staff.css";
import CredentialsModal from "../CredentialsModal";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Qualification = ({ name, handleQualification, qualificationOpen }) => {
  const [display, setDisplay] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  console.log(tableData, "tableData");

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/Credential.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        // setLoading2(false);
      });
  }, []);

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => {
        return a.name > b.name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
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
      key: "date_issue",
      dataIndex: "date_issue",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.date_issue || null,
      onFilter: (value, record) => record.date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.date_issue > b.date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "date_issue" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "date_expire",
      dataIndex: "date_expire",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.date_expire || null,
      onFilter: (value, record) => record.date_expire.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.date_expire > b.date_expire ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "date_expire" ? sortedInfo.order : null,
      ellipsis: true,
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
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Qualification
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
                <p>No Qualification Records</p>
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
                  dataSource={tableData}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-4 ml-2">
              <button className="pms-button mr-2" onClick={handleClickOpen}>
                Add Qualification
              </button>

              <button onClick={clearFilters} className="pms-clear-button">
                Clear filters
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && (
        <CredentialsModal
          handleClose={handleClose}
          open={openEditModal}
          name={name}
        ></CredentialsModal>
      )}
    </div>
  );
};

export default Qualification;
