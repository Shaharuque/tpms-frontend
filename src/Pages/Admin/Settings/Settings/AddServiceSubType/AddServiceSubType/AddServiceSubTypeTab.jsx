import { Switch, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddServiceSubTypeTabEditModal from "./AddServiceSubTypeTabEditModal";

const AddServiceSubTypeTab = () => {
  const [txType, setTxType] = useState(false);
  const [type, setType] = useState(false);
  const [value, setValue] = useState(true);
  const [service, setService] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [recordData, setRecordData] = useState();

  const handleClickOpen = (record) => {
    setOpenEditModal(true);
    setRecordData(record);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleOnchange = (e) => {
    console.log(e.target.value);
    setTxType(!txType);
  };
  const typeHandleOnchange = (e) => {
    console.log(e.target.value);
    setType(!type);
  };
  const serviceHandleOnchange = (e) => {
    console.log(e.target.value);
    setService(!service);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/Reffering.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Description",
      dataIndex: "last_name",
      key: "last_name",
      width: 100,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.last_name || null,
      onFilter: (value, record) => record.last_name.includes(value),
      sorter: (a, b) => {
        return a.last_name > b.last_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Active",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <div className="flex items-center ">
              <Switch
                size="small"
                checked={value ? true : false}
                onClick={() => setValue(!value)}
              />
              <span className="text-[14px] font-medium text-gray-500 mx-3">
                Active
              </span>
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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        //console.log("tags : ", lock);
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
        <h1 className="text-lg my-3 text-orange-400">Place of Service</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 my-3 mr-2 gap-x-3 gap-y-1 ">
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              Tx Type
            </span>
          </label>

          <select
            onChange={(e) => handleOnchange(e)}
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
          >
            <option value="Select Tx type">Select Tx type</option>
            <option value="Behavior Therapy">Behavior Therapy</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Physical Therapy">Physical Therapy</option>
          </select>
        </div>
        {txType && (
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Type
              </span>
            </label>
            <select
              onChange={(e) => typeHandleOnchange(e)}
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value="Select Tx type"></option>
              <option value="Behavior Therapy">Billable</option>
            </select>
          </div>
        )}
        {type && (
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Service
              </span>
            </label>
            <select
              onChange={(e) => serviceHandleOnchange(e)}
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value="Select Tx type">Select Tx type</option>
              <option value="Behavior Therapy">Behavior Therapy</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Physical Therapy">Physical Therapy</option>
            </select>
          </div>
        )}
      </div>
      {service && (
        <div>
          <div className="md:flex justify-end items-end my-2">
            <button onClick={clearFilters} className="pms-clear-button border">
              Clear filters
            </button>
          </div>
          <div>
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal"
              columns={columns}
              dataSource={table}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button onClick={handleClickOpen} className="pms-button my-2">
                Add Place of Service
              </button>
            </label>
          </div>
          {openEditModal && (
            <AddServiceSubTypeTabEditModal
              handleClose={handleClose}
              open={openEditModal}
              row={recordData}
            ></AddServiceSubTypeTabEditModal>
          )}
        </div>
      )}
    </div>
  );
};

export default AddServiceSubTypeTab;
