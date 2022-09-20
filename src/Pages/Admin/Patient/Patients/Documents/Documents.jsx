import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import check from "../../../../Assets/contact.png";
import { Table } from "antd";
import DocumentsAction from "./Documents/DocumentsAction";

const Documents = () => {
  const { id } = useParams();
  console.log("patient Documents", id);
  const [open, setOpen] = useState(false);

  const [tableData, setTableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/PatientDocuments.json")
      .then((res) => res.json())
      .then((d) => {
        setTableData(d);
        console.log(tableData, "tableData");
        // setLoading2(false);
      });
  }, []);

  const column = [
    {
      title: "Description",
      dataIndex: "Document",
      key: "Document",
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
      key: "File_name",
      dataIndex: "File_name",
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
      key: "expired_date",
      dataIndex: "expired_date",
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

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
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
          dataSource={tableData}
          onChange={handleChange}
        />
      </div>
      <div className="my-10">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="px-3 mb-5 text-xs font-normal py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm flex items-center"
        >
          <HiPlus /> Add New Data
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                      Document
                    </span>
                  </label>
                  <input
                    type="text"
                    name="Document"
                    className="input-border text-gray-600 rounded-sm  pb-[2px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("Document")}
                  />
                </div>

                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                      Expiry Date
                    </span>
                  </label>
                  <input
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
                    type="date"
                    {...register("check_Date")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs font-medium text-[#9b9b9b] text-left">
                      Upload File
                    </span>
                  </label>
                  <input
                    type="file"
                    className=" px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("fileName")}
                  />
                </div>
                <div className=" mt-[34px]">
                  <button
                    className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                    type="submit"
                  >
                    Save
                  </button>

                  <button
                    className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                    autoFocus
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Documents;
