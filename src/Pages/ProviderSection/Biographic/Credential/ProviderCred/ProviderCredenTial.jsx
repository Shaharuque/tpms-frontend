import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import "../../../../../../Style/staff.css";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useDeleteProviderCredentialMutation } from "../../../../../features/ProviderPortal/providerCredentail_redux/ProviderCredentialApi";
import useToken from "../../../../../CustomHooks/useToken";
import ProviderAddCredential from "./AddCredentialModal/AddCredential";
import ProviderEditCredential from "./EditCredentialModal/EditCredential";

const ProviderCredenTial = ({ handleCredential, credentialOpen, credentials }) => {
  const [display, setDisplay] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [credentialRecord, setCredentialRecord] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const { token } = useToken();

  const [deleteProviderCredential, { isSuccess: deleteSuccess }] = useDeleteProviderCredentialMutation();

  //Handle credentialEdit Modal
  const handleEditModal = (record) => {
    console.log("target id", record);
    setCredentialRecord(record);
    setEditModal(true);
  };

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
    setEditModal(false);
  };

  console.log(credentials?.credentials_list);

  const handleDelete = (record) => {
    const payload = {
      cred_id: record?.id,
    };
    deleteProviderCredential({
      token,
      payload,
    });
  };

  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Successfully Deleted Credential", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, []);

  const column = [
    {
      title: "Name",
      dataIndex: "Test",
      key: "Test",
      width: 120,
      render: (_, {}) => {
        // console.log("tags : ", Name, id);
        return <h1>{credentials?.employee?.first_name}</h1>;
      },
      ellipsis: true,
    },
    {
      title: "Credential Type",
      dataIndex: "credential_name",
      key: "credential_name",
      width: 120,
      sorter: (a, b) => {
        return a.credential_name > b.credential_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "credential_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Date issue",
      key: "credential_date_expired",
      dataIndex: "credential_date_expired",
      width: 100,
      // filters: [{}],
      // filteredValue: filteredInfo.credential_date_expired || null,
      // onFilter: (value, record) =>
      //   record.credential_date_expired.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_date_expired > b.credential_date_expired ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "credential_date_expired" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "credential_date_issue",
      dataIndex: "credential_date_issue",
      width: 100,
      // filters: [{}],
      // filteredValue: filteredInfo.credential_date_issue || null,
      // onFilter: (value, record) => record.credential_date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.credential_date_issue > b.credential_date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "credential_date_issue" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: (_, record) => (
        <div className="flex justify-center gap-1 text-primary cursor-pointer">
          <FiEdit onClick={() => handleEditModal(record)} className="text-xs mx-2  text-lime-700" title="Edit" />

          <span>|</span>

          <AiOutlineDelete onClick={() => handleDelete(record)} className="text-xs text-red-500 mx-2" title="Delete" />
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
      <h2 onClick={handleCredential} className=" mt-4 text-xs font-normal  px-2 py-2 text-white bg-secondary rounded-sm">
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
            {credentials?.credentialsList?.data.length === 0 ? (
              <>
                {display && (
                  <div className="px-4 py-3 mt-2 mb-1 mx-2 flex items-center justify-between rounded-md text-red-600 font-normal text-xs red-box">
                    <p>No Credential Records</p>
                    <button onClick={() => setDisplay(false)} className="text-black">
                      X
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className=" overflow-scroll">
                <Table
                  pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                  size="small"
                  className="table-striped-rows text-xs font-normal"
                  columns={column}
                  bordered
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                  dataSource={credentials?.credentialsList?.data}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="my-4 sm:ml-2">
              <button className="pms-button mr-2 mt-2" onClick={handleClickOpen}>
                Add Credential
              </button>

              <button onClick={clearFilters} className="pms-clear-button mt-2">
                Clear filters
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && <ProviderAddCredential handleClose={handleClose} open={openEditModal}></ProviderAddCredential>}
      {editModal && <ProviderEditCredential credentialInfo={credentialRecord} handleClose={handleClose} open={editModal}></ProviderEditCredential>}
    </div>
  );
};

export default ProviderCredenTial;
