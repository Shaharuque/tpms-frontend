import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import React, { memo, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  ManageTableColumnsColumn,
  ManageTableColumnsData,
} from "./ListView/ManageTableColumns";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import moment from "moment";
import { Switch } from "@mui/material";

const ListView = () => {
  const { Option } = Select;
  const patient = [];
  const provider = [];
  const [patients, setPatients] = useState([]);
  const [providers, setProviders] = useState([]);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const patientData = ["m", "v", "c"];
  const providerData = ["m", "v", "c", "p"];
  const [billable, setBillable] = useState(true);
  const [table, setTable] = useState(false);

  const data = useMemo(() => ManageTableColumnsData, []);
  const columns = useMemo(() => [...ManageTableColumnsColumn], []);

  patientData.map((e) => patient.push(<Option key={e}>{e}</Option>));
  providerData.map((e) => provider.push(<Option key={e}>{e}</Option>));

  const { RangePicker } = DatePicker;

  const onChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      setDate(dateStrings[0]);
    } else {
      console.log("Clear");
    }
  };

  const submitHandle = () => {
    const data = {
      Patients: patients,
      Providers: providers,
      Services: service,
      Status: status,
      Date: date,
    };
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

  // console.log(patients);
  // console.log("providers", providers);
  // console.log("service", service);
  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap justify-between items-center mb-5">
        <h1 className="text-lg my-2 text-orange-500">Manage Sessions</h1>
        <div>
          <Switch
            defaultChecked
            size="small"
            onClick={() => setBillable(!billable)}
          />
          <label
            className="form-check-label inline-block ml-2 text-sm text-gray-500"
            htmlFor="flexSwitchCheckDefault"
          >
            {billable ? "Billable" : "Non-Billable"}
          </label>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* patients  */}
        {billable && (
          <div className=" w-36">
            <h1 className="text-xs mb-3 ml-1 ">Patients</h1>
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
        )}

        {/* provider  */}
        <div className=" w-36">
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

        {billable && (
          <>
            {/* services  */}
            <div>
              <h1 className="text-xs mb-3 ml-1 ">Place Of Service</h1>
              <select
                onChange={(e) => setService(e.target.value)}
                name="type"
                className="border rounded-sm px-2 w-36 py-[6px] text-xs "
              >
                <option value="Home">Home</option>
                <option value="Home t">Home t</option>
              </select>
            </div>

            {/* date Picker  */}
            <div>
              <h1 className="text-xs mb-3 ml-1 ">Date</h1>
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  "This Month": [
                    moment().startOf("month"),
                    moment().endOf("month"),
                  ],
                }}
                onChange={onChange}
              />
            </div>

            {/* Status  */}
            <div>
              <h1 className="text-xs mb-3 ml-1 ">Status</h1>
              <select
                onChange={(e) => setStatus(e.target.value)}
                name="type"
                className="border rounded-sm px-2 w-36 py-[6px] text-xs "
              >
                <option value="Home">Home</option>
                <option value="Home t">Home t</option>
              </select>
            </div>

            {/* button  */}

            <button
              onClick={submitHandle}
              className="px-5 mt-7 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Save
            </button>
          </>
        )}
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
    </div>
  );
};

export default memo(ListView);
