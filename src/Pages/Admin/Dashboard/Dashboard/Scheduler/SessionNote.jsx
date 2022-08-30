import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";
import { SessionNoteColumn, SessionNoteData } from "./SchedulerTableData";
import axios from "axios";

const SessionNote = () => {

  const [SessionNoteInfoData, SetSessionNoteInfoData] = useState([])
  // fake api cal
  useEffect(()=>{
    axios('../../All_Fake_Api/LastWeekDeposit.json')
    .then((response)=>{
      SetSessionNoteInfoData(response?.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const data = useMemo(() => SessionNoteInfoData, [SessionNoteInfoData]);
  const columns = useMemo(() => [...SessionNoteColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy,useRowSelect);
  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Sessions Not Missing</h1>
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

export default SessionNote;
