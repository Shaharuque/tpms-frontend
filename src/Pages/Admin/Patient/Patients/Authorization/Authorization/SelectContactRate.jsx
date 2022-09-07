import React, { useMemo } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Dialog } from "@mui/material";
import {
  ContactedModalColumn,
  ContactedModalData,
} from "../AddAuthorization/AuthorizationEditColumns";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../../../../../Pages/Settings/SettingComponents/CheckBox";
import UseTable from "../../../../../../Utilities/UseTable";

const SelectContactRate = ({ handleClose, open, editableRow }) => {
  const data = useMemo(() => ContactedModalData, []);
  const columns = useMemo(() => [...ContactedModalColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, useRowSelect, (hooks) => {
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
  });
  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box sm:w-[1200px]">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Edit Document
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary"
              />
            </div>
            <UseTable
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            ></UseTable>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SelectContactRate;
