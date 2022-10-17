import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import PlaceOfServicesActionAddModal from "./PlaceOfServices/PlaceOfServicesActionAddModal";

const PlaceOfServices = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [recordData, setRecordData] = useState();

  const handleClickOpen2 = (record) => {
    setOpenAddModal(true);
    setRecordData(record);
  };
  console.log(recordData);

  const handleClose2 = () => {
    setOpenAddModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState([]);
  useEffect(() => {
    axios("../../../All_Fake_Api/Holiday.json")
      .then((response) => {
        //console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);
  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Place of Service",
      dataIndex: "date",
      key: "date",
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
      render: (_, { date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{date}</div>;
      },
      filteredValue: filteredInfo.date || null,
      onFilter: (value, record) => record.date.includes(value),
      sorter: (a, b) => {
        return a.date > b.date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Place of Service Code",
      dataIndex: "description",
      key: "description",
      width: 150,
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
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
                onClick={() => handleClickOpen2(record)}
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
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Place of Service</h1>

        <div className=" md:flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen2}
                className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm mr-2"
              >
                Add Place of Service
              </button>
            </label>
          </div>
          <div className="md:flex justify-end items-end my-2">
            <button
              onClick={clearFilters}
              className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
        </div>
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

      {openAddModal && (
        <PlaceOfServicesActionAddModal
          handleClose={handleClose2}
          open={openAddModal}
          recordData={recordData}
        ></PlaceOfServicesActionAddModal>
      )}
    </div>
  );
};

export default PlaceOfServices;
