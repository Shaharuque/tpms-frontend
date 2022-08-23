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
      return (
        <div>
          {/* <AiFillLock className="mx-auto text-lg font-medium text-red-500" /> */}
          {/* This gonna be conditionally changed */}
          <AiFillUnlock className="mx-auto text-lg font-medium text-secondary" />
        </div>
      );
    },
  },
  {
    Header: () => {
      return <span className="">Notes</span>;
    },
    accessor: "notes",
  },
  {
    Header: () => {
      return <span className="">Patients</span>;
    },
    accessor: "patients",
  },
  {
    Header: () => {
      return <span className="">Service &and; Hrs.</span>;
    },
    accessor: "service",
  },
  {
    Header: () => {
      return <span className="">Provider</span>;
    },
    accessor: "provider",
  },
  {
    Header: "POS",
    Cell: ({ row }) => {
      return (
        <>
          {/* conditionally changed */}
          <div className="flex items-center justify-center gap-2 font-normal text-xs">
            Telehealth
            <BsFillCameraVideoFill className="text-green-500" />
          </div>
        </>
      );
    },
  },
  {
    Header: () => {
      return <span className="">Scheduled Date</span>;
    },
    accessor: "date",
  },
  {
    Header: () => {
      return <span className="">Hours</span>;
    },
    accessor: "hours",
  },
  {
    Header: "Status",
    Cell: ({ row }) => {
      return (
        <div>
          {
            <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded-lg">
              Scheduled
            </button>
          }
          {/* conditionally changed  */}
          {/* <button className="bg-green-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
            Rendered
          </button>
          <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
            NO Show
          </button> */}
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
