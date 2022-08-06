import React, { useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../Settings/SettingComponents/CheckBox";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import {
  DepositDetailsColumnsColumn,
  DepositDetailsColumnsData,
} from "./MPostingColumns";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const MDepositDetailsTable = () => {
  const Depositdata = useMemo(() => DepositDetailsColumnsData, []);
  const Depositecolumns = useMemo(() => [...DepositDetailsColumnsColumn], []);
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
    { Depositdata, Depositecolumns },
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
  // console.log(selectedFlatRows);
  const { pageIndex, pageSize } = state;
  return (
    <div>
      {" "}
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
  );
};

export default MDepositDetailsTable;
