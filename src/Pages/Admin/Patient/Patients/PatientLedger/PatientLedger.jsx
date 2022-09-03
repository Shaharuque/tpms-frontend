import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { useParams } from "react-router-dom";
import {
  PatientLedgerColumnsColumn,
  PatientLedgerColumnsData,
} from "./PatientLedger/PatientLedgerColumns";
import UseTable from "../../../../../Utilities/UseTable";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import { DateRangePicker, Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";

const PatientLedger = () => {
  const { id } = useParams();
  console.log("patient Ledger", id);
  const [table, setTable] = useState(false);
  const [value, setValue] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setTable(true);
  };

  // table
  const data = useMemo(() => PatientLedgerColumnsData, []);
  const columns = useMemo(() => [...PatientLedgerColumnsColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data },
      useSortBy,
      usePagination,
      useRowSelect,
      (hooks) => {
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
      }
    );

  return (
    <div className="h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-lg mt-2 text-orange-500">Patient Ar Ledger</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7  my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Patient
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("patient")}
            >
              <option value="name"> abcd </option>
            </select>
          </div>
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

          {/* CPT Code  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                CPT Code
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("CPT_Code")}
            >
              <option value="name">EFT</option>
            </select>
          </div>

          {/*Aging Status  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Aging Status
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("aging_status")}
            >
              <option value="name">EFT</option>
            </select>
          </div>
          <div className="mt-[35px] flex sm:col-span-2">
            <div>
              <Toggle
                checkedChildren={<CheckIcon />}
                unCheckedChildren={<CloseIcon />}
                checked={value ? true : false}
                size="sm"
                onClick={() => {
                  setValue(!value);
                }}
              />
              <span className="text-xs text-gray-500 mr-3"> Zero to Paid</span>
            </div>
            <div>
              {/* submit  */}
              <button className="py-[5px]  px-3 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
                View
              </button>
            </div>
          </div>
        </div>
      </form>
      {table && (
        <div className="my-5">
          <UseTable
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          ></UseTable>
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
            <button className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientLedger;
