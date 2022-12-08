import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Table } from "antd";
import BusinessActionModal from "./BusinessFiles/BusinessActionModal";
import BusinessDocAddModal from "./BusinessFiles/BusinessDocAddModal";

const BusinessFiles = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);

  // Business Document edit
  const handleDocumentEdit = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };

  //Add business document close handler
  const handleAddDocClose = () => {
    setOpen(false);
  };
  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/BusinessDoc.json")
      .then((response) => {
        console.log("calling");
        setTableData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(tableData);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Uploaded On",
      dataIndex: "date",
      key: "date",
      width: 100,
      filters: [
        {
          text: "01/17/2022",
          value: "01/17/2022",
        },
        {
          text: `06/25/2022`,
          value: "06/25/2022",
        },
      ],
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
      sorter: (a, b) => {
        return a.date > b.date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Created By",
      dataIndex: "creator",
      key: "creator",
      width: 80,
      filters: [
        {
          text: "admin",
          value: "admin admin",
        },
      ],
      filteredValue: filteredInfo.creator || null,
      onFilter: (value, record) => record.creator.includes(value),
      sorter: (a, b) => {
        return a.creator > b.creator ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "creator" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <button className="text-sm mx-1 text-secondary">
              <AiOutlineEye className="text-green-600" />
            </button>
            <button onClick={handleDocumentEdit} className="text-secondary">
              <AiOutlineEdit />
            </button>
            <button className="text-sm mx-1 text-secondary">
              <AiOutlineDelete className="text-red-500" />
            </button>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.creator > b.creator ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "creator" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  // const { register, handleSubmit, reset } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   reset();
  // };
  return (
    <div className="p-2 ">
      <h1 className="text-lg my-2 text-orange-400">Business Documents</h1>
      <CssBaseline />
      <div className="pb-3 overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className=" text-xs font-normal"
          columns={columns}
          dataSource={tableData}
          scroll={{
            y: 650,
          }}
          onChange={handleChange}
        />
      </div>
      {/* Business Document Edit */}
      {openEditModal && (
        <BusinessActionModal
          handleClose={handleClose}
          open={openEditModal}
        ></BusinessActionModal>
      )}

      {/* Add Business Document */}
      <div className="my-2">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="pms-button flex items-center gap-2"
        >
          <HiPlus /> Add Documents
        </button>
        {/* Add business documents modal */}
        {open && (
          <BusinessDocAddModal
            open={open}
            handleAddDocClose={handleAddDocClose}
          ></BusinessDocAddModal>
        )}
      </div>
    </div>
  );
};

export default BusinessFiles;
