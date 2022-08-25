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
import { DateRangePicker } from "rsuite";
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
    // console.log(data);
    setSdate(dates[1].format());
    reset();
  };

  const data = useMemo(() => MPostingColumnsData, []);
  const columns = useMemo(() => [...MPostingColumnsColumn], []);
  const [editableRow, setEditableRow] = React.useState(null);

  // console.log("editableRow", editableRow);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    state,
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
                  <Link to={`/admin/billing/deposit-apply/${row.original.id}`}>
                    <MdOutlineDashboard title="Deposit" />
                  </Link>

                  <Link to={`/admin/billing/deposit-add/${row.original.id}`}>
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
                        // console.log("updated row values:");
                        // console.log(updatedRow);
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

  // console.log(sdate);
  return (
    <div className="h-[100vh]">
      <div className="md:flex mb-2 flex-wrap  items-center justify-between">
        <h1 className="text-lg text-orange-400">M-Posting</h1>
        <Link to={"/admin/billing/deposit-add"}>
          <button className="px-10 py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded-md">
            Add New Data
          </button>
        </Link>
      </div>
      <div>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-6  mr-2 gap-2">
            <div>
              <div className="mt-2 ml-2">
                <h1 className="text-xs mb-2 ml-1 ">Deposit Date Range</h1>
                <div>
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-2 ml-2">
                <h1 className="text-xs mb-2 ml-1 ">Check Date Range</h1>
                <div>
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-xs mb-2 ml-1 ">Payee type</h1>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                className=" border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("payee_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Check No.</h1>

              <input
                type="number"
                name="check_no"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("check_no")}
              />
            </div>
            <div className="flex ">
              <button
                className=" py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Go
              </button>
              <button className="font-normal  py-2 mt-7 px-3 text-xs ml-3 bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h1 className="mb-3">Deposit List</h1>
        <div>
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={page}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      </div>

      {/* <div>
        <MDepositDetailsTable></MDepositDetailsTable>
      </div> */}
    </div>
  );
};

export default MPosting;
