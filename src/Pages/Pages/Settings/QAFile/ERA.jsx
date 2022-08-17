import React, { useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../SettingComponents/CheckBox";
import SettingTableBox from "../SettingComponents/SettingTableBox";
import { ERATableColumn, ERATableData } from "./QAfileTableData";

const ERA = () => {
  const data = useMemo(() => ERATableData, []);
  const columns = useMemo(() => [...ERATableColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      { columns, data },
      useSortBy,
      usePagination,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <CheckBox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              Cell: ({ row }) => (
                <div>
                  <CheckBox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
            ...columns,
          ];
        });
      }
    );
  return (
    <div>
      <h1 className="text-lg my-2 text-orange-400">ERA FILE</h1>
      <div>
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

export default ERA;
