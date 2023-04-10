import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoAlert } from "react-icons/go";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useAddServiceSubtypeMutation,
  useDeleteServiceSubtypeMutation,
  useGetAllSubActivityQuery,
  useGetAssignedSubtypeQuery,
} from "../../../../../features/Stuff_redux/staffSubtype_Exclusion/staffSubtypeExclusionApi";
import Loading from "../../../../../Loading/Loading";
import { useSelector } from "react-redux";
const ServiceSubTypeExclusions = () => {
  const [selectedKeys, setSelectedKeys] = useState("");
  const [TransferData, setTransferData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [display, setDisplay] = useState(true);
  const [targettedData, setTargettedData] = useState([]);
  const { token } = useToken();
  const { id } = useParams();

  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);

  //staff all sub-activity get api
  const {
    data: allSubActivity,
    isLoading: subActivityLoading,
    isSuccess: subActivitySuccess,
  } = useGetAllSubActivityQuery({
    token,
    payload: {
      employee_id: id,
    },
  });
  //staff assigned sub-activity get api
  const {
    data: assignedActivity,
    isLoading: assignedActivityLoading,
    isError: assignedActivityError,
  } = useGetAssignedSubtypeQuery({
    token,
    payload: {
      employee_id: id,
    },
  });

  //add staff service sub-type api
  const [addServiceSubtype, { isSuccess: addSuccess, isError: addError }] =
    useAddServiceSubtypeMutation();

  //delete satff service sub-type api
  const [
    deleteServiceSubtype,
    { isSuccess: deleteSuccess, isError: deleteError },
  ] = useDeleteServiceSubtypeMutation();

  const subActivityData = allSubActivity?.sub_activity || [];
  const assignedSubactivityData = assignedActivity?.sub_activity || [];
  console.log(assignedSubactivityData);

  //Handle selected ids
  const handleAdding = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    // console.log( value);
    setTargettedData(value);
  };
  console.log("selected values", targettedData);

  // handle add service subtype
  const handleExcluded = () => {
    const payload = {
      sub_activity_id: targettedData,
      employee_id: id,
    };
    addServiceSubtype({
      token,
      payload,
    });
    setTargettedData([]);
  };
  //handle delete service sub-type
  // delete
  const handleDelete = (deletedid) => {
    const payload = {
      del_id: deletedid,
      employee_id: id,
    };
    deleteServiceSubtype({
      token,
      payload,
    });
  };

  //To show Toast
  useEffect(() => {
    if (addSuccess || deleteSuccess) {
      toast.success("Successfully Action Done", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } else if (addError || deleteError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  }, [deleteSuccess, addSuccess, addError, deleteError]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  if (subActivityLoading) {
    return <Loading></Loading>;
  }

  const column = [
    {
      title: "Patient Name",
      dataIndex: "sub_activity_name",
      key: "sub_activity_name",
      width: 120,
      render: (_, { sub_activity_name }) => {
        return (
          <h1 className="text-center">{sub_activity_name?.sub_activity}</h1>
        );
      },
      sorter: (a, b) => {
        return a.sub_activity_name > b.sub_activity_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "sub_activity_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "id",
      dataIndex: "id",
      width: 100,
      render: (_, { id, File_name }) => {
        return (
          <button
            onClick={() => handleDelete(id)}
            className="mx-auto font-bold text-red-500"
          >
            X
          </button>
        );
      },
    },
  ];

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-500 text-left font-semibold ">
        Service Sub-Type Exclusion
      </h1>
      <div
        className={
          isToggled
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-2  gap-y-1"
            : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-2  gap-y-1"
        }
      >
        {/* <div className="flex flex-wrap gap-y-1"> */}
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
            Insurance
          </label>
          <select
            multiple={true}
            onChange={(e) => {
              handleAdding(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {subActivityData.length > 0 &&
              subActivityData?.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.sub_activity}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleExcluded}
            disabled={targettedData.length === 0}
            className="pms-button my-2"
            type="submit"
          >
            Exclude Selected Service Sub-Type
          </button>
        </div>
        <div>
          {/* {selectedKeys ? ( */}
          <div className="overflow-scroll">
            <Table
              pagination={false}
              size="small"
              className=" text-xs font-normal mt-5"
              columns={column}
              bordered
              rowKey={(record) => record.id}
              dataSource={assignedSubactivityData}
              onChange={handleChange}
              scroll={{
                y: 200,
              }}
            />
          </div>
          <>
            {assignedSubactivityData < 0 && (
              <div className="text-red-500 red-box border border-gray-300 rounded-sm px-3 font-medium py-[10px]  text-xs w-full flex justify-between items-center gap-2">
                <span className="flex items-center gap-2">
                  <GoAlert className="text-red-500" /> No Current Association
                </span>
                <span>
                  <FcCancel />
                </span>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ServiceSubTypeExclusions;
