import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { DateRangePicker, Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";
import UseTable from "../../../../../../Utilities/UseTable";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../../../../../Pages/Settings/SettingComponents/CheckBox";
import {
  PaymentDepositsColumn,
  PaymentDepositsData,
} from "../TrendingReportsTableData";

const ApplyPayment = () => {
  const [value, setValue] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [tableOpen, setTableOpen] = useState(false);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setTableOpen(!tableOpen);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Post By
              </span>
            </label>
            <select
              onChange={handleSortBy}
              name="type"
              className="border border-gray-300 rounded-sm py-[5px] font-normal px-2 w-full text-xs "
            >
              <option value=""></option>
              <option value="claim_no">Claim No</option>
              <option value="patient">Patient</option>
            </select>
          </div>
          {sortBy === "claim_no" && (
            <div>
              <label className="label">
                <span className="label-text font-medium text-xs text-gray-600 text-left">
                  Claim No
                </span>
              </label>
              <input
                placeholder="Claim No"
                className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
                type="text"
                {...register("claim")}
              />
            </div>
          )}

          {sortBy === "patient" && (
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Patient
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("patient_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
          )}
          {sortBy === "patient" && (
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Selected date
                </span>
              </label>
              <div className="ml-1">
                <DateRangePicker
                  onChange={(date) => {
                    console.log(date);
                  }}
                  placeholder="Select Date"
                />
              </div>
            </div>
          )}
          <div className="col-span-4 flex gap-2">
            <div className="mt-5">
              <div className="flex items-center gap-1 ">
                <Toggle
                  checkedChildren={<CheckIcon />}
                  unCheckedChildren={<CloseIcon />}
                  checked={value ? true : false}
                  size="sm"
                  onClick={() => {
                    setValue(!value);
                  }}
                />

                <span className="label-text text-xs text-gray-600 text-left">
                  All Clients
                </span>
              </div>
              <div className="flex items-center gap-1 ">
                <Toggle
                  checkedChildren={<CheckIcon />}
                  unCheckedChildren={<CloseIcon />}
                  checked={value ? true : false}
                  size="sm"
                  onClick={() => {
                    setValue(!value);
                  }}
                />

                <span className="label-text text-xs text-gray-600 text-left">
                  Include Closed
                </span>
              </div>
            </div>
            <div>
              <button
                className=" mr-1 py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r from-primary to-primary  hover:to-primary text-white rounded-sm"
                type="submit"
              >
                Ok
              </button>
              <button
                onClick={() => {
                  setTableOpen(!tableOpen);
                }}
                className=" py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="font-normal text-xs">
        <span className="text-primary text-xs font-semibold mr-1">
          Total Amount
        </span>
        344.00
        <span className="text-primary text-xs font-semibold mx-1">
          Amount Applied
        </span>
        0.00
        <span className="text-primary text-xs font-semibold mx-1">
          Amount Remaining
        </span>
        344.00
      </div>

      {tableOpen && (
        <div>
          <div className="my-3">
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
      )}
    </div>
  );
};

export default ApplyPayment;
