import { useState } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import ManageTableAction from "./ManageTableAction";

export const ManageTableColumnsData = [
  {
    notes: "hi",
  },
];

export const ManageTableColumnsColumn = [
  {
    Header: "Lock",
    Cell: ({ row }) => {
      const [lock, setLock] = useState(row.original.lock);
      console.log(row);
      return (
        <div>
          {lock === true && (
            <button onClink={() => console.log(lock)}>
              <AiFillUnlock className="mx-auto text-lg font-medium text-secondary" />
            </button>
          )}
          {lock === false && (
            <AiFillLock className="mx-auto text-lg font-medium text-red-600" />
          )}
        </div>
      );
    },
  },
  {
    Header: () => {
      return <span className="">Patients</span>;
    },
    accessor: "Patients",
  },
  {
    Header: () => {
      return <span className="">Service & Hrs.</span>;
    },
    accessor: "Service_hrs",
  },
  {
    Header: () => {
      return <span className="">Provider</span>;
    },
    accessor: "Provider",
  },
  {
    Header: "POS",
    Cell: ({ row }) => {
      return (
        <>
          {row.original.pos === "telehealth" ? (
            <div className="flex items-center justify-center gap-2 font-normal text-xs">
              Telehealth
              <BsFillCameraVideoFill className="text-green-500" />
            </div>
          ) : (
            <div>{row.original.pos}</div>
          )}
        </>
      );
    },
  },
  {
    Header: () => {
      return <span className="">Scheduled Date</span>;
    },
    accessor: "Scheduled_Date",
  },
  {
    Header: () => {
      return <span className="">Hours</span>;
    },
    accessor: "Hours",
  },
  {
    Header: "Status",
    Cell: ({ row }) => {
      return (
        <div>
          {row.original.Status === "Scheduled" && (
            <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded-lg">
              {row.original.Status}
            </button>
          )}
          {row.original.Status === "Rendered" && (
            <button className="bg-green-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
              {row.original.Status}
            </button>
          )}
          {row.original.Status === "hold" && (
            <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
              {row.original.Status}
            </button>
          )}
        </div>
      );
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // console.log(row);
      return <ManageTableAction row={row}></ManageTableAction>;
    },
  },
];
