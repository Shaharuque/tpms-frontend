import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { usePagination, useSortBy, useTable } from "react-table";
import {
  ContractRateColumnsColumn,
  ContractRateColumnsData,
} from "./ContractRate/ContractRateColumns";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const ContractRate = () => {
  const [select, setSelect] = useState("");

  const data = useMemo(() => ContractRateColumnsData, []);
  const columns = useMemo(() => [...ContractRateColumnsColumn], []);
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
                  <Link to={`/billing/rate-list-add-edit/${row.original.id}`}>
                    <FiEdit3 title="Edit" />
                  </Link>

                  <Link to={"/"}>
                    <AiOutlineDelete title="Delete" />
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
  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-400">Contract Rate</h1>
      <div className="md:flex mb-2 mt-5 flex-wrap  items-center justify-between">
        <div className="mb-3">
          <h1 className="text-xs mb-2 ml-1 ">Select Insurance</h1>
          <select
            onChange={(e) => setSelect(e.target.value)}
            name="post"
            className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
          >
            <option value="health_net">Health Net</option>
            <option value="all_client">All Client</option>
            <option value="selective_client">Selective Client</option>
            <option value="selective_private_payor">
              Selective Private Payor
            </option>
          </select>
        </div>
        <Link to={"/billing/rate-list-add-edit"}>
          <button className="px-10 py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
            + Add Note
          </button>
        </Link>
      </div>
      {select && (
        <div className="my-5">
          <h1 className="text-lg text-orange-400 my-2">Rate List</h1>
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
      )}
    </div>
  );
};

export default ContractRate;
