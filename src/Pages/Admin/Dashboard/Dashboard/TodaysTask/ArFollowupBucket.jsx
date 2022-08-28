import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import {
  ArFollowupBucketColumn,
  ArFollowupBucketData,
} from "./TodaysTaskTableData";

import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TransitionTable from "./ArFollowupBucket/TransitionTable";
import AddNote from "./ArFollowupBucket/AddNote";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import axios from "axios";




const ArFollowupBucket = () => {


  const [select, setSelect] = useState("");
  const [tableOpen, setTableOpen] = useState(false);
  const[FlowupData, SetFlowupData] = useState([]);

  // fakedb call
  useEffect(()=>{
    axios('../../All_Fake_Api/FollowupBucket.json')
    .then(response=>{
      SetFlowupData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  console.log(FlowupData);

//
  const data = useMemo(() => FlowupData, [FlowupData]);
  const columns = useMemo(() => [...ArFollowupBucketColumn], []);
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
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setTableOpen(true);
    console.log(data);
  };
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-lg my-2 text-orange-500">Follow Up Bucket</h1>
        <Link
          to={"/admin"}
          className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-3 mr-2 gap-x-2 gap-y-1">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Select
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                {...register("select")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Patients
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                {...register("select")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Insurance
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                {...register("select")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                CPT Codes
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                {...register("select")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Aging Status
              </span>
            </label>
            <div>
              <select
                className="border rounded-sm px-2 py-[3px] font-thin mx-1 text-xs w-full"
                {...register("select")}
              >
                <option value="Today">Today's follow up</option>
                <option value="UK">Lost 7 days</option>
                <option value="15">Lost 15 days</option>
                <option value="15">Lost 30 days</option>
                <option value="15">30 days & over</option>
              </select>
            </div>
          </div>
          <div className="flex ml-1 mt-8 items-center">
            <input
              type="checkbox"
              // checked={value ? true : false}
              name="patient"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1 text-gray-600 font-normal">
              Active Patient
            </span>
          </div>
          <button
            className=" py-[5px] mt-7 w-1/2 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
      {tableOpen && (
        <>
          <div className="my-5">
            <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={page}
              prepareRow={prepareRow}
            ></SettingTableBox>
          </div>
          <div className="mb-3">
            <h1 className="text-xs mb-2 ml-1 ">Select Insurance</h1>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="post"
              className="border rounded-sm px-2 py-[6px] mx-1 text-xs "
            >
              <option value="h"></option>
              <option value="view_transition">View Transition</option>
              <option value="add_note">Add Note</option>
            </select>
          </div>
          {select === "view_transition" ? (
            <TransitionTable></TransitionTable>
          ) : select === "add_note" ? (
            <AddNote></AddNote>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default ArFollowupBucket;
