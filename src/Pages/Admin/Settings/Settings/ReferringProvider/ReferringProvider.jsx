import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReferringProviderActionModal from "./ReferringProvider/ReferringProviderActionModal";

const ReferringProvider = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleClickOpen2 = () => {
    setOpenAddModal(true);
  };

  const handleClose2 = () => {
    setOpenAddModal(false);
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
      title: "Provider First Name",
      dataIndex: "first_name",
      key: "first_name",
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
      render: (_, { first_name }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{first_name}</div>;
      },
      filteredValue: filteredInfo.first_name || null,
      onFilter: (value, record) => record.first_name.includes(value),
      sorter: (a, b) => {
        return a.first_name > b.first_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "first_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Provider Last Name",
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
      title: "NPI",
      dataIndex: "npi",
      key: "npi",
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
      filteredValue: filteredInfo.npi || null,
      onFilter: (value, record) => record.npi.includes(value),
      sorter: (a, b) => {
        return a.npi > b.npi ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "npi" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "UPIN",
      dataIndex: "upin",
      key: "upin",
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
      filteredValue: filteredInfo.upin || null,
      onFilter: (value, record) => record.upin.includes(value),
      sorter: (a, b) => {
        return a.upin > b.upin ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "upin" ? sortedInfo.order : null,
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
          <div className=" flex justify-center items-center">
            <div className="flex justify-center">
              <button onClick={handleClickOpen2} className="text-secondary">
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
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Referring Provider</h1>

        <div className="flex items-center">
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen2}
                className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm mr-2"
              >
                Add Place of service
              </button>
            </label>
          </div>
          <div className="flex justify-end items-end my-2">
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
        <ReferringProviderActionModal
          handleClose={handleClose2}
          open={openAddModal}
        ></ReferringProviderActionModal>
      )}
    </div>
  );
};

export default ReferringProvider;
