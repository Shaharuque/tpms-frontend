import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../../../../../CustomHooks/useToken";
import Providers from "../MultiSelectComponents/Providers";
import { AiFillLock, AiFillUnlock, AiOutlineDown } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { defineElement } from "lord-icon-element";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { timeConverter } from "../../../../Shared/TimeConverter/TimeConverter";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import ReactPaginate from "react-paginate";
import { Table } from "antd";
import { useManageSessionStatusChangeMutation } from "../../../../../features/Appointment_redux/ListView/manageSessionApi";
import { toast } from "react-toastify";

// To Convert Date YY/MM/DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  //console.log(afterSplit);
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};

const NonBillableSession = ({
  setNonBillableData,
  nonBillableData,
  setNonBillablePage,
  nonBillablePage,
  nonBillableTotalPage,
  nonBillableListLoading,
  payload,
  stuffs,
  posData,
}) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [statusName, setStatusName] = useState(null);
  const [actionType, setActionType] = useState(null);
  const { token } = useToken();
  console.log(
    "non-billable data",
    nonBillableData,
    nonBillableTotalPage,
    nonBillableListLoading
  );

  //Manage Session Appointment Status Change API
  const [
    manageSessionStatusChange,
    { data: statusChangeData, isSuccess: actionSuccess },
  ] = useManageSessionStatusChangeMutation();
  console.log("after status change", actionSuccess);

  useEffect(() => {
    if (statusChangeData?.status === "success" && actionType !== "delete") {
      setSelectedRowKeys([]);
      toast.success(
        <h1 className="font-bold">
          Successfully Non-Billable Session Status Updated
        </h1>,
        {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        }
      );
      //Session List refetch based on the selected page number
      const getNonbillableSessions = async () => {
        const res = await axios({
          method: "POST",
          url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/nonbillable/appointments?page=${nonBillablePage}`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: payload,
        });
        const data = res?.data?.appointments;
        setNonBillableData(data?.data);
      };
      getNonbillableSessions();
    }
    if (statusChangeData?.status === "success" && actionType === "delete") {
      setSelectedRowKeys([]);
      toast.success(
        <h1 className="font-bold">Selected Non-Billable Session Deleted</h1>,
        {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        }
      );
      //Session List refetch based on the selected page number
      const getNonbillableSessions = async () => {
        const res = await axios({
          method: "POST",
          url: `https://test-prod.therapypms.com/api/v1/admin/ac/manage/session/get/nonbillable/appointments?page=${nonBillablePage}`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token || null,
          },
          data: payload,
        });
        const data = res?.data?.appointments;
        setNonBillableData(data?.data);
      };
      getNonbillableSessions();
    }
  }, [statusChangeData?.status]);

  // Table Data Columns Defined Here //
  const columns = [
    {
      title: <h1 className="text-center">Lock</h1>,
      key: "is_locked",
      dataIndex: "is_locked",
      width: 80,
      // render contains what we want to reflect as our data
      render: (_, { is_locked }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {is_locked === 0 && (
              <button title="Billed">
                <AiFillUnlock className=" text-lg font-medium text-[#309BAB]" />
              </button>
            )}
            {is_locked === 1 && (
              <button title="Lock In">
                <AiFillLock className="text-lg font-medium  text-red-600" />
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Provider",
      dataIndex: "provider_full_name",
      key: "provider_full_name",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div>
            {
              stuffs?.find((each) => each?.id === record?.provider_id)
                ?.full_name
            }
          </div>
        );
      },
      sorter: (a, b) => {
        return a.app_provider?.full_name > b.app_provider?.full_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "provider_full_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "location",
      dataIndex: "location",
      width: 120,
      render: (_, { location }) => {
        //console.log("pos : ", pos);
        return (
          <>
            {location === "02" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>
                {
                  posData?.pos?.find((each) => each?.pos_code === location)
                    ?.pos_name
                }
              </div>
            )}
          </>
        );
      },
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
    },
    {
      title: "Scheduled Date",
      dataIndex: "schedule_date",
      key: "schedule_date",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-black text-center">
            {dateConverter(record?.schedule_date)}
          </div>
        );
      },
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1;
        // a.schedule_date - b.schedule_date
      },
      sortOrder:
        sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hours",
      dataIndex: "Hours",
      key: "Hours",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-gray-600 text-center ">
            {timeConverter(record?.from_time?.split(" ")[1])} to{" "}
            {timeConverter(record?.to_time?.split(" ")[1])}
          </div>
        );
      },
      sorter: (a, b) => {
        return a.Hours > b.Hours ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "Hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 100,
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
        // a.status - b.status,
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { status }) => {
        //console.log("status : ", status);
        return (
          <div className="flex justify-center">
            {status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Hold" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "No Show" && (
              <button className="bg-blue-700 text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Cancelled by Client" && (
              <button className="bg-black text-white text-[10px] py-[2px]  rounded w-14">
                {status}
              </button>
            )}
            {status === "Cancelled by Provider" && (
              <button className="bg-yellow-700 text-white text-[10px] py-[2px]  rounded w-28">
                {status}
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      // render: (_, record) => (
      //   <div className="flex justify-center">
      //     <Dropdown
      //       overlay={
      //         <ManageTableAction appointmentId={record?.id}></ManageTableAction>
      //       }
      //       trigger={["click"]}
      //       overlayStyle={{ zIndex: "100" }}
      //     >
      //       <button onClick={(e) => e.preventDefault()}>
      //         <Space>
      //           <BsThreeDots />
      //         </Space>
      //       </button>
      //     </Dropdown>
      //   </div>
      // ),
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  //Handle Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("selected page", selectedPage);
    setNonBillablePage(selectedPage + 1);
  };

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selected row-keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,

    //Billing is_locked===true then you can't chose that checkbox
    getCheckboxProps: (record) => {
      //console.log("record", record);
      const rowIndex = record?.is_locked;
      return {
        disabled: rowIndex === 1,
      };
    },
  };

  const statusChange = (e) => {
    console.log("non-billable status change", e.target.value);
    if (e.target.value === "Bulk Delete") {
      //console.log(e.target.value);
      setStatusName("");
      setActionType("delete");
    } else {
      //console.log(e.target.value);
      setStatusName(e.target.value);
      setActionType("update_status");
    }
  };

  //Action Handler Function
  const handleAction = () => {
    if (selectedRowKeys?.length > 0) {
      const payload = {
        action_type: actionType,
        status_name: statusName,
        appointment_ids: selectedRowKeys,
      };
      manageSessionStatusChange({
        token,
        payload,
      });
      console.log("payload for the action handler api", payload);
    } else {
      toast.error("Select ID Before Submit Action", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  };
  return (
    <div>
      {!nonBillableListLoading ? (
        <div>
          {nonBillableData?.length > 0 ? (
            <div>
              <div className=" overflow-scroll">
                {!nonBillableListLoading ? (
                  <>
                    <Table
                      pagination={false}
                      rowKey={(record) => record.id}
                      size="small"
                      bordered
                      className=" text-xs font-normal"
                      columns={columns}
                      dataSource={nonBillableData}
                      rowSelection={rowSelection}
                      scroll={{
                        y: 750,
                      }}
                      onChange={handleChange}
                    />
                    <div className="flex items-center justify-end">
                      {nonBillableTotalPage > 1 && (
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={Number(nonBillableTotalPage)}
                          marginPagesDisplayed={1}
                          onPageChange={handlePageClick}
                          forcePage={nonBillableTotalPage - 1}
                          containerClassName={"pagination"}
                          previousLinkClassName={"pagination_Link"}
                          nextLinkClassName={"pagination_Link"}
                          activeClassName={"pagination_Link-active"}
                          disabledClassName={"pagination_Link-disabled"}
                        ></ReactPaginate>
                      )}
                    </div>
                  </>
                ) : (
                  <ShimmerTableTet></ShimmerTableTet>
                )}
              </div>
            </div>
          ) : (
            // CSS Design Need To Applied Here
            <h1 className="w-full text-center p-2 bg-red-400 text-white rounded-sm">
              No Data Found
            </h1>
          )}
        </div>
      ) : (
        <ShimmerTableTet></ShimmerTableTet>
      )}
      {/* For Status Change */}
      <div className="flex items-center gap-2 flex-wrap mt-6">
        <select
          className="modal-input-field ml-1"
          onChange={(e) => statusChange(e)}
        >
          <option value="" className="text-black">
            Select
          </option>
          <option value="Scheduled" className="text-black">
            Scheduled
          </option>
          <option value="No Show" className="text-black">
            No Show
          </option>
          <option value="Hold" className="text-black">
            Hold
          </option>
          <option>Cancelled by Client</option>
          <option>Cancelled by Provider</option>
          <option value="Bulk Delete" className="text-black">
            Bulk Delete
          </option>
          <option value="Rendered" className="text-black">
            Rendered
          </option>
        </select>
        <button onClick={handleAction} className="pms-button">
          Go
        </button>
      </div>
    </div>
  );
};

export default NonBillableSession;
