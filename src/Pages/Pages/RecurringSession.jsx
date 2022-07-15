import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  RecurringSessionColumnsColumn,
  RecurringSessionColumnsData,
} from "./RecurringSession/RecurringSessionColumns";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

const RecurringSession = () => {
  const data = useMemo(() => RecurringSessionColumnsData, []);
  const columns = useMemo(() => [...RecurringSessionColumnsColumn], []);

  const [table, setTable] = useState(false);
  const [select, setSelect] = useState("");

  const provider = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vip", label: "VIP" },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [patientsSelected, setPatientsSelected] = useState([]);
  const [providerSelected, setProviderSelected] = useState([]);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    console.log(data);
    setTable(true);
  };

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
    selectedFlatRows,
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
    }
  );
  console.log(selectedFlatRows);
  const { pageIndex, pageSize } = state;

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg my-2 text-orange-500">Recurring Session</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-2 flex-wrap">
          <div>
            <h1 className="text-xs mb-2 ml-1 ">Select Any</h1>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="type"
              className="border rounded-sm px-2 w-36 py-2 text-xs "
            >
              <option value="all">All</option>
              <option value="patient">Patient</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          {select === "patient" ? (
            <div className="w-[100%] md:w-[20%]">
              <div>
                <h1 className="text-xs mb-2 ml-1 ">Patients</h1>
                <MultiSelect
                  options={options}
                  value={patientsSelected}
                  onChange={setPatientsSelected}
                  labelledBy="Select"
                  className="text-xs"
                />
              </div>
            </div>
          ) : select === "provider" ? (
            <div className="w-[100%] md:w-[20%]">
              <h1 className="text-xs mb-2 ml-1 ">Provider</h1>
              <MultiSelect
                options={options}
                value={providerSelected}
                onChange={setProviderSelected}
                labelledBy="Select"
                className="text-xs"
              />
            </div>
          ) : (
            <></>
          )}

          <button
            className="px-5 mt-6 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
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
      <Link to={"/recurring-session-edit"}> Click Here</Link>
    </div>
  );
};

export default RecurringSession;
