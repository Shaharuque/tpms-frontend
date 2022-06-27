import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { ServiceColumns } from "./CreateServiceRules/CreateServiceColumns";
import CreateServiceComponent from "./CreateServiceRules/CreateServiceComponent";

const CreateServiceRules = () => {
  const data = useMemo(() => ServiceColumns, []);

  const columns = useMemo(
    () => [
      {
        Header: "Rule",
        accessor: "rule", // accessor is the "key" in the data
      },
      {
        Header: "Description/Message",
        accessor: "description",
      },
      {
        Header: "Run Rule",
        Cell: ({ row }) => {
          // the value is 'this is a test'
          // console.log(row);
          return <CreateServiceComponent row={row}></CreateServiceComponent>;
        },
      },
      {
        Header: "Prevent Session Creation",
        Cell: ({ row }) => {
          // the value is 'this is a test'
          // console.log(row);
          return <CreateServiceComponent row={row}></CreateServiceComponent>;
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
    <div>
      <h1 className="text-lg my-2 text-orange-400">Service Rules</h1>
      <CssBaseline />
      <div className="">
        <table className="border w-24 sm:w-full " {...getTableProps()}>
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
      <button className="px-5 my-5 mb-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md ">
        Save
      </button>
    </div>
  );
};

export default CreateServiceRules;
