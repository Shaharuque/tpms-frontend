import { DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import AddFederal from "./HoildaySetUp/AddFederal";
import AddTImeOff from "./HoildaySetUp/AddTImeOff";
import {
  useGetAllHolidayQuery,
  useHolidayDeleteMutation,
} from "../../../../../features/Settings_redux/holidaySetup/holidaySetupApi";
import useToken from "../../../../../CustomHooks/useToken";

const HolidaySetup = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [addTimeOff, setAddTimeOff] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const { token } = useToken();

  const { data: allHoliday, isLoading: holidayLoading } = useGetAllHolidayQuery(
    { token }
  );

  const [holidayDelete, { isSuccess: holidayDeleteSuccess }] =
    useHolidayDeleteMutation();

  const handleClickOpen = () => {
    setAddTimeOff(true);
  };

  const handleClose = () => {
    setAddTimeOff(false);
  };
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

  const handleHolidayDelete = (holiday_id) => {
    console.log("holiday_id : ", holiday_id);
    if (holiday_id) {
      holidayDelete({ token, data: { holiday_id } });
    }
  };
  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Date of Holiday",
      dataIndex: "holiday_date",
      key: "holiday_date",
      width: 100,
      render: (_, { holiday_date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{holiday_date}</div>;
      },
      sorter: (a, b) => {
        return a.holiday_date > b.holiday_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "holiday_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 150,
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
            <button
              onClick={() => handleHolidayDelete(record?.id)}
              className="text-rose-500 "
            >
              <DeleteOutlined />
            </button>
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
    <div className="p-2">
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Holiday</h1>

        <div className="flex justify-end items-end my-2">
          <button
            onClick={clearFilters}
            className="px-2  py-1 bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
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
          dataSource={allHoliday?.holidaySetups}
          scroll={{
            y: 650,
          }}
          onChange={handleChange}
        />
      </div>

      <div className="flex mt-5 flex-wrap gap-3 items-center justify-between">
        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <h1 onClick={handleClickOpen} className="pms-button">
              Add Time Off
            </h1>
          </label>
        </div>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <h1 onClick={handleClickOpen2} className="pms-button">
              Add Federal US holidays
            </h1>
          </label>
        </div>
      </div>

      {addTimeOff && (
        <AddTImeOff handleClose={handleClose} open={addTimeOff}></AddTImeOff>
      )}
      {openAddModal && (
        <AddFederal
          allHoliday={allHoliday}
          holidayLoading={holidayLoading}
          handleClose={handleClose2}
          open={openAddModal}
        ></AddFederal>
      )}
    </div>
  );
};

export default HolidaySetup;
