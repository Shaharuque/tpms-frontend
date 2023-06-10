import { Switch, Table } from "antd";
import React from "react";
import { useState } from "react";
import { MdDoNotDisturbOn } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import AddCallLog from "./CallLog/AddCallLog";
import CallLogEdit from "./CallLog/CallLogEdit";
import { useGetProviderPatientLogsQuery } from "../../../../../features/ProviderPortal/PatientCalllog_redux/providerPatientCalllogApi";
import useToken from "../../../../../CustomHooks/useToken";
import { useParams } from "react-router-dom";

const ProviderPatientCalllog = () => {
  const [allData, setAllData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [assign, setAssign] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { token } = useToken();
  const { id } = useParams();

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  //get CallLog Data
  const { data: callLogs, isSuccess, isLoading: documentLoading, isError } = useGetProviderPatientLogsQuery({ token, id });

  console.log("api data come", callLogs);

  const column = [
    {
      title: "Date",
      dataIndex: "description",
      key: "description",
      width: 120,
      // filters: [{}],
      // filteredValue: filteredInfo.Document || null,
      // onFilter: (value, record) => record.Document.includes(value),
      sorter: (a, b) => {
        return a.Document > b.Document ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Document" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Log",
      dataIndex: "description",
      key: "description",
      width: 120,
      // filters: [{}],
      // filteredValue: filteredInfo.Document || null,
      // onFilter: (value, record) => record.Document.includes(value),
      sorter: (a, b) => {
        return a.Document > b.Document ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Document" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { nt }) => {
        return (
          // <div className="flex items-center justify-center">
          //   <AiOutlineEye />
          // </div>
          <CallLogEdit></CallLogEdit>
        );
      },
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  return (
    <div>
      <div className="h-[100vh]">
        <div className="my-2">
          <div className="flex justify-between items-center mr-2">
            <h1 className="text-[16px] mt-2">Call Log List</h1>
            <button onClick={handleClickOpen} className="pms-button flex item-center gap-2">
              <HiPlus /> Add New Data
            </button>
          </div>

          <div className=" overflow-scroll py-3">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={column}
              dataSource={callLogs?.logs}
              scroll={{
                y: 700,
              }}
              onChange={handleChange}
            />
          </div>
        </div>
        {openEditModal && <AddCallLog handleClose={handleClose} open={openEditModal}></AddCallLog>}
      </div>
    </div>
  );
};

export default ProviderPatientCalllog;
