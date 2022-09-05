import { Dialog } from "@mui/material";
import React, { useMemo } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import {
  PatientsAuthorizationsTableColumn,
  PatientsAuthorizationsTableData,
} from "./PatientsColumns";

const PatientAuthorizationsTableModal = ({
  handleClose,
  open,
  editableRow,
}) => {
  const data = useMemo(() => PatientsAuthorizationsTableData, []);
  const columns = useMemo(() => [...PatientsAuthorizationsTableColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, useRowSelect);
  return (
    <div>
      <div>
        <Dialog
          // fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="box p-3">
            <div className="pb-3 overflow-y-hidden">
              <table
                className="border overflow-scroll  sm:w-full "
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="bg-secondary border  min-w-[120px]  py-1 text-xs font-normal text-white"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          {/* Add a sort direction indicator */}
                          <span className="">
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ⇓ "
                                : " ⇑ "
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                border: "solid 1px #aeaeae55",
                              }}
                              className="text-xs py-[6px] w-10 md:w-24 text-center text-gray-600 "
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-action">
              {/* <input type="submit" /> */}
              <button
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleClose}
              >
                CANCEL
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default PatientAuthorizationsTableModal;
