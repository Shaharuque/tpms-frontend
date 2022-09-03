import { GrStatusGoodSmall } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
export const RecurringSessionColumn = [
  {
    Header: () => {
      return <span className="">Patient</span>;
    },
    accessor: "patient",
  },
  {
    Header: () => {
      return <span className="">Patients</span>;
    },
    accessor: "patients",
  },
  {
    Header: () => {
      return <span className="">Service</span>;
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
    Header: () => {
      return <span className="">POS</span>;
    },
    accessor: "pos",
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
      // console.log(row);
      return <GrStatusGoodSmall className="mx-auto text-red-600" />;
    },
  },
  {
    Header: "Action",
    Cell: ({ row }) => {
      // console.log(row);
      return (
        <Link to={`/admin/recurring-session-edit`}>
          <FiEdit className="mx-auto text-primary text-sm font-thin" />
        </Link>
      );
    },
  },
];
