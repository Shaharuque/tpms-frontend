import React from "react";

const UseTable = ({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
  prepareRow,
}) => {
  return (
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
                  className="bg-secondary border min-w-[20px] max-w-[50px] py-1 text-xs font-normal text-white"
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
                        border: "solid 1px #aeaeae55",
                      }}
                      //just use min-w-[30px] to solve the issue of customized cell width and md:something is removed no needed here
                      className="text-xs py-[6px] min-w-[20px] max-w-[50px] text-center text-gray-600 "
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

export default UseTable;
