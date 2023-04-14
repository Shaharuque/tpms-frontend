import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import VendorNumberSetupActionModal from "./VendorNumberSetup/VendorNumberSetupActionModal";

const VendorNumberSetup = () => {
  const [open, setOpen] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);
  const [recordData, setRecordData] = useState();

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/VendorNumber.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(table);

  const handleClickOpen = (record) => {
    console.log(record);
    setRecordData(record);
    setOpen(true);
  };

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Service",
      dataIndex: "sevice",
      key: "sevice",
      width: 80,
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
      filteredValue: filteredInfo.sevice || null,
      onFilter: (value, record) => record.sevice.includes(value),
      sorter: (a, b) => {
        return a.sevice > b.sevice ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "sevice" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Vendor No",
      dataIndex: "vendor",
      key: "vendor",
      width: 50,
      render: (_, record) => {
        //console.log("vendor : ", vendor);
        return (
          <div className="flex mt-1 justify-center items-center">
            <input
              name="cms"
              className="page py-[6px]  focus:outline-none text-center"
              type="text"
              defaultValue={record.vendor}
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.vendor > b.vendor ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "vendor" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Code",
      dataIndex: "service_code",
      key: "service_code",
      width: 50,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex mt-1 justify-center items-center">
            <input
              name="cms"
              className="page py-[6px]  focus:outline-none text-center"
              type="text"
              defaultValue={record.service_code}
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.service_code > b.service_code ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "service_code" ? sortedInfo.order : null,
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnchange = (e) => {
    console.log(e);
    setTableOpen(!tableOpen);
  };
  return (
    <div>
      <h1 className="text-lg my-2 text-orange-400">Vendor Number Setup</h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full text-sm">
          <div className="flex flex-wrap items-center my-3 mr-2 gap-x-6 gap-y-3 ">
            <div>
              <label className="label">
                <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                  Tx Type
                </span>
              </label>

              <select
                name="tx_type"
                onChange={(e) => handleOnchange(e)}
                className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              >
                <option value="Select Tx type">Select Tx type</option>
                <option value="Behavior Therapy">Behavior Therapy</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Physical Therapy">Physical Therapy</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                  Regional Center
                </span>
              </label>
              <select className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none">
                <option value="select regional center">
                  select regional center
                </option>
              </select>
            </div>
            <div>
              <button
                variant="outlined"
                onClick={handleClickOpen}
                className="pms-input-button mt-[30px]"
              >
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
      {tableOpen && (
        <div>
          <div className="flex justify-end my-2">
            <button
              onClick={clearFilters}
              className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>

          <div>
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className="table-striped-rows text-xs font-normal"
              columns={columns}
              dataSource={table}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              variant="outlined"
              className="px-5 mt-8 py-1 bg-gradient-to-r from-secondary
            to-primary hover:to-secondary text-white rounded-sm"
            >
              Save
            </button>
          </div>
        </div>
      )}
      {open && (
        <VendorNumberSetupActionModal
          open={open}
          recordData={recordData}
          handleClose={handleClose}
        ></VendorNumberSetupActionModal>
      )}
    </div>
  );
};

export default VendorNumberSetup;
