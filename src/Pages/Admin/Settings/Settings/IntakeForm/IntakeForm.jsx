import axios from "axios";
import React, { useEffect, useState } from "react";
import IntakeFormAdd from "./IntakeForm/IntakeFormAdd";
import { BsPlusLg } from "react-icons/bs";
import { ImDownload3 } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import { Switch, Table } from "antd";

const IntakeForm = () => {
  const [tableData, setTableData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [file, setFile] = useState("");
  const [checkSwitch, setCheckSwitch] = useState(false);

  const [open, setOpen] = useState(false);

  const handleAddDocClose = () => {
    setOpen(false);
  };

  const handleFile = (e) => {
    console.log(e);
    setFile(e.target.value);
  };
  const handleDelete = () => {
    // setFile("");
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
      title: "File Name",
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
      title: "Active Status",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <div className="flex justify-center">
              <Switch
                size="small"
                defaultChecked
                onClick={() => {
                  setCheckSwitch(!checkSwitch);
                }}
              />
              {!checkSwitch ? (
                <h1 className="ml-2">Active</h1>
              ) : (
                <h1 className="ml-2">In-Active</h1>
              )}
            </div>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.creator > b.creator ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "creator" ? sortedInfo.order : null,
      ellipsis: true,
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
              <ImDownload3 className="text-secondary" />
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

  // console.log(file);
  return (
    <>
      {/* <>
        <div className="flex flex-wrap items-center gap-1">
          <div className=" ">
            <label className="label">
              <span className=" label-font">Browse Intake Form</span>
            </label>
            <input
              type="file"
              onChange={(e) => handleFile(e)}
              className=" rounded-sm ml-1 mt-2 text-sm"
            />
          </div>
          <div className="mt-3">
            <div className=" flex items-end justify-start gap-3 mt-6">
              <button className=" pms-button " type="submit">
                Upload
              </button>

              <button className="pms-close-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-green-500 green-box my-3 border border-gray-300 rounded-sm px-3 font-medium py-[10px]  text-xs w-full flex justify-between items-center gap-2">
            <span className="flex items-center gap-6">
              Download Intake Form.
              <button>
                <ImDownload className=" text-primary text-base" />
              </button>
            </span>
          </div>
        </div>
      </>{" "} */}
      <div className="p-2">
        <div className="flex items-center justify-between gap-2 pr-2 flex-wrap">
          <h1 className="text-[16px] mt-2 mb-4 text-orange-400">
            All Intake Form
          </h1>
          <div className="my-2">
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="pms-button flex items-center gap-2"
            >
              <BsPlusLg /> Add Intake Form
            </button>

            {open && (
              <IntakeFormAdd
                open={open}
                handleAddDocClose={handleAddDocClose}
              ></IntakeFormAdd>
            )}
          </div>
        </div>
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
      </div>
    </>
  );
};

export default IntakeForm;
