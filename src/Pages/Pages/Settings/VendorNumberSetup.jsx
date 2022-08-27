import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  usePagination,
  useSortBy,
  useTable,
  useBlockLayout,
  useResizeColumns,
} from "react-table";
import VendorNumberSetupActionModal from "./VendorNumberSetup/VendorNumberSetupActionModal";
import {
  VendorNumberSetupColumns,
  VendorNumberSetupData,
} from "./VendorNumberSetup/VendorNumberSetupColumns";

const VendorNumberSetup = () => {
  const [open, setOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
  const data = useMemo(() => VendorNumberSetupData, []);
  const columns = useMemo(() => [...VendorNumberSetupColumns], []);
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    getResizerProps,
  } = useTable({ columns, data }, useSortBy, useResizeColumns);
  // console.log("tableOpen,", tableOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnchange = (e) => {
    console.log(e);
    setTableOpen(!tableOpen);
  };
  return (
    <div>
      <h1 className="text-lg my-2 text-orange-400">Vendor Number Setup</h1>
      <div className="flex flex-wrap items-center">
        <div className="w-full text-sm">
          <div className=" flex items-center flex-wrap my-5 mr-2 gap-5">
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Tx Type
                </span>
              </label>
              <select
                name="tx_type"
                onChange={(e) => handleOnchange(e)}
                className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
              >
                <option value="Select Tx type">Select Tx type</option>
                <option value="Behavior Therapy">Behavior Therapy</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Physical Therapy">Physical Therapy</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Regional Center
                </span>
              </label>
              <select className="border rounded-sm px-2 py-2 mx-1 text-xs w-full">
                <option value="select regional center">
                  select regional center
                </option>
              </select>
            </div>
            <div>
              {" "}
              <button
                variant="outlined"
                onClick={handleClickOpen}
                className="px-5 mt-7 mx-2 py-1 bg-gradient-to-r from-secondary
            to-primary hover:to-secondary text-white rounded-md"
              >
                {" "}
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
      {tableOpen && (
        <div>
          <div className="pb-3 mt-5 overflow-y-hidden">
            <table
              className="border w-24  overflow-scroll  sm:w-full "
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        className="bg-secondary border  min-w-[120px]  py-1 text-xs font-normal text-white"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        <span {...column.getResizerProps()} />
                        <span className=" ml-4 ">
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ⇓ "
                              : " ⇑ "
                            : ""}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              border: "solid 1px gray",
                            }}
                            className="text-xs py-[6px] w-10 md:w-24 text-center text-gray-600 "
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {open && (
        <VendorNumberSetupActionModal
          open={open}
          handleClose={handleClose}
        ></VendorNumberSetupActionModal>
      )}
    </div>
  );
};

export default VendorNumberSetup;
