import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useParams } from "react-router-dom";

import { Table } from "antd";
import DocumentsAction from "./Documents/DocumentsAction";
import AddDocuments from "./Documents/AddDocuments";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";

import { useGetProviderPatientDocsQuery } from "../../../../../features/ProviderPortal/PatientDocument_redux/patientDocumentApi";
import { DatabaseDateConverter } from "../../../../Shared/Dateconverter/DateConverter";

const ProviderPatientDocument = () => {
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

  const { data, isSuccess, isLoading: documentLoading, isError } = useGetProviderPatientDocsQuery({ token, id });
  console.log("api data come", data?.documents);

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

  // const uplodedOn = DatabaseDateConverter(data.documents.data?.created_at);
  console.log("uploader on  ", data.documents.data?.created_at);

  const column = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 120,
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
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.File_name > b.File_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "File_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Uploaded On",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (_, { createdAt }) => {
        console.log("render data", createdAt);
        return (
          <div>
            <p>{DatabaseDateConverter(createdAt)}</p>
          </div>
        );
      },
      width: 100,
      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.createdAt > b.createdAt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "createdAt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created By",
      key: "created_by",
      dataIndex: "created_by",
      width: 100,

      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.created_at > b.created_at ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "created_at" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Expired Date",
      key: "exp_date",
      dataIndex: "exp_date",
      width: 100,

      //   sorter is for sorting asc or dsc purFile_name
      sorter: (a, b) => {
        return a.expired_date > b.expired_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "expired_date" ? sortedInfo.order : null,
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
      <div className="flex items-center justify-between my-2">
        <h1 className="text-[16px] text-black-500 text-left font-semibold ">Documents</h1>
      </div>

      <div className=" overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal mt-5"
          columns={column}
          bordered
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are
          dataSource={data?.documents}
          onChange={handleChange}
        />
      </div>
      <div className="my-10">
        <button onClick={handleClickOpen} className="pms-button flex items-center">
          <HiPlus /> Add New Data
        </button>
        {openEditModal && <AddDocuments handleClose={handleClose} open={openEditModal}></AddDocuments>}
      </div>
    </div>
  );
};

export default ProviderPatientDocument;
