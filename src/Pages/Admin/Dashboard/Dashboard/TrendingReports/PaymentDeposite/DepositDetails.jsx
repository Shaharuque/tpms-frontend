import React, { useMemo } from "react";
import { useRowSelect, useSortBy, useTable } from "react-table";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { DateRangePicker } from "rsuite";
import {
  DepositDetailsColumn,
  DetailsDepositsData,
} from "../TrendingReportsTableData";
import UseTable from "../../../../../../Utilities/UseTable";

const DepositDetails = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };
  const handleSortBy = (e) => {};

  const data = useMemo(() => [...DetailsDepositsData], []);
  const columns = useMemo(() => [...DepositDetailsColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, useRowSelect);
  return (
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-600">Cash-Posting</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/m-remittance"}
            className=" py-[6px] flex items-center  px-4  text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="my-3">
        <div className="flex items-center justify-between">
          <h1 className="text-sm font-medium my-2">Deposit Details</h1>
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

export default DepositDetails;
