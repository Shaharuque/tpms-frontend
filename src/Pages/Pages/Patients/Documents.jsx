import React, { useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import { DocumentsColumnColumns, DocumentsColumnData } from "./DocumentsColumn";
import { HiPlus } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Documents = () => {
  const data = useMemo(() => DocumentsColumnData, []);
  const columns = useMemo(() => [...DocumentsColumnColumns], []);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);
  return (
    <div className="h-[100vh]">
      <h1 className="text-sm font-semibold mb-2">Document</h1>
      <SettingTableBox
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      ></SettingTableBox>
      <div className="my-10">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="px-5 mb-5 text-xs font-normal py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md flex items-center"
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
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("description")}
                  />
                </div>

                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Expiry Date
                    </span>
                  </label>
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="date"
                    {...register("check_Date")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Upload File
                    </span>
                  </label>
                  <input
                    type="file"
                    className=" px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("fileName")}
                  />
                </div>
                <div>
                  <button
                    className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                    type="submit"
                  >
                    Save
                  </button>

                  <button
                    className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                    autoFocus
                    onClick={() => reset()}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Documents;
