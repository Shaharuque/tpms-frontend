import React, { useMemo, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../SettingComponents/CheckBox";
import SettingTableBox from "../SettingComponents/SettingTableBox";
import { ERATableColumn, ERATableData } from "./QAfileTableData";

const ERA = () => {
  const [action, setAction] = useState(false);
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
      },
      (hooks) => {
        hooks.allColumns.push((columns) => [
          // other hooks such as selection hook
          ...columns,
          // edit hook
          {
            accessor: "action",
            id: "action",
            Header: "Action",
            Cell: ({ row, setEditableRow, editableRow }) => (
              <>
                <div>
                  <div className="flex justify-center gap-1 text-primary">
                    <BsEyeFill className="text-primary" />
                  </div>
                </div>
              </>
            ),
          },
        ]);
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
