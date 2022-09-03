import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { usePagination, useSortBy, useTable } from "react-table";
import {
  AuthorizationEditColumnsColumn,
  AuthorizationEditColumnsData,
} from "./AuthorizationEditColumns";
import UseTable from "../../../../../../Utilities/UseTable";
import AuthorizationEditModal from "../Authorization/AuthorizationEditModal";
import { DateRangePicker, Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";

const AuthorizationEdit = () => {
  const { id } = useParams();
  console.log("param ", id);
  const [value, setValue] = useState(false);
  const [notes, setNotes] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [openEditModal, setOpenEditModal] = useState(false);
  const data = useMemo(() => AuthorizationEditColumnsData, []);
  const columns = useMemo(() => [...AuthorizationEditColumnsColumn], []);
  const [editableRow, setEditableRow] = React.useState(null);

  const handleClose = () => {
    setOpenEditModal(false);
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: `bill`,
        middle_name: "luo",
      });
    }, 600);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(notes);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
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
                    {/* <Link to={`/billing/deposit-apply/${row.original.id}`}>
                    <MdOutlineDashboard title="Deposit" />
                  </Link> */}

                    <button
                      onClick={() => {
                        setOpenEditModal(true);
                        setEditableRow(row);
                      }}
                    >
                      <FiEdit className="text-xs mx-2 " />
                    </button>

                    <span>|</span>
                    <Link to={"/"}>
                      <AiOutlineDelete
                        className="text-xs text-red-500 mx-2"
                        title="Delete"
                      />
                    </Link>
                  </div>
                </div>
              </>
            ),
          },
        ]);
      }
    );

  return (
    <div className="md:h-[100vh]">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link
          to={`/admin/patient/${id}/patient-authorization/${id}`}
          className="text-primary text-lg"
        >
          <IoCaretBackCircleOutline />
        </Link>
        <div className="text-xs font-normal">
          <span className="text-sm font-semibold text-primary">Amro LLC |</span>
          <span className="text-orange-400 font-semibold">DOB :</span>
          09/28/2021 |
          <span className="text-orange-400 font-semibold">Phone : </span>
          (894)-023-8043 |
          <span className="text-orange-400 font-semibold">Address : </span>
          1222, OTtn, With Jersey City NJ 32809
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-sm font-semibold">Add Auth</h1>
        <Link to={`/admin/patient/${id}/patient-authorization/${id}`}>
          <button className="px-2 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded-sm">
            <IoCaretBackCircleOutline className="mr-1 text-sm" />
            Back
          </button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 mr-2 gap-x-2 gap-y-1">
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Description<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="description"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("description")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text flex items-center text-xs text-gray-600 text-left">
                  Insurance
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("insurance")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text flex items-center text-xs text-gray-600 text-left">
                  Tx Type
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("tx_type")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text flex items-center text-xs text-gray-600 text-left">
                  SUPV. Provider
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("sup_provider")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Selected date
                </span>
              </label>
              <div className="ml-1">
                <DateRangePicker
                  onChange={(date) => {
                    console.log(date);
                  }}
                  placeholder="Select Date"
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Authorization Number<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="authorization_number"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("authorization_number")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  UCI / Insurance ID<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="uci_id"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("uci_id")}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text flex items-center text-xs text-gray-600 text-left">
                  COB
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("cob")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div className="">
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Upload Authorization
                </span>
              </label>
              <input
                type="file"
                className=" ml-1 py-[5px]  text-xs w-full"
                {...register("fileName")}
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Diagnosis1<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("diagnosis1")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Diagnosis2
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis2"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-2 text-xs w-full"
                  {...register("diagnosis2")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Diagnosis3<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis3"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("diagnosis3")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Diagnosis4
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis4"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-2 text-xs w-full"
                  {...register("diagnosis4")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Deductible
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("deductible")}
                />
              </div>
              <div className="mt-[35px]">
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-normal">
                    In Network
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  CoPay
                </span>
              </label>
              <input
                type="text"
                name="copay"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("copay")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  CMS 4 (Insured Name)
                </span>
              </label>
              <input
                type="text"
                name="cms4"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("cms4")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  CMS 11 (Group No)
                </span>
              </label>
              <input
                type="text"
                name="cms11"
                className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("cms11")}
              />
            </div>
            <div className="ml-2 mt-5">
              <div>
                <Toggle
                  checkedChildren={<CheckIcon />}
                  unCheckedChildren={<CloseIcon />}
                  checked={value ? true : false}
                  size="sm"
                  onClick={() => {
                    setValue(!value);
                  }}
                />
                <span className="text-xs text-gray-500 mx-3">Active</span>
              </div>
              <div>
                <Toggle
                  checkedChildren={<CheckIcon />}
                  unCheckedChildren={<CloseIcon />}
                  checked={value ? true : false}
                  size="sm"
                  onClick={() => {
                    setValue(!value);
                  }}
                />
                <span className="text-xs text-gray-500 mx-3">Placeholder</span>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Notes
                </span>
              </label>
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                name="comment"
                className="border border-gray-300 text-xs p-2  ml-1 h-24 w-full"
              >
                Notes
              </textarea>
            </div>
          </div>
          {/* submit  */}
          <button
            className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
            type="submit"
          >
            Save
          </button>

          <button
            className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
            autoFocus
            onClick={handleClose}
          >
            Close
          </button>
        </form>
      </motion.div>

      {id && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="divider"></div>

          <div>
            <UseTable
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            ></UseTable>
          </div>
          <button
            onClick={() => {
              setOpenEditModal(true);
            }}
            className="px-2 my-3 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded-sm"
          >
            + Add Service
          </button>
          {openEditModal && (
            <AuthorizationEditModal
              handleClose={handleClose}
              open={openEditModal}
              editableRow={editableRow}
            ></AuthorizationEditModal>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AuthorizationEdit;
