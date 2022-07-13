import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { Switch } from "@mui/material";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  ARLedgerColumnsColumn,
  ARLedgerColumnsData,
} from "./ARLedger/ARLedgerColumns";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";

const ArLedger = () => {
  const [select, setSelect] = useState("");
  const [table, setTable] = useState(false);
  const [value, setValue] = useState(false);
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

  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

  console.log(dates);

  const data = useMemo(() => ARLedgerColumnsData, []);
  const columns = useMemo(() => [...ARLedgerColumnsColumn], []);
  const [editableRow, setEditableRow] = React.useState(null);

  // console.log("editableRow", editableRow);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    // page,
    prepareRow,
  } = useTable(
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
    },
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // other hooks such as selection hook
        ...columns,
        // edit hook
        {
          accessor: "action",
          id: "action",
          Header: "Action",
          Cell: ({ row, setEditableRow, editableRow }) => <></>,
        },
      ]);
    }
  );

  const { pageIndex, pageSize } = state;
  return (
    <div className="h-[100vh]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-2"
          style={{
            transition: "all .3s ease-out",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg my-2 text-orange-500">Add/Edit Rate:</h1>
            <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-5 mr-2 gap-5">
              {/* name  */}
              <div className="mt-2 ">
                <h1 className="text-xs text-gray-500 mb-3 ml-1 ">Post By</h1>
                <select
                  onChange={(e) => setSelect(e.target.value)}
                  name="post"
                  className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                >
                  <option value=""></option>
                  <option value="claim_no">Claim No</option>
                  <option value="patient">Patient</option>
                </select>
              </div>
              {select === "claim_no" ? (
                <div className="mt-2 ">
                  <h1 className="text-xs mb-3 ml-1 ">Claim No</h1>
                  <input
                    type="number"
                    name="check"
                    className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                    {...register("client_code")}
                  />
                </div>
              ) : (
                <>
                  <div className="mt-2 ml-2">
                    <h1 className="text-xs text-gray-500 mb-3 ml-1 ">
                      Select Date
                    </h1>

                    <div className="flex  items-center">
                      <BsCalendar3WeekFill className=" text-gray-600 bg-gray-200 p-[6px] text-3xl" />
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

                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        Patient
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("patient")}
                    >
                      <option value="name"> abcd </option>
                    </select>
                  </div>
                  {/* CPT Code  */}
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        CPT Code
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                      className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                      {...register("aging_status")}
                    >
                      <option value="name">EFT</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <Switch
                      size="small"
                      onClick={() => {
                        setValue(!value);
                      }}
                    />
                    <h1 className="text-xs ">Zero Paid</h1>
                  </div>
                </>
              )}

              {/* submit  */}
              <button
                className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                View
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      {table && (
        <div className="my-5">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          ></SettingTableBox>

          <div className="flex gap-2 items-center my-5 justify-center">
            <button
              className="hover:bg-secondary page text-lg text-secondary hover:text-white py-1 px-3"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <BiLeftArrow />
            </button>
            <div className="text-sm font-normal">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </div>
            <button
              className="hover:bg-secondary text-lg page text-secondary  hover:text-white py-1 px-3"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <BiRightArrow />
            </button>
            <select
              className="bg-secondary text-sm p-[3px] text-white "
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 15, 20, 50].map((p) => (
                <option key={p} value={p}>
                  <span className="bg-primary">{p}</span>
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArLedger;
