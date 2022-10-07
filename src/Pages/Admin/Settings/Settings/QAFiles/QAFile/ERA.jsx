import React, { useMemo, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import ERAActionModal from "./ERAActionModal";
import { ERATableColumn, ERATableData } from "./QAfileTableData";

const ERA = () => {
  const [action, setAction] = useState(false);
  const data = useMemo(() => ERATableData, []);
  const columns = useMemo(() => [...ERATableColumn], []);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const [editableRowIndex, setEditableRowIndex] = React.useState(null);
  // console.log(editableRowIndex);
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
                  {/* <CheckBox {...getToggleAllRowsSelectedProps()} /> */}
                </div>
              ),
              Cell: ({ row }) => (
                <div>
                  {/* <CheckBox {...row.getToggleRowSelectedProps()} /> */}
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
                    <BsEyeFill
                      onClick={() => {
                        setEditableRowIndex(row);
                        setOpenEditModal(true);
                      }}
                      className="text-primary"
                    />
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
        {/* <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></SettingTableBox> */}
      </div>
      {openEditModal && (
        <ERAActionModal
          handleClose={handleClose}
          open={openEditModal}
          row={editableRowIndex}
        ></ERAActionModal>
      )}
    </div>
  );
};

export default ERA;
