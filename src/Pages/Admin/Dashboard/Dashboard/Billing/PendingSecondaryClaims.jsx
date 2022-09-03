import React, { useMemo } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import {
  PendingSecondaryClaimsColumn,
  PendingSecondaryClaimsData,
} from "./BillingTableData";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import { useForm } from "react-hook-form";
import UseTable from "../../../../../Utilities/UseTable";

const PendingSecondaryClaims = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };
  const data = useMemo(() => [...PendingSecondaryClaimsData], []);
  const columns = useMemo(() => [...PendingSecondaryClaimsColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, useRowSelect, (hooks) => {
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
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Manage Claim(s)</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="my-2">
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-9 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Place of Services
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("pos")}
              >
                <option value=""></option>
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className=" mr-1 py-1 mt-9 px-2 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              type="submit"
            >
              Ok
            </button>
            <button className=" py-1 mt-9 px-2 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PendingSecondaryClaims;
