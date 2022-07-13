import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { DataColumns } from "./DataImport/Columns";
import DataImportComponent from "./DataImport/DataImportComponent";

const DataImport = () => {
  const data = useMemo(() => DataColumns, []);

  const columns = useMemo(
    () => [
      {
        Header: "Created",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Filename",
        accessor: "col2",
      },
      {
        Header: "Password",
        accessor: "col3",
      },
      {
        Header: "Status",
        Cell: ({ row }) => {
          // the value is 'this is a test'
          // console.log(row);
          return <DataImportComponent row={row}></DataImportComponent>;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <div className="p-2">
      <h1 className="text-sm my-2">Recent Exports</h1>
      <CssBaseline />
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
                    <span className="  ">
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
    </div>
  );
};

export default DataImport;
