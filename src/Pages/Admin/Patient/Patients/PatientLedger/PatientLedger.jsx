import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Switch } from "@mui/material";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { useParams } from "react-router-dom";
import {
  PatientLedgerColumnsColumn,
  PatientLedgerColumnsData,
} from "./PatientLedger/PatientLedgerColumns";
import UseTable from "../../../../../Utilities/UseTable";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
const PatientLedger = () => {
  const { id } = useParams();
  console.log("patient Ledger", id);
  const [table, setTable] = useState(false);
  const [value, setValue] = useState(false);

  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

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
        <h1 className="text-lg my-2 text-orange-500">AR Ledger</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7  my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Patient
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("patient")}
            >
              <option value="name"> abcd </option>
            </select>
          </div>
          <div className="mt-2 ml-2">
            <h1 className="text-xs text-gray-500 mb-2 ml-1 ">Select Date</h1>

            <div className="flex  items-center">
              <BsCalendar3WeekFill className=" text-gray-600 bg-gray-200 p-[5px] text-3xl" />
              <DatePicker
                style={{
                  color: "#5c5c5c",
                  padding: "14px 5px",
                  fontSize: "12px",
                  border: "1px solid #a9a9a9",
                  borderRadius: "0px",
                }}
                value={dates}
                onChange={setDates}
                range
                sort
                format={format}
                calendarPosition="bottom-center"
                plugins={[<DatePanel />]}
              />
            </div>
          </div>

          {/* CPT Code  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                CPT Code
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("CPT_Code")}
            >
              <option value="name">EFT</option>
            </select>
          </div>

          {/*Aging Status  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Aging Status
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("aging_status")}
            >
              <option value="name">EFT</option>
            </select>
          </div>
          <div className="flex mt-6 items-center ">
            <Switch
              size="small"
              onClick={() => {
                setValue(!value);
              }}
            />
            <h1 className="text-xs ">Zero Paid</h1>
          </div>

          {/* submit  */}
          <button
            className="px-5 mt-8 w-20 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            View
          </button>
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
        </div>
      )}
    </div>
  );
};

export default PatientLedger;
