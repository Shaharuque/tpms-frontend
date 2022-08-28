import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import SettingTableBox from "../../../../../Pages/Settings/SettingComponents/SettingTableBox";
import {
  TransitionTableColumn,
  TransitionTableData,
} from "../TodaysTaskTableData";
import axios from "axios";

const TransitionTable = () => {

  const [TrnsData, SetTrnsData] = useState([]);

  // fakedb call
  useEffect(()=>{
    axios('../../TransitionTable.json')
    .then((response)=>{
      SetTrnsData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
    
  },[])

  const data = useMemo(() => TrnsData, [TrnsData]);
  const columns = useMemo(() => [...TransitionTableColumn], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination, useRowSelect);
  return (
    <div>
      <div className="my-5">
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>
    </div>
  );
};

export default TransitionTable;
