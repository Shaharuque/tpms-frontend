import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { RecurringSessionColumn } from "./RecurringSession/RecurringSessionColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import SettingTableBox from "../../../Pages/Settings/SettingComponents/SettingTableBox";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";

const RecurringSession = () => {
  const [table, setTable] = useState(false);
  const [select, setSelect] = useState("");
  const [SessionData, SetSessionData] = useState([]);

  // calling recurring session fakedb
  useEffect(() => {
    axios("../recurringSession.json")
      .then((response) => {
        SetSessionData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // -----------------------------------------------form-------------------------------
  const { handleSubmit } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setTable(true);
  };

  // -----------------------------------------------Table-------------------------------
  const data = useMemo(() => SessionData, [SessionData]);
  const columns = useMemo(() => [...RecurringSessionColumn], []);
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
  // console.log(selectedFlatRows);

  // -----------------------------------------------Multi-Select-------------------------------
  const [value, setValue] = useState([]);
  const datat = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));

  console.log(value);

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <h1 className="text-lg my-2 text-orange-500">Recurring Session</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Place of Services
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
              onChange={(e) => setSelect(e.target.value)}
              name="type"
            >
              <option value="all">All</option>
              <option value="patient">Patient</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          {select === "patient" ? (
            <div>
              <h1 className="text-xs mb-2 ml-1 mt-2">Patients</h1>
              <CustomMultiSelection
                data={datat}
                value={value}
                setValue={setValue}
              ></CustomMultiSelection>
            </div>
          ) : select === "provider" ? (
            <div>
              <h1 className="text-xs mb-2 ml-1 mt-2">Provider</h1>
              <CustomMultiSelection
                data={datat}
                value={value}
                setValue={setValue}
              ></CustomMultiSelection>
            </div>
          ) : (
            <></>
          )}
          <button
            className="font-regular mt-[35px] w-1/4  py-[3px]  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
      {/* table  */}
      {table && (
        <div className="my-5">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      )}
    </div>
  );
};

export default RecurringSession;
