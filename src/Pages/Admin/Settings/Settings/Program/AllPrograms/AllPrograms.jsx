import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Table } from "antd";
import AddAllProgram from "./Components/AddAllProgram";
import EditAllProgram from "./Components/EditAllProgram";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmark, BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import TagPatientModal from "./Components/TagPatient/TagPatientModal";
import TagQuestionsModal from "./Components/TagQuestions/TagQuestionsModal";

const AllPrograms = () => {
  const [tagPatient, setTagPatient] = useState(false);
  const [tagQuestion, setTagQuestion] = useState(false);
  const [tableData, setTableData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const navigate = useNavigate();
  // Business Document edit
  const handleDocumentEdit = (id) => {
    navigate(`/admin/settings/edit-program/${id}`);
  };
  const handleTagQuestionClose = () => {
    setTagQuestion(false);
  };
  const handleTagPatientClose = () => {
    setTagPatient(false);
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
      width: 110,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center gap-3 font-normal text-sm">
            <button
              onClick={() => setTagPatient(!tagPatient)}
              className="text-secondary"
              title="Tag Patient"
            >
              <BsBookmark />
            </button>
            <button
              onClick={() => setTagQuestion(!tagQuestion)}
              className="text-secondary"
              title="Tag Question"
            >
              <BsBookmarkStar />
            </button>
            <button
              onClick={() => handleDocumentEdit(id)}
              className="text-secondary"
              title="Edit"
            >
              <AiOutlineEdit />
            </button>
            <button title="Delete" className="text-sm text-secondary">
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
      <h1 className="text-lg my-2 text-orange-400">All Programs</h1>

      <div className="2xl:w-[50%] lg:w-[70%] md:w-[100%] sm:w-[100%]">
        <div className="flex items-end justify-end my-5 mr-2">
          <button className="pms-button flex items-center gap-2">
            <Link to={"/admin/settings/create-program"}>Create Programs</Link>
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
      {tagQuestion && (
        <TagQuestionsModal
          handleTagQuestionClose={handleTagQuestionClose}
          open={tagQuestion}
        ></TagQuestionsModal>
      )}

      {/* Add program Category Document */}
      <div className="my-2">
        {/* Add program Category documents modal */}
        {tagPatient && (
          <TagPatientModal
            open={tagPatient}
            handleTagPatientClose={handleTagPatientClose}
          ></TagPatientModal>
        )}
      </div>
    </div>
  );
};

export default AllPrograms;
