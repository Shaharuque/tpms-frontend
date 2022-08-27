import React, { useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import SettingTableBox from "../../../../../Pages/Settings/SettingComponents/SettingTableBox";
import {
  TransitionTableColumn,
  TransitionTableData,
} from "../TodaysTaskTableData";

const TransitionTable = () => {
  const data = useMemo(() => TransitionTableData, []);
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
