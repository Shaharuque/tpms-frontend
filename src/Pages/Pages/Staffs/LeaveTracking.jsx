import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  LeaveTrackingTableDataColumn,
  LeaveTrackingTableDataData,
} from "./LeaveTracking/LeaveTrackingTableData";
import { AiOutlineDelete } from "react-icons/ai";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const LeaveTracking = () => {
  const data = useMemo(() => LeaveTrackingTableDataData, []);
  const columns = useMemo(() => [...LeaveTrackingTableDataColumn], []);

  const [editableRowIndex, setEditableRowIndex] = useState(null);
  console.log(editableRowIndex);

  const [note, setNote] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [timeOpen, setTimeOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    console.log(note);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    selectedFlatRows,
    // page,
    prepareRow,
  } = useTable(
    { columns, data },
    useSortBy,
    usePagination,
    useRowSelect,
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
                  <AiOutlineDelete
                    className="text-xs text-red-500 mx-2"
                    title="Delete"
                  />
                </div>
              </div>
            </>
          ),
        },
      ]);
    }
  );
  console.log(selectedFlatRows);
  return (
    <div className="h-[100vh]">
      <div>
        <h1 className="text-sm text-orange-400 font-semibold mb-3">Leaves</h1>
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>
      <button
        onClick={() => setTimeOpen(true)}
        className="px-3 flex items-center py-1 bg-gradient-to-r from-secondary to-primary text-xs font-thin hover:to-secondary text-white rounded-md"
      >
        Add Time Off
      </button>
      {timeOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="divider"></div>
          <h1 className="text-sm  font-medium mb-3">Add Time Off</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-3">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Description
                  </span>
                </label>
                <textarea
                  onChange={(e) => setNote(e.target.value)}
                  name="comment"
                  className="border text-sm p-1  ml-1 h-24 w-full"
                ></textarea>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("date")}
                />
              </div>
              <div className="mt-8">
                <button
                  className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                  onClick={() => setTimeOpen(false)}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default LeaveTracking;
