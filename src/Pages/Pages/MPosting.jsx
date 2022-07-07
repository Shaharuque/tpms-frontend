import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { usePagination, useSortBy, useTable } from "react-table";
import {
  MPostingColumnsColumn,
  MPostingColumnsData,
} from "./MPosting/MPostingColumns";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFileEarmark, BsPrinter } from "react-icons/bs";
// import MDepositDetailsTable from "./MPosting/MDepositDetailsTable";

const MPosting = () => {
  // date range
  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);
  const [Cdates, setCdates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

  const [sdate, setSdate] = React.useState();
  // setSdate(dates[1].format());
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // setSubmitted(data);
    console.log(data);
    setSdate(dates[1].format());
    reset();
  };

  const data = useMemo(() => MPostingColumnsData, []);
  const columns = useMemo(() => [...MPostingColumnsColumn], []);
  const [editableRow, setEditableRow] = React.useState(null);

  console.log("editableRow", editableRow);
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
    { columns, data, editableRow, setEditableRow },
    useSortBy,
    usePagination,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // other hooks such as selection hook
        ...columns,
        // edit hook
        {
          accessor: "action",
          id: "action",
          Header: "Action",
          Cell: ({ row, setEditableRow, editableRow }) => (
            <>
              <div>
                <div className="flex justify-center gap-1 text-primary">
                  <Link to={`/billing/deposit-apply/${row.original.id}`}>
                    <MdOutlineDashboard title="Deposit" />
                  </Link>

                  <Link to={`/billing/deposit-add/${row.original.id}`}>
                    <FiEdit3 title="Edit" />
                  </Link>

                  <Link to={"/"}>
                    <AiOutlineDelete title="Delete" />
                  </Link>

                  <BsFileEarmark
                    title="Details"
                    onClick={() => {
                      const currentIndex = row.index;
                      if (editableRow !== currentIndex) {
                        // row requested for edit access
                        setEditableRow(row);
                      } else {
                        // request for saving the updated row
                        setEditableRow(null); // keep the row closed for edit after we finish updating it
                        const updatedRow = row.values;
                        console.log("updated row values:");
                        console.log(updatedRow);
                        // call your updateRow API
                      }
                    }}
                  />

                  <Link to={"/"}>
                    <BsPrinter title="Print" />
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ]);
    }
  );

  const { pageIndex, pageSize } = state;

  console.log(sdate);
  return (
    <div className="h-[100vh]">
      <div className="md:flex mb-2 flex-wrap  items-center justify-between">
        <h1 className="text-lg text-orange-400">M-Posting</h1>
        <Link to={"/billing/deposit-add"}>
          <button className="px-10 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            Add New Data
          </button>
        </Link>
      </div>
      <div>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-8  mr-2 gap-5">
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Deposit Date Range</h1>
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
              <h1 className="text-xs mb-2 ml-1 ">Check Date Range</h1>
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
                  value={Cdates}
                  onChange={setCdates}
                  range
                  sort
                  format={format}
                  calendarPosition="bottom-center"
                  plugins={[<DatePanel />]}
                />
              </div>
            </div>

            <div>
              <h1 className="text-xs mb-2 ml-1 ">Payee type</h1>
              <select
                className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                {...register("Pay_type")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Payee Name</h1>
              <select
                className=" border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                {...register("payee_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Check No.
                </span>
              </label>
              <input
                type="number"
                name="check_no"
                className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                {...register("check_no")}
              />
            </div>
            <div className="flex mt-2">
              <button
                className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Go
              </button>
              <button className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-red-700 to-red-400  ml-3 hover:to-red-700 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h1>Deposit List</h1>
        <div>
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
      </div>

      {/* <div>
        <MDepositDetailsTable></MDepositDetailsTable>
      </div> */}
    </div>
  );
};

export default MPosting;
