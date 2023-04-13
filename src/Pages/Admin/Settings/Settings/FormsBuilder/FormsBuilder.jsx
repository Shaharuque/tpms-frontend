import { Table } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const FormsBuilder = () => {
  const [VacationData, SetVacationData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // fakedb call
  useEffect(() => {
    axios("../../All_Fake_Api/form.json")
      .then((response) => {
        SetVacationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Template Name",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Template Type",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{provider}</h1>
          </div>
        );
      },
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
          <div className=" flex justify-center items-center gap-2">
            <button className="text-secondary ">
              <FiEdit />
            </button>
            <AiOutlineEye className="text-green-500" />
            <AiOutlineDelete className="text-rose-500" />
            <BiCopy className="text-secondary" />
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
  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Create New Form</h1>
        <div className="flex items-center gap-3">
          <Link to={"/forms"}>
            <button className="pms-button mb-2 mr-">Forms</button>
          </Link>
          <Link to={"/admin/form-builder-create"}>
            <button className="pms-button mb-2">+ Create Form</button>
          </Link>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-end items-center mr-2">
          <button
            onClick={clearFilters}
            className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <div className=" overflow-scroll pt-3">
          <Table
            bordered
            rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={VacationData}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FormsBuilder;
//
