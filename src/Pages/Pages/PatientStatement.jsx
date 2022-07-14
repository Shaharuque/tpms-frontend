import React, { useMemo, useState } from "react";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import {
  PatientStatementColumnColumn,
  PatientStatementColumnData,
} from "./PatientStatement/PatientStatementColumn";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const PatientStatement = () => {
  const [select, setSelect] = useState("");
  const [tactive, setTactive] = useState(false);
  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

  const data = useMemo(() => PatientStatementColumnData, []);
  const columns = useMemo(() => [...PatientStatementColumnColumn], []);

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
      <h1 className="text-lg text-orange-400">Statement</h1>
      <div
        className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 my-5 mr-2 gap-5"
        s
      >
        <div>
          <h1 className="text-xs mb-2 ml-1 ">Post By</h1>
          <select
            onChange={(e) => setSelect(e.target.value)}
            name="post"
            className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
          >
            <option value="all_client">All Client</option>
            <option value="selective_client">Selective Client</option>
            <option value="selective_private_payor">
              Selective Private Payor
            </option>
          </select>
        </div>
        <div>
          <h1 className="text-xs mb-2 ml-1 ">Select Date</h1>
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
        <button
          className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          type="submit"
          onClick={() => setTactive(true)}
        >
          Show
        </button>
      </div>
      {tactive && (
        <div className="my-5">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      )}
    </div>
  );
};

export default PatientStatement;
