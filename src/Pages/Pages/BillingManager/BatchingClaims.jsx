import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../Settings/SettingComponents/CheckBox";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import {
  BatchingClaimsColumnsColumn,
  BatchingClaimsColumnsData,
} from "./BatchingClaimsColumns";

const BatchingClaims = () => {
  const [active, setActive] = useState(false);
  const [tableActive, setTableActive] = useState(false);
  const [insuranceSelect, setInsuranceSelect] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { handleSubmit, register, reset } = useForm();

  const data = useMemo(() => BatchingClaimsColumnsData, []);
  const columns = useMemo(() => [...BatchingClaimsColumnsColumn], []);

  const onSubmit = (data) => {
    console.log(data);
    data.date && setTableActive(true);
    reset();
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-400">Batching Claim(s)</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-wrap items-center gap-2">
            {" "}
            {/* Sort By  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Sort By
                </span>
              </label>
              <select
                onChange={handleSortBy}
                name="type"
                className="border rounded-sm px-2 w-36 py-1 text-xs "
              >
                <option value="all">All</option>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>
            {active && (
              <>
                {" "}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      {sortBy}
                    </span>
                  </label>
                  <select
                    // onChange={(e) => setInsuranceSelect(e.target.value)}
                    name="type"
                    className="border rounded-sm px-2 w-36 py-1 text-xs "
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      To Date
                    </span>
                  </label>
                  <input
                    className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                    type="date"
                    {...register("date")}
                  />
                </div>
              </>
            )}
            {/* submit  */}
            <button
              className=" py-1 mt-8  px-3 text-sm font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Go
            </button>
            <button className="font-normal  py-1 mt-8 px-3 text-sm bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
              Cancel
            </button>
            {tableActive && (
              <>
                {" "}
                <button className="font-normal  py-1 mt-8 px-3 text-sm bg-gray-500 text-white rounded-md">
                  Generate Batch
                </button>
                <button
                  className=" py-1 mt-8 px-3 text-sm font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Generate CSV
                </button>
              </>
            )}
          </div>
        </form>
      </div>
      {tableActive && (
        <div className="my-5">
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
                        className="bg-secondary border  min-w-[150px]  py-1 text-sm text-white"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
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
      )}
    </div>
  );
};

export default BatchingClaims;
