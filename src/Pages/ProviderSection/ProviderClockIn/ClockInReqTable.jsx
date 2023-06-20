import { Table } from "antd";
import React, { useState } from "react";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import { FcAddRow } from "react-icons/fc";
import moment from "moment";
import UpdateClockInReqModal from "./UpdateClockInReqModal";

const ClockInReqTable = ({ tableData }) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [reqId, setReqId] = useState({});
  const [noteModal, setNoteModal] = useState(false);
  const handleChange = (pagination, sorter) => {
    console.log("Various parameters", pagination, sorter);
    setSortedInfo(sorter);
  };

  const handleUpdateBtn = (record) => {
    console.log("req clock in id", record?.id);
    setOpenEditModal(true);
    setReqId(record);
  };
  const handleNote = () => {
    setNoteModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const columns = [
    {
      title: "Date",
      dataIndex: "punch_date",
      key: "punch_date",
      width: 80,
      render: (_, { punch_date }) => {
        return (
          <div>
            <h1>{dateConverter(punch_date)}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.punch_date > b.punch_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "punch_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Clock In",
      dataIndex: "time_in",
      key: "time_in",
      render: (_, { time_in }) => {
        return (
          <div>
            {/* Time Zone Bangladesh thats why utcOffset used. utcOffset=360 */}
            <h1>{time_in ? moment(time_in).utcOffset(360).format("hh:mm A") : "N/A"}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.time_in > b.time_in ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "time_in" ? sortedInfo.order : null,
      width: 100,
      ellipsis: false,
    },
    {
      title: "Clock Out",
      dataIndex: "clockOut",
      key: "clockOut",
      width: 100,
      render: (_, { time_out }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{time_out ? moment(time_out).utcOffset(360).format("hh:mm A") : "N/A"}</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.time_out > b.time_out ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "time_out" ? sortedInfo.order : null,

      ellipsis: false,
    },
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
      width: 120,
      ellipsis: false,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <h1>
              {!record?.status && !record?.time_in ? (
                <div className="bg-red-600 rounded p-1 text-white w-auto">N/A</div>
              ) : (
                <div className="bg-red-600 rounded p-1 text-white w-auto">Acceptence Pending</div>
              )}
            </h1>
          </div>
        );
      },
      ellipsis: false,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 60,
      render: (_, record) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center items-center">
            <div className="">
              <FcAddRow onClick={() => handleUpdateBtn(record)} className="text-[15px] mx-auto" />
            </div>
            <div>
              {record?.note && (
                <div className="text-[10px] text-center">
                  <FcAddRow onClick={() => handleNote(record?.id)} className="text-[15px] mx-auto"></FcAddRow>
                </div>
              )}
            </div>
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div>
      <div className=" overflow-scroll py-3 ">
        <Table
          rowKey={(record) => record.id}
          pagination={false}
          size="small"
          className=" text-xs font-normal"
          columns={columns}
          bordered
          dataSource={tableData}
          onChange={handleChange}
        />
      </div>
      {openEditModal && <UpdateClockInReqModal handleClose={handleClose} open={openEditModal} reqId={reqId}></UpdateClockInReqModal>}
    </div>
  );
};

export default ClockInReqTable;
