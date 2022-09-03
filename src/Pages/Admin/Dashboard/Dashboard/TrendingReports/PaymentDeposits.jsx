import React, { useMemo } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import { useForm } from "react-hook-form";
import {
  PaymentDepositsData,
  PaymentDepositsColumn,
} from "./TrendingReportsTableData";
import UseTable from "../../../../../Utilities/UseTable";
import { DateRangePicker } from "rsuite";

const PaymentDeposits = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };
  const handleSortBy = (e) => {};

  const data = useMemo(() => [...PaymentDepositsData], []);
  const columns = useMemo(() => [...PaymentDepositsColumn], []);
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
        <h1 className="text-lg my-2 text-orange-600">Cash-Posting</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/deposit-add"}
            className=" py-[6px] flex items-center  px-4  text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            + ADD Deposit
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-xs  font-medium text-gray-600 text-left">
                Deposit Date Range
              </span>
            </label>
            <div>
              <DateRangePicker
                onChange={(date) => {
                  console.log(date);
                }}
                placeholder="Select Date"
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs  font-medium text-gray-600 text-left">
                Check Date Range
              </span>
            </label>
            <div>
              <DateRangePicker
                onChange={(date) => {
                  console.log(date);
                }}
                placeholder="Select Date"
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Payee type
              </span>
            </label>
            <div>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("payee_type")}
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
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Payee Name
              </span>
            </label>
            <div>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("payee_name")}
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
            <label className="label">
              <span className="label-text font-medium text-xs text-gray-600 text-left">
                Check No.
              </span>
            </label>
            <input
              className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
              type="text"
              {...register("check_no")}
            />
          </div>
          <div>
            <button
              className=" mr-1 py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              type="submit"
            >
              Ok
            </button>
            <button className=" py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm">
              Cancel
            </button>
          </div>
        </div>
      </form>

      <div className="my-3">
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-medium my-2">Deposit List</h1>
          <FiDownload className="text-secondary font-medium" />
        </div>
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div>

      <div>
        <div className="flex item-center flex-wrap">
          <div>
            <select
              onChange={handleSortBy}
              name="type"
              className="border border-gray-300 rounded-sm py-[5px] font-normal px-2 w-36 text-xs "
            >
              <option value=""></option>
              <option value="Specific_Date">Specific Date</option>
              <option value="Date_Range">Provider</option>
            </select>
          </div>
          <button className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeposits;
