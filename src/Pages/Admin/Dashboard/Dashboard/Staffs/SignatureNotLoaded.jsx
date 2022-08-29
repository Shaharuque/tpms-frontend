import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  SignatureNotLoadedColumn,
  SignatureNotLoadedData,
} from "./StaffDataTAble";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";
import axios from "axios";

const SignatureNotLoaded = () => {

  const [SignatureData, SetSignatureData] = useState([]);

  // fakedb call
  useEffect(()=>{
    axios('../../All_Fake_Api/Signature.json')
    .then((response)=>{
      SetSignatureData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const { register, handleSubmit, reset } = useForm();
  const [tableOpen, setTableOpen] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setTableOpen(true);
  };

  const data = useMemo(() => SignatureData, [SignatureData]);
  const columns = useMemo(() => [...SignatureNotLoadedColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination, useRowSelect);
  return (
    <div className="h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Signature Not Uploaded</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-5 mr-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-500 text-left">
                Provider
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("again_status")}
            >
              <option value="name"> Payor </option>
              <option value="name"> Client </option>
            </select>
          </div>

          <button
            className="w-1/2  py-2 mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Go
          </button>
        </div>
      </form>
      <div>
        {tableOpen && (
          <div className="my-2">
            <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={page}
              prepareRow={prepareRow}
            ></SettingTableBox>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignatureNotLoaded;
