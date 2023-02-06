import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useParams } from "react-router-dom";
import check from "../../../../Assets/contact.png";
import { Table } from "antd";
import DocumentsAction from "./Documents/DocumentsAction";
import AddDocuments from "./Documents/AddDocuments";
import useToken from "../../../../../CustomHooks/useToken";
import { useGetdocumentsQuery } from "../../../../../features/Patient_redux/patientDocuments/documentsAPI";
import Loading from "../../../../../Loading/Loading";

const Documents = () => {
  const { id } = useParams();
  const { token } = useToken();
  console.log("patient Documents", id);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const {
    data,
    isLoading: documentLoading,
    isError,
  } = useGetdocumentsQuery({ token, id });
  console.log("api data come", data?.documents?.data);

  if (documentLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="px-4 py-3 mt-2 mb-1 mx-2 flex items-center justify-between rounded-md text-red-600 font-normal text-xs red-box">
        <p>Backend Error</p>
        <button className="text-black">X</button>
      </div>
    );
  }

  const column = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.Document || null,
      onFilter: (value, record) => record.Document.includes(value),
      sorter: (a, b) => {
        return a.Document > b.Document ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Document" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "File Name",
      key: "file_name",
      dataIndex: "file_name",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.File_name || null,
      onFilter: (value, record) => record.File_name.includes(value),
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.File_name > b.File_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "File_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Uploaded On",
      key: "uploaded_on",
      dataIndex: "uploaded_on",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.uploaded_on || null,
      onFilter: (value, record) => record.uploaded_on.includes(value),
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.uploaded_on > b.uploaded_on ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "uploaded_on" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created By",
      key: "created_by",
      dataIndex: "created_by",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.created_by || null,
      onFilter: (value, record) => record.created_by.includes(value),
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.created_by > b.created_by ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "created_by" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "exp_date",
      dataIndex: "exp_date",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.expired_date || null,
      onFilter: (value, record) => record.expired_date.includes(value),
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.expired_date > b.expired_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "expired_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "id",
      dataIndex: "id",
      width: 100,
      render: (_, { id, File_name }) => {
        return <DocumentsAction id={id} fileName={File_name}></DocumentsAction>;
      },
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
      <div className="mt-10">
        <img className="mx-auto" src={check} alt="" />
        <p className="text-xs font-light text-gray-600 flex items-center justify-center my-2">
          admin admin has no document
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Documents
        </h1>
        <button
          onClick={clearFilters}
          className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
        >
          Clear filters
        </button>
      </div>

      <div className=" overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal mt-5"
          columns={column}
          bordered
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are
          dataSource={data?.documents?.data}
          onChange={handleChange}
        />
      </div>
      <div className="my-10">
        <button
          onClick={handleClickOpen}
          className="pms-button flex item-center gap-2"
        >
          <HiPlus /> Add New Data
        </button>
        {openEditModal && (
          <AddDocuments
            handleClose={handleClose}
            open={openEditModal}
          ></AddDocuments>
        )}
      </div>
    </div>
  );
};

export default Documents;
