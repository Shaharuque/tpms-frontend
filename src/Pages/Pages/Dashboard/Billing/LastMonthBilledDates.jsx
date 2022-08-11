import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { FiDownload } from "react-icons/fi";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BilledTableColumn, BilledTableData } from "./BillingTableData";
import SettingTableBox from "../../Settings/SettingComponents/SettingTableBox";
import { AiOutlineFileText } from "react-icons/ai";
import DetailTable from "./LastMonthBilledDetails/DetailTable";

const LastMonthBilledDates = () => {
  const [sortBy, setSortBy] = useState("");
  const [active, setActive] = useState(false);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };

  const [tableOpen, setTableOpen] = useState(false);
  const data = useMemo(() => BilledTableData, []);
  const columns = useMemo(() => [...BilledTableColumn], []);
  const [editableRowIndex, setEditableRowIndex] = React.useState(null);
  console.log(editableRowIndex);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // page,
    prepareRow,
  } = useTable(
    { columns, data },
    useSortBy,
    usePagination,
    useRowSelect,
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
                <AiOutlineFileText
                  className="mx-auto text-primary"
                  onClick={() => {
                    setTableOpen(true);
                    setEditableRowIndex(row);
                  }}
                  row={row}
                />
              </div>
            </>
          ),
        },
      ]);
    }
  );
  return (
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">
          Last Month Billed Dates
        </h1>
        <div className="">
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Date Type
              </span>
            </label>
            <select
              onChange={handleSortBy}
              name="type"
              className="border rounded-sm  font-normal px-2 w-36 py-1 text-xs "
            >
              <option value=""></option>
              <option value="Specific_Date">Specific Date</option>
              <option value="Date_Range">Provider</option>
            </select>
          </div>
          {active && (
            <>
              {" "}
              {sortBy === "Specific_Date" && (
                <div>
                  <label className="label">
                    <span className="label-text font-normal text-xs text-gray-500 text-left">
                      Specific Date
                    </span>
                  </label>
                  <input
                    className="border rounded-sm px-2 font-normal py-1 mx-1 text-xs w-full"
                    type="date"
                    {...register("specific_date")}
                  />
                </div>
              )}
              {sortBy === "Date_Range" && (
                <div>
                  <label className="label">
                    <span className="label-text text-xs font-normal text-gray-500 text-left">
                      Date Range
                    </span>
                  </label>
                  <input
                    className="border rounded-sm font-normal px-2 py-1 mx-1 text-xs w-full"
                    type="date"
                    {...register("date_range")}
                  />
                </div>
              )}
            </>
          )}

          <div>
            <button
              className=" mr-1 py-1 mt-9 w-16 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Go
            </button>
            <button className=" py-1 mt-9 w-16 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Export
            </button>
          </div>
        </div>
      </form>

      {/* table  */}
      <div>
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <h1 className="text-lg my-2 text-orange-500">Billed Table</h1>
          <div className="">
            <FiDownload className="text-secondary font-medium" />
          </div>
        </div>
        <div className="my-2">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      </div>

      {/* Detail Table  */}
      {tableOpen && <DetailTable row={editableRowIndex}></DetailTable>}
    </div>
  );
};

export default LastMonthBilledDates;
