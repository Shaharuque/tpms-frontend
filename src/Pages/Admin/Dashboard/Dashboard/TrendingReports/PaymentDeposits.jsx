import React, { useEffect, useMemo, useState } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import { useForm } from "react-hook-form";
import {
  PaymentDepositsData,
  PaymentDepositsColumn,
} from "./TrendingReportsTableData";
import UseTable from "../../../../../Utilities/UseTable";
import { DateRangePicker } from "react-date-range";
import axios from "axios";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";
import { BsArrowRight } from "react-icons/bs";

const PaymentDeposits = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { ref, visible, setVisible } = useOutsideAlerter(false);
  // --------------- Form -------------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleOpenCalendar = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  //Date Range Picker
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    setVisible(false);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  const handleSortBy = (e) => {};

  const [paymentDepositData, setPaymentDepositData] = useState([]);

  // fake api call
  useEffect(() => {
    axios("../../All_Fake_Api/PaymentDeposit.json").then((response) => {
      setPaymentDepositData(response?.data);
    });
  }, []);

  const data = useMemo(() => [...paymentDepositData], [paymentDepositData]);
  const columns = useMemo(() => [...PaymentDepositsColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, useRowSelect, (hooks) => {
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
    });

  return (
    <div className="">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-600">Cash-Posting</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/deposit-add"}
            className=" py-[6px] flex items-center  px-4  text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            + ADD Deposit
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Date
              </span>
            </label>
            <div className="ml-1 text-[14px]">
              <div
                className="flex flex-wrap justify-between  items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full"
                onClick={handleOpenCalendar}
              >
                <input
                  value={
                    startDate
                      ? `${startMonth} ${startDay}, ${startYear}`
                      : "Start Date"
                  }
                  readOnly
                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                  {...register("startDate")}
                />
                <BsArrowRight className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"></BsArrowRight>
                <input
                  value={
                    endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                  }
                  readOnly
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                  {...register("endDate")}
                />
              </div>
            </div>
            <div ref={ref} className="absolute z-10  2xl:ml-[20] shadow-xl">
              {visible && (
                <div>
                  <div>
                    <DateRangePicker
                      onChange={(item) => setRange([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      className="border-2 border-gray-100"
                    />
                  </div>
                  <div className="text-right bg-[#26818F] border-r-2 rounded-b-lg range-date-ok py-0">
                    <button
                      className="px-4 m-2 text-white border border-white rounded hover:border-red-700 hover:bg-red-700"
                      type="submit"
                      onClick={handleCancelDate}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 m-2 text-secondary border border-white bg-white rounded"
                      type="submit"
                      onClick={() => setVisible(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Payee type
              </span>
            </label>
            <div>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("payee_type")}
              >
                <option value=""></option>
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Payee Name
              </span>
            </label>
            <div>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                {...register("payee_name")}
              >
                <option value=""></option>
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text font-medium text-xs text-gray-600 text-left">
                Check No.
              </span>
            </label>
            <input
              className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
              type="text"
              {...register("check_no")}
            />
          </div>
          <div>
            <button
              className=" mr-1 py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              type="submit"
            >
              Ok
            </button>
            <button className=" py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm">
              Cancel
            </button>
          </div>
        </div>
      </form>

      <div className="my-3">
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-medium my-2">Deposit List</h1>
          <FiDownload className="text-secondary font-medium" />
        </div>
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div>

      <div>
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
          <button className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeposits;
