import { Select } from "antd";
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

const RecurringSession = () => {
  const data = useMemo(() => RecurringSessionColumnsData, []);
  const columns = useMemo(() => [...RecurringSessionColumnsColumn], []);

  const { Option } = Select;
  const patient = [];
  const provider = [];
  const [providers, setProviders] = useState([]);
  const [service, setService] = useState("");
  const [patients, setPatients] = useState([]);
  const patientData = ["m", "v", "c"];
  const providerData = ["m", "v", "c", "p"];
  const [table, setTable] = useState(false);

  patientData.map((e) => patient.push(<Option key={e}>{e}</Option>));
  providerData.map((e) => provider.push(<Option key={e}>{e}</Option>));
  console.log(service);

  const submitHandle = () => {
    // const data = {
    //   Patients: patients,
    //   Providers: providers,
    //   Services: service,
    //   Status: status,
    //   Date: date,
    // };
    // console.log(data);
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
      <div className="flex flex-wrap items-center gap-2">
        <div>
          <h1 className="text-xs mb-3 ml-1 ">Select Any</h1>
          <select
            onChange={(e) => setService(e.target.value)}
            name="type"
            className="border rounded-sm px-2 w-36 py-[6px] text-xs "
          >
            <option value="all">All</option>
            <option value="patient">Patient</option>
            <option value="provider">Provider</option>
          </select>
        </div>
        {service === "patient" ? (
          <div className="w-[50%]">
            <h1 className="text-xs mb-3 ml-1 ">Patient</h1>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              onChange={(e) => setPatients(e)}
            >
              {patient}
            </Select>
          </div>
        ) : service === "provider" ? (
          <div className=" w-[50%]">
            <h1 className="text-xs mb-3 ml-1 ">Provider</h1>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              onChange={(e) => setProviders(e)}
            >
              {provider}
            </Select>
          </div>
        ) : (
          <></>
        )}
        <button
          onClick={submitHandle}
          className="px-5 mt-6 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          Go
        </button>
      </div>
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
