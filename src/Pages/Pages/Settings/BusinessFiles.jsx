import { CssBaseline } from "@mui/material";
import React, { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import BusinessComponent from "./BusinessFiles/BusinessComponent";
import {
  BusinessColumns,
  BusinessColumnsData,
} from "./BusinessFiles/BusinessFileColumns";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const BusinessFiles = () => {
  const [open, setOpen] = useState(false);
  const data = useMemo(() => BusinessColumnsData, []);

  const columns = useMemo(() => [...BusinessColumns], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="p-2 ">
      <h1 className="text-lg my-2 text-orange-400">Business Documents</h1>
      <CssBaseline />
      <div className="pb-3 overflow-y-hidden">
        <table
          className="border overflow-scroll  sm:w-full "
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="bg-secondary border   py-1 text-sm text-white"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
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
      <div className="my-10">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="px-5 mb-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md flex items-center"
        >
          <HiPlus /> Add New Data
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:flex items-center text-sm">
                <div className="sm:w-96 w-full">
                  <label className="label">
                    <span className="text-sm">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("description")}
                  />
                </div>
                <div className=" ">
                  <label className="label">
                    <span className="text-sm ml-2 mb-2 mt-[-2px]">
                      Upload File
                    </span>
                  </label>
                  <input
                    type="file"
                    className=" border bg-white rounded-sm  mx-3 text-xs"
                    {...register("fileName")}
                  />
                </div>
                <div className="modal-action">
                  {/* <input type="submit" /> */}
                  <input
                    type="submit"
                    value={"SAVE"}
                    className="px-5  py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  />
                </div>
              </div>
              <div className="divider"></div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BusinessFiles;
