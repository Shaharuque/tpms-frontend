import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { TransitionTableColumn } from "../TodaysTaskTableData";
import axios from "axios";
import UseTable from "../../../../../../CustomHooks/UseTable";

const TransitionTable = () => {
  const [transData, SetTransData] = useState([]);

  // fakeDb call
  useEffect(() => {
    axios("../../All_Fake_Api/TransitionTable.json")
      .then((response) => {
        SetTransData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = useMemo(() => transData, [transData]);
  const columns = useMemo(() => [...TransitionTableColumn], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, usePagination, useRowSelect);
  return (
    <div>
      <div className="my-5">
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div>
    </div>
  );
};

export default TransitionTable;
