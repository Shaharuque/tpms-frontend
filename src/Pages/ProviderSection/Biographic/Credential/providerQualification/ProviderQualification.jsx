import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import useToken from "../../../../../CustomHooks/useToken";
import { useProviderdeleteQualificationMutation } from "../../../../../features/ProviderPortal/providerCredentail_redux/ProviderQualificationApi";
import { toast } from "react-toastify";
import ProviderAddQualification from "./AddQualificationModal/ProviderAddQualification";
import ProviderEditQualification from "./EditQualificationModal/ProviderEditQualification";

const ProviderQualification = ({ qualification, handleQualification, qualificationOpen }) => {
  const [display, setDisplay] = useState(true);
  // const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [qualificationRecord, setQualificationRecord] = useState();
  const { token } = useToken();

  //Delete Qualification Api
  const [deleteQualification, { isSuccess: qualificationDelete, isError: deleteError }] = useProviderdeleteQualificationMutation();
  console.log("qualification data", qualification);
  //Handle qualification Edit Modal
  const handleQualificationEdit = (record) => {
    setQualificationRecord(record);
    setEditModal(!editModal);
  };

  const handleDelete = (id) => {
    console.log("delete id", id);
    const payload = {
      qual_id: id,
    };
    deleteQualification({
      token,
      payload,
    });
  };
  useEffect(() => {
    if (qualificationDelete) {
      handleClose();
      toast.success("Successfully Deleted Provider Qualification", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    } else if (deleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [qualificationDelete, deleteError]);

  const column = [
    // Display Name Data(Exceptional)=>Static
    {
      title: "Name",
      dataIndex: "Test",
      key: "Test",
      width: 120,
      render: (_, {}) => {
        // console.log("tags : ", Name, id);
        return <h1>{qualification?.employee?.first_name}</h1>;
      },
      ellipsis: true,
    },
    {
      title: "Qualification",
      dataIndex: "qualification_name",
      key: "qualification_name",
      width: 120,
      filters: [
        {
          text: "YY TEST",
          value: "YY TEST",
        },
        {
          text: "tpms",
          value: "tpms",
        },
      ],
     // filteredValue: filteredInfo.qualification_name || null,
      onFilter: (value, record) => record.qualification_name.includes(value),
      sorter: (a, b) => {
        return a.qualification_name > b.qualification_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "qualification_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Qualification Type",
      key: "qualification_applicable",
      dataIndex: "qualification_applicable",
      width: 100,
      filters: [{}],
     // filteredValue: filteredInfo.qualification_applicable || null,
      onFilter: (value, record) => record.qualification_applicable.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.qualification_applicable > b.qualification_applicable ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "qualification_applicable" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date issue",
      key: "qualification_date_issue",
      dataIndex: "qualification_date_issue",
      width: 100,
      filters: [{}],
      //filteredValue: filteredInfo.qualification_date_issue || null,
      onFilter: (value, record) => record.qualification_date_issue.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.qualification_date_issue > b.qualification_date_issue ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "qualification_date_issue" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date Expire",
      key: "qualification_date_exp",
      dataIndex: "qualification_date_exp",
      width: 100,
      filters: [{}],
      //filteredValue: filteredInfo.qualification_date_exp || null,
      onFilter: (value, record) => record.qualification_date_exp.includes(value),
      //   sorter is for sorting asc or dsc purcredential_type
      sorter: (a, b) => {
        return a.qualification_date_exp > b.qualification_date_exp ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "qualification_date_exp" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: (_, record) => (
        <div className="flex justify-center gap-1 text-primary">
          <FiEdit onClick={() => handleQualificationEdit(record?.id)} className="text-xs mx-2  text-lime-700" title="Edit" />

          <span>|</span>

          <AiOutlineDelete onClick={() => handleDelete(record?.id)} className="text-xs text-red-500 mx-2" title="Delete" />
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
    // setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // const clearFilters = () => {
  //   setFilteredInfo({});
  // };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <h2 onClick={handleQualification} className=" mt-4 text-xs font-normal  px-2 py-2 text-white bg-secondary rounded-sm">
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
            {qualification?.qualifications?.data?.length === 0 ? (
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
                  className=" text-xs font-normal mt-5"
                  columns={column}
                  bordered
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are
                  dataSource={qualification?.qualifications?.data}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="my-4 ml-2">
              <button className="pms-button mr-2 mt-2" onClick={handleClickOpen}>
                Add Qualification
              </button>

              {/* <button onClick={clearFilters} className="pms-clear-button mt-2">
                Clear filters
              </button> */}
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && <ProviderAddQualification handleClose={handleClose} open={openEditModal}></ProviderAddQualification>}
      {editModal && (
        <ProviderEditQualification open={editModal} qualificationInfo={qualificationRecord} handleClose={handleQualificationEdit}></ProviderEditQualification>
      )}
    </div>
  );
};

export default ProviderQualification;
