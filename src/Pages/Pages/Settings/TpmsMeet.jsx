import React, { useMemo } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { useSortBy, useTable } from "react-table";
import { MeetColumns } from "./TPMS/Columns";
const TpmsMeet = () => {
  const data = useMemo(() => MeetColumns, []);

  const columns = useMemo(
    () => [
      {
        Header: "Meet Link",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Created Date",
        accessor: "col2",
      },
      {
        Header: "Video Url",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="p-2">
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-sm">Meet Lists</h1>
        <button className="px-10 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          Add New Data
        </button>
      </div>
      <table className="border w-24 sm:w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="bg-secondary border   py-1 text-sm text-white"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span className=" ml-4 ">
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
  );
};

export default TpmsMeet;
