import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoAlert } from "react-icons/go";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useAddPatientExclusionMutation,
  useDeletePatientExclusionMutation,
  useGetAllPatientExclusionQuery,
  useGetAssignedPatientExclusionQuery,
} from "../../../../../features/Stuff_redux/patientExclustion/patientExclusionApi";
import Loading from "../../../../../Loading/Loading";
const PatientExclusion = () => {
  const [selectedKeys, setSelectedKeys] = useState("");
  const [TransferData, setTransferData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [display, setDisplay] = useState(true);
  const [targettedData, setTargettedData] = useState([]);
  const { token } = useToken();
  const { id } = useParams();

  //staff patient exclusion get all api
  const {
    data: allPatientExclusion,
    isLoading: patientExclusionLoading,
    isSuccess: patientExclusionSuccess,
  } = useGetAllPatientExclusionQuery({
    token,
    payload: {
      employee_id: id,
    },
  });
  //staff patient exclusion assign api
  const {
    data: assignedPatients,
    isLoading: assignedPatientsLoading,
    isError: assignedPatientsError,
  } = useGetAssignedPatientExclusionQuery({
    token,
    payload: {
      employee_id: id,
    },
  });

  //add staff service sub-type api
  const [addPatientExclusion, { isSuccess: addSuccess, isError: addError }] =
    useAddPatientExclusionMutation();

  //delete satff service sub-type api
  const [
    deletePatientExclusion,
    { isSuccess: deleteSuccess, isError: deleteError },
  ] = useDeletePatientExclusionMutation();

  const patientExclusionData = allPatientExclusion?.patients || [];
  const assignedPatientsData = assignedPatients?.patients || [];
  // console.log(assignedSubactivityData);

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

  // handle staff patient exclusion save
  const handleExcluded = () => {
    const payload = {
      patient_ids: targettedData,
      employee_id: id,
    };
    addPatientExclusion({
      token,
      payload,
    });
    setTargettedData([]);
  };
  //handle staff patient exclusion delete
  const handleDelete = (deletedid) => {
    const payload = {
      del_id: deletedid,
      employee_id: id,
    };
    deletePatientExclusion({
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

  if (assignedPatientsLoading) {
    return <Loading></Loading>;
  }

  const column = [
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
      width: 120,
      render: (_, { patient_name }) => {
        return (
          <h1 className="text-center">{patient_name?.client_full_name}</h1>
        );
      },
      sorter: (a, b) => {
        return a.patient_name > b.patient_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "patient_name" ? sortedInfo.order : null,
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
            className="flex items-center justify-center font-bold text-red-500"
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-2  gap-y-1">
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
            {patientExclusionData.length > 0 &&
              patientExclusionData?.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.client_full_name}
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
              dataSource={assignedPatientsData}
              onChange={handleChange}
              scroll={{
                y: 200,
              }}
            />
          </div>
          <>
            {assignedPatientsData.length === 0 && (
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

export default PatientExclusion;
