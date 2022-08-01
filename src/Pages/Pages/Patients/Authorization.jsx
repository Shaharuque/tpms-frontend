import React, { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import {
  ARAuthorizationColumnColumn,
  ARAuthorizationColumnData,
} from "./ARAuthorizationColumn";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";
import AuthorizationEditModal from "./AuthorizationEditModal";
import AuthorizationContactedModal from "./AuthorizationContactedModal";

const Authorization = () => {
  const { id } = useParams();
  console.log("lo auth id no ", id);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const data = useMemo(() => ARAuthorizationColumnData, []);
  const columns = useMemo(() => [...ARAuthorizationColumnColumn], []);
  const [editableRow, setEditableRow] = React.useState(null);

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleContactClose = () => {
    setOpenContactModal(false);
  };

  console.log("editableRow", editableRow);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    state,
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
                  {/* <Link to={`/billing/deposit-apply/${row.original.id}`}>
                    <MdOutlineDashboard title="Deposit" />
                  </Link> */}

                  <label for="my-modal-6">
                    <MdContentCopy className="text-xs mx-2 " />
                  </label>
                  {/* <button
                    onClick={() => {
                      setOpenContactModal(true);
                    }}
                  >
                    <MdContentCopy className="text-xs mx-2 " />
                  </button> */}

                  <span>|</span>
                  <button
                    onClick={() => {
                      setOpenEditModal(true);
                      setEditableRow(row);
                    }}
                  >
                    <AiOutlinePlus className="text-xs mx-2 " />
                  </button>

                  <span>|</span>
                  <Link to={`/admin/authorization-Edit/${row.original.id}`}>
                    <FiEdit
                      className="text-xs mx-2  text-lime-700"
                      title="Edit"
                    />
                  </Link>

                  <span>|</span>
                  <Link to={"/"}>
                    <AiOutlineDelete
                      className="text-xs text-red-500 mx-2"
                      title="Delete"
                    />
                  </Link>

                  {/* <BsFileEarmark
                    title="Details"
                    onClick={() => {
                      const currentIndex = row.index;
                      if (editableRow !== currentIndex) {
                        // row requested for edit access
                        setEditableRow(row);
                      } else {
                        // request for saving the updated row
                        setEditableRow(null); // keep the row closed for edit after we finish updating it
                        const updatedRow = row.values;
                        console.log("updated row values:");
                        console.log(updatedRow);
                        // call your updateRow API
                      }
                    }}
                  /> */}

                  {/* <Link to={"/"}>
                    <BsPrinter title="Print" />
                  </Link> */}
                </div>
              </div>
            </>
          ),
        },
        {
          accessor: "status",
          id: "status",
          Header: "Status",
          Cell: ({ row, setEditableRow, editableRow }) => (
            <>
              <div className="text-center">
                <GrStatusGoodSmall className=" mx-auto text-red-500" />
              </div>
            </>
          ),
        },
      ]);
    }
  );
  return (
    <div className="h-[100vh]">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h1 className="text-sm font-semibold">Authorization</h1>
        <Link to={"/admin/authorization-Edit"}>
          <button className="px-10 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded-md">
            + Add Authorization
          </button>
        </Link>
      </div>
      <div>
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>

      <div>
        {" "}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-middle">
          <div className="modal-box box">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle hover:bg-primary hover:text-white absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="mt-5">
              <AuthorizationContactedModal></AuthorizationContactedModal>
            </div>

            <div className="modal-action">
              <label
                for="my-modal-6"
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
              >
                CANCEL
              </label>
            </div>
          </div>
        </div>
      </div>
      {openEditModal && (
        <AuthorizationEditModal
          handleClose={handleClose}
          open={openEditModal}
          editableRow={editableRow}
        ></AuthorizationEditModal>
      )}
    </div>
  );
};

export default Authorization;
