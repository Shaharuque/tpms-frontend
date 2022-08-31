import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";
import {
  VacationPendingApprovalColumn,
  VacationPendingApprovalData,
} from "./StaffDataTAble";
import { useEffect } from "react";
import axios from "axios";

const VacationPendingApproval = () => {

  const [VacationData, SetVacationData] = useState([]);

  // fakedb call
  useEffect(()=>{
    axios('../../All_Fake_Api/VacationPending.json')
    .then((response)=>{
      SetVacationData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const data = useMemo(() => VacationData, [VacationData]);
  const columns = useMemo(() => [...VacationPendingApprovalColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy,  useRowSelect);
  return (
    <div >
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Vacation Pending</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="my-2">
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>
    </div>
  );
};

export default VacationPendingApproval;
