import { Pagination, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../../features/Settings_redux/settingFeaturesSlice";
import Loading from "../../../../../Loading/Loading";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import AddServicesActionModal from "./AddServices/AddServicesActionModal";

const AddServices = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const endPoint = "admin/ac/setting/service/all";

  const allService = useSelector((state) => state?.settingFeatureInfo);
  console.log(allService);
  const data = allService?.result?.services?.data
    ? allService?.result?.services?.data
    : [];
  const totalPage = allService?.result?.services?.last_page
    ? allService?.result?.services?.last_page
    : 0;
  console.log(data);

  useEffect(() => {
    // For sending multiple parameter to createAsync Thunk we need to pass it as object
    dispatch(fetchData({ endPoint, page }));
  }, [page]);

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setPage(selectedPage + 1);
  };

  if (allService?.loading) {
    return <ShimmerTableTet></ShimmerTableTet>;
  }

  const handleClickOpen = () => {
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
          text: `Speech Therapy`,
          value: "Speech Therapy",
        },
      ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="text-secondary flex justify-start">
            {record?.treatment_type?.treatment_name}
          </div>
        );
      },
      filteredValue: filteredInfo.tx_type || null,
      onFilter: (value, record) =>
        record?.treatment_type?.treatment_name?.includes(value),
      sorter: (a, b) => {
        return a.tx_type > b.tx_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "tx_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service",
      dataIndex: "description",
      key: "description",
      width: 100,
      filters: [
        {
          text: `Inspection Assessment`,
          value: "Inspection Assessment",
        },
      ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary flex justify-start">
            <h1>{record?.description}</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex justify-center">
              <button onClick={handleClickOpen} className="text-secondary">
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
              <button onClick={handleClickOpen} className=" pms-button mr-2">
                Add new Service
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
        <AddServicesActionModal
          handleClose={handleClose}
          open={openAddModal}
          page={page}
        ></AddServicesActionModal>
      )}
    </div>
  );
};

export default AddServices;
