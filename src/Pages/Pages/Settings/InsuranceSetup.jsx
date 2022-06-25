import React, { useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import { MeetColumns } from "./InsuranceSetup/Columns";

const InsuranceSetup = () => {
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
    <table className="border" {...getTableProps()} style={{ width: "100%" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="bg-secondary text-white"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
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
                      padding: "10px",
                      border: "solid 1px gray",
                    }}
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
  );
};

export default InsuranceSetup;
