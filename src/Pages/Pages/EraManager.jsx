import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  EraManagerColumnsColumn,
  EraManagerColumnsData,
} from "./EraManager/EraManagerColumns";
import { CheckBox } from "./Settings/SettingComponents/CheckBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";

const EraManager = () => {
  const data = useMemo(() => EraManagerColumnsData, []);
  const columns = useMemo(() => [...EraManagerColumnsColumn], []);
  const [service, setService] = useState("");

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
      <h1 className="text-lg my-2 text-orange-400">ERA Manager</h1>
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
      <div>
        <select
          onChange={(e) => setService(e.target.value)}
          name="type"
          className="border rounded-sm px-2 w-36 py-[6px] text-xs "
        >
          <option value="Home">Home</option>
          <option value="Home t">Home t</option>
        </select>
        <button
          // onClick={submitHandle}
          className="px-5 mt-7 ml-4 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EraManager;
