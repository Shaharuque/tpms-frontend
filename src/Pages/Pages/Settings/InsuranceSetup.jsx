import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  InsuranceSetupColumn,
  InsuranceSetupData,
} from "./InsuranceSetup/InsuranceSetupColumns";
import SettingTableBox from "./SettingComponents/SettingTableBox";
import { CheckBox } from "./SettingComponents/CheckBox";
import InsuranceEditModal from "./InsuranceSetup/InsuranceEditModal";
import { RiPencilLine } from "react-icons/ri";
import InsuranceEditComponent from "./InsuranceSetup/InsuranceEditComponent";

const InsuranceSetup = () => {
  const data = useMemo(() => InsuranceSetupData, []);
  const columns = useMemo(() => [...InsuranceSetupColumn], []);

  const [editableRowIndex, setEditableRowIndex] = React.useState(null);
  console.log(editableRowIndex);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    selectedFlatRows,
    // page,
    prepareRow,
  } = useTable(
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
                  <RiPencilLine
                    onClick={() => {
                      // row requested for edit access
                      setEditableRowIndex(row);
                    }}
                  />
                </div>
              </div>
            </>
          ),
        },
      ]);
    }
  );
  console.log(selectedFlatRows);

  return (
    <div>
      <SettingTableBox
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={page}
        prepareRow={prepareRow}
      ></SettingTableBox>

      {editableRowIndex && (
        <InsuranceEditComponent row={editableRowIndex}></InsuranceEditComponent>
      )}
    </div>
  );
};

export default InsuranceSetup;
