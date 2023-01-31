import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Table } from "antd";
import AddAccountType from "./Components/AddAccountType";
import EditAccountType from "./Components/EditAccountType";

const AccountType = () => {
  const [programAdd, setProgramAdd] = useState(false);
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
    setProgramAdd(false);
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
      title: "Recording Type Name",
      dataIndex: "description",
      key: "description",
      width: 150,
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
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
      <h1 className="text-lg my-2 text-orange-400">Recording Type</h1>

      <div className="2xl:w-[50%] lg:w-[70%] md:w-[100%] sm:w-[100%]">
        <div className="flex items-end justify-end my-5 mr-2">
          <button
            onClick={() => {
              setProgramAdd(!programAdd);
            }}
            className="pms-button flex items-center gap-2"
          >
            Create Recording Type
          </button>
        </div>
        <div className="pb-3 overflow-scroll">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
            size="small"
            bordered
            className="table-striped-rows text-xs font-normal"
            columns={columns}
            dataSource={tableData}
            // scroll={{
            //   y: 650,
            // }}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* program Category Document Edit */}
      {openEditModal && (
        <EditAccountType
          handleClose={handleClose}
          open={openEditModal}
        ></EditAccountType>
      )}

      {/* Add program Category Document */}
      <div className="my-2">
        {/* Add program Category documents modal */}
        {programAdd && (
          <AddAccountType
            open={programAdd}
            handleAddDocClose={handleAddDocClose}
          ></AddAccountType>
        )}
      </div>
    </div>
  );
};

export default AccountType;
