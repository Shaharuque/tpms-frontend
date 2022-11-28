import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import { fetchCpt } from "../../../../../features/Settings_redux/cptCodeSlice";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import AddCptCodeActionModal from "./AddCptCode/AddCptCodeActionModal";

const AddCptCode = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const endPoint = "admin/ac/setting/get/cpt/code";

  const { token } = useToken();
  const allCpt = useSelector((state) => state?.cptInfo);
  const data = allCpt?.cptData?.cpt_codes?.data
    ? allCpt?.cptData?.cpt_codes?.data
    : [];
  const totalPage = allCpt?.cptData?.cpt_codes?.last_page
    ? allCpt?.cptData?.cpt_codes?.last_page
    : 0;
  console.log("server response", allCpt);

  useEffect(() => {
    dispatch(fetchCpt({ endPoint, page, token }));
  }, [page, dispatch, token]);

  console.log(totalPage);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };

  const handleClickOpen = (record) => {
    console.log(record);
    setRecordData(record);
    setOpenAddModal(true);
  };

  const handleClose = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // if (allCpt?.isError) {
  //   return toast.error("Something went wrong");
  // }

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Tx Type",
      dataIndex: "tx_type",
      key: "tx_type",
      width: 100,
      filters: [
        {
          text: `Mental Health`,
          value: "Mental Health",
        },
        {
          text: `Physical Therapy`,
          value: "Physical Therapy",
        },
        {
          text: "Speech Therapy",
          value: "Speech Therapy",
        },
      ],
      render: (_, { treatment }) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary">
            {treatment?.treatment_name ? treatment?.treatment_name : "Not Set"}
          </div>
        );
      },
      filteredValue: filteredInfo.tx_type || null,
      onFilter: (value, record) =>
        record.treatment?.treatment_name.includes(value),
      sorter: (a, b) => {
        return a.tx_type > b.tx_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "tx_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cpt Code",
      dataIndex: "cpt_code",
      key: "cpt_code",
      width: 100,
      filters: [
        {
          text: `001`,
          value: "001",
        },
        {
          text: `97153`,
          value: "97153",
        },
        {
          text: "97156",
          value: "97156",
        },
      ],
      filteredValue: filteredInfo.cpt_code || null,
      onFilter: (value, record) => record.cpt_code.includes(value),
      sorter: (a, b) => {
        return a.cpt_code > b.cpt_code ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "cpt_code" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        return (
          <div className=" flex justify-center items-center">
            <div className="flex justify-center">
              <button
                onClick={() => handleClickOpen(record)}
                className="text-secondary"
              >
                <FiEdit />
              </button>
              <div className="mx-2">|</div>
              <button className="text-sm mx-1  text-red-500">
                <AiOutlineDelete />
              </button>
            </div>
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
      <div className="">
        <div>
          <h1>Click on each Service name to edit</h1>
          <p className=" text-xs font-medium text-gray-500 my-3">
            Service Descriptions are shown throughout the SimplePractice
            platform internally, in some client communications and in Super
            bills.
          </p>
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen} className="pms-button">
                Add new Cpt code
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Services</h1>
        <div className="flex justify-end items-end my-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>
        </div>
      </div>
      <div>
        <>
          {allCpt?.loading ? (
            <ShimmerTableTet></ShimmerTableTet>
          ) : (
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={data}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          )}
        </>

        {totalPage > 0 && (
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={Number(totalPage)}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination_Link"}
            nextLinkClassName={"pagination_Link"}
            activeClassName={"pagination_Link-active"}
            disabledClassName={"pagination_Link-disabled"}
          ></ReactPaginate>
        )}
      </div>

      {openAddModal && (
        <AddCptCodeActionModal
          handleClose={handleClose}
          open={openAddModal}
          record={recordData}
          page={page}
          token={token}
          endPoint={endPoint}
        ></AddCptCodeActionModal>
      )}
    </div>
  );
};

export default AddCptCode;
