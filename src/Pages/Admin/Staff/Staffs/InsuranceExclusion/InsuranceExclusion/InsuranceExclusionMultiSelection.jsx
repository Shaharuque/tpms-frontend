import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcCancel } from "react-icons/fc";
import { GoAlert } from "react-icons/go";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../../CustomHooks/useToken";
import {
  useExcludeDeleteMutation,
  useExcludeSelectedMutation,
  useGetAllPayorQuery,
  useGetAssignedQuery,
} from "../../../../../../features/Stuff_redux/Insurance_Exclusion/InsuranceExclusionApi";
import Loading from "../../../../../../Loading/Loading";
const InsuranceExclusionMultiSelection = () => {
  // const [selectedKeys, setSelectedKeys] = useState("");
  // const [TransferData, setTransferData] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [targatedData, setTargatedData] = useState([]);
  // const arr1 = [];
  const { token } = useToken();
  const { id } = useParams();

  //  get all payor by id
  const {
    data: allPayors,
    isLoading: PayorsLoading,
    isError: PayorError,
  } = useGetAllPayorQuery({
    token,
    payload: { employee_id: id },
  });

  // get all assign payor by id
  const {
    data: assignPayorData,
    isLoading: assignLoading,
    isError: assignPayorError,
  } = useGetAssignedQuery({ token, payload: { employee_id: id } });

  // exclusion  Selected api
  const [
    excludeSelected,
    {
      data: excludedData,
      isSuccess: excludeSelectedSuccess,
      isError: excludeSelectedError,
    },
  ] = useExcludeSelectedMutation();
  //Success/Error message show added api
  useEffect(() => {
    if (excludeSelectedSuccess) {
      toast.success(excludedData?.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (excludeSelectedError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [excludeSelectedError, excludeSelectedSuccess, excludedData?.message]);
  // delete api
  const [
    excludeDelete,
    {
      data: excludeDeleteData,
      isSuccess: excludeDeleteDataSuccess,
      isError: excludeDeleteDataError,
    },
  ] = useExcludeDeleteMutation();
  //Success/Error message show delete api
  useEffect(() => {
    if (excludeDeleteDataSuccess) {
      toast.success(excludeDeleteData?.message, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (excludeDeleteDataError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [
    excludeDeleteData?.message,
    excludeDeleteDataError,
    excludeDeleteDataSuccess,
  ]);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  const handleAdding = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    console.log("data is vlaue", value);
    setTargatedData(value);
  };

  // Added
  const handleExcluded = () => {
    const payload = {
      payor_ids: targatedData,
      employee_id: id,
    };
    excludeSelected({
      token,
      payload,
    });
    setTargatedData([]);
  };

  // delete
  const handleDelete = (delid) => {
    const payload = {
      del_id: delid,
      employee_id: id,
    };
    excludeDelete({
      token,
      payload,
    });
  };

  const column = [
    {
      title: "Insurance",
      dataIndex: "all_payor_name",
      key: "all_payor_name",
      width: 120,
      render: (_, { all_payor_name }) => {
        return <h1 className="text-center">{all_payor_name?.payor_name}</h1>;
      },
      sorter: (a, b) => {
        return a.all_payor_name > b.all_payor_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "all_payor_name" ? sortedInfo.order : null,
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
            className="flex items-center  cursor-pointer justify-center font-bold text-red-500"
          >
            X
          </button>
        );
      },
    },
  ];

  if (assignLoading && PayorsLoading) {
    return <Loading />;
  }

  if (PayorError && assignPayorError) {
    // Error template show
    return <p>Error</p>;
  }

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-500 text-left font-semibold ">
        Insurance Exclusion
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
            {allPayors?.all_payors.length > 0 &&
              allPayors?.all_payors.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.payor_name}
                </option>
              ))}
          </select>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleExcluded}
            disabled={targatedData.length === 0}
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
              dataSource={assignPayorData?.assign_payors}
              onChange={handleChange}
              scroll={{
                y: 200,
              }}
            />
          </div>
          <>
            {assignPayorData?.assign_payors < 0 && (
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

export default InsuranceExclusionMultiSelection;
