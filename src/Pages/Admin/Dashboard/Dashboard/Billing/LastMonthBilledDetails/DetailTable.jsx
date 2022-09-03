import React, { useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { FiDownload } from "react-icons/fi";
import { DetailTableColumn, DetailTableData } from "../BillingTableData";
import UseTable from "../../../../../../Utilities/UseTable";

const DetailTable = ({ row }) => {
  const data = useMemo(() => DetailTableData, []);
  const columns = useMemo(() => [...DetailTableColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination, useRowSelect);
  return (
    <div className="">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Details Table</h1>
        <div className="">
          <FiDownload className="text-secondary font-medium" />
        </div>
      </div>
      <div className="my-2">
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></UseTable>
      </div>
    </div>
  );
};

export default DetailTable;
