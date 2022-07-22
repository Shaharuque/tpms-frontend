import { Dialog } from "@mui/material";
import React, { useMemo } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../Settings/SettingComponents/CheckBox";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import {
  ContactedModalColumn,
  ContactedModalData,
} from "./AuthorizationEditColumns";

const AuthorizationContactedModal = () => {
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
                    className="bg-secondary border  min-w-[120px]  py-1 text-sm text-white"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
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
                          border: "solid 1px gray",
                        }}
                        className="text-xs w-10 md:w-24 text-center text-gray-600 py-[6px]"
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
    </div>
  );
};

export default AuthorizationContactedModal;
